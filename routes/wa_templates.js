const express = require('express')
const router = express.Router()
const WaController = require('../Controllers/WhatsappTemplateController');

router.get('/', async (req,res) => {
    try{
        const templates = await WaController.getTemplates();
        res.json(templates);
    }catch (e) {
        res.send('error' + err);
    }
});

router.post("/save", async (req,res) => {
    try{
        const data = await WaController.saveTemplates(req,res);
        res.json(data);
    }catch (err) {
        res.send('err'  + err);
    }
});

module.exports = router;