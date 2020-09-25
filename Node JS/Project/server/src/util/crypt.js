import bcrypt from "bcrypt";

export function hash(password) {
  return bcrypt.hashSync(password, +process.env.PASSWORD_SALT);
}

export function compare(actualPassword, hashedPassword) {
    return bcrypt.compareSync(actualPassword, hashedPassword);
  }
