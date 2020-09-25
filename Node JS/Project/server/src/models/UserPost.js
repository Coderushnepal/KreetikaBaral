import snakeize from "snakeize";
import camelize from "camelize";
import connection from "../connection";

const TABLE = "user_post";

//Model to add post
export async function add(userId, postCaption, postPhoto, postedBy) {
  const [insertedData] = await connection
    .insert({
      user_id: userId,
      post_caption: postCaption,
      post_photo: postPhoto,
      posted_by: postedBy,
    })
    .into(TABLE)
    .returning("*");

  console.log(insertedData);

  return camelize(insertedData);
}

//Model to update likes.
export async function updateLikes(userId, postId, postLikes) {
  const [data] = await connection
    .insert({
      user_id: userId,
      id: postId,
      post_likes: postLikes,
    })
    .into(TABLE)
    .returning("*");

  return camelize(data);
}

//Model to get post by Id
export async function getById(userId, postId) {
  const data = await connection
    .select("id", "post_caption", "post_photo")
    .from(TABLE)
    .where({ user_id: userId, id: postId });

  return data[0] ? camelize(data[0]) : null;
}

//Model to get all posts.
export async function getAll(userId) {
  const result = await connection
    .select("*")
    .from(TABLE)
    .where("user_id", userId);

  return camelize(result);
}

//Model to update post.
export async function update(userId, postId, updateParams) {
  const [updatedData] = await connection(TABLE)
    .update(snakeize(updateParams))
    .where({ user_id: userId, id: postId })
    .returning("*");

  return camelize(updatedData);
}

//Model to delete a post.
export async function remove(userId, postId) {
  await connection(TABLE)
    .update({ is_active: false })
    .where({ user_id: userId, id: postId });
}
