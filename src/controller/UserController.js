/**
 * 
 * @author Ivan Zanon
 * 
 * @description Controller that manages User Model.
 * 
 */

 const User = require('../../infra/database/models/user');
 const bcrypt = require('bcrypt');
 require('dotenv').config();
 const jwt = require('jsonwebtoken');

 module.exports = {
     /**
      * 
      * List all Users stored in the database
      * @description List all Users stored in the database
      * 
      * @returns JSon with the users
      */
    async index(req, res) {
        const users = await User.findAll();

        return res.json(users);
    },

    async show (req, res) {
        const user = await User.findByPk(req.params.id,
            {
                attributes: ['name', 'login']
            });

        return res.json(user);
    },

    async store(req, res) {
        const data = req.body;

        const HashedPassword = await bcrypt.hash(data.password, 10);

        const user = await User.create(
            {
                name: data.name,
                login: data.login,
                password: HashedPassword
            });

        return res.json(user);
    },

    async update(req, res) {
        const user = await User.update(req.body, 
            {where:
                {
                    id : req.params.id
                }
            }
        );

        return res.json(user);
    },

    async destroy(req, res) {
        await User.destroy(
            {where:
                {
                    id : req.params.id
                }
            }
        );

        return res.send();
    },

    async userExists (req, res) {
        const userInfo = req.body;

        const user = await User.findOne(
            {
                where: {
                    login : userInfo.login
                }
            });

        return res.json({exists: (user != null)});
    },

    async login(req, res) {
        const userInfo = req.body;

        const user = await User.findOne(
            {
                where: {
                    login : userInfo.login
                }
            });

        if (user == null) {
            return res.status(400).send('Cannot find user')
        }

        try {
            if(await bcrypt.compare(userInfo.password, user.password)) {
                //return res.json({result:1, idUser: user.id});
                const token = jwt.sign( { id: user.id }, process.env.ACCESS_TOKEN_SECRET);
                return res.status(200).send({ auth: true, idUser: user.id, token: token });
            }
        } catch {
            return res.status(500).send();
        }

    }

};