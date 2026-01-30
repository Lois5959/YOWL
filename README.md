# Gym Connect

**Gym Connect** est une application web destinée à simplifier la gestion des salles de sport et à connecter les sportifs entre eux.

Ce projet a été réalisé dans le cadre de ma formation de développeur Fullstack.

---

## Technologies utilisées

* **Frontend :** React (Vite), TailwindCSS
* **Backend :** Node.js, Express
* **Base de données :** MySQL
* **Outils :** Docker, Docker Compose, PhpMyAdmin

---

## Installation et Lancement

Ce projet nécessite **Docker Desktop** et **Node.js** (v20+).

### Étape 1 : Lancer le Serveur et la Base de données
Ouvrez un terminal à la racine du projet et lancez :

docker compose up --build

### Étape 2 : Lancer le Frontend (Interface)
Ouvrez un deuxième terminal, placez-vous dans le dossier frontend :

cd frontend
npm install   # (Uniquement la première fois)
npm run dev
 Accéder à l'application
Une fois tout lancé, cliquez sur les liens suivants :

Site Web (Frontend) : http://localhost:5173

API (Backend) : http://localhost:3000

Administration BDD (PhpMyAdmin) : http://localhost:8084

User : root

Password : root

### Dépannage (Troubleshooting)
## Erreur "Connection refused" / Serveur crash
Cause : Le backend démarre plus vite que la base de données. Solution : Laissez le terminal Docker tourner, ouvrez-en un nouveau et tapez :

docker restart backend_container

## Erreur "Unknown column" / La BDD ne se met pas à jour
Cause : Docker garde en mémoire l'ancienne version de la base de données. Solution : Il faut tout supprimer et reconstruire :

docker compose down -v
docker compose up --build

