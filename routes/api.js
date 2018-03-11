var express = require('express');
var event = require('../models/event.js');
var router = express.Router();

/* GET users listing. */
router.route('/event')
.post( function(req, res, next) {
  
  event.saveEvent(req.body).then(
        function(item) {
            res.json(item);
        });
     
});

router.get('/event/:code',function(req, res, next) {
  
  event.getEvent(req.params['code']).then(
        function(item) {
            res.json(item);
        });
})


module.exports = router;
