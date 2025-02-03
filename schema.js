const Joi = require("joi");
const review = require("./models/review");

const listingSchema = Joi.object({
    listing: Joi.object({  
        title: Joi.string().required(),
        description: Joi.string().required(),
        price: Joi.number().min(0).required(),
        location: Joi.string().required(),
        country: Joi.string().required(),
        image: Joi.string().uri().allow(""),
    }).required()  
});

const reviewSchema = Joi.object({
    review: Joi.object({
        rating: Joi.number().required(),
        comment: Joi.string().required()
    }).required()
});

module.exports = { listingSchema, reviewSchema };
