function favoritefruit(fruits) {
	let message;

	switch (fruits) {
		case "apple":
			message = "Apple is  my favorite";
			break;
		case "banana":
			message = "Banana fruit is  not my favorite";
			break;
		case "orange":
			message = "Orange is my favorite ";
			break;
		case "mango":
			message = "Mango is my favorite";
			break;
		default:
			message = "Invalid fruit";
			break;
	}
	document.write("<p1>" + fruits + ":" + message + "</p1>");
}
let fruits = prompt("Enter the fruit");

favoritefruit(fruits);
