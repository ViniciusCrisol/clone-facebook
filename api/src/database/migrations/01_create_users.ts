import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary();
    table.string('avatar').notNullable();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('password_hash').notNullable();
    table.decimal('gender').notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('users');
}
