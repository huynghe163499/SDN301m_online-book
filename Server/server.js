// khai bao module express de tao web server
import express from 'express'
import * as dotenv from 'dotenv'
// import {productRouter} from './routes/index.js'
import connectDB from './database.js'
import routes from './routes/index.js'
dotenv.config()

import cors from 'cors';

//khoi tao 1 container cho web server
const app = express()
app.use(express.json()) //add middleware de uung dung Express lam viec voi json
app.use(cors())
routes(app);

//dinh tuyen cho root URL
app.get('/', (req, res) => {
    res.send('Welcome to Node.js')
})

//Routing toi cac object
// app.use('/products', productRouter)

//khai bao port
// const port = 9999
const port = process.env.PORT || 8080

//lang nghe cac request gui toi web server
app.listen(port, async() => {
    connectDB()
    console.log(`server running on: http://localhost:${port}`);
})