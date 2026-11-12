require("dotenv").config({ quiet: true });

// Sans secret, n'importe qui pourrait signer ses propres jetons : on refuse de démarrer.
if (!process.env.JWT_SECRET) {
    console.error("JWT_SECRET manquant : copie .env.example en .env et renseigne-le.");
    process.exit(1);
}

const app = require('./app');
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Serveur démarré sur port ${PORT}`);
});
