# Dott. Tommaso Chiappe · sito copertina

Sito statico contenuto in `dist/`. L'anteprima locale si avvia con `python3 -m http.server 8000 --directory dist`.

## Pubblicazione

GitHub Actions pubblica il contenuto di `dist/` su GitHub Pages dopo ogni push su `main`, inclusi i merge delle pull request. La prima volta, abilita **Settings → Pages → Build and deployment → Source: GitHub Actions**. Se la repo è privata, GitHub Pages richiede un piano che supporti Pages da repository privati; il sito pubblicato resta comunque visibile a chi possiede l'URL. Con GitHub Free occorre rendere pubblica la repo per usare Pages.

Le modifiche a una PR non vengono pubblicate finché non sono unite in `main`. Il precedente link Sites è una bozza separata e non si aggiorna da questa repo.

## Da completare prima dell'uso con pazienti

- Inserire in `dist/config.js` il numero WhatsApp internazionale senza simboli (es. `393331234567`) e l'endpoint Formspree `https://formspree.io/f/...`.
- Sostituire le immagini campione e verificare formazione, ambiti di intervento, biografia, sede e dati professionali con Tommaso Chiappe.
- Pubblicare un'informativa privacy reale e aggiornare il consenso del modulo prima di raccogliere dati. Il modulo non invia dati finché Formspree non è configurato.
- Rivedere testi e fotografie. Le immagini esterne sono esempi e non ritraggono il professionista.
