
const TEXT_MESSAGE_PAYLOAD = async (text,to) => {
    return {
        "messaging_product" : "whatsapp",
        "recipient_type" : "individual",
        "to" : to,
        "type" : "text",
        "text" : {
            "preview_url" : false,
            "body" : text
        }
    }
}

module.exports = {TEXT_MESSAGE_PAYLOAD};