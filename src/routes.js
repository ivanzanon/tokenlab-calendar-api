/**
 * 
 * @author Ivan Zanon
 * 
 * @description Routes for api access
 * 
 */
const express = require('express');
const routes = express.Router();
const userController = require('./controller/UserController');
const eventController = require('./controller/EventController');
const calendarController = require('./controller/CalendarController');
const jwt = require('jsonwebtoken');

/**
 * @description Verifies if the token on the requisition ins valid and, then, folow to [next] route
 * 
 * @param req 
 * @param res 
 * @param next 
 */
function verifyJWT(req, res, next){
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    console.log(token);

    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
    
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, function(err, decoded) {
      if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
      
      // se tudo estiver ok, salva no request para uso posterior
      req.userId = decoded.id;
      next();
    });
  }

routes.get('/users', userController.index);
routes.get('/users/:id', verifyJWT, userController.show);
routes.post('/userExists', userController.userExists);
routes.post('/users', userController.store);
routes.put('/users/:id', userController.update);
routes.delete('/users/:id', userController.destroy);
routes.post('/login', userController.login);

routes.get('/calendarlist/:id', verifyJWT, calendarController.eventsByUser);
routes.post('/calendar/', verifyJWT, calendarController.calendarByMonth);

routes.get('/events', verifyJWT, eventController.index);
routes.get('/events/:id', eventController.show);
routes.post('/events', eventController.store);
routes.put('/events/:id', eventController.update);
routes.delete('/events/:id', eventController.destroy);

module.exports = routes;