/**
 * 
 * @author Ivan Zanon
 * 
 * @description Controller that manages User Model.
 * 
 */

 const models = require('../../infra/database/models');
 const userModel = models.User;

 module.exports = {
    async index(req, res) {
        const users = await userModel.findAll();

        return res.json(users);
    },

    async show (req, res) {
        const user = await userModel.findByPk(req.params.id);

        return res.json(user);
    },

    async store(req, res) {
        const user = await userModel.create(req.body);

        return res.json(user);
    },

    async update(req, res) {
        const user = await userModel.update(req.body, 
            {where:
                {
                    id : req.params.id
                }
            }
            );

        return res.json(user);
    },

    async destroy(req, res) {
        await userModel.destroy(
            {where:
                {
                    id : req.params.id
                }
            }
        );

        return res.send();
    }
};