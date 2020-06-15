import Knex from 'knex';

export async function seed(knex: Knex) {
  await knex('users').insert({
    avatar: '_default.png',
    name: 'Vinícius Crisol',
    email: 'admin.crisol@admin.com',
    password_hash: '123',
    gender: 'M',
  });
}
