/**
 * 
 * @author Ivan Zanon
 * 
 * @description Controller that manages User Model.
 * 
 */

 const User = require('../../infra/database/models/user');

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
        const user = await User.findByPk(req.params.id);

        return res.json(user);
    },

    async store(req, res) {
        const user = await User.create(req.body);

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

    async login(req, res) {
        const userInfo = req.body;

        const user = await User.findOne(
            {
                where: {
                    name : userInfo.name
                }
            });

        if (user.password === userInfo.password) {
            return res.json({result:1});
        }

        return res.json({result:0});
    }

};