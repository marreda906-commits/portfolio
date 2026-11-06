# Validation V2 — 6 novembre 2026

## Résultats

| Contrôle | Résultat |
|---|---|
| Compilation Next.js de production | Réussie, export statique des huit projets et de l’accueil |
| TypeScript `npm run typecheck` | Réussi |
| Chemin de publication | Build avec `NEXT_PUBLIC_BASE_PATH=/portfolio` et URL publique renseignée |
| Pages et ressources internes | 12 fichiers HTML, 47 URL locales et 105 ancres contrôlés : zéro erreur |
| Médias WebP | 22/22 fichiers comparés par SHA-256 aux sources optimisées : identiques |
| Liens du CV et du portfolio PDF | Fichiers distincts et disponibles dans l’export |
| Affichage ordinateur | Accueil contrôlé visuellement en thèmes sombre et clair |
| Affichage mobile | Accueil et fiche YAZAKI contrôlés à 390 × 844 ; huit fiches sans débordement horizontal |
| Galeries | Ouverture, image suivante, fermeture avec Échap testées sur YAZAKI ; légendes et lien pleine résolution présents |
| Navigation | Menu mobile et passage accueil/projet testés ; adresses des huit projets conservées |
| Filtres | Vision & embarqué : deux projets ; Tous : huit projets |
| Console navigateur | Aucune erreur ni alerte pendant le parcours des huit fiches |
| PDF | 13 pages A4 rendues en PNG et inspectées individuellement ; aucune coupure de texte ou superposition observée |
| Préservation | Originaux non écrasés ; sauvegarde de la version initiale hors du projet |

## Reproduire le contrôle local

Depuis `frontend`, avec les dépendances installées :

```powershell
$env:NEXT_PUBLIC_BASE_PATH='/portfolio'
$env:NEXT_PUBLIC_SITE_URL='https://marreda906-commits.github.io/portfolio'
npm.cmd run build
npm.cmd run typecheck
npm.cmd run preview
```

Dans un deuxième terminal, depuis la racine du projet :

```powershell
python scripts/verify_export.py frontend/out http://127.0.0.1:4173/portfolio/
```

## Limites connues et périmètre du contrôle

- Les médias 06, 13 et 16 sont signalés comme illustrations ou de provenance à confirmer. Ils ne servent pas de preuves de réalisation physique.
- Une seule image est disponible pour certains projets : elle constitue la couverture agrandissable. Aucune image supplémentaire n’a été inventée.
- Les très petites cotes du dessin photographié et les textes fins des interfaces nécessitent l’agrandissement en ligne ou les documents sources. Le PDF présente les projets, il ne remplace pas les dossiers de calcul.
- La capture Adeept était déjà tronquée en bas. Cette limite est conservée et indiquée.
- Contrôles effectués dans le navigateur intégré de bureau ; pas de test sur appareils iOS/Android physiques ni d’audit exhaustif d’accessibilité.
- Les destinations LinkedIn, e-mail et téléphone reprennent les coordonnées fournies. Aucun message n’a été envoyé et aucun appel n’a été passé.
- Le workflow GitHub effectue une installation propre avec `npm ci`. Les contrôles locaux utilisent les dépendances déjà installées du projet.

La publication et l’archive de livraison sont consignées séparément dans le rapport livré avec le ZIP. Ce fichier décrit les vérifications de la version source.
