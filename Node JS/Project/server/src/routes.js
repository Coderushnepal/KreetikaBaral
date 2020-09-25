import { Router } from "express";

import { validateUserCreation } from "./schemas/user";
import {
  validateAddPost,
  validateUpdatePost,
  validateUpdateLikes,
} from "./schemas/post";
import * as userController from "./controllers/user";
import * as postController from "./controllers/post";
import authenticate from "./middlewares/authenticate";

import UserModal from "./models/User";

const router = Router();

router.get("/", (req, res, next) => {
  res.json({
    name: "instagram clone",
    version: "1.0.0",
  });
});

router.post("/signup", validateUserCreation, userController.createUser);

router.post("/login", userController.login);

router.get("/myposts", authenticate, postController.getAllPosts);
router.get("/posts/:postId", authenticate, postController.getPostById);
router.post(
  "/createpost",
  authenticate,
  validateAddPost,
  postController.createPost
);

router.post(
  "/likes",
  authenticate,
  validateUpdateLikes,
  postController.updateLikes
);

router.put(
  "/posts/:postId",
  authenticate,
  validateUpdatePost,
  postController.updatePost
);
router.delete("/delete/:postId", authenticate, postController.removePost);

export default router;
