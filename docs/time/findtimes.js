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
var timePolandPlaced = false;
var timeArabianPeninsulaPlaced = false;
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
}

function findLondonTime() {
	if(!timeLondonPlaced) {
		var date = new Date();
		var dateLondon = date - currentOffset + 3600;
		var hourLondon = hours + currentOffsetHours + 1;
		if(timeFormat == false) {
			if(hourLondon<0) {
				hourLondon = 24+hourLondon;
			}
			if(hourLondon > 12) {
				hourLondon = hourLondon - 12;
				timeAMPM = "PM";
			} else if(hourLondon < 12) {
				if(hourLondon < 2) {
					hourLondon < 22;
				}
				timeAMPM = "AM";
			}
		}
		if(timeFormat == true) {
			if(hourLondon<0) {
				hourLondon = 24+hourLondon;
			}
			// if hour is 1 digit, add a 0 to fit in with time standards
			if(hourLondon.toString().length !=2) {
				hourLondon = "0"+hourLondon;
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
				hourHobart = 24+hourHobart;
			}
			if(hourHobart > 11) {
				hourHobart = hourHobart - 12;
				timeAMPM = "PM";
			} else if(hourHobart < 12) {
				if(hourHobart < 2) {
					hourHobart < 22;
				}
				timeAMPM = "AM";
			}
		}
		if(timeFormat == true) {
			if(hourHobart<0) {
				hourHobart = 24+hourHobart;
			}
			// if hour is 1 digit, add a 0 to fit in with time standards
			if(hourHobart.toString().length != 2) {
				hourHobart = "0"+hourHobart;
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
		var datePhilippines = date - currentOffset + 28800;
		var hourPhilippines = hours + currentOffsetHours + 8;
		if(timeFormat == false) {
			if(hourPhilippines<0) {
				hourPhilippines = 24+hourPhilippines;
			}
			if(hourPhilippines > 12) {
				hourPhilippines = hourPhilippines - 12;
				timeAMPM = "PM";
			} else if(hourPhilippines < 12) {
				if(hourPhilippines < 2) {
					hourPhilippines < 22;
				}
				timeAMPM = "AM";
			}
		}
		if(timeFormat == true) {
			if(hourPhilippines<0) {
				hourPhilippines = 24+hourPhilippines;
			}
			// if hour is 1 digit, add a 0 to fit in with time standards
			if(hourPhilippines.toString().length !=2) {
				hourPhilippines = "0"+hourPhilippines;
			}
		}
		// if minutes is 1 digit, add a 0 to fit in with time standards
		if(minutes.toString().length != 2) {
			minutes = "0"+minutes;
		}
		document.getElementById("philippines").innerHTML = "Philippines time is "+hourPhilippines+":"+minutes+timeAMPM;
		timePhilippinesPlaced = true;
	} else {
		document.getElementById("philippines").innerHTML = null;
		timePhilippinesPlaced = false;
	}
}

function findPolandTime() {
	if(!timePolandPlaced) {
		var date = new Date();
		var datePoland = date - currentOffset + 7200;
		var hourPoland = hours + currentOffsetHours + 2;
		if(timeFormat == false) {
			if(hourPoland<0) {
				hourPoland = 24+hourPoland;
			}
			if(hourPoland > 12) {
				hourPoland = hourPoland - 12;
				timeAMPM = "PM";
			} else if(hourPoland < 12) {
				if(hourPoland < 2) {
					hourPoland < 22;
				}
				timeAMPM = "AM";
			}
		}
		if(timeFormat == true) {
			if(hourPoland<0) {
				hourPoland = 24+hourPoland;
			}
			// if hour is 1 digit, add a 0 to fit in with time standards
			if(hourPoland.toString().length !=2) {
				hourPoland = "0"+hourPoland;
			}
		}
		// if minutes is 1 digit, add a 0 to fit in with time standards
		if(minutes.toString().length != 2) {
			minutes = "0"+minutes;
		}
		document.getElementById("poland").innerHTML = "Poland time is "+hourPoland+":"+minutes+timeAMPM;
		timePolandPlaced = true;
	} else {
		document.getElementById("poland").innerHTML = null;
		timePolandPlaced = false;
	}
}

function findArabianPeninsulaTime() {
	if(!timeArabianPeninsulaPlaced) {
		var date = new Date();
		var dateArabianPeninsula = date - currentOffset + 10800;
		var hourArabianPeninsula = hours + currentOffsetHours + 3;
		if(timeFormat == false) {
			if(hourArabianPeninsula<0) {
				hourArabianPeninsula = 24+hourArabianPeninsula;
			}
			if(hourArabianPeninsula > 12) {
				hourArabianPeninsula = hourArabianPeninsula - 12;
				timeAMPM = "PM";
			} else if(hourArabianPeninsula < 12) {
				if(hourArabianPeninsula < 2) {
					hourArabianPeninsula < 22;
				}
				timeAMPM = "AM";
			}
		}
		if(timeFormat == true) {
			if(hourArabianPeninsula<0) {
				hourArabianPeninsula = 24+hourArabianPeninsula;
			}
			// if hour is 1 digit, add a 0 to fit in with time standards
			if(hourArabianPeninsula.toString().length !=2) {
				hourArabianPeninsula = "0"+hourArabianPeninsula;
			}
		}
		// if minutes is 1 digit, add a 0 to fit in with time standards
		if(minutes.toString().length != 2) {
			minutes = "0"+minutes;
		}
		document.getElementById("arabianpeninsula").innerHTML = "Arabian Peninsula time is "+hourArabianPeninsula+":"+minutes+timeAMPM;
		timeArabianPeninsulaPlaced = true;
	} else {
		document.getElementById("arabianpeninsula").innerHTML = null;
		timeArabianPeninsulaPlaced = false;
	}
}

function updateAll() {
	timeLondonPlaced = false;
	timeHobartPlaced = false;
	timePhilippinesPlaced = false;
	timePolandPlaced = false;
	timeArabianPeninsulaPlaced = false;
	findLondonTime();
	findHobartTime();
	findPhilippinesTime();
	findPolandTime();
	findArabianPeninsulaTime();
}