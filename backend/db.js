const mysql = require("mysql2");
require("dotenv").config({ quiet: true });

// Pool de connexions : se reconnecte tout seul si MySQL redémarre
// (une connexion unique restait cassée après une coupure).
const pool = mysql.createPool({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT || 3306,
    waitForConnections: true,
    connectionLimit: 10
});

module.exports = pool;
