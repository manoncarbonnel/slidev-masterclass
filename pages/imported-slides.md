# Découper en plusieurs fichiers

Une présentation longue peut être répartie dans plusieurs fichiers, avec `src` :

#### `slides.md`

```md
---
src: ./pages/sous-partie.md
---
```

#### `pages/sous-partie.md`

```md
# Une slide venue d'un autre fichier
```

Cette slide vient elle-même de `pages/imported-slides.md` !

<!--
Pratique pour travailler à plusieurs : chacun·e écrit sa partie dans son fichier.
-->
