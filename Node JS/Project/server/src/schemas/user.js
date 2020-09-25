import Joi from "joi";

const CREATE_USER_SCHEMA = Joi.object().keys({
  email: Joi.string().max(100).required(),
  username: Joi.string().max(50).required(),
  password: Joi.string().max(50).required(),
});

export function validateUserCreation(req, res, next) {
  try {
    Joi.assert(req.body, CREATE_USER_SCHEMA);

    next();
  } catch (err) {
    next(err);
  }
}
