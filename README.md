# Amazon-Profit-Calculator

## Deploy

The site is deployed to Cloudflare Pages as `crankvia`.

Automation:
1. Edit files locally.
2. Push to the `main` branch on GitHub.
3. GitHub Actions builds `dist/` and deploys to Cloudflare Pages.

Required GitHub repository secrets:
- `CLOUDFLARE_API_TOKEN`: Cloudflare API token with Pages edit/deploy permission.
- `CLOUDFLARE_ACCOUNT_ID`: Cloudflare account ID.

Expected Pages URL:
- `https://crankvia.pages.dev`

Build command used by CI:

```bash
bash scripts/build-dist.sh
```
For quickly calculating various Amazon fees.
