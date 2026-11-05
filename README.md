# Mohamed Reda MARZOUQ — Portfolio

Portfolio professionnel en français, réalisé à partir du CV fourni : génie électromécanique, automatisation, vision industrielle, systèmes embarqués, simulation et maintenance.

## Ce qui est livré

- Accueil avec identité, portrait extrait du CV et présentation polyvalente.
- Huit fiches : le PFA YAZAKI et les sept projets techniques du CV.
- Filtres par domaine, pages détaillées, expériences, formation et compétences.
- Thèmes sombre et clair, navigation mobile, liens de contact et téléchargement du CV.
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
npm.cmd run build
npm.cmd run preview
```

Ouvrez `http://localhost:4173`. Arrêtez le serveur avec Ctrl+C. Le dossier `out` contient la version statique produite. N’utilisez pas `next start` pour cet export. Ne double-cliquez pas sur les fichiers HTML : utilisez le serveur d’aperçu pour charger correctement les pages et ressources.

L’archive livrée inclut déjà `frontend/out`. Pour la consulter immédiatement, sans installer les dépendances, ouvrez PowerShell dans `frontend` et exécutez `node scripts/preview.mjs` (Node.js doit être installé). Pour toute modification du contenu, reconstruisez ensuite le site avec les commandes ci-dessus.

## Publier gratuitement sur GitHub Pages

Le nom de compte GitHub de Mohamed Reda n’étant pas fourni, les exemples utilisent `VOTRE_COMPTE`. Remplacez-le uniquement par votre identifiant réel.

1. Sur GitHub, créez un dépôt **public** nommé `portfolio`. Choisissez un dépôt vide, sans README ajouté par GitHub.
2. Ouvrez PowerShell dans **le dossier `portfolio-reda`**, qui contient `frontend`, `docs` et `.github`. Exécutez :

   ```powershell
   git init
   git add .
   git commit -m "Création du portfolio de Mohamed Reda Marzouq"
   git branch -M main
   git remote add origin https://github.com/VOTRE_COMPTE/portfolio.git
   git push -u origin main
   ```

   Git peut vous demander de vous connecter à votre compte. Utilisez votre connexion GitHub habituelle ; ne placez aucun mot de passe dans les fichiers du projet. Si Git demande votre identité pour le commit, renseignez votre propre nom et votre adresse GitHub.

3. Dans le dépôt, allez à **Settings → Pages → Build and deployment → Source → GitHub Actions**.
4. Ouvrez **Actions → Deploy portfolio to GitHub Pages → Run workflow**, choisissez `main`, puis lancez. Si le premier lancement avait échoué avant l’activation de Pages, relancez-le maintenant.
5. Attendez que les étapes `build` et `deploy` soient vertes. GitHub indique l’adresse dans **Settings → Pages** et dans le résultat du déploiement.
6. Pour un dépôt nommé `portfolio`, l’adresse attendue est `https://VOTRE_COMPTE.github.io/portfolio/`.

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
