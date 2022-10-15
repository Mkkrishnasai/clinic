const mongoose = require('mongoose')

// module.exports.initDb = async function()  {
//     return await(mongoose.createConnection('mongodb://' + process.env.DB_HOST +':'+process.env.DB_PORT
//         + '/' + process.env.DB_NAME, {
//         useNewUrlParser : true,
//         auth:
//             {
//                 username:"root",
//                 password:"12345678"
//             },
//         authSource:"admin",
//         bufferCommands: false, // Disable mongoose buffering
//         bufferMaxEntries: 0 // and MongoDB driver buffering
//     }));
// }
const url ='mongodb://' + process.env.DB_HOST +':'+process.env.DB_PORT + '/' + process.env.DB_NAME;
mongoose.connect(url, {
        useNewUrlParser : true,
        auth:
        {
            username:"root",
            password:"12345678"
        },
        authSource:"admin"
        });
const con = mongoose.connection;

con.on('opne', function (){
    console.log('connection established');
});