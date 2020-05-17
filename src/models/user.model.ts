import { query } from '../database.ts';

export const find = async () => {
  const users = await query(`SELECT * FROM users`, []);
  return users;
};

export const findOne = async (args: any) => {
  const [user = {}] = await query('SELECT * FROM users where id = $1', [args.id]);
  return user;
};