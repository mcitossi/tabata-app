# Tabata Timer — WebApp (iOS-first)

Timer Tabata mobile-first, dark mode, pensato per Safari su iPhone e installabile in
schermata Home come PWA. Nessuna dipendenza esterna: tutto (HTML, CSS, JS) sta in
`index.html`, quindi funziona anche offline.

```
tabata/
├── index.html            # app completa (markup + CSS + logica timer)
├── manifest.webmanifest  # PWA: nome, colori, icone
├── sw.js                 # service worker (app-shell offline)
└── icons/                # icone 180/192/512 + maskable
```

## Avvio in locale

```bash
python3 -m http.server 4173
```

Poi apri `http://localhost:4173`. Il service worker richiede `localhost` o **https**:
su `file://` l'app funziona lo stesso, ma senza cache offline e senza installazione PWA.

Per usarla dall'iPhone: metti i file su un hosting https (Netlify, GitHub Pages, Vercel…),
apri il sito in Safari → **Condividi → Aggiungi a Home**. Da lì parte a schermo intero,
senza barre del browser.

## Struttura del workout

```
workout = N esercizi
esercizio = [preparazione] + M serie
serie     = lavoro + riposo + (transizione o pulsante)   ← l'ultima serie chiude col lavoro
```

Esempio: 3 esercizi × 5 serie da 30/30, preparazione 10 s e transizione 10 s → `16:00`.

## Funzioni

- **Esercizi / Serie per esercizio / Lavoro / Riposo** modificabili con i pulsanti −/+
  (tieni premuto per la ripetizione veloce) oppure toccando il campo e digitando: l'input
  è in stile cronometro, `130` → `01:30`. Il **tempo totale** si aggiorna in tempo reale.
- **Preparazione**: countdown prima di ogni esercizio, regolabile a passi di 5 s.
  Portalo a `NO` per disattivarlo e partire subito col lavoro.
- **Tra le serie** — `AUTO` (countdown di durata configurabile, default 10 s) oppure
  `MANUALE` (pulsante **PROSSIMA SERIE**). Di default è AUTO: non devi toccare nulla
  durante l'esercizio.
- **Tra gli esercizi** — `AUTO` (si passa da solo al successivo) oppure `MANUALE`
  (pulsante **PROSSIMO ESERCIZIO**, default: hai il tempo di cambiare attrezzo).
  Le due scelte sono indipendenti, così puoi avere serie automatiche e stop tra gli esercizi.
- **Ultimi 3 secondi** di ogni fase: beep (Web Audio API), pulsazione luminosa a tutto
  schermo nel colore della fase e vibrazione dove supportata.
- **Colori di fase**: blu = preparazione/transizione, verde acqua = lavoro, ambra = riposo.
- **In esecuzione**: contatore `ESERCIZIO 2/3 · SERIE 3/5`, INDIETRO (fase precedente),
  PAUSA/RIPRENDI, SALTA, ✕ per uscire.
- **Preferito**: la stella salva la configurazione corrente; la pillola sotto l'header la
  ricarica con un tocco. Le impostazioni vengono comunque ricordate tra una sessione e l'altra.

## Ottimizzazioni iOS

- `viewport-fit=cover` + `env(safe-area-inset-*)`: contenuto rispettato su notch e Dynamic Island.
- `apple-mobile-web-app-capable` + `status-bar-style: black-translucent` + manifest `standalone`.
- Font dei campi a 16px: Safari non zooma al focus; pinch e zoom restano disponibili per accessibilità.
- `-webkit-tap-highlight-color: transparent`, `touch-action: manipulation` (niente ritardo
  di 300 ms), `overscroll-behavior: none` + `position: fixed` sul body: nessun rimbalzo elastico.
- **Screen Wake Lock** attivo durante l'allenamento (iOS 16.4+): lo schermo non si spegne.
- Il tempo è calcolato su timestamp assoluti, non contando i frame: se l'app va in
  background e torna in primo piano, il timer si riallinea da solo. Oltre al
  `requestAnimationFrame` c'è un intervallo di sicurezza a 400 ms.

## Limiti noti

- L'audio parte solo dopo il primo tocco (regola di Safari): il contesto audio viene
  sbloccato quando premi **AVVIA IL TIMER**.
- `navigator.vibrate` non è supportato da Safari su iOS: la vibrazione funziona su Android,
  su iPhone restano beep e segnale visivo.
- Con lo schermo bloccato o l'app in background iOS sospende timer e audio: i beep degli
  ultimi 3 secondi non suonano finché l'app non torna in primo piano (poi il conteggio si
  riallinea). Per questo il Wake Lock tiene lo schermo acceso.
- Il service worker usa network-first per le navigazioni e cache-first per gli asset statici:
  i deploy nuovi vengono recepiti più rapidamente mantenendo il funzionamento offline.

## Schede 35WORKOUT (aggiornamento ottobre 2026)

Il programma contiene gli 8 mesocicli e le 40 sedute trascritte dai PDF forniti
all'interno del progetto. Ogni mesociclo offre tre sedute principali e due
facoltative (kettlebell ed elastici). La settimana è un indicatore di avanzamento:
selezionare una settimana diversa **non cambia gli esercizi della seduta**.
La selezione delle settimane 1–4 è manuale; non ci sono progressioni automatiche
nei carichi né cambi automatici di mesociclo.

- M1: 8 esercizi, 4 serie, 20/40; 40 s fra esercizi.
- M2: due blocchi da 4 esercizi, 6 giri ciascuno, 25/15; 120 s fra blocchi.
- M3: 6 esercizi, 5 serie, 30/30; 30 s fra esercizi.
- M4: cinque coppie, 3 giri per coppia, 45/10; 60 s fra coppie.
- M5: un circuito di 6 esercizi, 4 giri, 60/20.
- M6: quattro terne, 4 giri per terna, 30/10; 60 s fra terne.
- M7: tre coppie EMOM, 10 minuti per coppia; 60 s fra coppie. Le due
  prescrizioni di ripetizioni sono visibili insieme. «Ripetizioni finite» segnala
  il recupero senza saltare il tempo rimasto. Non viene imposto un tempo fittizio
  di 30 secondi per ciascun esercizio. Le indicazioni «per lato» sono conservate.
- M8: 6 esercizi, 5 serie, 40/20; 60 s fra esercizi.

La pausa lunga sostituisce il recupero breve alla fine dell'ultimo giro del
blocco; non è aggiunta due volte. Il timer termina con l'ultimo lavoro: non conta
un recupero finale. Il countdown iniziale è configurabile, mentre riscaldamento
e stretching restano fuori dal timer. Per una scheda originale i parametri sono
bloccati; «Crea una sessione libera» abilita le modifiche. «Cambia» può sostituire
un esercizio mantenendo la struttura: il programma è allora indicato come
«Varianti personali». Le scelte destra/sinistra esplicite dei PDF sono slot distinti,
senza un ulteriore segnale automatico di cambio lato a metà intervallo.

### Dati e animazioni

`workout-data.js` contiene le sedute, 128 voci/varianti normalizzate e il generatore
delle sequenze. I nomi originali dei PDF restano nelle sedute; gli alias uniscono
solo differenze testuali certe. Non si sostituiscono esercizi diversi per ottenere
un'animazione: per esempio curl hammer e curl classico, plank e hollow body,
rematore con due manubri e rematore unilaterale in appoggio rimangono distinti.

La versione precedente conteneva soltanto alcune illustrazioni SVG incorporate,
nessun file di animazione in `anims/` e nessun collegamento funzionante ai media
openGym. Le illustrazioni esistenti sono riutilizzate soltanto per sei voci
corrispondenti del programma. Le altre voci mostrano **Demo non disponibile** e
un pulsante **Dettagli**. Non è stata aggiunta alcuna dipendenza remota.

Le impostazioni esistenti restano nella stessa chiave `tabata.settings.v2` e
sono migrate allo schema 3. I vecchi preset incompleti vengono conservati come
sessioni libere; cronologia e preferiti non sono cancellati. Le nuove selezioni
memorizzano separatamente mesociclo, settimana, seduta e varianti personali.
Il service worker v14 precarica anche `workout-data.js` per l'uso offline.

### Verifica

```sh
node --test tests/*.test.cjs
```

I controlli coprono le 40 sedute, le durate e i recuperi, l'ordine di coppie e
terne, l'EMOM, le varianti, la migrazione delle impostazioni, i preferiti, la
cronologia e la cache offline. Per un controllo manuale avviare il server locale,
selezionare mesociclo/settimana/seduta, ricaricare la pagina e verificare la
persistenza. Nel mesociclo 7 provare pausa/ripresa e «Ripetizioni finite».
