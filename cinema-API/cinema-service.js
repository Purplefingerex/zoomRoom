// I. Adat manipuláció - üzleti logika
const crypto = require("crypto");
const express = require("express");
const path = require("path");

const fs = require("fs");
const fsPromise = require("fs/promises");

const dbPath = path.join("db", "db.json");

/////////////////////////////////////////////////////////////////////////////
/*
let db = fsPromise
	.readFile(dbPath, "utf8")
	.then(database => JSON.parse(database));

//  2. felatad
function emptySeats(id) {
	db.then(data =>
		data.screenings.find(movie => {
			let result;
			if (movie.id === id) {
				result = movie.capacity - movie.bought_tickets;
				console.log(`Number of empty seats are: ${result}`);
			}
		})
	);
}

// emptySeats("e1343ebf-e074-4137-9c6f-7c104c4fee9a");

function save() {
	db.then(data => {});
}

*/ ////////////////////////////////////////////////////////////////////////////

// 1. feladat
const data = fs.readFileSync("db/db.json", "utf8");
const cinemaData = JSON.parse(data);

// 2. feladat

const getFreeSeats = id => {
	const screening = cinemaData.screenings.find(
		screening => screening.id === id
	);
	if (screening == null) {
		throw new Error("ERROR: Screening not found");
	}
	return screening.capacity - screening.bought_tickets;
};

function getScreening(id) {
	const screening = cinemaData.screenings.find((screening, index) => {
		screening.id === id;
		return screening;
	});
	return screening;
}

// try {
// 	const freeSeats = getFreeSeats("55");
// 	console.log(freeSeats);
// } catch (err) {
// 	console.log(err.message);
// }

// 3.feladat

function save(database) {
	fs.writeFileSync("./db/db.json", JSON.stringify(database));
	console.log("Database saved");
}

// 4.feladat

function buyTicket(id, numberOfTickets) {
	const freeSeats = getFreeSeats(id);
	if (freeSeats >= numberOfTickets) {
		const chosenMovie = getScreening(id);
		chosenMovie.bought_tickets += numberOfTickets;
		console.log(`Tickets bought: ${numberOfTickets}`);
		save(cinemaData);
		return true;
	} else {
		return false;
	}
}

// buyTicket("7aefd506-2538-40c3-84f1-a4b3b156aa04", 2);

// 5. feladat

function createScreening(movieTitle, showTime, capacity, price) {
	const newScreening = {
		id: crypto.randomUUID(),
		movieTitle: movieTitle,
		showTime: showTime,
		capacity: capacity,
		bought_tickets: 0,
		price: price,
	};
	cinemaData.screenings.push(newScreening);
	console.log("Screening added.");
	save(cinemaData);
	return;
}

// createScreening("Terminator 7", "2023-12-12T17:00:00.000Z", 40, 2000);

// 6. feladat

function removeScreening(id) {
	const chosenMovie = getScreening(id);
	if (chosenMovie.bought_tickets === 0) {
		console.log(cinemaData.screenings + "remove func");
		return;
	}
}

removeScreening("912df4c5-0ed0-49ed-be52-3da00cf1f049");

module.exports = {
	getFreeSeats,
	save,
	buyTicket,
	createScreening,
};
