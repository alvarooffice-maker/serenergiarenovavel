#!/usr/bin/env bash
# Roda NA VPS, chamado pela chave de publicação (só este comando é permitido a ela). Recebe o site (tar.gz) pela entrada padrão,
# confere que veio um index.html e troca o site no ar de uma vez (sem ficar pela metade). Guarda as últimas 5 versões.
set -euo pipefail
RAIZ=/opt/site-ser; NOVA="$RAIZ/releases/$(date +%Y%m%d-%H%M%S)"
mkdir -p "$NOVA"; tar -xz -C "$NOVA" --no-same-owner
[ -s "$NOVA/index.html" ] || { rm -rf "$NOVA"; echo "pacote inválido: sem index.html" >&2; exit 1; }
chmod -R a+rX "$NOVA"
ln -sfn "releases/$(basename "$NOVA")" "$RAIZ/atual.novo" && mv -T "$RAIZ/atual.novo" "$RAIZ/atual"
ls -1dt "$RAIZ"/releases/* | tail -n +6 | xargs -r rm -rf
echo "publicado: $(basename "$NOVA")"
