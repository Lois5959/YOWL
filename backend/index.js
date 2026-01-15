const express = require('express');
const app = express();
require("dotenv").config();

app.use(express.json());

// IMPORTATION DES ROUTES
const authRoutes = require('./routes/auth');

// UTILISATION DES ROUTES
// Toutes les routes de auth.js commencent par /api/auth
app.use('/api/auth', authRoutes);

// Route de test simple
app.get('/', (req, res) => {
    res.send("Le serveur fonctionne !");
});

app.listen(3000, () => {
    console.log("Serveur démarré sur port 3000");
});