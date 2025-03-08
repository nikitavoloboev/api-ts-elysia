import { Elysia } from "elysia"

const app = new Elysia().get("/", "test").listen(process.env.PORT ?? 4000)

export type App = typeof app
console.log(`Server is running at ${app.server?.hostname}:${app.server?.port}`)
