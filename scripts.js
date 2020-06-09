/* FILTROS */

/* galeria 1 */
function myFunction() {
    document.getElementById("galeria-uno").style.cssText  = "display: flex;";
    document.getElementById("video").style.cssText  = "display: none;";
    document.getElementById("first-image").style.cssText  = "margin-top: 50px;";
}

function closeWindow() {
    document.getElementById("galeria-uno").style.display = "none";
    document.getElementById("video").style.cssText  = "display: block;";
    document.getElementById("first-image").style.cssText  = "margin-top: 25px;";
}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
showDivs(slideIndex += n);
}

function showDivs(n) {
var i;
var x = document.getElementsByClassName("mySlides");
if (n > x.length) {slideIndex = 1}
if (n < 1) {slideIndex = x.length}
for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
}
x[slideIndex-1].style.display = "block";  
}
/* ----1---- */
/* galeria 2 */
function myFunctionTwo() {
    document.getElementById("galeria-dos").style.cssText  = "display: flex;";
    document.getElementById("video").style.cssText  = "display: none;";
    document.getElementById("first-image").style.cssText  = "margin-top: 50px;";
}

function closeWindowTwo() {
    document.getElementById("galeria-dos").style.display = "none";
    document.getElementById("video").style.cssText  = "display: block;";
    document.getElementById("first-image").style.cssText  = "margin-top: 25px;";
}

var slideIndex = 1;
showDivsTwo(slideIndex);

function plusDivsTwo(n) {
showDivsTwo(slideIndex += n);
}

function showDivsTwo(n) {
var i;
var x = document.getElementsByClassName("mySlidesTwo");
if (n > x.length) {slideIndex = 1}
if (n < 1) {slideIndex = x.length}
for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
}
x[slideIndex-1].style.display = "block";  
}
/* ----2---- */
/* galeria 3 */
function myFunctionThree() {
    document.getElementById("galeria-tres").style.cssText  = "display: flex;";
    document.getElementById("video").style.cssText  = "display: none;";
    document.getElementById("first-image").style.cssText  = "margin-top: 50px;";
}

function closeWindowThree() {
    document.getElementById("galeria-tres").style.display = "none";
    document.getElementById("video").style.cssText  = "display: block;";
    document.getElementById("first-image").style.cssText  = "margin-top: 25px;";
}

var slideIndex = 1;
showDivsThree(slideIndex);

function plusDivsThree(n) {
showDivsThree(slideIndex += n);
}

function showDivsThree(n) {
var i;
var x = document.getElementsByClassName("mySlidesThree");
if (n > x.length) {slideIndex = 1}
if (n < 1) {slideIndex = x.length}
for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
}
x[slideIndex-1].style.display = "block";  
}
/* ----3---- */
/* galeria 4 */
function myFunctionFour() {
    document.getElementById("galeria-cuatro").style.cssText  = "display: flex;";
    document.getElementById("video").style.cssText  = "display: none;";
    document.getElementById("first-image").style.cssText  = "margin-top: 50px;";
}

function closeWindowFour() {
    document.getElementById("galeria-cuatro").style.display = "none";
    document.getElementById("video").style.cssText  = "display: block;";
    document.getElementById("first-image").style.cssText  = "margin-top: 25px;";
}

var slideIndex = 1;
showDivsFour(slideIndex);

function plusDivsFour(n) {
showDivsFour(slideIndex += n);
}

function showDivsFour(n) {
var i;
var x = document.getElementsByClassName("mySlidesFour");
if (n > x.length) {slideIndex = 1}
if (n < 1) {slideIndex = x.length}
for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
}
x[slideIndex-1].style.display = "block";  
}
/* ----4---- */