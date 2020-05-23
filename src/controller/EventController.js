
const { Event } = require('../../infra/database/models');

module.exports = {
    async index(req, res) {
        const events = await Event.findAll();

        return res.json(events);
    },

    async show (req, res) {
        const event = await Event.findByPk(req.params.id);

        return res.json(event);
    },

    async store(req, res) {
        const event = await Event.create(req.body);

        return res.json(event);
    },

    async update(req, res) {
        const event = await Event.update(req.body, 
            {where:
                {
                    id : req.params.id
                }
            }
            );

        return res.json(event);
    },

    async destroy(req, res) {
        await Event.destroy(
            {where:
                {
                    id : req.params.id
                }
            }
        );

        return res.send();
    }
}