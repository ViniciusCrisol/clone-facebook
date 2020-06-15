import Knex from 'knex';

export async function seed(knex: Knex) {
  await knex('users').insert({
    avatar: 'https://api.adorable.io/avatars/285/abott@adorable.png',
    name: 'Vinícius Crisol',
    email: 'vinicius.crisol@etec.sp.gov.br',
    password_hash: '123',
    gender: 'M',
  });
}
