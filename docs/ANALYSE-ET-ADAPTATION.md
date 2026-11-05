# Analyse et choix de personnalisation

Analyse effectuée le 5 novembre 2026 à partir du dépôt public, de la démo et du CV joint à la conversation d’origine.

## Dépôt NBRS22/portfolio

Référence : https://github.com/NBRS22/portfolio

Le dépôt présente le portfolio de Nour El Bachari. Il sépare un frontend Next.js 16 / React 19 / TypeScript et un backend Python/Pipecat pour une démonstration vocale. Le README prévoit Vercel pour le frontend et Cloud Run pour le backend. Le contenu est déjà séparé dans `src/config/site.ts` et `src/data/`, avec des composants de sections et des pages `projects/[slug]`.

Points réutilisables comme conventions d’organisation : séparation contenu / présentation, composants React, alias `@/`, TypeScript, pages par projet et ressources dans `public`. Le nouveau projet conserve ces conventions, sans recopier les composants ou les données du dépôt.

Le fichier `next.config.ts` consulté active notamment `cacheComponents`, `partialPrefetching`, un traitement Tailwind/Turbopack et des en-têtes HTTP. Il ne configure pas d’export statique. Le frontend possède aussi une image Open Graph générée. Ces éléments nécessitent une revue lors d’une conversion vers Pages : il ne suffit pas de pousser les fichiers du dépôt pour le publier correctement.

**Condition de réutilisation constatée :** le README indique « © Nour El Bachari. All rights reserved. The code is public for reading; please ask before reusing it. » Le caractère public du dépôt n’est donc pas une autorisation de reprise annoncée par son auteur. La livraison utilise du code écrit pour ce projet, sans ses photographies, son CV, ses projets, son identité ou sa démonstration vocale.

## Portfolio d’Amine Rhilan

Référence : https://aminerhilan.github.io/portfolio-amine-rhilan/

La démo a été inspectée dans le navigateur et son HTML consulté. Elle utilise une palette sombre et turquoise, un grand nom accompagné d’un portrait, une navigation numérotée, des filtres de projets, des détails extensibles, un parcours chronologique, des compétences regroupées et un contact direct. La version observée est un document HTML statique et possède un thème clair.

La nouvelle direction conserve ces principes généraux : hiérarchie lisible, style technique, priorité aux projets, informations de contact accessibles. Elle adopte une composition originale, des pages de projet séparées, un menu mobile et des schémas vectoriels. Aucun projet, titre honorifique, photographie ou niveau linguistique d’Amine n’est attribué à Mohamed Reda.

## Positionnement retenu

**Élève ingénieur en génie électromécanique — ENSAM Meknès.**

Ce titre couvre les éléments documentés sans limiter le portfolio à une offre. L’option Commande et Maintenance Industrielles reste visible. La promesse éditoriale « De la mécanique au numérique » relie les projets électriques, mécaniques et numériques. Le site ne présente pas Mohamed Reda comme déjà diplômé ou expert certifié.

Le PFA YAZAKI est mis en avant pour montrer une chaîne technique complète : vision, traitement, métrologie, interface et intégration simulée. Les autres réalisations sont classées en trois domaines sans établir de classement de maîtrise.

## Traçabilité du contenu

Source personnelle unique : `MARZOUQ_MOHAMED_REDA_CV (29)(1).pdf`, une page, fourni par l’utilisateur. Le PDF téléchargeable est une copie byte pour byte de cette source. Le portrait provient de l’image intégrée au PDF.

| Élément publié | Source dans le CV | Traitement |
|---|---|---|
| Nom, ville, e-mail, téléphone, LinkedIn | En-tête | Reprise ; URL LinkedIn vérifiée dans l’annotation PDF. |
| Présentation polyvalente | Formation, expériences et projets | Synthèse éditoriale ; le paragraphe ciblant l’offre n’est pas recopié. |
| YAZAKI, 2026 | Expériences professionnelles | Fiche d’expérience et étude de cas ; simulation Siemens explicitement conservée. |
| LafargeHolcim, juillet–août 2025 | Expériences professionnelles | AMDEC, Pareto, MTBF et stratégie préventive ; aucun gain chiffré ajouté. |
| Suivi énergétique | Projets techniques | Statut « En cours » conservé. |
| Banc moteur | Projets techniques | Mise en service et essais à vide / en charge ; pas de mesures inventées. |
| Batterie VE | Projets techniques | Simulation thermique et mécanique ; pas de températures ni de résultats inventés. |
| Axe CNC | Projets techniques | Dimensionnement et schémas ; pas de réalisation physique affirmée. |
| Suivi de voie | Projets techniques | Traitement vidéo et logique de correction ; pas d’essais routiers ajoutés. |
| Robot TGV — SIANA | Projets techniques | Modélisation, assemblage, motoréducteurs et cinématique ; SIANA n’est pas ajouté aux employeurs. |
| Élévateur à godets | Projets techniques | Calculs et dimensionnement mécanique. |
| Formation 2024–2027 | Formation | Diplôme préparé, pas diplôme déjà obtenu. |
| Compétences | Compétences techniques | Regroupement en huit familles, sans pourcentages de maîtrise. |
| Langues | Langues | Arabe natif, français B2, anglais B2. |

Éléments volontairement absents faute de source : compte GitHub personnel, prix, responsabilités associatives, témoignages, disponibilité précise, chiffres de performance, rapports, liens vers les codes des projets et photos techniques.

## Adapter le dépôt initial après accord de son auteur

Le dossier livré n’est pas un patch à appliquer aveuglément au dépôt initial. Ses types de projets sont simplifiés et les interfaces ne sont pas interchangeables. Pour une adaptation autorisée du dépôt :

1. Conserver son historique Git et lire son `frontend/AGENTS.md` ainsi que les guides Next.js installés.
2. Reporter l’identité et les coordonnées depuis le nouveau `src/config/site.ts`, en respectant les champs attendus par ses composants.
3. Reporter les contenus de `src/data/about.ts`, `experience.ts`, `education.ts`, `skills.ts` et `projects.ts` dans ses propres types ; supprimer les anciennes entrées.
4. Remplacer le CV, les portraits, les métadonnées, l’image de partage et toutes les références à l’identité d’origine. Vérifier également les textes alternatifs, le pied de page et les liens sociaux.
5. Retirer la démonstration vocale de la navigation et du rendu. Ne pas laisser un bouton de démo vers un service absent. GitHub Pages n’exécute pas le backend Python ; l’héberger séparément impliquerait un autre périmètre.
6. Configurer `output: "export"`, `trailingSlash: true`, un `basePath` de construction et des images sans optimisation serveur. Retirer les options de rendu serveur incompatibles avec l’export, dont les en-têtes personnalisés qui ne sont pas servis par Pages.
7. Générer les huit slugs avec `generateStaticParams`. Vérifier le traitement des métadonnées et de toute route dynamique ou image Open Graph générée.
8. Préfixer les ressources de `public` avec le chemin du dépôt ; laisser `next/link` gérer automatiquement les liens internes.
9. Ajouter le workflow Pages fourni à la racine et tester un build sous `/portfolio`, les actualisations sur chaque page projet et le téléchargement du CV.

## Choix techniques de la réalisation indépendante

- Next.js 16.4.3, React 19.3.0 et TypeScript ; versions de Next et React alignées sur le manifeste consulté.
- CSS simple pour cette réalisation originale. Tailwind, Motion, shadcn, Vercel Analytics et Pipecat ne sont pas nécessaires à ses fonctions.
- Aucun backend, formulaire factice, clé API ou dépendance à un service externe en fonctionnement.
- Polices système, images locales, schémas SVG originaux, liens `mailto:` et `tel:`.
- Préférence de thème stockée localement ; échec du presse-papiers géré avec un message lisible.
- Publication de `frontend/out`, avec huit pages de projets prégénérées.

Documentation de référence :

- https://nextjs.org/docs/app/guides/static-exports
- https://nextjs.org/docs/app/api-reference/config/next-config-js/basePath
- https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages
