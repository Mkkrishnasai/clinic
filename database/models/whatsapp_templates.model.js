const mongoose = require('mongoose')
const db = require('../db');

var wa_template = new mongoose.Schema({
    sample : {
        type : String,
        required : true
    },
    params : {
        type: Array,
        required: true
    },
    has_image : {
        type : Boolean,
        required : true,
        default : false
    },
    has_buttons : {
        type : Boolean,
    },
    buttons : {
        type : Array
    }
});

module.exports = mongoose.model('WaTemplate',wa_template);