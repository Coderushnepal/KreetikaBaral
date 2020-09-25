/**
 * Create 'user_post' table.
 *
 * @param  knex
 * @returns {Promise}
 */
export function up(knex) {
  return knex.schema.createTable("user_post", (table) => {
    table.increments("id");
    table.integer("user_id").notNull().references("id").inTable("users");
    table.string("post_caption", 1000).notNull();
    table.string("post_photo", 300).notNull();
    table.integer("post_likes").references("id").inTable("users");
    table.boolean("is_active").notNull().defaultTo(true);
    table.string("posted_by").notNull().references("username").inTable("users");
  });
}

/**
 * Drop table 'user_post'
 *
 * @param  knex
 * @returns {Promise}
 */
export function down(knex) {
  return knex.schema.dropTable("user_post");
}
