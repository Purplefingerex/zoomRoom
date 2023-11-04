const { userInfo } = require("os");
const { getContacts, addContact, save, save2 } = require("./contact");

const args = process.argv.slice(2);
const command = args[0];

if (command === "add") {
	const newContact = {
		name: args[1],
		number: args[2],
		isFavorite: false,
	};
	addContact(newContact);
	save();
} else if (command === "list") {
	console.log(getContacts());
} else if (command === "remove") {
	const userInput = args[1];
	const currentContacts = getContacts();
	const newContacts = currentContacts.splice(userInput, 1);
	save2(currentContacts);
	console.log("Contact removed.");
	console.log(currentContacts);
} else if (command === "toggle") {
	const userInput = args[1];
	const currentContacts = getContacts();

	if (currentContacts[userInput].isFavorite === true) {
		currentContacts[userInput].isFavorite = false;
	} else {
		currentContacts[userInput].isFavorite = true;
	}
	console.log("Toggle done");
	console.log(currentContacts);
	save2(currentContacts);
} else if (command === "favorite") {
	const currentContacts = getContacts();
	const favoriteContacts = currentContacts.filter(
		contact => contact.isFavorite === true
	);
	console.log(favoriteContacts);
}

// getContacts();
