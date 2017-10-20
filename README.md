# movie-finder

## Description
Simple exercice Angular2 permettant de se connecter à l'API de  https://www.themoviedb.org/ en récupérant des films, rechercher des films et voir la fiche d'un film. 

## Démonstration 
Une démo est mise en place sur mon serveur de test : https://www.dev.puji.fr/movie-finder  

## Development server
Lancer `npm start` pour démarrer le serveur de dev. Aller ensuite sur  `http://localhost:3000/`. L'application détectera automatiquement les changements de code source et se raffraichira.

## Build

Pour compiler l'application et la préparer pour une mise en ligne, lancer un terminal (ou console), aller dans le répertoire de base (ex : cd movie-finder) et lancer `ng build` pour compiler l'application. Le source compilé sera construit et disponible dans le répertoire  `dist/` directory. Utiliser `-prod` pour un environnement de production.

Attention, pour la mise en prod, après compilation dans le fichier dist/index.html, il faut adapter la balise <base href="/movie-finder/"> à l'environnement en ligne 
Ex : <base href="/movie-finder/"> si le site se trouve par ex : www.abc.xyz/movie-finder/ ou <base href="/"> si le contenu de l'appli doit se trouver à la racine du serveur


