# Rapport de validation — refonte V2.1

> Document historique. La livraison courante est décrite dans `RAPPORT-VALIDATION-V2.2.md`.

Date de validation : 12 novembre 2026
Branche de travail : `refonte-v2-lafarge-ensam-video`

## Livrables

- Site Next.js statique compatible avec le préfixe GitHub Pages `/portfolio/`.
- Neuf études de cas, dont la maintenance préventive LafargeHolcim.
- Galerie Lafarge : AMDEC, Pareto, fiche d’aide à la maintenance et photos de terrain.
- Projet de supervision énergétique ENSAM Meknès renforcé, avec valeurs de maquette clairement signalées comme illustratives.
- Démonstration vidéo réelle du suivi intelligent de voie, avec affiche WebP et lecteur HTML5.
- `Portfolio_Mohamed_Reda_MARZOUQ_V2.pdf` : 14 pages A4, haute qualité.
- `Portfolio_Mohamed_Reda_MARZOUQ_V2_Legere.pdf` : 14 pages A4, version allégée.

## Authenticité et traçabilité

- Aucun résultat chiffré, gain de performance ou niveau de maturité non documenté n’a été inventé.
- Les illustrations dont la provenance reste incertaine sont signalées comme telles.
- Les captures techniques conservent leurs proportions et leur contenu d’origine.
- Le montage « Jumeau numérique du campus ENSAM » a été écarté car il affichait « Campus Jorf Lasfar » et risquait de créer une confusion avec ENSAM Meknès.
- La vidéo a uniquement été raccourcie de 0,7 seconde au début, lorsque la vue était obstruée ; son contenu technique n’a pas été modifié.

## Contrôles réalisés

| Contrôle | Résultat |
|---|---|
| Vérification TypeScript | Réussie |
| Export Next.js statique sous `/portfolio/` | Réussi |
| Nombre de projets sur l’accueil | 9 |
| Filtre « Maintenance & fiabilité » | 1 projet attendu, réussi |
| Pages détaillées des neuf projets | Générées |
| Page ENSAM : absence de « Jorf Lasfar » | Confirmée |
| Valeurs du tableau de bord ENSAM signalées comme illustratives | Confirmé |
| Galerie Lafarge et agrandissement | Réussis |
| Vidéo suivi de voie | 18,8 s, H.264/AAC, lecture réussie, aucune erreur média |
| Thèmes sombre et clair | Réussis |
| Affichage mobile 390 × 844 | Aucun débordement horizontal |
| Affichage tablette 820 × 1180 | Aucun débordement horizontal |
| Console du navigateur | Aucune erreur ni alerte pendant les contrôles |
| PDF haute qualité | 14 pages rendues et inspectées |
| PDF léger | 14 pages, structure et texte validés |

## Palette V2.1

- Fond sombre : `#101a21`
- Panneaux : `#172832` et `#1d303b`
- Texte principal : `#e9f0ec`
- Accent turquoise désaturé : `#83b7a7`
- Accent chaud : `#d5ad80`

## Limites documentées

- Les valeurs visibles dans la maquette de supervision énergétique sont illustratives et ne constituent pas des mesures validées du campus.
- La démonstration vidéo prouve l’existence d’un essai en laboratoire, mais aucune métrique de précision ou de performance n’est revendiquée.
- Les images du robot ferroviaire dont la provenance n’est pas confirmée restent identifiées comme illustrations et non comme preuves de fabrication.
