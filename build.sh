#!/usr/bin/env bash
set -euo pipefail

REQUIRED_VERSION="0.23.6"
INSTALLED_VERSION=$(zola --version 2>/dev/null | awk '{print $2}' || echo "none")

# If zola is missing or older than 0.23, fetch the static release binary
if [[ "$INSTALLED_VERSION" != 0.23* ]]; then
  echo "Current Zola is '$INSTALLED_VERSION'. Installing Zola v${REQUIRED_VERSION}..."
  BIN_DIR="$(mktemp -d)"
  curl -sL "https://github.com/getzola/zola/releases/download/v${REQUIRED_VERSION}/zola-v${REQUIRED_VERSION}-x86_64-unknown-linux-gnu.tar.gz" | tar xz -C "$BIN_DIR"
  export PATH="$BIN_DIR:$PATH"
fi

echo "Building site with $(zola --version)..."
zola build "$@"
