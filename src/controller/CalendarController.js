
/**
 * 
 * @author Ivan Zanon
 * 
 * @description Controller that manages Calendars, using Event and User Models.
 * 
 */
const Sequelize = require('Sequelize');
const Event = require('../../infra/database/models/event');
const {parseISO, startOfMonth, endOfMonth} = require('date-fns');

module.exports = {

    /**
      * 
      * List all Events related to an User
      * @description List all Events stored in the database associated to an User. 
      *              Expects the :id of the User
      * 
      * @returns JSon with the events
      */
    async eventsByUser(req, res) {
        const events = await Event.findAll({
            where: {
                idUser: req.params.id
            },
            order: ['start']
        })

        return res.json(events);
    },

    /**
      * 
      * List all Events related to an User in a specific Month
      * @description List all Events stored in the database associated to an User that occurs in a
      *              specific Month. 
      *              Expects the :id of the User and a :date for reference.
      * 
      * @returns JSon with the events
      */
    async calendarByMonth(req, res) {
        
        const calendarInfo = req.body;
        const date_param = calendarInfo.date;
        const userId = calendarInfo.user;
  
        // formatting to ISO, so the startOfMonth and endOfMonth functions can work with it.
        const date_i = parseISO(date_param);

        // defining time interval
        const firstDOTM = startOfMonth(date_i);
        const lastDOTM = endOfMonth(date_i);

        // Finding Events of an User that starts between the time interval.
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