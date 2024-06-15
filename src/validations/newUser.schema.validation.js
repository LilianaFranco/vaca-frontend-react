import Joi from "joi";

const newUserSchemaValidation = Joi.object({
  name: Joi.string().trim().min(3).max(100).required().messages({
    "string.empty": "El nombre no puede estar vacío.",
    "string.min": "El nombre debe tener al menos de 3 caracteres.",
  }),
  email: Joi.string()
    .email({ tlds: { allow: ["com", "net", "org"] } })
    .messages({
      "string.empty": "El correo no puede estar vacío.",
      "string.email": "Incluye @ y .com, .net o .org",
    }),
  password: Joi.string()
    .pattern(new RegExp("^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$"))
    .required()
    .messages({
      "string.empty": "Elige una contraseña para continuar.",
      "string.pattern.base": "Mínimo 8 caracteres, 1 número y 1 letra",
    }),
});

const userIdSchemaValidation = Joi.object({
  id: Joi.number().min(1),
});

export { newUserSchemaValidation, userIdSchemaValidation };
