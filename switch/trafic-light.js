function traficlightcolour(colour) {
	let action;

	switch (colour) {
		case "red":
			action = "Stop";
			break;
		case "yellow":
			action = "Prepare";
			break;
		case "green":
			action = "Go";
			break;
	}
	document.write("<p1> " + colour + ":" + action + "</p1>");
}
let colour = prompt("Enter the colour");

traficlightcolour(colour);
