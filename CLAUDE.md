# Akvarievejledning v2 – projektinstruktioner

## Billeder

Når et billede tilføjes til projektet, skal følgende altid følges:

1. **Filnavn** — brug et beskrivende dansk navn med bindestreger, f.eks. `fisk-ved-koraller.jpg`. Aldrig brug originalfilnavnet fra kilden.

2. **Kreditering** — tilføj fotografens navn synligt på billedet som lodret tekst i højre side:
   ```html
   <span class="absolute bottom-2 right-2 text-white/80 text-xs font-medium"
     style="writing-mode: vertical-rl; transform: rotate(180deg);">
     Foto: [Navn] / [Kilde]
   </span>
   ```
   Husk at billedets container skal have `class="relative"`.

3. **CREDITS.md** — tilføj en række i tabellen med: filnavn, kilde-URL, fotografnavn, downloaddato og hvilken side billedet bruges på.
