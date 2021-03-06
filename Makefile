run:
	deno run --allow-net --allow-read --unstable main.ts

bundle:
	deno bundle main.ts --allow-net

create-config:
	cp config/config.json config/local.config.json