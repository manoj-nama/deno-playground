import * as server from "./src/server.ts";

async function bootstrap() {
  console.log("Housekeeping stuff..! Starting app...");
};

await bootstrap();
server.start();