

var mongoose = require('mongoose');

// define the schema for our user model
var eventSchema = mongoose.Schema({

    
        code        : String,
        date: { type: Date, default: Date.now },
        title 	: String,
        setBy : String

});

eventSchema.statics.saveEvent = function(itemdata) {
	   var code = Math.random().toString(36).substr(2, 6).toUpperCase();
	   itemdata.code = code;
     var item = new this(itemdata);
    return item.save();
            
  
};
eventSchema.statics.getEvent = function(eventCode) {
	// find one
    return this.findOne({code: eventCode}).exec();
};

// methods ======================

// create the model for users and expose it to our app
module.exports = mongoose.model('EventSchema', eventSchema);