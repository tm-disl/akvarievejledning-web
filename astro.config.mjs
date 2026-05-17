// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://akvarievejledning.dk',
  integrations: [sitemap()],
  redirects: {
    '/den-komplette-guide-til-dit-foerste-akvarium': '/guide/den-komplette-guide-til-dit-foerste-akvarium',
    '/den-komplette-guide-til-dit-foerste-akvarium/': '/guide/den-komplette-guide-til-dit-foerste-akvarium',
    '/guide/saadan-undgaar-du-de-hyppigste-problemer': '/guide/de-5-hyppigste-begynderfejl',
    '/guide/saadan-undgaar-du-de-hyppigste-problemer/': '/guide/de-5-hyppigste-begynderfejl',
    '/hvordan-planlaegger-du-det-ideelle-akvarium': '/guide/vedligeholdelse-af-dit-akvarie',
    '/hvordan-planlaegger-du-det-ideelle-akvarium/': '/guide/vedligeholdelse-af-dit-akvarie',
    '/ressourcer': '/guide',
    '/ressourcer/': '/guide',
    '/author/adrian': '/om-akvarievejledning',
    '/author/adrian/': '/om-akvarievejledning',
    '/om-adrian': '/om-akvarievejledning',
    '/om-adrian/': '/om-akvarievejledning',
  },
  vite: {
    plugins: [tailwindcss()]
  }
});