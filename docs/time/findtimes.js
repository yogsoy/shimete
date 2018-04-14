var currentZone = document.getElementById("timezone");
var date = new Date();
var hours = date.getHours();
var minutes = date.getMinutes();

function findLondonTime() {
	var dateLondon = date-(currentZone*3600-32400);
	var hourLondon = hours-(currentZone+9);
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
	var dateHobart = date-(currentZone*3600-32400);
	var hourHobart = hours-(currentZone+10);
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
	var datePhillipines = date-(currentZone*3600-7200);
	var hourPhillipines = hours-(currentZone+2);
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