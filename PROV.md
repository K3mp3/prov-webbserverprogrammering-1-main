# Prov: Webbserverprogrammering Nivå 1

**Tid:** 80 minuter  
**Hjälpmedel:** Egen dator, VS Code, dokumentation, tidigare kod

---

## Del 1: Teori (10 poäng)

### Fråga 1: HTTP-metoder (5p)
Förklara kortfattat vad följande HTTP-metoder används till och ge ett exempel från era projekt:

**a)** GET (1,5p)  
**b)** POST (1,5p)  
**c)** DELETE (2p)

### Fråga 2: Backend och Frontend (5p)
Förklara hur frontend och backend kommunicerar i era projekt. Vad skickas och i vilket format?

---

## Del 2: Praktisk uppgift (70 poäng)

### Uppgift: Bygg ett API för Träningspass

Du ska skapa en Express-server där användare kan logga sina träningspass.

#### Datamodell
Varje träningspass ska ha följande struktur:
```json
{
  "id": "abc-123",
  "exercise": "Löpning",
  "duration": 45,
  "date": "2025-01-15",
  "notes": "Bra tempo, kändes starkt",
  "timestamp": "2025-01-15T10:30:00.000Z"
}
```

**Fältbeskrivning:**
- `id` - Unikt ID (genereras automatiskt med uuid)
- `exercise` - Typ av träning (t.ex. "Löpning", "Styrketräning", "Cykling")
- `duration` - Längd i minuter (måste vara mellan 1-300)
- `date` - Datum för träningspasset
- `notes` - Fritext med kommentarer om passet
- `timestamp` - När posten skapades (genereras automatiskt)

#### Krav:

**1. Projektstruktur och setup (3p)**
- Skapa korrekt mappstruktur med `server.mjs` och `app.mjs`
- Installera nödvändiga paket (express, uuid, cors)
- Lägg till script i `package.json`: `"dev": "nodemon server.mjs"`

**2. Server setup (9p)**
- `server.mjs` som startar servern på port 3000 (2p)
- `app.mjs` med Express-setup och imports (3p)
- Middleware: `express.json()`, `express.urlencoded()`, `cors()` (4p)

**3. Datahantering (15p)**

**För E-nivå:** All logik kan ligga direkt i routes - inga separata funktioner krävs.

**För C-nivå och A-nivå:** Du måste separera datahanteringen till egna funktioner.

**Funktioner som behövs (för C/A):**

**a)** Funktion för att läsa data från `workouts.json` (5p)
- Kollar om filen finns
- Läser och returnerar data
- Felhantering

**b)** Funktion för att spara nytt träningspass (5p)
- Genererar unikt ID med uuid
- Skapar timestamp
- Sparar till fil

**c)** Funktion för att radera träningspass (5p)
- Använder `.filter()` korrekt
- Returnerar true/false
- Felhantering

**4. GET endpoint (8p)**
```javascript
GET /workouts
```
- Hämtar alla träningspass (3p)
- Returnerar korrekt format: `{ success: true, data: [...] }` (3p)
- Statuskod 200 och felhantering (2p)

**5. POST endpoint (13p)**
```javascript
POST /workouts
```
- Tar emot alla fält från `req.body` (2p)
- Validerar att alla fält finns (4p)
- Validerar att duration är mellan 1-300 (3p)
- Sparar träningspasset (2p)
- Returnerar 201 vid success, 500 vid fel (2p)

**6. DELETE endpoint (8p)**
```javascript
DELETE /workouts/:id
```
- Hämtar ID från `req.params` (2p)
- Raderar träningspasset (3p)
- Returnerar 200 vid success, 404 om inte hittad (2p)
- Felhantering (1p)

**7. Klient (14p) - Krävs för C och A**

**För E-nivå:** Klient behövs inte.

**För C-nivå och A-nivå:** Skapa en enkel webbsida som kommunicerar med backend.

- HTML med formulär och container för att visa träningspass (4p)
- JavaScript som hämtar och visar träningspass vid sidladdning (4p)
- JavaScript som skickar formulärdata till backend (4p)
- Dynamisk visning av träningspass på sidan (2p)

**För A-nivå:** Lägg även till radera-funktion i klienten.

---

## Del 3: Testning med Postman (10 poäng)

Ta screenshots i Postman för följande requests:

1. **GET** alla träningspass (3p)
   - Visa request och response

2. **POST** ett nytt träningspass med alla fält (4p)
   - Visa request body och response

3. **DELETE** ett träningspass med specifikt ID (3p)
   - Visa request och response

Spara alla screenshots i mappen `/postman` i ditt repository och namnge dem: `1-get.png`, `2-post.png`, `3-delete.png`

---

## Bedömningskriterier

### ⚠️ OBS! För att få godkänt krävs att vissa delar fungerar, inte bara poäng!

### Betyg E (40-54 poäng + nedanstående krav)

**Krav som MÅSTE vara uppfyllda:**
- ✅ GitHub-repository är skapat och kod är pushad
- ✅ Korrekt projektstruktur: `server.mjs` och `app.mjs` finns
- ✅ Servern startar utan fel
- ✅ POST endpoint fungerar och sparar data (all logik i routen är OK)
- ✅ Data sparas i JSON-fil

**Övriga krav:**
- Grundläggande Express-server som fungerar
- Enkel datahantering och validering
- Kan testa med Postman
- Teoretiska svar visar grundläggande förståelse

### Betyg C (55-69 poäng + nedanstående krav)

**Krav som MÅSTE vara uppfyllda:**
- ✅ Alla krav för E är uppfyllda
- ✅ GET endpoint fungerar och returnerar korrekt format
- ✅ POST endpoint fungerar med validering
- ✅ Funktioner för datahantering är separerade från routes
- ✅ Enkel klient (HTML + JavaScript) som kan visa och skapa träningspass
- ✅ Minst 3 commits i GitHub

**Övriga krav:**
- Välstrukturerad server med god separation av kod
- Tydlig validering och god felhantering
- Välfungerande Postman-tester (GET och POST)
- Klient som kommunicerar med backend via axios
- Teoretiska svar visar god förståelse

### Betyg A (70-80 poäng + nedanstående krav)

**Krav som MÅSTE vara uppfyllda:**
- ✅ Alla krav för C är uppfyllda
- ✅ DELETE endpoint fungerar korrekt
- ✅ Funktion för att radera från JSON-fil fungerar
- ✅ Radering fungerar i klienten
- ✅ Alla tre endpoints (GET, POST, DELETE) är testade i Postman med screenshots
- ✅ Kod är kommenterad

**Övriga krav:**
- Komplett, välorganiserad och robust lösning
- Omfattande validering och felhantering på alla endpoints
- Fullständiga Postman-tester med screenshots
- Visar djup förståelse för principer och best practices
- Teoretiska svar är utförliga

---

## Sammanfattning av funktionskrav per betyg

| Betyg | GET | POST | DELETE | Separata funktioner | Klient | Min commits |
|-------|-----|------|--------|---------------------|--------|-------------|
| E     | ⚪  | ✅   | ⚪     | ⚪                  | ⚪     | 1           |
| C     | ✅  | ✅   | ⚪     | ✅                  | ✅     | 3           |
| A     | ✅  | ✅   | ✅     | ✅                  | ✅     | 3           |

---

## Inlämning

### Praktisk del:
1. Skapa GitHub-repository: `traningspass-prov`
2. Committa regelbundet (minst 3 commits för C och A)
3. Lämna in länk till repository

### Teoretisk del:
- Skriv svar direkt i ett Word/Google Docs-dokument
- Lämna in som PDF

### Postman-tester:
- Ta screenshots över varje request och response
- Spara i mappen `/postman` i ditt repository
- Namnge filerna: `1-get.png`, `2-post.png`, `3-delete.png`

**Deadline:** [Sätt datum]

---

## Checklista innan inlämning

### För E:
- [ ] GitHub-repository skapat
- [ ] `server.mjs` och `app.mjs` finns
- [ ] Servern startar utan fel
- [ ] POST endpoint fungerar
- [ ] Screenshot på POST i Postman
- [ ] Teoretiska svar inlämnade

### För C (inkluderar allt från E):
- [ ] GET endpoint fungerar
- [ ] Separata funktioner för datahantering
- [ ] Enkel klient som visar och skapar träningspass
- [ ] Minst 3 commits i GitHub
- [ ] Screenshots på GET och POST i Postman
- [ ] Validering finns på POST
- [ ] Kod är pushad till GitHub

### För A (inkluderar allt från C):
- [ ] DELETE endpoint fungerar
- [ ] Radering fungerar i klienten
- [ ] Screenshots på GET, POST och DELETE i Postman
- [ ] Felhantering finns på alla endpoints
- [ ] Kod är kommenterad
- [ ] Teoretiska svar är kompletta

---

## Tips för att lyckas!

💡 **Tidsplanering (80 min totalt):**
- Teori: 10 min
- Setup (repo, struktur, paket): 10 min
- POST endpoint: 20 min (Krav för E)
- GET endpoint + separera funktioner: 15 min (Krav för C)
- Klient (grundläggande): 10 min (Krav för C)
- DELETE endpoint: 15 min (Krav för A)

💡 **Börja med det grundläggande:**
1. Sätt upp projektstruktur
2. Få servern att starta
3. Implementera POST först - all logik i routen (för E)
4. Separera funktioner och lägg till GET (för C)
5. Bygg enkel klient (för C)
6. Lägg till DELETE (för A)

💡 **Testa kontinuerligt i Postman medan du utvecklar**

💡 **Committa efter varje färdig funktion**

💡 **Kommentera din kod - det ger poäng**

**Lycka till!** 💪

---

**Viktigt att komma ihåg:** Även om du har tillräckligt med poäng måste de specifika funktionskraven vara uppfyllda för respektive betyg. Till exempel: 55 poäng men ingen fungerande GET eller ingen klient = max E-betyg.
