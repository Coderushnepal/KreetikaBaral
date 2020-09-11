import { Router } from "express";

import authenticate from "./middlewares/authenticate";
import jwtAuthenticate from "./middlewares/jwtAuthenticate";
import * as endpoints from "./constants/endpoints";
import * as userController from "./controllers/user";
import * as todoController from "./controllers/todo";
import { validateUserCreation, validateLogin } from "./schemas/user";
import { validateAddTodo, validateUpdateTodo } from "./schemas/todo";

const router = Router();

//route banayeko
router.get("/", (req, res, next) => {
  res.json({
    name: "todo-api",
    version: "1.0.0",
  });
});

//post ko lagi
router.post(
  endpoints.CREATE_USER,
  validateUserCreation,
  userController.createUser
);

router.get(
  endpoints.GET_ALL_TODOS,
  jwtAuthenticate,
  authenticate,
  todoController.getAllTodos
);

router.get(
  endpoints.GET_TODO_BY_ID,
  jwtAuthenticate,
  authenticate,
  todoController.getTodoById
);

router.post(
  endpoints.ADD_TODO,
  jwtAuthenticate,
  authenticate,
  validateAddTodo,
  todoController.addTodo
);

router.delete(
  endpoints.REMOVE_TODO,
  jwtAuthenticate,
  authenticate,
  todoController.removeTodo
);

router.put(
  endpoints.UPDATE_TODO,
  jwtAuthenticate,
  authenticate,
  validateUpdateTodo,
  todoController.updateTodo
);

router.post(endpoints.LOGIN, validateLogin, userController.login);

export default router;
