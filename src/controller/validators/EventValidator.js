const Event = require ('../../../infra/database/models/event');
const {parseISO, isAfter} = require('date-fns');

const validateEventJson = data => {
    
    var err = '';
    
    if (data.description == null) err = '[description]';
    if (data.start == null) err = err + '[start]';
    if (data.end == null) err = err + '[end]';

    return err;
}

const validateDates = data => {
    const start = Date.parse(data.start);
    const end = Date.parse(data.end);

    return (isAfter(end, start));

}

module.exports = {

    eventCreateValidator(req, res, next) {
        const data = req.body;

        var errMessage = validateEventJson(data);

        if (errMessage !== '') {
            res.status(400).send({message: `Attributes ${errMessage} can't be null.`});
        }

        console.log(validateDates(data));
        if (!validateDates(data)) {
            res.status(400).send({message: 'Event End must be AFTER the Start.'});
        } else {
            next();
        }
    },

    eventUpdateValidator(req, res, next) {
        const data = req.body;

        if (!validateDates(data)) res.status(400).send({message: 'Event End must be AFTER the Start.'});

        next();
    }

}