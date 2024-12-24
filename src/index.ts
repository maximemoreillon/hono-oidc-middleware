import { Hono } from "hono"
import middleware from "./auth-middleware"
const app = new Hono()

app.use(middleware({ jwksUri: "http://localhost:8080" }))
app.get("/", (c) => {
  return c.text("Hello Hono!")
})

export default app
