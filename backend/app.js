require("dotenv").config({ quiet: true });
const express = require('express');
const cors = require('cors');

const db = require('./db');
const requireAuth = require('./middleware/auth');
const authRoutes = require('./routes/auth');
const messageRoutes = require('./routes/messages');

const app = express();

app.use(cors({ origin: (process.env.CORS_ORIGINS || "http://localhost:5173").split(",") }));
app.use(express.json({ limit: "100kb" }));

app.use('/api/auth', authRoutes);
app.use('/api/messages', requireAuth, messageRoutes);

app.get('/', (req, res) => {
    res.send("Le serveur fonctionne !");
});

// Utilisé par le healthcheck Docker : l'API répond ET la base est joignable
app.get('/api/health', (req, res) => {
    db.query("SELECT 1", (err) => {
        if (err) return res.status(503).json({ status: "degraded", database: "down" });
        res.json({ status: "ok", database: "up" });
    });
});

// Liste des membres : réservée aux utilisateurs connectés (les emails ne sont pas publics)
app.get('/api/users', requireAuth, (req, res) => {
    const sql = "SELECT id, nom, email FROM utilisateurs";

    db.query(sql, (err, results) => {
        if (err) {
            console.error("Erreur SQL :", err);
            return res.status(500).json({ message: "Erreur serveur" });
        }
        res.json(results);
    });
});

module.exports = app;
