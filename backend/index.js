const express = require('express');
const app = express();
require("dotenv").config();

app.use(express.json());

// IMPORTATION DES ROUTES
const authRoutes = require('./routes/auth');
const messageRoutes = require('./routes/messages'); // <-- AJOUTE CETTE LIGNE

// UTILISATION DES ROUTES
app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes); // <-- AJOUTE CETTE LIGNE

// Route de test simple
app.get('/', (req, res) => {
    res.send("Le serveur fonctionne !");
});

app.listen(3000, () => {
    console.log("Serveur démarré sur port 3000");
});