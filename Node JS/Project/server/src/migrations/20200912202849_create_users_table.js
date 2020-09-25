/**
 * Create 'users' table.
 *
 * @param  knex
 * @returns {Promise}
 */
export function up(knex) {
  return knex.schema.createTable("users", (table) => {
    table.increments("id");
    table.string("username", 50).notNull().unique();
    table.string("email", 100).notNull().unique();
    table.string("password", 200).notNull();
  });
}

/**
 * Drop table 'users'
 *
 * @param  knex
 * @returns {Promise}
 */
export function down(knex) {
  return knex.schema.dropTable("users");
}
