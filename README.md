# 💼 Code Wallet

**Code Wallet** est une application desktop moderne développée avec **Electron**, **React** et **Vite**. Elle est conçue pour aider les développeurs à **stocker**, **organiser** et **retrouver rapidement** leurs fragments de code favoris. Simple, rapide et élégante, elle centralise tous vos snippets dans une interface efficace et personnalisable.

---

## ✨ Fonctionnalités

### 🧩 Gestion des fragments

- Ajouter un fragment avec :
  - Un **titre**
  - Un **code source**
  - Des **tags personnalisés**
- Modifier ou supprimer un fragment existant.
- Affichage des fragments dans une **modale** avec **coloration syntaxique** grâce à **Prism.js**.

---

### 🔍 Recherche & filtrage

- **Recherche instantanée** sur :
  - Le titre
  - Le contenu du code
  - Les tags
- **Filtrage par tags** cliquables dans la liste et les modales.
- Affichage de la **liste des tags** avec compteur d’occurrence.
- **Filtrage avancé** pour afficher uniquement les fragments marqués comme favoris.

---

### 🏷️ Gestion des tags

- Ajout de tags via le formulaire (prise en charge des **tags multiples**).
- **Édition** et **suppression globale** des tags depuis la page "Tags".
- Tags interactifs pour un **filtrage rapide** des fragments associés.

---

### ⭐ Favoris

- Marquer ou dé-marquer un fragment comme **favori**.
- Affichage filtré pour visualiser uniquement les favoris.

---

### 🔄 Import / Export

- **Exporter** tous les fragments au format **JSON**.
- **Importer** un fichier JSON valide pour restaurer ou ajouter des fragments.
- Synchronisation automatique avec la base locale JSON (via Lowdb ou Node-json-db).

---

### 🌙 Mode sombre

- Bascule clair/sombre via un bouton dans le header.
- Thèmes adaptés à tous les éléments : listes, boutons, modales, fragments.
- **Coloration syntaxique dynamique** selon le thème choisi.

---

### 🧪 Tests unitaires

- Tests Jest pour les fonctions de gestion de tags :
  - `parseTags`
  - `filterFragmentsByTag`
- Lancement des tests avec :

```bash
npm test
📂 Démarrage rapide
bash
Copier
Modifier
# Installation des dépendances
npm install

# Lancement du projet en développement
npm run dev
