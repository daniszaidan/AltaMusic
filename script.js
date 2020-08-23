function parallax(){
			
	var layout1 = document.getElementById('layout1');
	layout1.style.top = + (window.pageYOffset / 2) + "px";

}
window.addEventListener("scroll", parallax);

function toggleMenu(){
	var menu = document.getElementById('menu-list');
	menu.classList.toggle('menu-open');
}

function shrinkMenu(){
	var distanceY	= window.pageYOffset;
	var shrinkOn 	= 70;
	var nav 	= document.getElementById('nav');
	if (distanceY > shrinkOn) {
		nav.classList.add('smaller');
	} else {
		nav.classList.remove('smaller');
	}
}
window.addEventListener("scroll", shrinkMenu);

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
	showSlides(slideIndex += n);
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("videonya");
	var dots = document.getElementsByClassName("dot");

	if (n > slides.length) {slideIndex = 1}    
	if (n < 1) {slideIndex = slides.length}
	for (i = 0; i < slides.length; i++) {
      		slides[i].style.display = "none";
  	}
  	for (i = 0; i < dots.length; i++) {
     		dots[i].className = dots[i].className.replace(" active", "");
      		// vid.play(); 
 	}
  	slides[slideIndex-1].style.display = "block";  
  	dots[slideIndex-1].className += " active";
}

function playmusic(){

	var minmax = document.getElementById('minmax');
	minmax.style.cssText = "width: auto;";

	var lmp = document.getElementById('layout-music-play');
	lmp.style.cssText = "width: 10%;";

	var ggwp = document.getElementById("music-player");
	ggwp.style.cssText = "width: 100%; overflow: hidden;";

	var music = document.getElementById("musicnya"); 
	music.play();

	$('#myVideo2')[0].pause();
	$('#myVideo1')[0].pause();
}

function next(){

	var artistframe = document.getElementById("artist-frame-2");
	artistframe.style.cssText = "left:-1220px; transition: left 0.7s;";

	var prev = document.getElementById("prev-artist");
	prev.style.visibility='visible';
	var prev = document.getElementById("next-artist");
	prev.style.visibility='hidden';
}
function prev(){
	var artistframe = document.getElementById("artist-frame-2");
	artistframe.style.cssText = "left:0;";

	var prev = document.getElementById("prev-artist");
	prev.style.visibility='hidden';
	var prev = document.getElementById("next-artist");
	prev.style.visibility='visible';
}

function close_button(){
	var ggwp = document.getElementById("music-player");
	ggwp.style.cssText = "width: 0; overflow: hidden;";

	var music = document.getElementById("musicnya"); 
	music.pause();
	music.currentTime = 0;
}

function minmax(){
	var minmax = document.getElementById('minmax');
	minmax.style.cssText = "width: 0; overflow: hidden;";

	var lmp = document.getElementById('layout-music-play');
	lmp.style.cssText = "width: auto;";

	var mp = document.getElementById("music-player");
	mp.style.cssText = "width: 91px; overflow: hidden;";
}