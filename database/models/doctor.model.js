const mongoose = require('mongoose')

var Doctor = new mongoose.Schema({
    fullName : {
        first_name : {
            type : String,
            required : true
        },
        last_name : {
            type : String
        }
    },
    mobile_number : {
        dail_code : {
            type : String,
            required: true
        },
        phone_number : {
            type : Number,
            required : true,
            minLength : 8 ["Mobile Number is too Short"],
            maxLength : 15,
            trim : true
        },
        whatsapp_number : {
            type : Number,
            required : true,
            minLength : 8 ["Mobile Number is too Short"],
            maxLength : 15,
            trim : true
        }
    },
    email : {
        type : String,
        required : true
    },
    avatar : {
        type : String
    },
    signature : {
        type : String
    },
    specialization : {
        type : String,
        required : true
    },
    registration_number : {
        type : String,
        required : true
    },
    registered_year : {
        type : String,
        required : true
    },
    password : {
        type :String
    }
});

mongoose.model('Doctor',Doctor);