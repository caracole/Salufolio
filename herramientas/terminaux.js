/* ═══ LA LISTE DES TERMINAUX DU BANC D'ESSAI ═══
   P-H, 17/08 : les données vivent DEHORS, le programme ne fait que les
   charger — un seul banc, plusieurs listes possibles.

   TOUT CE QUI EST ENTRE LES ACCOLADES EST DU JSON STRICT, et rien d'autre :
   guillemets DOUBLES partout, aucune virgule après le dernier élément,
   AUCUN COMMENTAIRE À L'INTÉRIEUR. Les explications restent ici, en tête.
   Ainsi le fichier se charge comme un script (donc en file://, d'un simple
   double-clic) ET se vérifie comme des données — une faute de frappe est
   signalée avec sa ligne et sa colonne au lieu d'un « unexpected token ».

   POUR AJOUTER UN APPAREIL : une ligne  ["Nom", largeur, hauteur]
   Ce sont des PIXELS CSS, PAS la résolution du fabricant. Divisez la
   résolution par la densité : le Redmi 14C affiche 720 px de large pour
   une densité de 2, il vaut donc 360 en pixels CSS.
   "defaut" doit reprendre EXACTEMENT un nom de la liste.

   POUR VÉRIFIER LE FICHIER :
     sed -e '1,/^var TERMINAUX =$/d' terminaux.js | python3 -m json.tool > /dev/null \
       && echo "✓ JSON valide" || echo "✗ voir le message ci-dessus"
*/

var TERMINAUX =
{
  "defaut": "Xiaomi Redmi 14C",           /* si vous modifiez le terminal affiché par defaut changez son nom ici*/
  "tel": [
    ["Xiaomi Redmi 14C",     360,  820],
    ["Xiaomi Redmi Note",    393,  873],
    ["iPhone SE",            375,  667],
    ["iPhone 14 / 15",       390,  844],
    ["iPhone 15 Pro Max",    430,  932],
    ["Pixel 7",              412,  915], /* si vous ajoutez un terminal copiez cette ligne et inserez-la derriere et modifiez-la*/
    ["Étroit (le pire cas)", 320,  640]  
  ],
  "tab": [
    ["Tablette 10″",         800, 1280],
    ["iPad",                 820, 1180], /* si vous ajoutez une tablette copiez cette ligne et inserez-la derriere et modifiez-la*/
    ["iPad Pro 11″",         834, 1194]
  ]
};
