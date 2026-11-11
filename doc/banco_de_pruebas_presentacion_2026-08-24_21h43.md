Versión 2026.09.19-18:15:47
# Le banc d'essai

**Un cadre à la taille du téléphone, sur le grand écran.**

*Salufolio — outil interne · août 2026*

---

## Pourquoi

Le Protocolo móvil est un carnet de soins qui vit sur un téléphone. Il est écrit,
lui, sur un grand écran — et entre les deux il y a un fossé : ce qui tient
confortablement sur vingt-sept pouces déborde sur six.

La façon ordinaire de vérifier consiste à téléverser l'application sur l'appareil,
la lancer, regarder, revenir, corriger, recommencer. Cinq minutes par aller-retour,
et un aller-retour toutes les trois modifications. Multiplié par une journée de
travail, le compte est vite fait : on finit par ne plus vérifier.

Le banc d'essai supprime le voyage. Il affiche l'application **dans un cadre aux
dimensions exactes du terminal visé**, à côté de l'éditeur, sur le même écran.
On modifie, on recharge, on voit. Trois secondes.

---

## Le principe, et pourquoi il n'est pas celui qu'on croit

Le réflexe naturel serait de rétrécir une fenêtre jusqu'à la largeur d'un
téléphone. **C'est précisément ce qu'il ne faut pas faire.**

Une page web adapte sa mise en page à la largeur qu'on lui déclare, par le jeu des
media queries. Une fenêtre étroite déclenche bien certaines d'entre elles, mais pas
toutes : la hauteur reste celle du bureau, le rapport est faux, les polices ne se
comportent pas pareil, et les barres du navigateur mobile n'existent pas. On obtient
une page de bureau écrasée — qui ressemble vaguement, et ment sur l'essentiel.

Le banc procède autrement :

> **Le cadre fait la taille exacte du terminal en pixels CSS.
> C'est l'image qu'on réduit ensuite.**

Un `transform: scale()` ramène le cadre à ce qui tient sur l'écran. L'application,
elle, continue de croire qu'elle occupe 360 × 800 pixels — ses media queries se
déclenchent comme sur l'appareil, ses débordements débordent au même endroit.

*Ce qu'on voit est petit. Ce que l'application croit est vrai.*

---

## Une précision qui n'est pas un détail

Les fabricants annoncent des résolutions matérielles. Un Xiaomi Redmi 14C affiche
720 × 1640 pixels. Mais sa densité est de 2, donc le navigateur travaille en
**360 × 820 pixels CSS** — et une fois retirées les barres du navigateur, il reste
environ 700 à 740 pixels de hauteur utile.

C'est cette largeur-là qu'il faut éprouver. Pas 720, pas 393 : **360**.

La confusion entre pixels matériels et pixels CSS est la première cause de
mauvaise surprise à la livraison. Le banc travaille exclusivement en pixels CSS, et
son aide le rappelle à chaque ajout de terminal.

---

## Mode d'emploi

### Ouvrir

Le banc est un fichier HTML autonome. Un double-clic suffit.

```
xdg-open ~/Salufolio/herramientas/banco.html
```

**Mettez-le en plein écran (F11).** C'est la hauteur disponible qui commande le
facteur de réduction : plus la fenêtre est haute, plus le cadre est lisible.

### Les trois colonnes

```
┌────────────┬──────────────┬─────────────────────────┐
│ TERMINAUX  │   CARNET     │        VITRINE          │
│            │              │                         │
│ 7 phones   │  saisie      │    ┌───────────┐        │
│ 3 tablettes│  ─────────   │    │           │        │
│ sur mesure │  note 3  ✎ ✕ │    │  l'appli  │        │
│            │  note 2  ✎ ✕ │    │           │        │
│ [Pivoter]  │  note 1  ✎ ✕ │    └───────────┘        │
│            │              │  360 × 800 px · vu 78 % │
└────────────┴──────────────┴─────────────────────────┘
```

### Charger l'application — deux portes

**Par adresse.** On saisit l'URL servie par le pont, par exemple
`http://192.168.10.200:7777/protocolo`. L'adresse est retenue d'une séance à
l'autre. C'est la porte normale : l'application dispose de ses vraies données, on
peut saisir, naviguer, éprouver un enchaînement complet.

**Par fichier.** Un sélecteur ouvre directement un `.html` du disque, sans rien
installer ni relancer de serveur.

> ⚠ **Réserve, écrite aussi à l'écran du banc :** un fichier ouvert ainsi tourne
> sous une origine `blob:` que le navigateur tient pour anonyme. **Le carnet n'y a
> aucune mémoire** — ni patients, ni données, rien ne s'enregistre. C'est parfait
> pour juger une mise en page, inutile pour saisir.

Une ligne sous les deux champs indique en permanence laquelle est active.

### Changer de terminal

On clique dans la liste de gauche. Le cadre se redimensionne, la légende sous le
cadre annonce la taille réelle et le facteur de réduction appliqué.

Le bouton **Pivoter** échange largeur et hauteur — le paysage révèle des défauts
que le portrait cache.

La case **sur mesure** accepte n'importe quel couple de dimensions.

---

## La liste des terminaux est un fichier, pas du code

`terminaux.js` vit à côté du banc. Il contient la liste, en JSON, avec des
explications en tête. Le banc ne fait que le charger.

```js
const TERMINAUX = {
  defaut: "redmi14c",
  telefonos: [
    /* Xiaomi Redmi 14C — 720×1640 matériels, densité 2 */
    { id: "redmi14c", nom: "Xiaomi Redmi 14C", w: 360, h: 820 },
    ...
  ]
};
```

**Pourquoi `.js` et non `.json` ?** Parce qu'une balise `<script>` se charge en
`file://`, alors qu'un `fetch` y est interdit. Le banc reste ouvrable d'un
double-clic, sans serveur.

Ajouter un terminal ne demande donc aucune modification du programme — une ligne
dans le fichier de données. Si le fichier manque ou comporte une faute, le banc se
rabat sur une liste de secours **et le dit à l'écran** plutôt que de faire semblant.

Un vérificateur accompagne le fichier :

```
./verificar_terminaux.sh
```

Il tolère les commentaires `/* */` à l'intérieur des accolades — ils ne gênent pas
le chargement, et il serait absurde d'interdire d'annoter ses propres données.

---

## Le carnet

*À côté d'un banc d'essai, il y a toujours quelque part un carnet où l'on note les
problèmes. Ensuite on emmène le carnet à l'atelier.*

La colonne du milieu est ce carnet.

On écrit une note, **Ctrl+Entrée** la valide. Elle s'ajoute en tête de liste.

**Chaque note retient d'elle-même le terminal, la taille et l'heure.** Au moment où
l'on écrit, on sait ce qu'on regarde ; une heure plus tard, on ne s'en souvient
plus. C'est la machine qui doit s'en charger.

### Ce que le carnet sait faire

**Numéroter dans l'ordre des essais.** La plus ancienne porte le 1, même si l'écran
montre la plus récente en haut. Ainsi « regarde la 3 » désigne la même chose des
deux côtés de la conversation.

**Se corriger.** Un ✎ ramène la note dans la zone de saisie ; en validant, elle
remplace l'ancienne — et **garde son numéro, son heure et son terminal**. La note a
été prise à ce moment-là devant cet écran-là ; la corriger ne change pas où on l'a
vue.

**Rassembler.** On peut faire glisser le texte d'une note dans la zone de saisie
pour l'ajouter à ce qu'on écrit. Cela sert à fondre deux observations en une, pas à
corriger.

**Choisir.** Une case à cocher par note. Le bouton devient alors « Copier (3) » au
lieu de « Copier tout ». Sans rien de coché, on copie l'ensemble.

### Sortir le carnet

**Copier** met le texte dans le presse-papiers — prêt à coller dans une
conversation avec l'atelier.

**Enregistrer** produit un `carnet_AAAA-MM-JJ_HHhMM.txt`.

Dans les deux cas, les notes sont remises **dans l'ordre où elles ont été prises**,
la plus ancienne d'abord, séparées par un trait. À l'écran la bordure suffit ; dans
un fichier texte, deux notes se liraient comme une seule.

Le carnet se garde dans l'armoire du navigateur. Si elle est fermée — cas d'un
`file://` — il vit en mémoire vive, **et le dit**.

---

## Ce que le banc ne fait pas

Il faut le savoir avant de s'y fier.

**Le doigt n'est pas la souris.** Le banc montre la mise en page et les
débordements. Il ne dit pas si une cible est assez grosse pour un pouce, ni si deux
boutons sont trop proches l'un de l'autre. Cela se juge appareil en main.

**Le cadre montre l'application servie par le pont** — donc les données de la
machine de travail, pas le carnet réel du téléphone.

**La capture d'écran n'est pas possible** dans la configuration actuelle. Une page
n'a pas le droit de lire le contenu d'un cadre venu d'une autre origine : le banc
est un fichier du disque, l'application vient du serveur, et une bibliothèque de
capture n'obtiendrait qu'un rectangle blanc. La porte existe — servir le banc
depuis le même serveur que l'application — mais elle n'est pas encore ouverte. En
attendant, Flameshot fait très bien l'affaire.

---

## Où c'est

```
~/Salufolio/herramientas/
    banco.html               le banc
    terminaux.js             la liste des terminaux
    verificar_terminaux.sh   le vérificateur
```

Publié sur GitHub, dans `herramientas/`, en miroir exact de l'arborescence du
disque — **le dépôt suit l'arbre du disque**, jamais l'inverse.

---

## Ce qu'il a changé

En pratique, le banc a déplacé le moment de la découverte. Avant, un débordement se
voyait à la livraison, après le téléversement, quand on n'a plus envie d'y
retoucher. Maintenant il se voit à l'écriture, quand la correction coûte trente
secondes.

Et le carnet a fait le reste : les défauts ne se perdent plus entre le moment où on
les voit et celui où on peut les traiter. Ils attendent, numérotés, avec leur
contexte.

---

*Pierre-Henri Giraud · Salufolio*
