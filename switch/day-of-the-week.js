function getDayOfWeek(daynumber) {
	daynumber = parseInt(daynumber);

	let dayname;

	switch (daynumber) {
		case 1:
			dayname = "Monday";
			break;
		case 2:
			dayname = "Tuesday";
			break;
		case 3:
			dayname = "Wednesday";
			break;
		case 4:
			dayname = "Thursday";
			break;
		case 5:
			dayname = "Friday";
			break;
		case 6:
			dayname = "Saturday";
			break;
		case 7:
			dayname = "Sunday";
			break;
		default:
			dayname = "invalid day number.please enter a between number 1 to 7";
			break;
	}
	document.write("<p1> Day " + daynumber + ":" + dayname + "</p1>");
}

let daynumber = prompt("Enter the number");

getDayOfWeek(daynumber);
