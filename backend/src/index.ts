import express, {Request, Response} from "express";
import { entryRouter } from "./routers";

const app = express()
const port = 3000

app.use(express.json())

app.use('/api', entryRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})