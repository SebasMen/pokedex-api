import * as Joi from 'joi';

// Validar que las variables de entorno esten configuradas
export const JoiValidationSchema = Joi.object({
  MONGODB: Joi.required(),
  PORT: Joi.number().default(4001),
});
