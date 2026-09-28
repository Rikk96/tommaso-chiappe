# Dott. Tommaso Chiappe · sito copertina

Sito di presentazione del **Dott. Tommaso Chiappe, fisioterapista sportivo**. Il progetto serve a far capire a un potenziale paziente chi è il professionista, come può aiutarlo e come contattarlo. Il risultato desiderato è una richiesta di contatto tramite **WhatsApp** o **modulo Formspree**.

Questa è una **bozza**. Il proprietario del progetto fornirà in seguito numero WhatsApp, account/endpoint Formspree, fotografie, informazioni professionali verificate e informativa privacy. Non inventare questi dati per completare la pagina.

## Contesto per Codex

- **Pubblico:** persone che praticano sport o vogliono tornare a muoversi dopo un problema fisico, un dolore o un infortunio. La pagina deve restare comprensibile anche a chi non conosce la fisioterapia.
- **Obiettivo della pagina:** presentare Tommaso e il suo approccio, spiegare in modo semplice gli ambiti di intervento e portare al contatto.
- **Struttura attuale:** hero con CTA, approccio e percorso, ambiti di intervento, sezione sul professionista, contatti con WhatsApp e modulo.
- **Riferimento visivo/editoriale:** https://fgfisioterapia.it/ . Serve come ispirazione per chiarezza e organizzazione dei contenuti, senza copiarne testi, immagini, recensioni o informazioni riferite a un altro professionista.
- **Fonte indicata per il professionista:** https://www.linkedin.com/in/tommaso-chiappe-42bb9825b/ . La biografia, la formazione, la sede e le prestazioni specifiche vanno confermate prima di essere presentate come fatti.
- **Tono:** professionale, chiaro e rassicurante. Evitare promesse di guarigione, risultati garantiti, qualifiche non verificate e testimonianze inventate.

## Codice e anteprima locale

Il sito è statico, senza framework né build. I file pubblicati sono in `dist/`:

| File | Funzione |
| --- | --- |
| `dist/index.html` | Contenuti e struttura della pagina |
| `dist/styles.css` | Stile e layout responsive |
| `dist/script.js` | Interazioni, invio del modulo e apertura WhatsApp |
| `dist/config.js` | Numero WhatsApp ed endpoint Formspree, per ora vuoti |

Per l'anteprima locale:

```bash
python3 -m http.server 8000 --directory dist
```

Aprire `http://localhost:8000`. Mantenere relativi i percorsi degli asset locali (`./styles.css`, `./script.js`, ecc.), perché il sito sarà pubblicato sotto `/tommaso-chiappe/` su GitHub Pages.

Le fotografie attuali sono **immagini campione esterne** e non ritraggono Tommaso. Sono da sostituire con materiali approvati. La sezione biografica contiene testo provvisorio.

## Contatti: stato attuale

`dist/config.js` contiene il numero WhatsApp e il messaggio iniziale condivisi da tutte le CTA. `formspreeEndpoint` resta vuoto e il modulo non invia dati finché non sarà configurato. Il proprietario creerà l'endpoint Formspree in seguito. Non inserire endpoint fittizi che possano ricevere messaggi reali.

Prima di attivare Formspree, aggiungere un'informativa privacy effettiva e collegarla al testo del consenso nel modulo. Il collegamento attuale punta a una nota provvisoria nel footer, non a un'informativa completa.

## Flusso di lavoro e pubblicazione

Usare **GitHub come sorgente del progetto** e **Codex per lo sviluppo tramite pull request**: creare una branch, apportare le modifiche, verificare la pagina e aprire una PR. Il merge in `main` attiva `.github/workflows/pages.yml`, che pubblica `dist/` su GitHub Pages. Le PR non vanno online prima del merge.

Per il primo avvio, il proprietario deve scegliere **Settings → Pages → Build and deployment → Source: GitHub Actions**. L'URL previsto dopo un deploy riuscito è `https://rikk96.github.io/tommaso-chiappe/`. Il repository è attualmente privato: Pages da repo privata dipende dal piano GitHub; con GitHub Free è necessario renderlo pubblico. Il sito Pages è pubblicamente accessibile anche se la repo resta privata.

Il precedente URL Sites è una bozza indipendente: le modifiche a questa repo non lo aggiornano. **GitHub Pages è l'hosting desiderato per questo progetto.**

## Informazioni ancora da ricevere

- Endpoint Formspree creato dal proprietario.
- Fotografie e consenso al loro uso.
- Biografia, formazione, eventuali specializzazioni, sede e prestazioni confermate.
- Informativa privacy e dati professionali da riportare nel footer.
