require('dotenv').config({path: './.env'})
// const connectionDB = require('./database/db')
const routes = require('./routes/config/index');
const express = require('express')
var app = express();



const bodyParser = require('body-parser');

app.use(bodyParser.json())

app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods','GET, POST, PUT');
    res.setHeader('Acess-Control-Allow-Headers', 'Content-Type, Authorization');
    next()
});

//Routes Config
app.use('/wa_templates',routes.WAROUTES);
app.use('/whatsapp_send',routes.WAWEBHOOKROUTES);


app.listen(process.env.ENV_PORT, () => {
    console.log(`App Running on port ${process.env.ENV_PORT}`);
});