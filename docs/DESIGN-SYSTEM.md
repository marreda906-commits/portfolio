# Identité visuelle V2

Le socle existant est conservé : fond sombre, accents turquoise, typographie locale, grandes compositions éditoriales. Les variables de couleur et les adaptations claires sont dans `frontend/src/app/globals.css`.

- Cartes : images contenues intégralement dans leur cadre, texte et technologies en dessous. Une carte YAZAKI mise en avant ; grille fluide sur mobile.
- Études de cas : couverture, statut, contexte, contributions, méthode, résultats, galerie et navigation entre projets.
- Médias : `object-fit: contain` pour préserver les informations techniques, dimensions explicites, chargement différé des médias secondaires. Portrait traité séparément.
- Agrandissement : dialogue natif accessible, légende lisible, fermeture au clavier, boutons précédent/suivant, lien pleine résolution.
- Mouvement : déplacements et zooms très modérés au survol ; suppression avec `prefers-reduced-motion`.
- PDF : A4 portrait, fond blanc, titres anthracite, repères turquoise, corps de texte 10 points, pagination et liens. Conçu pour la lecture et l’impression.
