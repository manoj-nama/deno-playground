run:
	deno run --allow-net --allow-read --unstable oak-server.ts

bundle:
	deno bundle main.ts --allow-net