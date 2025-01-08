import { Client } from "pg";
export const client = new Client({
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  host: process.env.POSTGRES_HOST,
  port: Number.parseInt(process.env.PGSQL_PORT as string),
  database: process.env.POSTGRES_DATABASE,
});
client.connect();
