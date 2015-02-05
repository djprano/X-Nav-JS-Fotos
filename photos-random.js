/**
 * @author Víctor Jesús Temprano Hernández
 */

var nimages = 8; 
function loadImg(div) {
	var n1 = Math.floor(Math.random() * nimages);
	var div = document.getElementById(div);
	var tempdiv;
	for ( i = 0; i < nimages; i++) {
		tempdiv = document.getElementById(String(i));
		if (tempdiv.style.display == 'block') {
			tempdiv.style.display = 'none';
		}

	}
	document.getElementById(String(n1)).style.display = 'block';

}

loadImg('imagen');