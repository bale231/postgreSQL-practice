import express from 'express';
import 'express-async-errors';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import morgan from 'morgan';
import dotenv from 'dotenv';
import { db } from './database.js';
dotenv.config();

const app = express();
const port = process.env.LOCAL_PORT;

app.use(express.json());
app.use(morgan('dev'));

app.get('/users', async (req, res) => {
    try {
        const psqlQuery = "SELECT * FROM users";
        const users = await db.many(psqlQuery);
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ msg: "Error retrieving users", error: error.message });
    }
});

app.post('/users/register', async (req, res) => {
    const { username, email, password, birth_date } = req.body;
    const role_id = 2;
    const hashedPassword = await bcrypt.hash(password, 10); // Hash la password

    try {
        await db.none(
            `INSERT INTO users (username, email, password, birth_date, role_id) 
            VALUES($1, $2, $3, $4, $5)`,
            [username, email, hashedPassword, birth_date, role_id]
        );
        res.status(201).json({ msg: "User registered successfully!!", user: { username, email, birth_date, role_id } });
    } catch (error) {
        res.status(500).json({ msg: "Error registering user", error: error.message });
    }
});

app.post('/users/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await db.oneOrNone(`SELECT * FROM users WHERE email = $1`, [email]);

        if (!user) {
            return res.status(404).json({ msg: "User not found!" });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if (passwordMatch) {
            const payload = {
                id: user.id,
                email,
            };
            const { SECRET_KEY } = process.env;
            const token = jwt.sign(payload, SECRET_KEY);

            res.status(200).json({ msg: "User logged in successfully!", id: user.id, email, token });
        } else {
            return res.status(401).json({ msg: "Password is incorrect!" });
        }
    } catch (error) {
        console.error('Login error:', error); // Log l'errore per debug
        res.status(500).json({ msg: "Error during login", error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
