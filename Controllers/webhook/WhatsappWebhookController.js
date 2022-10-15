const wa_replies = require('../../database/models/whatsapp_replies.model')

const saveReplies = async (res) => {
    try{
        const payload = new wa_replies(res);
        const result = await payload.save();
        console.log("Saved Successfully");
    }catch (e) {
        console.log(e)
    }
}

module.exports = {saveReplies};