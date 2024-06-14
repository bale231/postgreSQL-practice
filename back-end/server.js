import express from 'express';
import 'express-async-errors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import cors from 'cors'
import { getUser, getUsers, login, register } from './controller/users.js';
dotenv.config();

const app = express();
const port = process.env.LOCAL_PORT;

app.use(express.json());
app.use(morgan('dev'));
app.use(cors())

app.get('/users', getUsers);
app.get('/users/:username', getUser);

app.post('/users/register', register);
app.post('/users/login', login);

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
