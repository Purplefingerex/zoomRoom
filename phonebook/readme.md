# Telefonkönyv console app

> A feladat hogy készíts egy telefonkönyv alkalmazást amibe menteni/törölni lehet címeket és meglévő címeket favorite-ra állítani.

## feladat:

- készísd `db.json` file-t és másold be a következőt:
  ```js
  {
      "contacts": [
          {
              "name": "John Doe",
              "number": "+36501112222",
              "isFavorite": false
          },
          {
              "name": "Jane Doe",
              "number": "+365022233333",
              "isFavorite": true
          },
          {
              "name": "Alice",
              "number": "+00143253323",
              "isFavorite": true
          }
      ]
  }
  ```

1. Olvasd be és írasd ki a `db.json` file tartalmát.

1. Készíts egy függvényt ami egy contact-ot hozzá ad a contacts tömbhöz.

1. Írd felül a `db.json` file-t az új contacts tömbbel.

1. Készíts egy console alkalmazást ami a következő parancsokat tudja kezelni:
   - list: soronként kiírja a címeket pl.:(`1. Alice: +00143253323 [X]`).
   - add: hozzá ad egy új címet (név, telefonszám)
   - remove: eltávolítja az adott id(index) alatt található címet.
   - toggle: igaz/hamis-ra állítja az adott id-ú címet.
   - favorite: kilistázza a favorite contact-okat.

- bónusz:  
   Alakítsd át úgy hogy több flag-et tudjon kezelni:

  - pl.:`node phonebook.js list -f` kilistázza az összes favorite-ot
  - `node phonebook.js list -s "Doe"` összes olyan contact akinek neve tartalmaz **doe**-t.

  - telefon könyv szerkesztés `node phonebook.js edit 2 --number "+362342344"`
