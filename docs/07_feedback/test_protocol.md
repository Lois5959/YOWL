# Protocole de Test - Gym Connect

Ce document décrit les scénarios de test à valider avant le déploiement de chaque version (Release).

## 1. Tests Fonctionnels (Parcours Utilisateur)

### A. Création d'un Post (Le "Host")
*Objectif : Vérifier qu'un utilisateur peut proposer une séance correctement.*

- [ ] **Test A1 - Création Standard :**
    - [ ] Remplir le formulaire : Lieu ("Basic Fit"), Type ("Dos"), Heure ("18:00").
    - [ ] Valider.
    - [ ] **Résultat attendu :** La carte apparaît immédiatement dans le "Live Feed" avec les bonnes infos.
- [ ] **Test A2 - Validation des Données :**
    - [ ] Tenter de créer un post sans remplir le champ "Heure".
    - [ ] **Résultat attendu :** Le bouton "Poster" reste inactif ou un message d'erreur rouge apparaît.
- [ ] **Test A3 - Cohérence Temporelle :**
    - [ ] Tenter de créer une séance pour une date passée (ex: hier).
    - [ ] **Résultat attendu :** Blocage du système (Erreur : "Impossible de créer une séance dans le passé").

### B. Rejoindre une Séance (Le "Guest")
*Objectif : Vérifier l'interaction entre deux utilisateurs.*

- [ ] **Test B1 - Rejoindre (Cas nominal) :**
    - [ ] Utilisateur B clique sur "Rejoindre" sur le post de l'Utilisateur A.
    - [ ] **Résultat attendu :** Le bouton change d'état (ex: devient "Demande envoyée" ou "Inscrit").
- [ ] **Test B2 - Auto-Rejoindre :**
    - [ ] L'utilisateur A tente de cliquer sur "Rejoindre" sur son *propre* post.
    - [ ] **Résultat attendu :** Le bouton ne doit pas être cliquable (ou doit être caché pour l'auteur).

### C. Le Live Feed (Affichage)
*Objectif : Vérifier que l'utilisateur voit ce qui est pertinent.*

- [ ] **Test C1 - Ordre Chronologique :**
    - [ ] Créer une séance pour 14h00 et une pour 18h00.
    - [ ] **Résultat attendu :** La séance de 14h00 apparaît *avant* celle de 18h00 (ou l'inverse selon ton choix de tri).
- [ ] **Test C2 - Nettoyage automatique :**
    - [ ] Attendre que l'heure d'une séance soit dépassée.
    - [ ] **Résultat attendu :** La carte disparaît du flux principal (ou passe dans une section "Historique").

---

## 2. Tests "Cas Limites" (Edge Cases)
*Objectif : Faire planter l'application pour voir comment elle réagit.*

- [ ] **Le "Spam Click" :**
    - [ ] Cliquer 10 fois très vite sur le bouton "Rejoindre".
    - [ ] **Résultat attendu :** Une seule requête est envoyée au serveur, pas 10 invitations.
- [ ] **Texte trop long :**
    - [ ] Dans "Type de séance", copier-coller un texte de 500 caractères.
    - [ ] **Résultat attendu :** Le design de la carte ne doit pas "casser" (le texte doit être coupé avec "..." ou revenir à la ligne proprement).

---

## 3. Compatibilité (Responsive)

- [ ] **Mobile :** La sidebar (menu gauche) doit se transformer (ex: menu burger ou barre de navigation en bas).
- [ ] **Desktop :** L'affichage en grille (3 cartes par ligne) est respecté.