import { verifyToken } from "../services/authenticate";


export default async function authenticate(req, res, next) {
  const userId = +req.user.id;
  const token = req.headers["authorization"];

  console.log(token);

  try {
    await verifyToken(userId, token);

    next();
  } catch (err) {
    next(err);
  }
}
