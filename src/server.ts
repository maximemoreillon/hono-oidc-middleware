import "dotenv/config";
import { Hono } from "hono";
import { serve } from "@hono/node-server";
import middleware from ".";
const app = new Hono();

const { JWKS_URI = "http://localhost:8080" } = process.env;

app.use(middleware({ jwksUri: JWKS_URI }));
app.get("/", (c) => {
  // @ts-ignore
  const user = c.get("user");
  console.log(user);
  return c.json("user");
});

serve(app, (info) => {
  console.log(`Listening on http://localhost:${info.port}`); // Listening on http://localhost:3000
});
