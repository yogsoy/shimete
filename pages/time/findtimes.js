/*
	TODO:
	fix design in general
*/

var date = new Date();
var hours = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();
var timeLondonPlaced = false;
var timeHobartPlaced = false;
var timePhilippinesPlaced = false;
var timePolandPlaced = false;
var timeArabianPeninsulaPlaced = false;
var currentOffset = date.getTimezoneOffset() * 60;
var currentOffsetHours = currentOffset / 60 / 60;
var timeAMPM = "";
var timeFormat = true;
//console.log("current offset is: " + currentOffset);
//console.log("hours offset is: " + currentOffsetHours);

function autoReload() {
	location.reload();
}

function startUpdating() {
	setTimeout(autoReload, 120000);
	updateAll();
	setInterval(updateAll, 1000);
}

function setFormat(format) {
	if(format == "12hour") {
		timeFormat = false;
		//console.log("eeeeE");
		document.getElementById("selectedformat").innerHTML = "Currently selected time format: 12 hour (4:48PM)";
	} else {
		timeFormat = true;
		timeAMPM = "";
		document.getElementById("selectedformat").innerHTML = "Currently selected time format: 24 hour (16:48)";
	}
	//timeFormat = format;
}

function findLondonTime() {
	if(!timeLondonPlaced) {
		var date = new Date();
		var dateLondon = date - currentOffset + 3600;
		var hourLondon = hours + currentOffsetHours + 1;
		// if time format is set to 12hours
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
		// if time format is set to 24hours
		if(timeFormat == true) {
			if(hourLondon<0) {
				hourLondon = 24+hourLondon;
			}
			// if hour is 1 digit, add a 0 to fit in with time standards
			if(hourLondon.toString().length == 1) {
				hourLondon = "0"+hourLondon;
			}
		}
		document.getElementById("london").innerHTML = "London time is "+hourLondon+":"+minutes+":"+seconds+timeAMPM;
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
			if(hourHobart.toString().length == 1) {
				hourHobart = "0"+hourHobart;
			}
		}
		document.getElementById("hobart").innerHTML = "Hobart time is "+hourHobart+":"+minutes+":"+seconds+timeAMPM;
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
			if(hourPhilippines.toString().length == 1) {
				hourPhilippines = "0"+hourPhilippines;
			}
		}
		document.getElementById("philippines").innerHTML = "Philippines time is "+hourPhilippines+":"+minutes+":"+seconds+timeAMPM;
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
			if(hourPoland.toString().length == 1) {
				hourPoland = "0"+hourPoland;
			}
		}
		document.getElementById("poland").innerHTML = "Poland time is "+hourPoland+":"+minutes+":"+seconds+timeAMPM;
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
			if(hourArabianPeninsula.toString().length == 1) {
				hourArabianPeninsula = "0"+hourArabianPeninsula;
			}
		}
		document.getElementById("arabianpeninsula").innerHTML = "Arabian Peninsula time is "+hourArabianPeninsula+":"+minutes+":"+seconds+timeAMPM;
		timeArabianPeninsulaPlaced = true;
	} else {
		document.getElementById("arabianpeninsula").innerHTML = null;
		timeArabianPeninsulaPlaced = false;
	}
}

function updateAll() {
	var date = new Date();
	var hours = date.getHours();
	var minutes = date.getMinutes();
	var seconds = date.getSeconds();
	// console.log(date, " and ", hours, " and ", minutes, " and ", seconds)
	incrementTime();
	fixLengths();
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
	findLocalTime();
	// console.log("running updateAll()");
}

function findLocalTime() {
	
}

function fixLengths() {
	if(minutes.toString().length == 1) {
		minutes = "0"+minutes;
	}
	if(seconds.toString().length == 1) {
		seconds = "0"+seconds;
	}
}

function incrementTime() {
	// Note: make sure that you're actually using test operators, and not setting a variable. (seconds = 60) != (seconds == 60)
	seconds++;
	if(seconds == 60) {
		seconds = 0;
		minutes++;
	}
	if(minutes == 60) {
		minutes = 0;
		hours++;
	}
	if(timeFormat) {
		if(hours > 24) {
			hours = 0;
		}
	}
	if(!timeFormat) {
		if(hours > 12) {
			hours = 1;
			timeAMPM = "AM";
		}
	}
}
