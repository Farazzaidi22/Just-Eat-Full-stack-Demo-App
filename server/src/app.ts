import express, { Express } from "express"
import cors from "cors"
import JustEatRoutes from "./routes"

const app: Express = express()

const PORT: string | number = 8080

app.use(cors())
app.use(JustEatRoutes)


app.listen(PORT, () => {
    return console.log(`server is listening on ${PORT}`);
});