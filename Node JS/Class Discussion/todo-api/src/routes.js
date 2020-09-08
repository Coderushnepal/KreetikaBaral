import { Router } from "express";

import * as endpoints from "./constants/endpoints";
import * as userController from "./controllers/user";
import { validateUserCreation } from "./schemas/user";

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

export default router;
