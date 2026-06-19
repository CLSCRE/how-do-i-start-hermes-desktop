# how-do-i-start-hermes-desktop

Minimal static demo: Deal Analyzer calculator deployed to Vercel.

Live demo: https://how-do-i-start-hermes-desktop.vercel.app

## What this repo contains
- index.html — single-page demo
- styles.css — minimal styles
- js/calculator.bundle.js — small JS bundle that initializes the calculator UI

## Run locally
Open index.html in a browser (no build tools required):

1. git clone https://github.com/CLSCRE/how-do-i-start-hermes-desktop.git
2. open index.html in your browser

Or run a quick static server with Python:

python -m http.server 8000

Then visit http://localhost:8000

## Deployment
This repo is configured to deploy to Vercel via GitHub Actions on push to main.

## License
MIT — see LICENSE
