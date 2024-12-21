function leap_year(year) {
	if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
		return true;
	} else {
		return false;
	}
}
const year = prompt("Enter the year");

if (leap_year(year)) {
	document.write(`${year} is a leap year`);
} else {
	document.write(`${year} is not a leap year`);
}
leap_year(parseInt(year));
