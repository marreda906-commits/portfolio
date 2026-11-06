# Mohamed Reda MARZOUQ — Portfolio

Portfolio professionnel en français, réalisé à partir du CV fourni : génie électromécanique, automatisation, vision industrielle, systèmes embarqués, simulation et maintenance.

## Ce qui est livré

- Accueil avec identité, portrait optimisé fourni et présentation polyvalente.
- Huit fiches : le PFA YAZAKI et les sept projets techniques du CV.
- Filtres par domaine, pages détaillées, expériences, formation et compétences.
- Thèmes sombre et clair, navigation mobile, liens de contact et téléchargement du CV.
- Galeries agrandissables, 22 médias WebP et portfolio éditorial A4 de 13 pages distinct du CV.
- Export statique pour GitHub Pages et workflow de publication automatique.
- Code original en Next.js 16 / React 19 / TypeScript ; organisation `frontend/src/config`, `src/data`, `src/components`, `src/app` et `public`.

Cette réalisation est indépendante. Le dépôt NBRS22/portfolio consulté affiche « All rights reserved » et demande une autorisation avant réutilisation. Son code, ses photos et ses contenus personnels ne sont pas redistribués ici. Voir [l’analyse et la correspondance des fichiers](docs/ANALYSE-ET-ADAPTATION.md).

## Voir le site sur votre ordinateur

Installez Node.js 22 LTS ou une version ultérieure compatible. Ouvrez PowerShell dans le dossier `portfolio-reda`, puis :

```powershell
cd frontend
npm.cmd ci
npm.cmd run dev
```

Ouvrez l’adresse affichée, généralement `http://localhost:3000`.

Pour vérifier la version à publier :

```powershell
$env:NEXT_PUBLIC_BASE_PATH='/portfolio'
$env:NEXT_PUBLIC_SITE_URL='https://marreda906-commits.github.io/portfolio'
npm.cmd run build
npm.cmd run preview
```

Ouvrez `http://localhost:4173/portfolio/`. Arrêtez le serveur avec Ctrl+C. Le dossier `out` contient la version statique produite. N’utilisez pas `next start` pour cet export. Ne double-cliquez pas sur les fichiers HTML : utilisez le serveur d’aperçu pour charger correctement les pages et ressources.

L’archive livrée inclut déjà `frontend/out`. Pour la consulter immédiatement, sans installer les dépendances, ouvrez PowerShell dans `frontend` et exécutez `$env:NEXT_PUBLIC_BASE_PATH='/portfolio'` puis `node scripts/preview.mjs` (Node.js doit être installé). Pour toute modification du contenu, reconstruisez ensuite le site avec les commandes ci-dessus.

## Publier gratuitement sur GitHub Pages

Le dépôt existe déjà : https://github.com/marreda906-commits/portfolio. La mise à jour se publie depuis le dossier original `portfolio-reda` (qui possède son historique Git) :

```powershell
Set-Location 'C:\Users\krmhh\Documents\ChatGPT\Reda ccv\portfolio-reda'
git status
git add README.md docs scripts frontend/src frontend/public
git commit -m "Intégration des images et portfolio PDF V2"
git push origin main
```

Si cette version a déjà été publiée, ces commandes ne sont pas nécessaires. Les modifications suivantes utilisent la même procédure avec un nouveau message de commit. L’archive ZIP ne contient pas le dossier `.git` : pour travailler depuis une autre machine, clonez le dépôt puis copiez les fichiers modifiés dans ce clone.

Dans **Settings → Pages**, la source doit être **GitHub Actions**. Le workflow `Deploy portfolio to GitHub Pages` se déclenche au push sur `main` ; il peut aussi être relancé dans l’onglet **Actions**. Attendez les étapes `build` et `deploy` vertes.

Adresse du site : https://marreda906-commits.github.io/portfolio/

Le workflow lit automatiquement le chemin du dépôt depuis `configure-pages`. Les images, le PDF, les liens de projets et les fichiers JavaScript fonctionnent ainsi sous `/portfolio/`, sans modifier les composants. Un dépôt `VOTRE_COMPTE.github.io` fonctionne aussi, à la racine du domaine. Pour un domaine personnalisé, configurez-le dans Pages puis relancez le workflow ; l’achat d’un domaine n’est pas nécessaire.

Chaque nouveau `git push` vers `main` reconstruit et publie la version modifiée. GitHub Pages est gratuit pour les dépôts publics avec GitHub Free. Aucune clé API et aucun service payant ne sont requis par ce portfolio.

Sources : [documentation GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages), [export statique Next.js](https://nextjs.org/docs/app/guides/static-exports).

### Si quelque chose ne s’affiche pas

| Symptôme | À vérifier |
|---|---|
| Première publication en échec | Source Pages = GitHub Actions, puis relancer le workflow. |
| Pages inaccessible | Dépôt public, workflow terminé, adresse exacte donnée par GitHub. |
| Images ou styles absents | Ne pas publier un `out` construit pour la racine sous un sous-dossier ; le workflow fourni calcule le bon chemin. |
| Page projet introuvable après actualisation | Conserver `trailingSlash: true` et les pages générées dans `out/projects/<slug>/index.html`. |
| Changement absent | Vérifier le dernier commit dans Actions et actualiser le navigateur. |
| Copie d’e-mail indisponible | Utiliser le lien e-mail ou sélectionner l’adresse ; l’envoi passe par votre application de messagerie. |

## Modifier le contenu

| Besoin | Fichier |
|---|---|
| Identité, e-mail, téléphone, LinkedIn, lien GitHub | `frontend/src/config/site.ts` |
| Présentation et langues | `frontend/src/data/about.ts` |
| Projets, descriptions, technologies, dates et périmètres | `frontend/src/data/projects.ts` |
| Expériences | `frontend/src/data/experience.ts` |
| Formation | `frontend/src/data/education.ts` |
| Compétences | `frontend/src/data/skills.ts` |
| Couleurs et adaptation mobile | `frontend/src/app/globals.css` |
| Portrait et PDF | `frontend/public/home/` |
| Publication GitHub Pages | `.github/workflows/pages.yml` |

### Ajouter un projet

Ajoutez une entrée dans le tableau `projects` en reprenant la structure d’une fiche existante. Le `slug` doit être unique et sans espaces, par exemple `nouveau-projet`. La page et le filtre sont générés automatiquement lors du prochain build. Respectez les catégories existantes ou mettez aussi à jour le type `Project` et les filtres dans `components/projects.tsx`.

### Ajouter vos vraies captures

Les dessins affichés sont des schémas illustratifs originaux, signalés comme tels. Ce ne sont pas des images de vos réalisations. Placez vos captures dans `frontend/public/projects/`, puis remplacez l’illustration correspondante dans les composants en utilisant `assetPath("/projects/nom-du-fichier.jpg")` pour conserver la compatibilité Pages. Ajoutez un texte alternatif décrivant réellement l’image.

## Points à compléter avec vos documents

1. **GitHub** : ajoutez votre URL réelle dans `siteConfig.github`. Le lien est masqué tant que la valeur est vide.
2. **CV polyvalent** : le PDF téléchargeable est le CV fourni, inchangé, dont le profil vise un PFE 2027. La présentation du site est plus générale. Remplacez ultérieurement le PDF par votre CV général en conservant le nom du fichier.
3. **Preuves de projets** : captures de l’IHM, CAO, schémas électriques, rapports et démonstrations peuvent enrichir les fiches. Aucun lien de rapport ou de dépôt n’a été inventé.
4. **Statuts** : vérifiez la date d’achèvement du suivi énergétique avant de retirer « En cours ». Le cycle ingénieur 2024–2027 est présenté comme un diplôme préparé.
5. **Données publiques** : le site et le PDF affichent les coordonnées figurant sur votre CV. Si vous préférez masquer le téléphone, retirez-le aussi du PDF avant publication.

## Vérification

```powershell
cd frontend
npm.cmd run typecheck
npm.cmd run build
```

Le dossier `docs` contient l’analyse, la traçabilité du contenu et le compte rendu des vérifications effectuées. Le site n’a pas été publié sur votre compte GitHub dans cette livraison.

## Livraison V2

Voir [les changements et la régénération du PDF](docs/CHANGEMENTS-V2.md), [la correspondance des 22 médias](docs/ASSET-MAP.md), [le système visuel](docs/DESIGN-SYSTEM.md) et [les vérifications V2](docs/VERIFICATIONS-V2.md). Les documents de vérification antérieurs décrivent la première version.
