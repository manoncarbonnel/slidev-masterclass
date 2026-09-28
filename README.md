# Masterclass Slidev · yeeso

Une masterclass de l'association **yeeso** pour apprendre à créer ses présentations en Markdown avec [Slidev](https://sli.dev), réalisée avec le thème [slidev-theme-yeeso](https://github.com/Yeeso-fr/slidev-theme-yeeso).

**Voir la présentation en ligne : [manoncarbonnel.github.io/slidev-masterclass](https://manoncarbonnel.github.io/slidev-masterclass/)**

## Au programme

1. **Découvrir** : l'outil, son créateur, ses fonctionnalités
2. **Écrire** : syntaxe, frontmatter, notes, layouts, thèmes, composants
3. **Naviguer** : chaque bouton de la barre d'outils
4. **Coder** : Shiki, TwoSlash, Magic Move, Monaco, exécution de code
5. **Animer** : `v-click`, Rough Notation, `v-motion`, transitions
6. **Partager** : export PDF et mise en ligne

## Lancer en local

Prérequis : Node.js 20 ou plus.

- `npm install`
- `npm run dev`, puis ouvrir <http://localhost:3030>
- `npm run export` pour générer le PDF (utilise `playwright-chromium`)

Le contenu est dans [slides.md](./slides.md). Les images vont dans `public/` et s'appellent avec un chemin qui commence par `/`.

## Déploiement

Le workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) publie la présentation sur GitHub Pages à chaque push sur `main` (lancement manuel possible depuis l'onglet Actions).

## Licence

Slides conçues par Manon Carbonnel pour l'association **yeeso**, sous licence [PolyForm Noncommercial 1.0.0](https://polyformproject.org/licenses/noncommercial/1.0.0), avec une permission complémentaire pour les usages par ou pour yeeso. Le thème, la charte graphique, la photo de l'autrice et les fichiers repris du modèle Slidev (MIT) restent soumis à leurs propres droits : voir [LICENSE](LICENSE).
