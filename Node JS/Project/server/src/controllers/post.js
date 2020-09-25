import * as postService from "../services/post";

/**
 * Controller to add a post for a user.
 *
 * @param  req
 * @param  res
 * @param  next
 */
export async function createPost(req, res, next) {
  postService
    .addPost(
      +req.user.id,
      req.body.postCaption,
      req.body.postPhoto,
      req.user.username
    )
    .then((data) => res.json(data))
    .catch((err) => next(err));
}

/**
 * Controller to update like for a user.
 *
 * @param req
 * @param res
 * @param next
 */
export async function updateLikes(req, res, next) {
  postService
    .updatePostLikes(+req.user.id, +req.params.postId, +req.params.postLikes)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}

/**
 * Controller to get all posts
 *
 * @param  req
 * @param  res
 * @param  next
 */
export async function getAllPosts(req, res, next) {
  postService
    .getAllPosts(+req.user.id)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}

/**
 * Controller to get specific post for a user.
 *
 * @param  req
 * @param  res
 * @param  next
 */
export async function getPostById(req, res, next) {
  const { userId, postId } = req.params;

  postService
    .getPostById(+req.user.id, +postId)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}

/**
 * Controller to update a post for a user.
 *
 * @param req
 * @param res
 * @param next
 */
export async function updatePost(req, res, next) {
  postService
    .updatePost(+req.user.id, +req.params.postId, req.body)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}

/**
 * Controller to remove a post for a user.
 *
 * @param  req
 * @param  res
 * @param  next
 */
export async function removePost(req, res, next) {
  postService
    .deletePost(+req.user.id, +req.params.postId)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}
