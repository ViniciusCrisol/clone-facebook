import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('friend_requests', (table) => {
    table.increments('id').primary();
    table.integer('user').notNullable().references('id').inTable('users');
    table.string('name').notNullable();
    table.integer('friend').notNullable().references('id').inTable('users');
    table.integer('state').notNullable().defaultTo(false);
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('friend_requests');
}
