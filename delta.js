//zadanie 8.5
var a,b,value;
a=2;
b=5;
value=(a*a)+(2*a*b)-(b*b);
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
			console.log('wynik jest nieprawidłowy lub wprowadzono nieprawidłowe dane')

	}
}





