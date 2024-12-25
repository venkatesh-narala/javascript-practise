/*
Take input from user
n = 5

1 2 3 4 5
1 2 3 4
1 2 3
1 2
1
	     
n = 3
1 2 3
1 2
1
*/

// let num = prompt("Enter the number:")

for (let x = 5; x >=1; x--) {
	for (let y = 1; y <= x; y++) {
		document.write(y);
	}
	document.write("<br>");
}
