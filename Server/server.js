import express, { json } from 'express'
import * as dotenv from 'dotenv'
import connectDB from './database.js'
import routes from './routes/index.js'
dotenv.config()

import cors from 'cors';

const app = express()
app.use(express.json())
app.use(cors())
routes(app);

const port = process.env.PORT || 8080
app.listen(port, async () => {
    connectDB()
    console.log(`server running on: http://localhost:${port}`);
})