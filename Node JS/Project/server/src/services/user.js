import * as crypt from "../util/crypt";
import * as User from "../models/User";
import BadRequestError from "../util/BadRequestError";
import logger from "../util/logger";
import { generateToken } from "../util/jwt";

export async function create(payload) {
  logger.info("Checking if the email already exists");

  const user = await User.getByEmail(payload.email);

  if (user) {
    logger.error("User with this email already exists.");

    throw new BadRequestError("User with this email already exists.");
  }

  const data = await User.create({
    ...payload,
    password: crypt.hash(payload.password),
  });

  return {
    data,
    message: "New user created successfully",
  };
}

export async function login(payload) {
  const { email, password } = payload;

  logger.info("Checking if the email is valid");

  const user = await User.getByEmail(email);

  if (!user) {
    logger.error("Invalid credentials");

    throw new BadRequestError("Invalid credentials");
  }

  const isPasswordValid = crypt.compare(password, user.password);

  if (!isPasswordValid) {
    logger.error("Invalid credentials");

    throw new BadRequestError("Invalid credentials");
  }

  const tokenPayload = {
    id: user.id,
    email: user.email,
    username: user.username,
  };

  const token = generateToken(tokenPayload);

  return {
    data: {
      ...tokenPayload,
      token,
    },
    message: "Logged in successfully",
  };
}
