#!/usr/bin/env bash
# Publica o site na VPS: gera o site, envia e troca de uma vez (a versão anterior continua guardada).
# Uso (no Mac, na pasta do projeto): bash deploy/publicar.sh
set -euo pipefail
cd "$(dirname "$0")/.."
npm run build
COPYFILE_DISABLE=1 tar -czf - -C dist . | ssh -i "$HOME/.ssh/hostinger_vps" root@179.197.80.94 /opt/site-ser/receber.sh
