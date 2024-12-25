/*
Take input from user
n = 5
5 4 3 2 1
5 4 3 2 1
5 4 3 2 1
5 4 3 2 1
5 4 3 2 1

n = 3
3 2 1
3 2 1
3 2 1
*/

let num = prompt("Enter the number:");

for (let x =num; x >= 1; x--) {
	for (let y = num; y >= 1; y--) {
		document.write(y);
	}
	document.write("<br>");
}
