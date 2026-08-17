#!/bin/bash
# ═══ VÉRIFICATEUR DE terminaux.js ═══
# Dit si la liste des terminaux du banc d'essai est bien écrite,
# et si elle ne l'est pas, dit OÙ.
#
#   ./verificar_terminaux.sh
#
# Les commentaires /* ... */ sont permis : le script les enlève avant de lire.

cd "$(dirname "$0")" || exit 1

python3 - << 'FIN'
import re, json, sys

try:
    brut = open('terminaux.js', encoding='utf-8').read()
except FileNotFoundError:
    print("✗ terminaux.js est introuvable dans ce dossier.")
    sys.exit(1)

# On retire les commentaires, puis on ne garde que ce qui est entre accolades.
sans = re.sub(r'/\*.*?\*/', '', brut, flags=re.S)
try:
    coeur = sans[sans.index('{'):sans.rindex('}') + 1]
except ValueError:
    print("✗ Aucune accolade trouvée : le fichier ne contient pas de liste.")
    sys.exit(1)

try:
    d = json.loads(coeur)
except json.JSONDecodeError as e:
    print("✗ La liste est mal écrite.")
    print("  " + e.msg + " — ligne " + str(e.lineno) + ", colonne " + str(e.colno))
    ligne = coeur.split('\n')[e.lineno - 1] if e.lineno <= len(coeur.split('\n')) else ''
    if ligne.strip():
        print("  " + ligne.strip())
    print("\n  Les fautes les plus fréquentes : un point-virgule au lieu d'une")
    print("  virgule · une virgule en trop après le dernier élément d'une")
    print("  liste · un guillemet simple au lieu d'un guillemet double.")
    sys.exit(1)

tel = d.get('tel', [])
tab = d.get('tab', [])
noms = [t[0] for t in tel + tab]

print("✓ La liste est bien écrite.")
print("  " + str(len(tel)) + " téléphones, " + str(len(tab)) + " tablettes.")

if d.get('defaut') in noms:
    print("  Défaut : " + d['defaut'])
else:
    print("⚠ Le défaut « " + str(d.get('defaut')) + " » ne correspond à aucun nom de la liste.")
    print("  Le banc prendra le premier téléphone : " + (noms[0] if noms else "aucun"))

for t in tel + tab:
    if len(t) != 3 or not isinstance(t[1], int) or not isinstance(t[2], int):
        print("⚠ Ligne suspecte : " + str(t) + " — il faut [\"Nom\", largeur, hauteur]")
    elif t[1] > 600 and t in tel:
        print("⚠ « " + t[0] + " » fait " + str(t[1]) + " px de large : c'est peut-être la")
        print("  résolution du fabricant. Divisez-la par la densité de l'écran.")
FIN
