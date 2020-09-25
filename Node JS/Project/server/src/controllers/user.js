import * as userService from "../services/user";

export async function createUser(req, res, next) {
  userService
    .create(req.body)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}

export async function login(req, res, next) {
  userService
    .login(req.body)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}
