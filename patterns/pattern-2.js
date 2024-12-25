/*
Take input from user
n = 5
1 
1 2 
1 2 3 
1 2 3 4 
1 2 3 4 5

n = 3
1 
1 2 
1 2 3
*/

let num = prompt("Enter the number:");

for (let x = 1; x <= num; x++) {
	for (let y = 1; y <= x; y++) {
		document.write(y);
	}
	document.write("<br>");
}
