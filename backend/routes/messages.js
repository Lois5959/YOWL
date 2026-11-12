const express = require('express');
const router = express.Router();
const db = require('../db');

// Toutes ces routes passent par requireAuth (voir index.js) : req.user.id est l'expéditeur.
// On ne fait jamais confiance à un userId envoyé dans le corps de la requête.

// Envoyer un message : POST /api/messages  { receiverId, content }
router.post('/', (req, res) => {
    const { receiverId, content } = req.body || {};
    const texte = typeof content === "string" ? content.trim() : "";

    if (!Number.isInteger(receiverId) || !texte) {
        return res.status(400).json({ message: "receiverId (entier) et content sont obligatoires" });
    }
    if (texte.length > 1000) {
        return res.status(400).json({ message: "Message trop long (1000 caractères max)" });
    }

    const sql = "INSERT INTO messages (sender_id, receiver_id, content) VALUES (?, ?, ?)";
    db.query(sql, [req.user.id, receiverId, texte], (err, result) => {
        if (err) {
            if (err.code === 'ER_NO_REFERENCED_ROW_2') {
                return res.status(404).json({ message: "Destinataire introuvable" });
            }
            console.error("Erreur SQL :", err);
            return res.status(500).json({ message: "Erreur serveur" });
        }
        res.status(201).json({ id: result.insertId, receiverId, content: texte });
    });
});

// Conversation avec un membre : GET /api/messages/:userId
router.get('/:userId', (req, res) => {
    const autre = Number(req.params.userId);
    if (!Number.isInteger(autre)) {
        return res.status(400).json({ message: "Identifiant invalide" });
    }

    const sql = `SELECT id, sender_id, receiver_id, content, created_at
                 FROM messages
                 WHERE (sender_id = ? AND receiver_id = ?) OR (sender_id = ? AND receiver_id = ?)
                 ORDER BY created_at, id`;
    db.query(sql, [req.user.id, autre, autre, req.user.id], (err, results) => {
        if (err) {
            console.error("Erreur SQL :", err);
            return res.status(500).json({ message: "Erreur serveur" });
        }
        res.json(results);
    });
});

module.exports = router;
