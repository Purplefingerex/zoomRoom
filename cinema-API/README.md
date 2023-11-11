# mozi API

> Egy képzeletbeli mozinak szeretnénk egy jegy eladó backend-et fejleszteni.
> Ebben a moziban mindenki érkezés szerint foglalja el a helyét.

## Adatok:

Adott a következő adatstruktúra a `db/db.json`-ben:

```js
    {
        "screenings": [
            {
                "id": "e1343ebf-e074-4137-9c6f-7c104c4fee9a",
                "movie_title": "57 SECONDS",
                "showtime": "2023-11-09T17:30:00.000Z",
                "capacity": 20,
                "bought_tickets": 10,
                "price": 1850
            },
            ...
        ]
    }
```

- **screenings:** Olyan tömb ami az adott vetítéseket tartalmazza.
- **movie_title:** A vetített film címe.
- **showtime:** Film kezdése ISOString-ben.
- **capacity:** A terem férőhelye.
- **bought_tickets**: Eladott jegyek _(nem lehet nagyobb mint a terem férőhelye!)_.
- **price:** Jegy egység ára.

### I. Adat manipuláció - üzleti logika:

- A `cinema-service.js`-be old meg a következő feladatokat:

1. Olvasd be a `db/db.json` tartalmát és alakítsd JS object-é.

1. Csinálj egy függvényt ami vissza adja hány üres szék van még egy adott vetítésen.

1. Írj egy olyan `save` függvényt ami képes felülírni a `db/db.json`-t egy adott object-el.

1. Készíts egy olyan függvényt amivel jegyet lehet venni egy adott vetítésre:

   - Két paramétert várjon (vetítés azonosítóját(id), és a vásárolandó jegyek számát).
   - Ha az adott vetítésre nincs elegendő szabad hely térjen vissza `false`-al
   - Ha van elegendő hely akkor az adott vetítésbe növelje meg a `bought_tickets` értékét a vásárolandó jegyek számával.
   - Sikeres vásárlás esetén mentse az adatbázisba a módosítást (`save` függvény meghívásával) és térjen vissza `true` értékkel.

1. Csinálj egy olyan függvényt ami vetítéseket tud létrehozni:

   - A bought_tickets minden esetben 0 érték legyen (ne lehessen kívűlről megadni).
   - id: crypro.randomUUID() által generálódjon.
   - sikeres létrehozás esetén mentse az adatbázisba.

1. Készíts egy vetítés törlés függvényt:
   - Csak akkor lehessen törölni ha nincs eladott jegy!
   - sikeres törlés esetén mentse az adatbásiba.

### II. screenings router:

- A `screenings-router.js` file-ba készítsd el a következő endpoint-okat.

1. `GET /` Az összes vetítést adja vissza.

1. `GET /:id` Egy adott vetítést ad vissza.

1. `POST /` Létrehoz egy vetítést.

1. `POST /:id/bookings` Jegyet lehet venni az adott vetítésre:

   - body-ban érkezzen a vásárlandó jegyek száma.

1. `DELETE /:id` Töröljön egy vetítést.

1. Add hozzá az `app`-odhoz a `screeningsRouter`-t a `/screenings` elérési útra.
