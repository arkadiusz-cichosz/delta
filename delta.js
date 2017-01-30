//zadanie 8.5
var a,b,value;
a=prompt('Podaj wartość b');
b=prompt('Podaj wartość c');
value=(b*b)+(2*b*c)-(c*c);
console.log(value);
if (value>0) {
	console.log('wynik dodatni');
}
else if (value<0) {
	console.log('wynik ujemny')
}
else {
	switch(value) {
		case 0:
			console.log('wynik jest równy 0');
			break;
		default:


	}
}





