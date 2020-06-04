
 const User = require('../../../infra/database/models/user');

 const validateJsonFormat = data => {
     var err = '';
     
     if (data.name == null) err = err + "[name]";
        
     if (data.password == null) err = err + "[password]";

     if (data.login == null) err = err + "[login]";

     return `Attributes ${err} can't be null.`;
 };

 module.exports = {

     async validateUserCreation(req, res, next) {
        const data = req.body;

        var errMessage = validateJsonFormat(data);

        if (errMessage !== '') {
            res.status(400).send({message: errMessage});
        }

        try {
            const user = await User.findOne(
                {
                    where: {
                        login : data.login
                    }
                });

            if (user != null) {
                res.status(400).send({message: 'User already exists'});
            } else {
                next();
            }
        
        } catch(error) {
            res.status(500).send({message: error.message});
        }
     },

     validateUserUpdate(req, res, next) {
        const data = req.body;

        var errMessage = validateJsonFormat(data);

        if (errMessage !== '') {
            res.status(400).send({message: errMessage});
        } else {
            next();
        }

     }
 };