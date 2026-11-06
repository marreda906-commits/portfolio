# Livraison V2 — 6 novembre 2026

- Les 22 WebP du lot optimisé sont intégrés sans nouvelle retouche : portrait, 17 visuels de projets et quatre photographies LafargeHolcim. Les originaux restent dans les dossiers de référence.
- Les huit projets et leurs adresses sont conservés. Les cartes utilisent leurs véritables médias disponibles. Les pages détaillent contexte, objectif, contributions, méthode, résultats disponibles et périmètre.
- Images proportionnelles, légendes, agrandissement au clic, navigation dans les galeries, fermeture avec Échap et retour du focus au bouton d’origine.
- Provenance incertaine explicitement signalée pour le campus ENSAM, le visuel produit du robot de suivi de voie et le robot ferroviaire. Aucun de ces visuels ne prouve une fabrication ou une performance.
- Accueil clarifié, liens GitHub renseignés, cartes plus visuelles, animations discrètes désactivées selon la préférence de réduction des mouvements. Navigation, filtres, copie de l’e-mail, thèmes et CV conservés.
- Portfolio A4 de 13 pages : couverture, introduction/sommaire, huit projets illustrés, compétences, expériences, formation et coordonnées. Téléchargement séparé du CV.

## Fidélité aux sources

Les contributions reprennent les données déjà présentes dans le portfolio issu du CV. Aucun taux de réussite, gain énergétique ou résultat expérimental chiffré n’a été ajouté. Les simulations et études de conception sont distinguées des essais physiques. Les limites des captures fournies sont mentionnées dans les légendes ou les résultats.

## Régénérer le PDF

Depuis la racine du projet, après installation des dépendances du site :

```powershell
node scripts/export_pdf_data.cjs
python -m pip install reportlab Pillow
python scripts/generate_portfolio.py
```

Le script utilise les polices Segoe UI de Windows. Il cherche par défaut les PNG haute résolution dans `../output/images-optimisees`, avec leur manifeste. Autre emplacement : `--assets "C:\chemin\images-optimisees"`. Sans ce dossier, les WebP inclus dans le projet permettent de régénérer le document. Les coordonnées et éléments éditoriaux fixes se modifient dans le script. Après modification, contrôler le PDF et reconstruire le site pour actualiser sa copie dans `frontend/out`.

Le PDF livré utilise les PNG disponibles, avec réduction proportionnelle de résolution et compression JPEG des photographies. Le texte reste sélectionnable ; les liens sont actifs. Les petits textes des interfaces et les cotes des dessins restent limités par les sources : les galeries en ligne donnent accès aux médias en pleine résolution.
