const express = require('express')
const router = express.Router()
const axios = require('axios')
const {TEXT_MESSAGE_PAYLOAD} = require('../WA_MODELS/templateModels')
const {whatsapp_sending,webhooks} = require('../paths/path')
const webhook_controller = require('../Controllers/webhook/WhatsappWebhookController')

require('dotenv').config({path: './.env'})

router.post(whatsapp_sending.sendTextMessage,async (req,res) => {
    try{
        let payload = await TEXT_MESSAGE_PAYLOAD("Hell Beta","919742460630");
        const result = await sendMessage(payload);
        res.status(200).send(result.data);
    }catch (e) {
        res.status(500).json(e);
    }
});

router.get(webhooks.get_replies,async(req,res) => {
    try{
        const result = await webhook_controller.saveReplies(req);
        console.log(result);
    }catch (e) {
        console.log(e);
    }
})

// Verify WebHook
router.get(webhooks.webhook, async (req,res) => {
    let mode = req.query['hub.mode'];
    let challenge = req.query['hub.challenge'];
    let token = req.query['hub.verify_token'];

    if(mode && token) {
        if(mode === 'subscribe' && token === process.env.WA_WEBHOOK_TOKEN){
            res.status(200).send(challenge)
        }else{
            res.status(403)
        }
    }
});


const sendMessage = async (payload) => {
    let url = process.env.WA_BASE_URL + '/' + process.env.WA_VERSION + '/' + process.env.WA_PHONE_NUMBER_ID + '/messages';
    let headers = {
        "Authorization" : 'Bearer ' + process.env.WA_TOKEN,
        "Content-Type" : "application/json"
    }
    var config = {
        method: 'post',
        url: url,
        headers: headers,
        data : JSON.stringify(payload)
    };
    return await axios(config);
}

module.exports = router;