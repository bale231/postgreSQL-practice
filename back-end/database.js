import pgPromise from "pg-promise";
import dotenv from "dotenv";

// Carica le variabili d'ambiente
dotenv.config();

const port = process.env.DB_PORT;
const db_database = process.env.DB_DATABASE;
const db_username = process.env.DB_USERNAME;
const db_password = process.env.DB_PASSWORD;
const db_host = process.env.DB_HOST;

// Configura pg-promise
const pgp = pgPromise();
const db = pgp({
    host: db_host,
    port: port,
    database: db_database,
    user: db_username,
    password: db_password,
});

// Verifica la connessione
const connected = async () => {
    try {
        await db.connect();
        console.log("Connected to database");
    } catch (err) {
        console.error("Database connection failed: " + err.stack);
    }
};

connected();
// Funzione per resettare il database
const preResetDB = async () => {
    try {
        await db.none(
            `
            DROP TABLE IF EXISTS users;
            DROP TABLE IF EXISTS roles;

            CREATE TABLE roles (
                id BIGSERIAL PRIMARY KEY,
                name VARCHAR(50) NOT NULL
            );

            CREATE TABLE users (
                id BIGSERIAL PRIMARY KEY,
                username VARCHAR(50) NOT NULL UNIQUE,
                firstname VARCHAR(50),
                lastname VARCHAR(50),
                email VARCHAR(255) NOT NULL UNIQUE,
                password VARCHAR(250) NOT NULL,
                role_id BIGINT NOT NULL,
                birth_date DATE,
                join_date DATE default current_date,
                description TEXT,
                profile_pic VARCHAR(255) DEFAULT NULL,
                created_at TIMESTAMP DEFAULT current_timestamp NOT NULL,
                FOREIGN KEY (role_id) REFERENCES roles(id)
            );

            INSERT INTO roles (id, name)
            VALUES (1, 'admin');

            INSERT INTO roles (id, name)
            VALUES (2, 'user');

            INSERT INTO roles (id, name)
            VALUES (3, 'super-admin');
            `
        );
        console.log("Table 'users' has been reset.");
    } catch (err) {
        console.error("Error resetting the table: " + err.stack);
    }
};

preResetDB();

export { db }