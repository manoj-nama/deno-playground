import { Application } from "https://deno.land/x/oak/mod.ts";
import router from "./src/routes.ts";

const port = 3000;
const app = new Application();

app.use(async ({ request }: any, next) => {
  console.log(request.method, request.url.pathname);
  await next();
});

app.use(router.routes());

app.listen(`0.0.0.0:${port}`);
console.log(`Server listening on 0.0.0.0:${port}`);
