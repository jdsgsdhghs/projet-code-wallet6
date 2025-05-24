💼 Présentation

Code Wallet est une application desktop moderne développée avec Electron, React et Vite, conçue pour aider les développeurs à stocker, organiser et retrouver rapidement leurs fragments de code favoris. Simple, rapide et élégante, elle centralise tous vos snippets dans une interface efficace et personnalisable.

✨ Fonctionnalités
🧩 Gestion des fragments
Ajouter un fragment avec :

Un titre

Un code source

Des tags personnalisés

Modifier ou supprimer un fragment existant.

Affichage des fragments dans une modale avec coloration syntaxique (Prism.js).

🔍 Recherche & filtrage
Recherche instantanée sur le titre, le contenu du code ou les tags.

Filtrage par tags cliquables dans la liste et dans les modales.

Affichage de la liste des tags avec un compteur indiquant le nombre de fragments associés.

Filtrage avancé pour afficher uniquement les fragments marqués comme favoris.

🏷️ Gestion des tags
Ajout de tags via le formulaire, avec prise en charge de tags multiples.

Édition et suppression globale des tags depuis la page "Tags".

Les tags sont interactifs : un clic permet de filtrer instantanément les fragments associés.

⭐ Favoris
Marquer ou dé-marquer un fragment comme favori.

Affichage filtré pour ne voir que les fragments favoris.

🔄 Import / Export
Exporter l’ensemble des fragments dans un fichier JSON.

Importer un fichier JSON valide pour restaurer ou ajouter des fragments.

Les données importées sont synchronisées automatiquement avec la base locale (Lowdb ou Node-json-db).

🌙 Mode sombre
Bascule clair/sombre via un bouton dans le header.

Thème appliqué à toute l’interface : listes, boutons, modales, fragments.

Coloration syntaxique adaptée au thème en cours.

🧪 Tests unitaires
Tests Jest pour les fonctions critiques :

parseTags

filterFragmentsByTag



