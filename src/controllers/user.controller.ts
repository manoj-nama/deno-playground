import { find, findOne } from "../models/user.model.ts"

export const getUsers = async () => {
  console.log("Fetching users");
  const users = await find();
  return users;
};

export const getOne = async (params: any) => {
  console.log(`Fetching user with id ${params.id}`);
  const user = await findOne(params);
  return user;
};