var express = require('express');
var router = express.Router();
var event = require('../models/event.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome' });
});
router.get('/newevent', function(req, res, next) {
  res.render('newevent', { title: 'New Event' });
});
router.post('/newevent', function(req, res, next) {
	event.saveEvent(req.body).then(
        function(item) {
            
            res.render('event-details', item);
        });
  
});
module.exports = router;
