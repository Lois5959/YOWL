const jwt = require('jsonwebtoken');

// Vérifie le jeton envoyé dans l'en-tête "Authorization: Bearer <jeton>".
function requireAuth(req, res, next) {
    const header = req.headers.authorization || "";
    const token = header.startsWith("Bearer ") ? header.slice(7) : null;

    if (!token) {
        return res.status(401).json({ message: "Connexion requise" });
    }

    try {
        req.user = jwt.verify(token, process.env.JWT_SECRET);
        next();
    } catch {
        return res.status(401).json({ message: "Session invalide ou expirée" });
    }
}

module.exports = requireAuth;
