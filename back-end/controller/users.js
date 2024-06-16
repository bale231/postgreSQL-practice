import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
import { db } from '../database.js'

const getUsers = async (req, res) => {
    try {
        const psqlQuery = "SELECT * FROM users";
        const users = await db.many(psqlQuery);
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ msg: "Error retrieving users", error: error.message });
    }
}

const getUser = async (req, res) => {
    const { username } = req.params;
    const response = await db.oneOrNone('SELECT * FROM users WHERE username=$1', username)
    if (response) {
        res.status(200).json({ msg: "User present in database." })
        return
    }

    res.status(404).json({ msg: "User not found." })
}

const register = async (req, res) => {
    const { username, email, password, birth_date } = req.body;
    const role_id = 2;
    const hashedPassword = await bcrypt.hash(password, 10); // Hash la password

    try {
        await db.none(
            `INSERT INTO users (username, email, password, birth_date, role_id) 
            VALUES($1, $2, $3, $4, $5)`,
            [username, email, hashedPassword, birth_date, role_id]
        );
        res.status(201).json({ msg: `User ${username} registered successfully!!`, user: { username, email, birth_date, role_id } });
    } catch (error) {
        res.status(500).json({ msg: "Username or email alredy Exists!", error: error.message });
    }
}

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await db.oneOrNone(`SELECT * FROM users WHERE email=$1`, email);

        if (!user) {
            return res.status(404).json({ msg: "User not found! register before login." });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if (passwordMatch) {
            const formattedBirthDate = user.birth_date.toLocaleDateString();
            const formattedJoinDate = user.join_date.toLocaleDateString();
            const userLogged = {
                id: user.id,
                name: user.firstname,
                surname: user.lastname,
                username: user.username,
                email: user.email,
                birth_date: formattedBirthDate,
                join_date: formattedJoinDate,
                profile_pic: user.profile_pic,
            }

            const payload = {
                id: user.id,
                email,
            };
            const { SECRET_KEY } = process.env;
            const token = jwt.sign(payload, SECRET_KEY);

            res.status(200).json({ msg: `User ${user.username} logged in successfully!`, userLogged, token });
        } else {
            return res.status(401).json({ msg: "Password is incorrect!" });
        }
    } catch (error) {
        console.error('Login error:', error); // Log l'errore per debug
        res.status(500).json({ msg: "Error during login", error: error.message });
    }
}

export { getUsers, getUser, register, login }