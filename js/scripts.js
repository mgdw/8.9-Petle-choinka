
function rysujChoinkę(n) {
	var n;
	var star='*'
	var space=' '
	var s=' ';
	for (var j=0; j<=n-1; j++) {
		space=s+space;
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