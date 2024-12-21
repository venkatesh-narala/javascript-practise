function simplecalucator(num1, num2, operator) {
	switch (operator) {
		case "+":
			return num1 + num2;
		case "-":
			return num1 - num2;
		case "*":
			return num1 * num2;
		case "/":
			return  num2 !==0 ? num1 / num2: "cannot divide by zero";
		default:
			return "Invalid operator";
	}
}
let num1 = parseFloat(prompt("Enter the 1st number :"));
let num2 = parseFloat(prompt("Enter the 2st number :"));
let operator = prompt("Enter the operator(+,-,*,/):");

let calucateresult = simplecalucator(num1, num2, operator);

document.write(`<p>${num1}${operator}${num2}=${calucateresult}</p>`);
