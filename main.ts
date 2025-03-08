import { Elysia } from "elysia"

const app = new Elysia().get("/", "test").listen(process.env.PORT ?? 8787)

export type App = typeof app
console.log(`Server is running at ${app.server?.hostname}:${app.server?.port}`)
