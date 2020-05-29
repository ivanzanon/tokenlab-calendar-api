const Sequelize = require('Sequelize');
const sequelize = require('../../infra/database/models');
const Event = require('../../infra/database/models/event');
const {isBefore, format, parseISO, startOfMonth, endOfMonth, addDays} = require('date-fns');

module.exports = {

    async eventsByUser(req, res) {
        const events = await Event.findAll({
            where: {
                idUser: req.params.id
            },
            order: ['start']
        })

        return res.json(events);
    },

    async calendarByMonth(req, res) {
        
        const calendarInfo = req.body;
        const date_param = calendarInfo.date;
        const userId = calendarInfo.user;
  
        const date_i = parseISO(date_param);
        console.log(`date_i: ${date_i}`);

        const firstDOTM = startOfMonth(date_i);
        const lastDOTM = endOfMonth(date_i);

        const events = await Event.findAll({
            where: {
                start: {
                    [Sequelize.Op.between] : [firstDOTM, lastDOTM]
                },
                idUser: userId
            },
            order: ['start']
        });

        return res.json(events);
    }
}