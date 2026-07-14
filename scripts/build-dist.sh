#!/usr/bin/env bash
set -euo pipefail

rm -rf dist
mkdir -p dist/assets

cp index.html app.js styles.css dist/
cp assets/logo-cropped.jpeg assets/favicon.png dist/assets/

