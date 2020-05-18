import { Client } from "https://deno.land/x/postgres@v0.4.0/mod.ts";
import config from "./config.ts";

export const query = async (dbQuery: string, args: any = []) => {
  const client = new Client((config as any).database);
  try {
    await client.connect();
  } catch (e) {
    console.log("Connection error", e);
  }
  const result = await client.query({
    text: dbQuery,
    args
  });
  await client.end();
  return result.rowsOfObjects();
};