import logger from "../util/logger";
import NotFoundError from "../util/NotFoundError";
import * as UserPost from "../models/UserPost";

/**
 *
 * @param  userId
 * @param  postCaption
 * @param  postPhoto
 */
export async function addPost(userId, postCaption, postPhoto, postedBy) {
  const data = await UserPost.add(userId, postCaption, postPhoto, postedBy);

  return {
    data,
    message: "New Post added successfully.",
  };
}

/**
 * Update likes for a user.
 *
 * @param userId
 * @param postId
 * @param postLikes
 */
export async function updatePostLikes(userId, postId, postLikes) {
  logger.info(`Updating likes of postId ${postId} for userId ${userId}`);

  const data = await UserPost.updateLikes(userId, postId, postLikes);

  return {
    data,
    message: "Post likes updated",
  };
}

/**
 * Get specific post by id for a user.
 *
 * @param  userId
 * @param postId
 */
export async function getPostById(userId, postId) {
  logger.info(`Getting postId ${postId} for userId ${userId}`);

  const data = await UserPost.getById(userId, postId);
  // console.log(data);

  if (!data) {
    logger.error(`Cannot find postId ${postId} for userId ${userId}`);

    throw new NotFoundError(
      `Cannot find postId ${postId} for userId ${userId}`
    );
  }

  return {
    data,
    message: `Post details for post id ${postId} and userId ${userId}`,
  };
}

/**
 * Get all posts for a user.
 *
 * @param  postId
 */
export async function getAllPosts(userId) {
  logger.info(`Getting list of posts for userId ${userId}`);

  const data = await UserPost.getAll(userId);
  // console.log(data);

  return {
    data,
    message: "Post details",
  };
}

/**
 * Update a post for a user.
 *
 * @param userId
 * @param postId
 * @param updateParams
 */

export async function updatePost(userId, postId, updateParams) {
  console.log(userId, postId);
  logger.info(`Updating postId ${postId} for userId ${userId}`);

  const data = await UserPost.update(userId, postId, updateParams);
  // console.log(data);

  return {
    data,
    message: "Post updated",
  };
}

/**
 * Remove a post for a user.
 *
 * @param  userId
 * @param  postId
 */
export async function deletePost(userId, postId) {
  logger.info(`Removing postId ${postId} for userId ${userId}`);

  const data = await UserPost.remove(userId, postId);

  return {
    message: `Removed postId ${postId} for userId ${userId}`,
  };
}
