
function rysujChoinkę(n) {
	var n;
	var star='*';
	var space=' ';
	for (var j=0; j<=n-1; j++) {
		space=' '+space;
	}
	star=space+star;
	for (var i=0; i<=n-1; i++) {
		console.log(star);
		star +='**';
		star = star.slice(1, star.length);
	}
}
h = prompt('Podaj wysokość choinki'),
console.log(rysujChoinkę(h));

function zaalertuj() {
    alert('Wyświetlam się jednokrotnie po 2 sekundach.');
}

var opoznioneWywolanie = setTimeout(zaalertuj, 2000);