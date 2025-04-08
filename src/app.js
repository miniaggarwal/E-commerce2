import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import routes from "./routes/index.js"

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(cookieParser()) //to get access to user cookies


app.use("/api", routes)

app.get("/", (_req, res) => {
    res.send("Hello")
})


app.all("*", (_req, res) => {
    res.status(404).json({
        sucess: false,
        message: "Route not found"
    })
})
export default app;

