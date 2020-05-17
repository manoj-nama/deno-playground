import { serve } from "https://deno.land/std@0.50.0/http/server.ts";

const port = 3000;
const server = serve({ port });
console.log(`Server listening on 0.0.0.0:${port}`);

for await (const req of server) {
  console.log(req.method, req.url);
  req.respond({ body: "Hello World, using a Deno HTTP server\n" });
}