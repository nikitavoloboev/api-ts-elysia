import { Elysia } from "elysia"

console.log(process.env.PORT, "PORT")

const app = new Elysia().get("/", "test").listen(process.env.PORT ?? 8080)

export type App = typeof app
console.log(`Server is running at ${app.server?.hostname}:${app.server?.port}`)
