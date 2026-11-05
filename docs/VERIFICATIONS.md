# Vérifications de la livraison

Contrôles effectués le 5 novembre 2026 sur la version livrée.

## Compilation et liens

- Installation des dépendances terminée ; fichier `package-lock.json` inclus pour `npm ci`.
- Compilation de production Next.js réussie, avec contrôle TypeScript.
- Accueil et huit fiches projets prégénérés, avec page d’erreur 404.
- Export testé à la racine et sous `/portfolio/`.
- Pour chacun des deux exports : 12 fichiers HTML parcourus, 24 URL locales distinctes vérifiées en HTTP et 105 références d’ancres vérifiées. Aucune ressource ni ancre manquante.
- Le comptage de fichiers HTML inclut les sorties techniques / d’erreur de Next.js ; il ne correspond pas au nombre de projets.
- Image et liens internes correctement préfixés sous `/portfolio/` ; ouverture et actualisation d’une fiche testées dans le navigateur.
- Le PDF de téléchargement est identique au CV fourni (empreintes SHA-256 identiques).
- Recherche dans les sources et ressources publiques : aucune ancienne identité, coordonnée de référence ou URL de compte fictive.

## Affichage et interactions

- Accueil observé à 1280 px ; image chargée et aucun débordement horizontal détecté.
- Formats mobiles de 390 px et 320 px observés ; aucun débordement horizontal détecté.
- Format tablette de 768 px observé ; aucun débordement horizontal détecté.
- Menu mobile : ouverture, sélection d’une section et fermeture automatique vérifiés.
- Filtres : Tous = 8, Vision & embarqué = 2, Énergie & commande = 3, Mécanique & simulation = 3.
- Bascule entre thèmes clair et sombre vérifiée.
- Copie de l’adresse e-mail : message de réussite observé.
- Fiche YAZAKI ouverte et actualisée sur mobile ; contenu lisible, pas de débordement horizontal.
- Aucune erreur JavaScript renvoyée par le contrôle de console effectué sur la fiche YAZAKI.
- Liens e-mail, téléphone et LinkedIn conformes aux données du CV. Aucun message n’a été envoyé.

## Limites et état de publication

- Les résultats numériques des projets, rapports et photos techniques n’étaient pas fournis. Les visuels des fiches sont des schémas illustratifs, explicitement signalés.
- Le texte du site est polyvalent ; le PDF téléchargé reste le CV original ciblant un PFE 2027.
- Le code est livré localement avec un workflow GitHub Pages. Aucune publication sur un compte GitHub n’a été effectuée et aucune URL publique personnelle n’est revendiquée.
- Le workflow a été relu, mais son exécution dans le compte GitHub du propriétaire reste à faire.
- Un rebuild intermédiaire a rencontré un accès refusé au cache Windows. Une compilation suivante, puis la compilation finale, ont réussi. Aucun code source n’a été supprimé.
- Les serveurs de vérification temporaires sont arrêtés à la fin de la tâche. La commande d’aperçu du README permet de relancer le site.
