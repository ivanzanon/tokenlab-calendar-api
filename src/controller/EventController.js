
/**
 * 
 * @author Ivan Zanon
 * 
 * @description Controller that manages Event Model.
 * 
 */

const Event  = require('../../infra/database/models/event');

module.exports = {
    /**
      * 
      * List all Events stored in the database
      * @description List all Events stored in the database
      * 
      * @returns JSon with the events
      */
    async index(req, res) {
        const events = await Event.findAll();

        return res.json(events);
    },

    /**
      * 
      * Return an individual Event and its information
      * @description List all Event stored in the database. Expects an :id as param
      * 
      * @returns JSon with the event
      */
    async show (req, res) {
        const event = await Event.findByPk(req.params.id);

        return res.json(event);
    },

    /**
      * Stores an Event
      * @description Stores a new Event in the Database
      *              Expects an ojbect with Event information, except the id
      * 
      * @returns JSon with the stored Event
      */
    async store(req, res) {
        const event = await Event.create(req.body);

        return res.json(event);
    },

    /**
      * Updates an existing Event
      * @description Updates an existing Event in the Database. 
      *              Expects a JSON with the informations including the ID
      * 
      * @returns JSon with the new informations of Event
      */
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

    /**
      * Destroy an existing Event
      * @description Destroy an existing Event in the Database. Expects the id of the Event to be destroyed
      */
    async destroy(req, res) {
        const number = await Event.destroy(
            {where:
                {
                    id : req.params.id
                }
            }
        );

        return res.json({number});
    }
}