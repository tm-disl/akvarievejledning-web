# Akvarievejledning v2

Hjemmeside for akvarievejledning.dk — bygget med Astro og Sanity.

## Kom i gang

```sh
npm install
npm run dev
```

Siden kører på **http://localhost:4321**

Sanity Studio kører på **http://localhost:3333** (start fra `akvarievejledning/`-mappen med `sanity dev`)

## Kommandoer

| Kommando | Beskrivelse |
| :--- | :--- |
| `npm run dev` | Start lokal udviklingsserver |
| `npm run build` | Byg siden til produktion |
| `npm run preview` | Forhåndsvis produktionsbuildet lokalt |

## Billeder og rettigheder

Når du tilføjer et nyt billede fra Unsplash:
1. Download billedet og læg det i `public/`
2. Åbn `CREDITS.md` og tilføj en række med URL, fotograf, dato og side
3. Indsæt billedet i den relevante `.astro`-fil

Se `CREDITS.md` for oversigt over alle billeder i brug.

## Struktur

```
/
├── public/               Billeder og statiske filer
├── src/
│   ├── layouts/          Layout-skabeloner
│   ├── lib/              Sanity-klient
│   └── pages/            Sider (én fil = én URL)
│       ├── guide/        Guideoversigt og individuelle guider
│       ├── blog/         Blog (skjult fra navigation)
│       ├── faq.astro
│       ├── akvarieudlejning.astro
│       └── om-adrian.astro
└── akvarievejledning/    Sanity Studio
    └── schemaTypes/      Indholdstyper (FAQ, guider)
```
