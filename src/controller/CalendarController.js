const User = require('../../infra/database/models/user');
const Event = require('../../infra/database/models/event');

module.exports = {

    async eventsByUser(req, res) {
        const events = await Event.findAll({
            where: {
                idUser: req.params.id
            },
            order: ['start']
        })

        return res.json(events);
    }
}