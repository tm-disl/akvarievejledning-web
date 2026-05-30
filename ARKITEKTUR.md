# Arkitektur og vedligehold

## Arkitektur

Akvarievejledning er bygget i tre lag der arbejder sammen:

- **Sanity** er indholdssystemet. Her skriver og redigerer Adrian guider og FAQ. Sanity Studio er tilgængeligt på `akvarievejledning.sanity.studio`.
- **Astro** er selve akvarievejledning. Den henter indhold fra Sanity og bygger færdige HTML-sider. Koden ligger på GitHub under kontoen `tm-disl`.
- **Vercel** hoster og viser akvarievejledning for besøgende. Når noget ændres i koden, deployer Vercel automatisk.

## Sådan opdaterer du indhold

Guider og FAQ redigeres direkte i Sanity Studio – ingen grund til at røre koden. Ændringer er live med det samme.

Vil du ændre layout, farver, struktur eller tilføje nye sider, skal Claude Code ind i koden og pushe til GitHub – så deployer Vercel automatisk.

## Vedligehold

Der er ikke meget løbende vedligehold, men hold øje med:

- **SSL-certifikat** – håndteres automatisk af Vercel via Let's Encrypt. Udstedes og fornyes uden at du skal gøre noget, for både `akvarievejledning.dk` og `www.akvarievejledning.dk`
- **Cookiebot** – gratis planen dækker op til 500 sider, hvilket er rigeligt i lang tid
- **Vercel Hobby-plan** – gratis til personlige projekter. Hvis akvarievejledning på et tidspunkt bruges kommercielt, skal planen opgraderes
- **Sanity** – gratis planen dækker rigeligt til denne størrelse site
- **Billeder** – husk at dokumentere nye billeder i `CREDITS.md` og kreditere fotografen på siden
- **GA4 og Cookiebot** – ingen løbende betaling, men Cookiebot skal fornyes hvert år (gratis)
