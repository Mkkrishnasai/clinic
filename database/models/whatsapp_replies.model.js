const mongoose = require('mongoose')

var WHATSAPP_REPLIES_MODEL = new mongoose.Schema({
    reply : {
        type : Array,
        required : true
    }
});

module.exports = mongoose.model('WHATSAPP_REPLIES',WHATSAPP_REPLIES_MODEL);