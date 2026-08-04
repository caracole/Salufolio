#!/bin/bash
# ═══ panel.sh v2.3 — fenêtre libre, sans taille imposée (04/08/2026) ═══
# La barre de titre du navigateur EST la poignée : pas besoin d'iframe,
# une fenêtre normale se déplace déjà. On ne force plus --window-size —
# c'est le gestionnaire de fenêtres du bureau qui décide.
cd "$(dirname "$0")"
URL="http://localhost:7777/panel"
if ! curl -s -m 2 http://localhost:7777/api/estado > /dev/null 2>&1; then
  echo "► Arrancando el servidor…"
  nohup python3 modular_server.py >> servidor.log 2>&1 &
  sleep 2
fi
for NAV in chromium chromium-browser google-chrome google-chrome-stable brave-browser; do
  if command -v "$NAV" > /dev/null 2>&1; then
    "$NAV" --app="$URL" > /dev/null 2>&1 &
    exit 0
  fi
done
if command -v firefox > /dev/null 2>&1; then
  firefox --new-window "$URL" > /dev/null 2>&1 &
  exit 0
fi
xdg-open "$URL" 2>/dev/null || echo "Abra: $URL"
