# Validator Module

## Introduktion

Detta projekt är en enkel JavaScript-modul för validering av lösenord, e-post, namn och ålder. Modulen är utformad för att vara lätt att integrera i webbapplikationer och låter utvecklare lägga till egna regler för validering.

## Kodexempel

Här är ett exempel på hur du använder `PasswordValidator`, `EmailValidator`, `NameValidator`, och `AgeValidator` i en applikation:

```javascript
import { PasswordValidator } from './src/PasswordValidator.js'
import { EmailValidator } from './src/EmailValidator.js'
import { NameValidator } from './src/NameValidator.js'
import { AgeValidator } from './src/AgeValidator.js'

const passwordValidator = new PasswordValidator()
const emailValidator = new EmailValidator()
const nameValidator = new NameValidator()
const ageValidator = new AgeValidator()

// Lägga till regler
passwordValidator.addRule(passwordValidator.containsDangerousCharactersInPassword)
passwordValidator.addRule(passwordValidator.isPasswordLongEnough)
emailValidator.addRule(emailValidator.hasAtSymbol)
nameValidator.addrule(nameValidator.isNameLongEnough)
ageValidator.addrule(ageValidator.hasNumber)

// Validera data
console.log(passwordValidator.validate('Password123!'))
console.log(emailValidator.validate('user@example.com'))
console.log(nameValidator.validate('Erik'))
console.log(ageValidator.validate('25'))
```


## Installation

1. Klona projektet från Github:
   ```
   git clone https://github.com/QuantomErik/1dv610-L2.git
   ```
2. Navigera till projektmappen:
   ```
   cd 1dv610-L2
   ```
3. Installera alla nödvändiga beroenden:
   ```
   npm install
   ```
4. Inkludera filerna från src-mappen i din applikation

## Beroenden, språk, versioner
- Språk: JavaScript (ES6+)
- Beroenden:
- Node.js version: 14+

## Testning

För att köra tester manuellt använder vi Vite för att starta en lokal utvecklingsserver. Följ dessa steg för att testa applikationen manuellt:

1. Installera beroenden om de inte redan är installerade:
   ```
   npm install
   ```
2. Navigera till testmappen:
   ```
   cd Test-App/manual
   ```
3. Starta den lokala utvecklingsservern:
   ```
   npm run dev
   ```

## Buggrapport/Issues

För närvarande skrivs endast ett felmeddalande ut åt gången per valideringsklass även om valideringen misslyckades på ett antal olika krav simultant inom klassen. Detta är något som skulle kunna förbättras inför nästa release version. 

## Versionsnummer och releaser

Projektet följer SemVer för versionsnumrering (ex: v1.0.0):
- v1.0.0: Första stabila versionen

## Bidra till projektet

Varmt välkommen att bidra som utvecklare. Om du vill bidra:

1. Forka projektet till ditt konto.
2. Klona ditt forkade projekt till din lokala maskin:
   ```
   git clone https://github.com/yourusername/1dv610-L2.git
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
