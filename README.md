# Dott. Tommaso Chiappe · sito vetrina

Sito di presentazione del **Dott. Tommaso Chiappe, fisioterapista sportivo OMPT a Firenze**. Il progetto serve a far capire a un potenziale paziente chi è il professionista, come può aiutarlo e come contattarlo. Il risultato desiderato è una richiesta di contatto tramite **WhatsApp** o **modulo Formspree**.

Il sito ha già il numero WhatsApp configurato e una fotografia locale nella sezione OMPT. Restano da completare l’endpoint Formspree, l’informativa privacy, i dati professionali nel footer e la revisione della biografia e delle immagini campione con il professionista. Non inventare i dati mancanti.

## Contesto per Codex

- **Pubblico:** persone che praticano sport o vogliono tornare a muoversi dopo un problema fisico, un dolore o un infortunio. La pagina deve restare comprensibile anche a chi non conosce la fisioterapia.
- **Obiettivo della pagina:** presentare Tommaso e il suo approccio, spiegare in modo semplice gli ambiti di intervento e portare al contatto.
- **Struttura attuale:** hero con CTA, approccio e percorso, ambiti di intervento, sezione sul professionista, formazione OMPT, contatti con WhatsApp e modulo. Su mobile è presente una barra WhatsApp fissa.
- **Riferimento visivo/editoriale:** https://fgfisioterapia.it/ . Serve come ispirazione per chiarezza e organizzazione dei contenuti, senza copiarne testi, immagini, recensioni o informazioni riferite a un altro professionista.
- **Fonte indicata per il professionista:** https://www.linkedin.com/in/tommaso-chiappe-42bb9825b/ . La biografia, la formazione, la sede e le prestazioni specifiche vanno confermate prima di essere presentate come fatti.
- **Tono:** professionale, chiaro e rassicurante. Evitare promesse di guarigione, risultati garantiti, qualifiche non verificate e testimonianze inventate.

## Codice e anteprima locale

Il sito è statico, senza framework, dipendenze da installare o procedura di build. `dist/` contiene direttamente i file del sito: non è una cartella generata da altri sorgenti.

| File | Funzione |
| --- | --- |
| `dist/index.html` | Home e sezione contatti |
| `dist/chi-sono.html` | Formazione, esperienza e approccio del professionista |
| `dist/trattamenti.html` | Cinque ambiti di trattamento |
| `dist/navigation.css` | Header e menu responsive condivisi |
| `dist/pages.css` | Layout delle due pagine interne |
| `dist/styles.css` | Stile e layout responsive |
| `dist/script.js` | Interazioni, invio del modulo e apertura WhatsApp |
| `dist/config.js` | Numero WhatsApp, messaggio iniziale ed endpoint Formspree |
| `dist/assets/` | Logo SVG e fotografia della valutazione della caviglia |
| `.github/workflows/pages.yml` | Pubblicazione automatica su GitHub Pages |
| `README.md` | Guida al repository e stato del progetto |

Per l'anteprima locale:

```bash
python3 -m http.server 8000 --directory dist
```

Aprire `http://localhost:8000`. Mantenere relativi i percorsi degli asset locali (`./styles.css`, `./script.js`, ecc.), perché il sito sarà pubblicato sotto `/tommaso-chiappe/` su GitHub Pages.

La hero iniziale e la sezione “Chi sono” usano ancora immagini campione esterne di Unsplash. La sezione OMPT usa invece `dist/assets/valutazione-fisioterapica.jpg`, la fotografia della valutazione della caviglia (874 × 580 pixel). La sezione biografica contiene testo provvisorio.

## Contatti: stato attuale

`dist/config.js` contiene il numero WhatsApp configurato e il messaggio iniziale condivisi da tutte le CTA. `formspreeEndpoint` resta vuoto e il modulo non invia dati finché non sarà configurato. Il proprietario creerà l'endpoint Formspree in seguito. Non inserire endpoint fittizi che possano ricevere messaggi reali.

Prima di attivare Formspree, aggiungere un'informativa privacy effettiva e collegarla al testo del consenso nel modulo. Il collegamento attuale punta a una nota provvisoria nel footer, non a un'informativa completa.

## Flusso di lavoro e pubblicazione

Usare **GitHub come sorgente del progetto** e **Codex per lo sviluppo tramite pull request**: creare una branch, apportare le modifiche, verificare la pagina e aprire una PR. Il merge in `main` attiva `.github/workflows/pages.yml`, che pubblica `dist/` su GitHub Pages. Le PR non vanno online prima del merge.

Il workflow pubblica direttamente `dist/` a ogni push su `main` e può essere avviato manualmente. URL GitHub Pages: https://rikk96.github.io/tommaso-chiappe/

Il precedente URL Sites è una bozza indipendente: le modifiche a questa repo non lo aggiornano. **GitHub Pages è l'hosting desiderato per questo progetto.**

## Mantenere ordinato il repository

- Partire da `main` aggiornato e usare nomi di branch brevi e descrittivi.
- Dopo il merge, eliminare il branch di lavoro solo se non contiene ulteriori modifiche. La cronologia resta nei commit e nella PR.
- Conservare i branch con lavoro ancora da integrare.
- Per la sola manutenzione organizzativa, non modificare `dist/` o il workflow di pubblicazione e non rinominare cartelle o asset.
- Le modifiche al sito passano da PR; il merge richiede l’autorizzazione del proprietario.

## Informazioni ancora da ricevere

- Endpoint Formspree creato dal proprietario.
- Materiali approvati per sostituire le immagini campione e relativi consensi.
- Revisione della biografia e conferma di eventuali nuove informazioni su formazione, sede e prestazioni.
- Informativa privacy e dati professionali da riportare nel footer.

## Navigazione

L’header condiviso collega Chi sono, Trattamenti e Contatti (`./index.html#contatti`). Sotto i 900 px il menu è una disclosure con hamburger a destra: si chiude tramite Escape, scelta di un link, clic o focus esterno. Le pagine interne riutilizzano font, palette, logo, footer e configurazione WhatsApp della home. La formazione e il ruolo nella Fiorentina Under 16 provengono dal testo fornito dal proprietario.
