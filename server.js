const express = require("express")
const { Liquid } = require("liquidjs")

// Project data
const projects = require("./projectData.json")

const app = express()
const engine = new Liquid({
    root: __dirname,
    extname: ".liquid"
})

app.use(express.static("public"))

app.engine("liquid", engine.express())
app.set("views", "./views")
app.set("view engine", "liquid")

app.get("/", (_, res) => {
    res.render("index", {
        projects: projects,
        title: "Hello world"
    })
})

app.listen(5000, () => console.log("running on port 5000"))