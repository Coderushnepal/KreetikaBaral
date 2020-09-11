import { sign, decode } from "jsonwebtoken";

export function generateToken(user) {
  const secret = process.env.TOKEN_SECRET;

  return sign(user, secret);
}

export function decodeToken(token) {
  return decode(token);
}
