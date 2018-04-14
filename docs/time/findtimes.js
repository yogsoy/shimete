// var currentZone = document.getElementById("timezone");
var date = new Date();
var hours = date.getHours();
var minutes = date.getMinutes();

function findLondonTime() {
	var dateLondon = date-(32400);
	var hourLondon = hours-(9);
	if(hourLondon<0) {
		hourLondon = 24+hourLondon;
	}
// if minutes is 1 digit, add a 0 to fit in with time standards
if(minutes.toString().length != 2) {
	minutes = "0"+minutes;
}
document.getElementById("london").innerHTML = "London time is "+hourLondon+":"+minutes;
}

function findHobartTime() {
	var dateHobart = date-(0);
	var hourHobart = hours-(0);
	if(hourHobart<0) {
		hourHobart = 24+hourHobart;
	}
// if minutes is 1 digit, add a 0 to fit in with time standards
if(minutes.toString().length!=2) {
	minutes = "0"+minutes;
}
document.getElementById("hobart").innerHTML = "Hobart time is "+hourHobart+":"+minutes;
}

function findPhillipinesTime() {
	var datePhillipines = date-(7200);
	var hourPhillipines = hours-(2);
	if(hourPhillipines<0) {
		hourPhillipines = 24+hourPhillipines;
	}
// if minutes is 1 digit, add a 0 to fit in with time standards
if(minutes.toString().length!=2) {
	minutes = "0"+minutes;
}
document.getElementById("phillipines").innerHTML = "Phillipines time is "+hourPhillipines+":"+minutes;
}

function updateAll() {
	findLondonTime();
	findHobartTime();
	findPhillipinesTime();
}