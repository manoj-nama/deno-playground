import { readJsonSync, existsSync } from "https://deno.land/std/fs/mod.ts";

let config = {};
const loadConfig = async () => {
  try {
    const fileConfig: any = readJsonSync("./config/config.json");
    config = fileConfig;

    if (existsSync("./config/local.config.json")) {
      const localConf: any = readJsonSync("./config/local.config.json");
      config = { ...config, ...localConf };
    }
  } catch (err) {
    console.error("Error reading config", err);
  }
};

await loadConfig();

export default config;