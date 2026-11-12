# Définition du MVP (Minimum Viable Product)

## Objectif Principal
Permettre à un utilisateur A (Hôte) de publier une séance et à un utilisateur B (Invité) de valider sa présence. Tout le reste est accessoire.

## 1. Fonctionnalités "Must-Have" (Indispensables)
*Si on enlève une de ces fonctions, le site ne sert à rien.*

### A. Authentification (Simplifiée)
- Inscription / Connexion (Email + Mot de passe).
- Création d'un profil minimaliste (Nom, Prénom, Salle habituelle).
- *Pourquoi ?* Pour assurer la sécurité et savoir qui on va rencontrer.

### B. Le "Live Feed" (Lecture)
- Affichage des cartes de séances sous forme de grille.
- Les cartes doivent afficher : Avatar, Nom, Lieu, Type de séance, Heure.
- Filtre basique : "Ma salle" vs "Toutes les salles".

### C. Création de Séance (Écriture)
- Formulaire simple :
    - Lieu (Liste déroulante pré-remplie ou texte libre).
    - Type (Dos, Pecs, Jambes, Cardio...).
    - Heure (Sélecteur d'heure).
- Stockage en base de données.

### D. Interaction "Rejoindre"
- Clic sur "Rejoindre".
- Changement d'état visuel sur la carte (ex: "1/2 participants").
- **Mise en relation :** Affichage d'un moyen de contact (ex: afficher le numéro de téléphone ou l'Instagram de l'hôte une fois qu'on a rejoint).

---

## 2. Fonctionnalités "Nice-to-Have" (Reportées à la V2)
*Ces fonctionnalités ne seront PAS codées dans la première version.*

-  **Messagerie instantanée intégrée :** Trop long à développer pour un MVP. On utilisera l'échange de contacts externes (WhatsApp/Insta) au début.
-  **Carte interactive (Google Maps) :** On se contente d'afficher l'adresse en texte.
-  **Système de notation/Avis :** Pas nécessaire tant qu'il n'y a pas assez d'utilisateurs.
-  **Historique des séances passées.**

---

## 3. Critères de Succès du MVP
Le MVP est validé si :
1.  Un autre utilisateur peut voir cette séance et cliquer sur "Rejoindre".
2.  Les deux utilisateurs ont accès à une information leur permettant de se retrouver physiquement (Lieu précis + Moyen de contact).