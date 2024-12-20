function simplecalucator(num1, num2, opreator) {
	switch (opreator) {
		case "+":
			return num1 + num2;
		case "-":
			return num1 - num2;
		case "*":
			return num1 * num2;
		case "/":
			return num1 / num2;
		default:
			return num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
	}
}
document.write(simplecalucator(2, 7, "+"));
document.write(simplecalucator(12, 15, "-"));
document.write(simplecalucator(2, 7, "*"));
simplecalucator(opreator);
