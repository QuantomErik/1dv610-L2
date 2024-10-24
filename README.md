# Web Application - Med Validator Module Integration

## Introduktion

Denna webbapplikation är ett enkelt system som låter användare registrera sig, logga in och hantera en personlig todo-list. Applikationen implementerar Validator-modulen från [Validator Module](https://github.com/QuantomErik/1dv610-L2.git) för att validera användarinformation som lösenord, e-post, namn och ålder vid registrering. All användardata lagras lokalt i webbläsarens localStorage för att underlätta enkel hantering utan behov av en extern databas.

## Funktioner

- **Registrering:** Användare kan registrera sig genom att fylla i ett formulär med e-post, lösenord, namn och ålder. Validator-modulen används för att säkerställa att alla fält uppfyller relevanta krav.
- **Inloggning:** Användare kan logga in med sina registrerade uppgifter. Information hämtas från localStorage.
- **Todo-list:** Användare kan lägga till, redigera och ta bort uppgifter i en personlig att-göra-lista, som sparas i localStorage.
- **Utloggning:** Användaren kan logga ut och sessionen återställs.

## Teknologier

- **Språk:** JavaScript (ES6+)
- **Frontend:** HTML, CSS
- **Byggverktyg:** Vite
- **Valideringsmodul:** [Validator Module](https://github.com/QuantomErik/1dv610-L2.git)
- **Lagring:** LocalStorage

## Installation

Följ dessa steg för att installera och köra projektet lokalt:

1. Klona projektet från GitHub:
   ```bash
   git clone https://github.com/QuantomErik/1dv610-L2/tree/L3-branch
2. Navigera till projektmappen::
   ```bash
   cd L3
3. Installera nödvändiga beroenden:
   ```bash
   npm install
4. Starta den lokala utvecklingsservern:
   ```bash
   npm run dev
# Användning

## Registrering
1. Gå till "Register"-sidan.
2. Fyll i alla fält (e-post, lösenord, namn, ålder).
3.Validering sker direkt med hjälp av Validator-modulen. Du kommer att få ett felmeddelande om något av fälten inte uppfyller kraven.
4. Om alla fält är giltiga, registreras användaren och omdirigeras till inloggningssidan.

## Inloggning
1. Gå till "Login"-sidan.
2. Ange din registrerade e-postadress och lösenord.
3. Vid korrekt inloggning omdirigeras du till din personliga användarsida där du kan hantera din att-göra-lista.

## Todo-list
1. Lägg till nya uppgifter via inputfältet och klicka på "Add Task".
2. Redigera befintliga uppgifter genom att klicka på "Edit" bredvid en uppgift, göra ändringar och spara.
3. Ta bort uppgifter genom att klicka på "Delete".

## Utloggning
- Logga ut genom att klicka på "Logout"-knappen. Din session avslutas och du omdirigeras till startsidan.


# Testning
För att testa applikationen manuellt, följ dessa steg:

1. Navigera till projektmappen:
   ```bash
   cd L3
2. Starta utvecklingsservern:
   ```bash
   npm run dev
3. Navigera till applikationen i din webbläsare och testa följande:
   - Registrering av nya användare
   - Inloggning med korrekt och felaktig data
   - Hantering av todo-list
   - Utloggning

alternativt besök https://dashing-shortbread-81a906.netlify.app/


## Bidra till projektet

Varmt välkommen att bidra som utvecklare. Om du vill bidra:

1. Forka projektet till ditt konto.
2. Klona ditt forkade projekt till din lokala maskin:
   ```
   git clone https://github.com/QuantomErik/1dv610-L2/tree/L3-branch
   ```
3. Skapa en ny branch för din funktion/bugfix:
   ```
   git checkout -b feature/your-feature-name
   ```
4. Gör dina ändringar och commit:
   ```
   git commit -m 'Lagt till en ny funktion'
   ```
5. Pusha dina ändringar till ditt forkade projekt:
   ```
   git push origin feature/your-feature-name
   ```
6. Skicka en pull request via Github och inkludera en tydlig beskrivning av din ändring.

## Licens

Detta projekt är licensierat under ISC-licensen. Du är fri att använda, kopiera, ändra och distribuera detta projekt i enlighet med villkoren i [ISC-licensen](LICENSE).

### Sammanfattning av ISC-licensen:

- **Frihet att använda:** Du kan använda projektet för privata eller kommersiella ändamål.
- **Frihet att kopiera och distribuera:** Du kan dela projektet med andra, både kommersiellt och icke-kommersiellt.
- **Frihet att modifiera:** Du kan ändra projektet och använda det i dina egna projekt.
- **Krav:** Du måste inkludera originallicensens text i alla kopior eller betydande delar av projektet.

För mer information, se den fullständiga licenstexten i [LICENSE-filen](LICENSE).


## Driftsättning
- Applikation är driftsatt på https://dashing-shortbread-81a906.netlify.app/
