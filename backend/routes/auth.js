// routes/auth.js
const express = require('express');
const router = express.Router(); // "mini-serveur" (Router)
const db = require('../db'); // pool de connexions MySQL
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// ROUTE REGISTER
router.post('/register', async (req, res) => {
    const { nom, email, password } = req.body || {};

    // Validation avant de toucher à la base
    if (!nom || !email || !password) {
        return res.status(400).json({ message: "Nom, email et mot de passe sont obligatoires" });
    }
    if (!EMAIL_REGEX.test(email)) {
        return res.status(400).json({ message: "Email invalide" });
    }
    if (password.length < 8) {
        return res.status(400).json({ message: "Le mot de passe doit faire au moins 8 caractères" });
    }

    // Hachage du mot de passe
    const hash = await bcrypt.hash(password, 10);

    // Insertion en base (requête paramétrée)
    const sql = "INSERT INTO utilisateurs (nom, email, password) VALUES (?, ?, ?)";
    db.query(sql, [nom, email, hash], (err) => {
        if (err) {
            if (err.code === 'ER_DUP_ENTRY') {
                return res.status(409).json({ message: "Un compte existe déjà avec cet email" });
            }
            console.error("Erreur SQL :", err);
            return res.status(500).json({ message: "Erreur serveur" });
        }
        res.status(201).json({ message: "Utilisateur créé !" });
    });
});

// ROUTE LOGIN
router.post('/login', (req, res) => {
    const { email, password } = req.body || {};
    if (!email || !password) {
        return res.status(400).json({ message: "Email et mot de passe sont obligatoires" });
    }

    const sql = "SELECT * FROM utilisateurs WHERE email = ?";
    db.query(sql, [email], async (err, results) => {
        if (err) {
            console.error("Erreur SQL :", err);
            return res.status(500).json({ message: "Erreur serveur" });
        }

        // Même message dans les deux cas : on ne révèle pas si l'email existe
        const utilisateur = results[0];
        const validPassword = utilisateur && await bcrypt.compare(password, utilisateur.password);
        if (!validPassword) {
            return res.status(401).json({ message: "Email ou mot de passe incorrect" });
        }

        // Création du Token
        const token = jwt.sign(
            { id: utilisateur.id, role: utilisateur.role },
            process.env.JWT_SECRET,
            { expiresIn: '2h' }
        );

        res.status(200).json({ token: token, message: "Connecté !" });
    });
});

module.exports = router;
