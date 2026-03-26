# WirWohnen

Euer Haus, eure Verwaltung. WirWohnen gibt Eigentümergemeinschaften die Werkzeuge, um ihr Mehrparteienhaus selbst zu managen. Von Kostenanalysen über Sanierungsoptionen bis zur gemeinsamen Entscheidungsfindung — alles übersichtlich an einem Ort. Ohne teure Hausverwaltung, dafür mit voller Kontrolle.

## Voraussetzungen

- Node.js >= 22 (see `.nvmrc`)
- npm

## Schnellstart

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Verfügbare Scripts

| Script | Beschreibung |
|--------|-------------|
| `npm run dev` | Entwicklungsserver starten |
| `npm run build` | Produktions-Build erstellen |
| `npm run start` | Produktionsserver starten |
| `npm run lint` | ESLint ausführen |
| `npm run type-check` | TypeScript-Typen prüfen |

## Deployment

### GitHub Pages (MVP)

Automatisch bei jedem Push auf `main` via GitHub Actions. Der statische Export wird unter `https://pfurner-dev.github.io/WirWohnen` bereitgestellt.

**Einmalige Einrichtung:** Repository Settings → Pages → Source → "GitHub Actions"

### Docker (VPS)

```bash
cp .env.example .env
# .env anpassen (insbesondere POSTGRES_PASSWORD)
docker compose up -d
```

Die App läuft auf Port 3000, PostgreSQL auf Port 5432.

**Entwicklung mit Docker:**

```bash
docker compose -f docker-compose.yml -f docker-compose.dev.yml up
```

## Release erstellen

```bash
npm version patch   # oder minor / major
git push && git push --tags
```

Ein GitHub Release mit Changelog und Build-Artefakt wird automatisch erstellt.

## Architektur

Die `next.config.ts` unterstützt zwei Modi:

- **GitHub Pages:** `DEPLOY_TARGET=github-pages` → Statischer Export mit `/WirWohnen` basePath
- **VPS/Docker:** Ohne env-Variable → Standalone SSR mit PostgreSQL

## Lizenz

MIT
