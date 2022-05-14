import Joi from "joi";

 const wallSchema = Joi.object().keys({
    height: Joi.number().required().min(0),
    width: Joi.number().required().min(0),
    windows: Joi.number().required().min(0),
    doors: Joi.number().required().min(0)
})
export const wallsFormSchema = Joi.object({
    backWall: wallSchema,
    frontWall: wallSchema,
    leftWall: wallSchema,
    rightWall: wallSchema
})
