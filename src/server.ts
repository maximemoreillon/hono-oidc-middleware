import { Hono } from "hono";
import { serve } from "@hono/node-server";
import middleware from ".";
const app = new Hono();

app.use(middleware({ jwksUri: "http://localhost:8080" }));
app.get("/", (c) => {
  return c.text("Hello Hono!");
});

serve(app, (info) => {
  console.log(`Listening on http://localhost:${info.port}`); // Listening on http://localhost:3000
});
