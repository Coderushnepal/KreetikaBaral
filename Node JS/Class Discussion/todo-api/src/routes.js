//file write garna
import fs from "fs";
import { Router } from "express";

import logger from "./utils/logger";
import { validateUserCreation } from "./schemas/user";
import {
  GET_USERS,
  GET_USER_BY_ID,
  CREATE_USER,
  DELETE_USER,
  UPDATE_USER,
} from "./constants/endpoints";

const router = Router();

const usersJsonPath = "./data/users.json";

//route banayeko
router.get("/", (request, response, next) => {
  response.json({
    name: "todo-api",
    version: "1.0.0",
  });
});

router.get(GET_USERS, (request, response, next) => {
  logger.info("Fetching all users");
  const usersJson = require(usersJsonPath);

  response.json(usersJson);
});

router.get(GET_USER_BY_ID, (request, response, next) => {
  const userId = +request.params.userId;
  logger.info(`Fetching user information with id ${userId}`);

  const usersJson = require(usersJsonPath);

  const requestedUser = usersJson.find((user) => user.id === userId);

  if (!requestedUser) {
    logger.error(`Cannot find the user with id ${userId}`);
    response.json({
      message: "Cannot find the user with id" + userId,
    });
  }
  //else jastai
  response.json(requestedUser);
});

//post ko lagi
router.post(CREATE_USER, validateUserCreation, (request, response, next) => {
  const params = request.body;

  //id autoincrement ko lagi
  const usersJson = require(usersJsonPath);
  const maxId = usersJson.reduce((acc, cur) => {
    return cur.id > acc ? cur.id : acc;
  }, 0);

  const updatedJson = [
    ...usersJson,
    {
      id: maxId + 1,
      ...params,
    },
  ];

  //write garna ko lagi
  fs.writeFileSync(usersJsonPath, JSON.stringify(updatedJson, null, 2));

  response.json({
    message: "New user added successfully",
    data: {
      id: maxId + 1,
      ...params,
    },
  });
});

//delete ko lagi
router.delete(DELETE_USER, (request, response, next) => {
  const userId = +request.params.userId;
  const usersJson = require(usersJsonPath);

  //security case le matra ho
  const doesUserExist = usersJson.find((user) => user.id === userId);

  if (!doesUserExist) {
    response.json({
      message: "Cannot find user with id" + userId,
    });
  }
  //....yaah samma.....security.........

  const updatedUsersList = usersJson.filter((user) => user.id !== userId);

  fs.writeFileSync(usersJsonPath, JSON.stringify(updatedUsersList, null, 2));

  response.json({
    message: "Deleted user with id" + userId,
  });
});

//put ko lagi
router.put(UPDATE_USER, (request, response, next) => {
  const userId = +request.params.userId;
  const params = request.body;

  const usersJson = require(usersJsonPath);
  const updatedJson = usersJson.map((user) => {
    if (user.id === userId) {
      return {
        ...user,
        ...params,
      };
    }
    return user;
  });
  fs.writeFileSync(usersJsonPath, JSON.stringify(updatedJson, null, 2));

  response.json({
    message: "Updated user with id" + userId,
  });
});

export default router;
