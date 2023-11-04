const fs = require("fs");

// 1. Olvasd be és írasd ki a db.json file tartalmát.
const dbFile = fs.readFileSync("db.json", "utf8");
const phonebook = JSON.parse(dbFile);
function getContacts() {
	return phonebook;
}

// console.log(getContacts());

// 2. Készíts egy függvényt ami egy contact-ot hozzá ad a contacts tömbhöz.

function addContact(newContact) {
	phonebook.push(newContact);
}

// addContact({ name: "Pista", number: "+36256543218", isFavorite: false });
// console.log(phonebook);

// 3. Írd felül a db.json file-t az új contacts tömbbel.
function save(phonebook) {
	fs.writeFileSync("db.json", JSON.stringify(phonebook));
	console.log("Db saved");
}

function save2(database) {
	fs.writeFileSync("db.json", JSON.stringify(phonebook));
	console.log("Db2 saved");
}
// save();

module.exports = {
	addContact,
	getContacts,
	save,
	save2,
};
