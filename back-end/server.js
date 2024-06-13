import express from 'express'
import 'express-async-errors'
import morgan from 'morgan'
import dotenv from 'dotenv'
import { db } from './database.js'
dotenv.config();

const app = express();
const port = process.env.LOCAL_PORT;

app.use(express.json());
app.use(morgan('dev'));

app.listen(port, () => {
    console.log(`Server listen to http://localhost:${port}`)
})