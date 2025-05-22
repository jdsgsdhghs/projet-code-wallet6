Présentation
Code Wallet est une application desktop développée avec Electron, React, et Vite, conçue pour aider les développeurs à stocker, organiser et retrouver facilement leurs fragments de code favoris.

Fonctionnalités
Gestion des fragments
Ajouter un fragment avec un titre, un code source, et des tags personnalisés.
Modifier un fragment existant.
Supprimer un fragment.
Visualiser le fragment dans une modale avec coloration syntaxique (Prism.js).
Recherche et filtrage
Recherche instantanée par titre, contenu du code, ou tags.
Filtrage par tags cliquables dans la liste et dans la modale.
Affichage de la liste des tags avec compteur du nombre de fragments associés.
Filtrage avancé pour afficher uniquement les fragments favoris.
Gestion des tags
Ajout de tags en saisissant dans le formulaire (avec gestion de tags multiples).
Edition et suppression globale des tags depuis la page Tags.
Les tags sont interactifs et permettent de filtrer les fragments correspondants.
Favoris
Marquer/démarquer un fragment comme favori.
Filtrer pour afficher uniquement les favoris.
Import / Export
Exporter l’ensemble des fragments dans un fichier JSON.
Importer un fichier JSON valide pour restaurer ou ajouter des fragments.
Synchronisation automatique des données importées dans la base locale JSON.
Dark Mode
Basculement clair/sombre via un bouton dans le header.
Styles adaptés pour toutes les pages, boutons, modales et fragments.
Coloration syntaxique adaptée en dark mode.
Tests unitaires
Couverture des fonctions de gestion des tags (parseTags, filterFragmentsByTag) avec Jest.
Test facile à lancer avec npm test.
