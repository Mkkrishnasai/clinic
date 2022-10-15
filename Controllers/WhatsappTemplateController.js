const wa_template = require('../database/models/whatsapp_templates.model')

const getTemplates = async (req,res,next) => {
    try{
        const [templates] = await wa_template.find();
        return templates;
    }catch (err) {
        if(!err.statusCode){
            err.statusCode = 500
        }
        return err;
    }
}

const saveTemplates = async (req,res,next) => {
    try{
        const templateSchema = new wa_template({
            sample : req.body.sample,
            params : req.body.params,
            has_image : req.body.has_image,
            has_buttons : req.body.has_buttons,
            buttons : req.body.buttons
        });
        const temp = await templateSchema.save();
        return {
            status : true,
            message : "Saved Successfully",
            data : temp
        };
    }catch (err)  {
        if(!err.statusCode){
            err.statusCode = 500
        }
        let errorData = [];
        if (err.name == 'ValidationError') {
            for (field in err.errors) {
                errorData.push(err.errors[field].message);
            }
        }
        return {
            status : false,
            message : "Failed to WA Template",
            data : {},
            errors : errorData
        };
    }
}

module.exports = {getTemplates,saveTemplates}