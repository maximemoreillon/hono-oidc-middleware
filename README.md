# Hono OIDC middleware

A simple Authentication middleware for Hono that validates Oauth access tokens using JWKS

## Example usage

```ts
import { Hono } from "hono";
import { serve } from "@hono/node-server";
import middleware from "@moreillon/hono-oidc-middleware";

const app = new Hono();

app.use(middleware({ jwksUri: "URI to JWKS" }));
app.get("/", (c) => {
  return c.text("Hello Hono!");
});

serve(app, (info) => {
  console.log(`Listening on http://localhost:${info.port}`);
});
```
