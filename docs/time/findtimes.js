/*
	TODO:
	have time update live using loops or whatever.
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
var timeAMPM = "";
var timeFormat = true;
console.log("current offset is: " + currentOffset);
console.log("hours offset is: " + currentOffsetHours);




function setFormat(format) {
	if(format == "12hour") {
		timeFormat = false;
		document.getElementById("selectedformat") = "Currently selected time format: 12 hour (4:48PM)";
	} else {
		timeFormat = true;
		timeAMPM = "";
		document.getElementById("selectedformat") = "Currently selected time format: 24 hour (16:48)";
	}
	//timeFormat = format;
	console.log("selected format is: " + timeFormat)
}



function findLondonTime() {
	if(!timeLondonPlaced) {
		var date = new Date();
		var dateLondon = date - (currentOffset + 3600);
		var hourLondon = hours + currentOffsetHours + 1;
		if(timeFormat == false) {
			if(hourLondon<0) {
				console.log("hourLondon is less than 0, timeFormat is set to 12hour.");
				hourLondon = 24+hourLondon;
			}
			if(hourLondon > 12) {
				hourLondon = hourLondon - 12;
				timeAMPM = "PM";
			} else if(hourLondon < 12) {
				if(hourLondon = 1) {
					hourLondon = 12;
				}
				timeAMPM = "AM";
			}
		}
		if(timeFormat == true) {
			if(hourLondon<0) {
				console.log("hourLondon is less than 0");
				hourLondon = 24+hourLondon;
				// if hour is 1 digit, add a 0 to fit in with time standards
				if(hourLondon.toString().length !=2) {
					hourLondon = "0"+hourLondon;
				}
			}
		}
		// if minutes is 1 digit, add a 0 to fit in with time standards
		if(minutes.toString().length != 2) {
			minutes = "0"+minutes;
		}
		document.getElementById("london").innerHTML = "London time is "+hourLondon+":"+minutes+timeAMPM;
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
		if(timeFormat == false) {
			if(hourHobart<0) {
				console.log("hourHobart is less than 0, timeFormat is set to 12hour.");
				hourHobart = 24+hourHobart;
			}
			if(hourHobart > 11) {
				hourHobart = hourHobart - 12;
				timeAMPM = "PM";
			} else if(hourHobart < 12) {
				if(hourHobart = 1) {
					hourHobart = 12;
				}
				timeAMPM = "AM";
			}
		}
		if(timeFormat == true) {
			if(hourHobart<0) {
				console.log("hourHobart is less than 0");
				hourHobart = 24+hourHobart;
				// if hour is 1 digit, add a 0 to fit in with time standards
				if(hourHobart.toString().length !=2) {
					hourHobart = "0"+hourHobart;
				}
			}
		}
		// if minutes is 1 digit, add a 0 to fit in with time standards
		if(minutes.toString().length != 2) {
			minutes = "0"+minutes;
		}
		document.getElementById("hobart").innerHTML = "Hobart time is "+hourHobart+":"+minutes+timeAMPM;
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
		if(timeFormat == false) {
			if(hourPhilippines<0) {
				console.log("hourPhilippines is less than 0, timeFormat is set to 12hour.");
				hourPhilippines = 24+hourPhilippines;
			}
			if(hourPhilippines > 12) {
				hourPhilippines = hourPhilippines - 12;
				timeAMPM = "PM";
			} else if(hourPhilippines < 12) {
				if(hourPhilippines = 1) {
					hourPhilippines = 12;
				}
				timeAMPM = "AM";
			}
		}
		if(timeFormat == true) {
			if(hourPhilippines<0) {
				console.log("hourPhilippines is less than 0");
				hourPhilippines = 24+hourPhilippines;
				// if hour is 1 digit, add a 0 to fit in with time standards
				if(hourPhilippines.toString().length !=2) {
					hourPhilippines = "0"+hourPhilippines;
				}
			}
		}
		// if minutes is 1 digit, add a 0 to fit in with time standards
		if(minutes.toString().length != 2) {
			minutes = "0"+minutes;
		}
		document.getElementById("philippines").innerHTML = "Philippines time is "+hourPhilippines+":"+minutes+timeAMPM;
		timePhilippinesPlaced = true;
		console.log("set timePhilippinesPlaced to true");
	} else {
		document.getElementById("philippines").innerHTML = null;
		timePhilippinesPlaced = false;
		console.log("set timePhilippinesPlaced to false");
	}
}



function updateAll() {
	timeLondonPlaced = false;
	timeHobartPlaced = false;
	timePhilippinesPlaced = false;
	findLondonTime();
	findHobartTime();
	findPhilippinesTime();
}