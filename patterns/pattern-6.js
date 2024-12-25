/*
Take input from user
n = 5
	      5 
      4 5 
    3 4 5
  2 3 4 5 
1 2 3 4 5

n = 3
    3 
  2 3 
1 2 3
*/

let num = prompt("Enter the number:")

for (let x = num; x >= 1; x--) {
	for (let y = 1; y <= num; y++) {
		if (y < x) {
			document.write("&nbsp;&nbsp;");
		} else {
			document.write(y);
		}
	}
	document.write("<br>");
}
