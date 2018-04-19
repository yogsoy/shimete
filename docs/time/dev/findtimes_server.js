/*
	TODO:
	Add toggle switch to switch between 24 and 12 hour time.
	have time update live using loops or whatever.
	remove time when button is clicked again (use placed var)
	fix design in general
*/

var date = new Date();
var hours = date.getHours();
var minutes = date.getMinutes();
var timeLondonPlaced = false;
var timeHobartPlaced = false;
var timePhilippinesPlaced = false;
var currentOffset = date.getTimezoneOffset() * 60;
var currentOffsetHours = currentOffset / 60 / 60;
console.log("current offset is: " + currentOffset);
console.log("hours offset is: " + currentOffsetHours);



function findLondonTime() {
	if(!timeLondonPlaced) {
		var date = new Date();
		var dateLondon = date - (currentOffset + 3600);
		var hourLondon = hours + currentOffsetHours + 1;
		if(hourLondon<0) {
			console.log("hourLondon is less than 0");
			hourLondon = 24+hourLondon;
		}
		if(hourLondon.toString().length !=2) {
			hourLondon = "0"+hourLondon;
		}
		// if minutes is 1 digit, add a 0 to fit in with time standards
		if(minutes.toString().length != 2) {
			minutes = "0"+minutes;
		}
		document.getElementById("london").innerHTML = "London time is "+hourLondon+":"+minutes;
		timeLondonPlaced = true;
	} else {
		document.getElementById("london").innerHTML = null;
		timeLondonPlaced = false;
	}
}



function findHobartTime() {
	if(!timeHobartPlaced) {
		var date = new Date();
		var dateHobart = date - currentOffset + 36000;
		var hourHobart = hours + currentOffsetHours + 10;
		if(hourHobart<0) {
			hourHobart = 24+hourHobart;
		}
		if(hourHobart.toString().length !=2) {
			hourHobart = "0"+hourHobart;
		}
		// if minutes is 1 digit, add a 0 to fit in with time standards
		if(minutes.toString().length!=2) {
			minutes = "0"+minutes;
		}
		document.getElementById("hobart").innerHTML = "Hobart time is "+hourHobart+":"+minutes;
		timeHobartPlaced = true;
	} else {
		document.getElementById("hobart").innerHTML = null;
		timeHobartPlaced = false;
	}
}



function findPhilippinesTime() {
	if(!timePhilippinesPlaced) {
		var date = new Date();
		var datePhilippines = date - currentOffset + 7200;
		var hourPhilippines = hours + currentOffsetHours + 8;
		if(hourPhilippines<0) {
			hourPhilippines = 24+hourPhilippines;
		}
		if(hourPhilippines.toString().length !=2) {
			hourPhilippines = "0"+hourPhilippines;
		}
		// if minutes is 1 digit, add a 0 to fit in with time standards
		if(minutes.toString().length!=2) {
			minutes = "0"+minutes;
		}
		document.getElementById("philippines").innerHTML = "Philippines time is "+hourPhilippines+":"+minutes;
		timePhilippinesPlaced = true;
	} else {
		document.getElementById("philippines").innerHTML = null;
		timePhilippinesPlaced = false;
	}
}



function updateAll() {
	findLondonTime();
	findHobartTime();
	findPhilippinesTime();
}