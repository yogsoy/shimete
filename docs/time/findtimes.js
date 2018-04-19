var date = new Date();
var hours = date.getHours();
var minutes = date.getMinutes();
var placed;
var currentOffset = date.getTimezoneOffset() * 60;
var currentOffsetHours = currentOffset / 60 / 60;
console.log("current offset is: " + currentOffset);
console.log("hours offset is: " + currentOffsetHours);



function findLondonTime() {
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
}



function findHobartTime() {
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
}



function findPhillipinesTime() {
	var date = new Date();
	var datePhillipines = date - currentOffset + 7200;
	var hourPhillipines = hours + currentOffsetHours + 8;
	if(hourPhillipines<0) {
		hourPhillipines = 24+hourPhillipines;
	}
if(hourPhillipines.toString().length !=2) {
	hourPhillipines = "0"+hourPhillipines;
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