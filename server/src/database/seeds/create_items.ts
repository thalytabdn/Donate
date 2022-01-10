import { Knex } from 'knex';

export async function seed(knex: Knex) {
  await knex('items').insert([
    { title: 'Alimentos', image: 'alimentos.png' },
    { title: 'Roupas', image: 'roupas.svg' },
  ]);
}
