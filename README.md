# Pramaan — prototype site

Clickable prototype of **Pramaan**, the evidence-first security-assessment platform for **SIH26163 (NTRO) — Security Assessment of the World Monitor application**.

It is a static site: plain HTML, CSS and JavaScript. There is no build step, no backend and no dependencies. Nothing on this site scans anything; it shows what Pramaan reports after a run on the local lab.

> The findings, scores and logs in `data.js` are **illustrative demo data**. Replace them with your real Golden Lab / local-target results before presenting. The PRD's rule applies here too: never show a finding you haven't confirmed.

## Files

| File | What it is |
|---|---|
| `index.html` | Page shell, meta tags, link preview |
| `styles.css` | All styling, light and dark themes |
| `data.js` | **Everything you'll edit**: target, findings, audit log, run log, posture score |
| `app.js` | Screens, navigation and interactions — normally no need to touch |
| `vercel.json` | Security headers (CSP, frame-ancestors, HSTS, nosniff…) |
| `favicon.svg`, `og-image.jpg` | Tab icon and the WhatsApp / LinkedIn link preview |

## Deploy to Vercel

**Option A — Vercel CLI (fastest)**

```bash
cd pramaan-site
npx vercel          # first run: log in, accept defaults, framework = "Other"
npx vercel --prod   # publishes to your production URL
```

To get a clean URL, rename the project in the Vercel dashboard → *Settings → General → Project Name* (for example `pramaan` → `pramaan.vercel.app`, if that name is free).

**Option B — GitHub import (same as YojanaMatch)**

1. Push this folder to a new GitHub repo.
2. On vercel.com → **Add New… → Project** → import the repo.
3. Framework preset: **Other**. Leave build command and output directory **empty**. Deploy.

Every push to `main` then redeploys automatically.

**After the first deploy:** link previews on WhatsApp and LinkedIn need an absolute image URL. In `index.html`, change `content="/og-image.jpg"` to your full URL, for example `content="https://pramaan.vercel.app/og-image.jpg"`, and redeploy.

## Test locally

```bash
cd pramaan-site
python3 -m http.server 8080     # then open http://localhost:8080
```

## Editing the data (`data.js`)

- **`TARGET`**: commit SHA, version, authorization window, rate cap. These appear in the header strip on every screen.
- **`FINDINGS`**: one object per result. `tier` must be one of `poc`, `confirmed`, `evidence` (these count as Confirmed), `probable`, `na` or `clean`. Confirmed findings need `sev`, `cvss`, `vector`, `component`, `cwe`, `owasp`, `cia` (`C`, `I` or `CI`), `strategy`, `fix` and `reg`. Set `closed: true` once a fix has passed re-test. `now` is the index of the current state in `DETECTED → VALIDATING → CONFIRMED → POC_VERIFIED → FIX_PROPOSED → CLOSED`. Probable, Not-applicable and Verified-clean entries need `note` (why), `component` and `fix` (next action) instead.
- **`AUDIT`** and **`RUN`**: the audit chain and the live-run log. They mention finding IDs, so keep them in step with `FINDINGS`.
- **`POSTURE`**: the score and its four parts are written in by hand. If you change the findings, recompute them with the PRD §10.4 formula: Coverage × 25 + Exposure × 35 + Remediation × 25 + Evidence quality × 15. Update the `x` explanation text as well.

Counts, badges and tables on the Overview, Findings, Coverage and Remediation screens are calculated from `FINDINGS` automatically. A few sentences are written by hand and should be updated along with the data: the tiles on the Live run screen (in `app.js`, `vRun`), the summary note under the Coverage grid (`vCoverage`), the short verdict beside the posture ring (`vPosture`), and the executive-summary paragraph and Hindi text in the report preview (`previewReport`).

## Deep links

Any screen can be linked directly: `/#findings`, `/#posture`, `/#audit`, `/#F-001`, and so on.

## Notes

- The security headers in `vercel.json` follow the same advice the prototype gives in finding F-004: a strict CSP, `frame-ancestors 'none'` and `object-src 'none'`. If a judge checks the site's own headers, they'll pass.
- On Vercel *preview* deployments, the Vercel feedback toolbar is blocked by the CSP. This is expected, and production is unaffected.
