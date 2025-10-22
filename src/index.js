import express, { response } from "express"
import { people } from "./people.js"

const app = express()

app.get("/", (request, response) => {
    response.json(people)
})

