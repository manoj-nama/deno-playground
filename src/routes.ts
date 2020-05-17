import { Router } from "https://deno.land/x/oak/mod.ts";
import { getUsers, getOne } from "./controllers/user.controller.ts";

const router = new Router();

router.get('/', ({ response }) => {
  response.body = "This is the / route mate";
});

router.get('/users', async ({ response }) => {
  const users = await getUsers();
  response.body = users;
});

router.get('/users/:id', async ({ params, response }) => {
  const users = await getOne(params);
  response.body = users;
});

export default router;