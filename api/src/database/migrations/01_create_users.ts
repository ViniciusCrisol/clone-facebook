import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary();
    table.string('avatar').notNullable();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('password_hash').notNullable();
    table.string('bio', 255).notNullable();
    table.string('birthday').defaultTo(null);
    table.string('location').defaultTo(null);
    table.string('work_place').defaultTo(null);
  });
}
export async function down(knex: Knex) {
  return knex.schema.dropTable('users');
}
