const BaseJoi = require('joi');
const sanitizeHtml = require('sanitize-html');

const extension = (joi) => ({
    type: 'string',
    base: joi.string(),
    messages: {
        'string.escapeHTML': '{{#label}} must not include HTML!'
    },
    rules: {
        escapeHTML: {
            validate(value, helpers) {
                const clean = sanitizeHtml(value, {
                    allowedTags: [],
                    allowedAttributes: {},
                });
                if (clean !== value) return helpers.error('string.escapeHTML', { value })
                return clean;
            }
        }
    }
});

const Joi = BaseJoi.extend(extension)

module.exports.jobSchema = Joi.object({
        email: Joi.string(),
        mob: Joi.number(),
        Lastdate: Joi.string(),
        Descriptions : Joi.string(),
        skills : Joi.string(),
        Name: Joi.string().required().escapeHTML(),
        State: Joi.string().required(),
        statehidden : Joi.string(),
        cityhidden : Joi.string(),
        Location: Joi.string().required(),
        Startdate : Joi.string().required().escapeHTML(),
        CTC : Joi.number().required().min(0)
});

module.exports.internshipSchema = Joi.object({
    email: Joi.string(),
    mob: Joi.number(),
    Lastdate: Joi.string(),
    Descriptions : Joi.string(),
    skills : Joi.string(),
    Name: Joi.string().required().escapeHTML(),
    State: Joi.string().required().escapeHTML(),
    statehidden : Joi.string(),
    cityhidden : Joi.string(),
    Location: Joi.string().required().escapeHTML(),
    Startdate : Joi.string().required().escapeHTML(),
    Stipend : Joi.number().required().min(0),
    Duration: Joi.number().required().min(0)
})
