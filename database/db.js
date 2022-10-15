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
const url ='mongodb+srv://cluster0.qhejzen.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(url, {
        useNewUrlParser : true,
        auth:
        {
            username:"krishna",
            password:"pQdVV33gJrQzLnOW"
        },
        authSource:"admin"
        });
const con = mongoose.connection;

con.on('open', function (){
    console.log('connection established');
});