/**
 * @author Víctor Jesús Temprano Hernández
 */

var urls = ["http://pioneerdj.com/spanish/template/images/products/player/zoom_cdj_850_k1_l.jpg",
"http://www.djworx.com/skratchworx/images/Pioneer/cdj1000mk3/CDJ-1000MK3_top.jpg",
"http://thelinker.es/wp-content/uploads/2015/01/Pioneer-CDJ2000-Nexus3.jpg",
"http://pioneerdj.com/spanish/template/images/products/player/zoom_cdj_850_1_l.jpg",
"http://www.pioneer-latin.com/downloads/cdj-350-s_top_low.jpg",
"http://www.pioneer.eu/images/products/cdplayerdj/pioneer/cdj200_large.jpg",
"http://www.pioneer.eu/images/products/cdplayerdj/pioneer/cdj1000mkiitop_large.jpg",
"http://www.pioneer-latin.com/downloads/cdj-200_top_hi.jpg"];




function loadImg(div) {
	var n1 = Math.floor(Math.random() * urls.length);
	var div = document.getElementById(div);
	div.innerHTML ='<img src="'+urls[n1]+'"alt="CDJ" height="500" width="500">';

}

loadImg('imagen');
