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

routes.get('/users', userController.index);
routes.get('/users/:id', userController.show);
routes.post('/users', userController.store);
routes.put('/users/:id', userController.update);
routes.delete('/users/:id', userController.destroy);
routes.post('/login', userController.login);

routes.get('/calendar/:id', calendarController.eventsByUser);

routes.get('/events', eventController.index);
routes.get('/events/:id', eventController.show);
routes.post('/events', eventController.store);
routes.put('/events/:id', eventController.update);
routes.delete('/events/:id', eventController.destroy);

module.exports = routes;