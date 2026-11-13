# Rapport de validation — corrections finales V2.2

Date de validation : 13 novembre 2026

## Modifications livrées

- Nouvelle couverture ENSAM : photographie fournie avec Mohamed Reda, la maquette 3D ENSAM Meknès et l’interface d’observatoire.
- Nouvelle couverture LafargeHolcim : photographie fournie devant le four industriel.
- Conservation du dashboard énergétique dans la galerie ENSAM.
- Conservation des photographies industrielles, de l’AMDEC, du Pareto et de la fiche de maintenance dans la galerie LafargeHolcim.
- Nouvel ordre professionnel des neuf projets, appliqué à l’accueil, aux filtres, à la navigation entre projets et au portfolio PDF.
- Titres et résumés des cartes clarifiés sans ajout de résultats ni de performances.
- PDF haute qualité et PDF léger régénérés avec les nouvelles couvertures et le nouvel ordre.

## Ordre validé

1. YAZAKI — Contrôle qualité automatisé par vision industrielle
2. ENSAM Meknès — Supervision énergétique & jumeau numérique
3. LafargeHolcim — Maintenance préventive & fiabilité industrielle
4. Banc d’essai — Moteur asynchrone & charge variable
5. Batterie de véhicule électrique — Modélisation multiphysique ANSYS
6. Axe CNC — Conception électrique & commande
7. Robot d’inspection ferroviaire TGV
8. Suivi intelligent de voie — OpenCV & système embarqué
9. Élévateur à godets — Dimensionnement mécanique

## Authenticité des images

- Les deux originaux ont été conservés séparément.
- Les fichiers WebP sont des conversions haute qualité sans retouche générative.
- Aucun visage, équipement, écran, texte technique ou valeur affichée n’a été modifié.
- Le site utilise `object-fit: contain` pour éviter toute découpe des personnes, des écrans et du four.
- La mention « Campus Jorf Lasfar » visible sur l’écran droit de la photo ENSAM est conservée et explicitée dans la légende. Les valeurs affichées sont signalées comme illustratives.

## Contrôles effectués

| Contrôle | Résultat |
|---|---|
| TypeScript | Réussi |
| Compilation Next.js statique | Réussie, 12 routes générées |
| Export GitHub Pages sous `/portfolio/` | Réussi |
| Ordre des neuf projets | Conforme |
| Ordre dans les quatre filtres | Conforme |
| Couverture ENSAM ordinateur et mobile | Entière, visage et deux écrans visibles |
| Couverture Lafarge ordinateur et mobile | Entière, personne et four visibles |
| Galerie ENSAM | Dashboard et illustration existante conservés |
| Galerie LafargeHolcim | Cinq visuels existants conservés après la couverture |
| Vidéo suivi de voie | 18,8 s, lecture réussie, aucune erreur média |
| Débordement horizontal mobile 390 × 844 | Aucun |
| Console du navigateur | Aucune erreur ni alerte |
| PDF haute qualité | 14 pages A4 rendues et inspectées |
| PDF léger | 14 pages A4 rendues et inspectées |
