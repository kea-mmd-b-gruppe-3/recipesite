# Teknisk dokumentation for Tema 7 gruppeprojekt
Når man er flere der bidrager til en kodebase, lærer man hurtigt, at ens sædvanlige måder at gøre tingene på ikke nødvendigvis er logisk for alle.

Skriv derfor jeres fælles retningslinjer for punkterne herunder(tilføj gerne flere selv), sådan som det giver bedst mening for jer som gruppe. Dokumentationen sikre, at jeres fælles kodebase forbliver overskuelig, er let at arbejde med og til at forstå for alle, og at I undgå konflikter, og har nemmere ved at hjælpe hinanden undervejs.

## Projektstruktur:
- Billeder ligger i img-mappen og fonte bliver sat ind 'head'.
- Boilerplate er placeret herinde - en README.md fil, der ikke ligger i nogle mappe og inden i general.css
- Vi har lavet mapper der hedder hver fil type (html, css, js), som indeholder de matchende filer

## Navngivning:
- Vi har givet navngivet de forskellige filer efter hvilken html.side det skal være og den matchende css fil hedder så samme navn som html-filen og det samme med js. js ligger inden i den js-mappe, css inden i en css-mapppe og html inden i en html-mappe (minus index-filen)

## Link til scripts:
- Det placeres nederst i <body>

## Git branches:
- Vi navngiver branches ved at skrive 'feature-navn-hvad man har lavet' så fx. 'feature-victoria-footer'

## Arbejdsflow:
- Vi aftaler hvem der arbejder på hvad og så arbejder vi i/på hver vores branch/feature
- Commit-beskeder bliver skrevet ved at skrive 'add' eller 'fix' og så hvad man har gjort. Fx. 'add footer with css styling'
- Hvis noget skal merges så gør vi det sammen

## Kode:
- Vi skriver funktioner ind som vi lærte i sidste opgave, hvis det er forskelligt så sørger vi for at gennemgå det til sidst og evt. rette, så alle har styr på det
- Når vi refererer i JS og CSS så bruger vi classes
- Vi skriver så kommentarer og forklaringer ved fx. funktioner, fetch osv.

# Funktionalitet
Dette afsnit skal forklare hvad I konkret har arbejde med, for at udvikle websitet. Tænk over hvilke interaktioner brugeren kan foretage på sitet? Eller hvordan websitet håndterer og præsenterer data? Eksempler på funktionalitet, der kan beskrives:

- Hentning af produkter fra API.
- Filtrering af produkter baseret på brugerens valg.
- Dynamisk visning af produkter i HTML.

Brug korte beskrivelser, som i eksemplerne herover

# API endpoints
Dette afsnit skal liste de endpoints fra API'et i har benyttet:
- (fx. https://dummyjson.com/products)

# Dokumentation af Funktion 
Dette afsnit skal beskrive en funktion I selv har udviklet. Det kunne eksempelvis være en funktion der generere en listen over fx. produkter: 

- Beskrivelse: Hvad gør funktionen? Hvordan spiller den sammen med resten af koden?
- Parametre: Hvilke input forventes (fx en værdi fra en dropdown eller URL'en)?
- Returnerer: Beskriv, om funktionen returnerer en værdi eller blot manipulerer DOM’en.
- Eksempel på brug: Indsæt funktions-koden herunder(der hvor koden er i eksemplet) og vis, hvordan funktionen kaldes:
```javascript
//funktionens kode:
function voresFunktion(sprog){
  console.log(`${sprog} syntax highlighting`)
};
//hvordan funktionen kaldes:
voresFunktion("JavaScript");
```
