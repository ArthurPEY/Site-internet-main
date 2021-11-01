fetch("header.html").then(contenu => contenu.text()).then(texte => {document.getElementById("header").innerHTML = texte;})
fetch("footer.html").then(contenu => contenu.text()).then(texte => {document.getElementById("footer").innerHTML = texte;})


console.log

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
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

canvas = document.getElementById('imageps5');
context = canvas.getContext('2d');
imageObj = new Image();

imageObj.onload = function change() {
  context.drawImage(imageObj,500, 500,500,500);

};
imageObj.src = 'images/ps5/ps5.png';

function test() {
  context.drawImage(imageObj,0, 0,largeur,hauteur);
  imageObj.src = "images/ps5/fondvert.png"
}

var jd
function joystickd(jd) {
  savejd=jd
  if (jd==1) {
    document.getElementById("idjoyd").src="images/ps5/joydrouge.png";
  }
  if (jd==2) {
    document.getElementById("idjoyd").src="images/ps5/joydvert.png";
  }
  if (jd==3) {
    document.getElementById("idjoyd").src="images/ps5/joydbleu.png";
  }
}

var jg
function joystickg(jg) {
  savejg=jg
  if (jg==1) {
    document.getElementById("idjoyg").src="images/ps5/joygrouge.png";
  }
  if (jg==2) {
    document.getElementById("idjoyg").src="images/ps5/joygvert.png";
  }
  if (jg==3) {
    document.getElementById("idjoyg").src="images/ps5/joygbleu.png";
  }
}

var bt
function btn(bt) {
  savebt=bt
  if (bt==1) {
    document.getElementById("idbtn").src="images/ps5/btnrouge.png";
  }
  if (bt==2) {
    document.getElementById("idbtn").src="images/ps5/btnvert.png";
  }
  if (bt==3) {
    document.getElementById("idbtn").src="images/ps5/btnbleu.png";
  }
}

var back
function fond(back) {
  saveback=back
  if (back==1) {
    document.getElementById("idps5f").src="images/ps5/fondrouge.png";
  }
  if (back==2) {
    document.getElementById("idps5f").src="images/ps5/fondvert.png";
  }
  if (back==3) {
    document.getElementById("idps5f").src="images/ps5/fondbleu.png";
  }
}

var crx
function croix(crx) {
  savecroix=crx
  if (crx=="rouge") {
    document.getElementById("idcroix").src="images/ps5/croixrouge.png";
  }
  if (crx=="vert") {
    document.getElementById("idcroix").src="images/ps5/croixvert.png";
  }
  if (crx==String("bleu")) {
    document.getElementById("idcroix").src="images/ps5/croixbleu.png";
    a=String(bleu)
  }
}


class manette{

  constructor(modele,fond,joystickdroit,joystickgauche,bouton,croixdir,id,prix){
      this.modele = modele;
      this.fond = fond;
      this.joystickdroit = joystickdroit;
      this.joystickgauche = joystickgauche;
      this.bouton = bouton;
      this.croixdir = croixdir;
      this.prix = prix;
      this.id = id;
  }
}