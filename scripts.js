/* FILTROS */

function filterAll() {
    document.getElementById("video").style.display = "block";
    document.getElementById("1").style.display = "block";
    document.getElementById("24").style.display = "block";
    document.getElementById("22").style.display = "block";
    document.getElementById("23").style.display = "block";
    document.getElementById("2").style.display = "block";
    document.getElementById("3").style.display = "block";
    document.getElementById("4").style.display = "block";
    document.getElementById("5").style.display = "block";
    document.getElementById("6").style.display = "block";
    document.getElementById("7").style.display = "block";
    document.getElementById("8").style.display = "block";

    document.getElementById("all").className = "current";
    document.getElementById("commercial").className = "no-current";
    document.getElementById("musicvideos").className = "no-current";
    document.getElementById("film").className = "no-current";

    document.getElementById("footer").className = "";
}

function filterCommercial() {
    document.getElementById("video").style.display = "none";
    document.getElementById("24").style.display = "block";
    document.getElementById("22").style.display = "none";
    document.getElementById("23").style.display = "none";
    document.getElementById("1").style.display = "none";
    document.getElementById("2").style.display = "none";
    document.getElementById("3").style.display = "none";
    document.getElementById("4").style.display = "none";
    document.getElementById("5").style.display = "block";
    document.getElementById("6").style.display = "none";
    document.getElementById("7").style.display = "none";
    document.getElementById("8").style.display = "none";

    document.getElementById("all").className = "no-current";
    document.getElementById("commercial").className = "current";
    document.getElementById("musicvideos").className = "no-current";
    document.getElementById("film").className = "no-current";

    document.getElementById("footer").className = "footer-contact";
}

function filterMusicVideos() {
    document.getElementById("video").style.display = "none";
    document.getElementById("24").style.display = "none";
    document.getElementById("22").style.display = "block";
    document.getElementById("23").style.display = "block";
    document.getElementById("1").style.display = "block";
    document.getElementById("2").style.display = "none";
    document.getElementById("3").style.display = "none";
    document.getElementById("4").style.display = "none";
    document.getElementById("5").style.display = "none";
    document.getElementById("6").style.display = "block";
    document.getElementById("7").style.display = "block";
    document.getElementById("8").style.display = "block";

    document.getElementById("all").className = "no-current";
    document.getElementById("commercial").className = "no-current";
    document.getElementById("musicvideos").className = "current";
    document.getElementById("film").className = "no-current";

    document.getElementById("footer").className = "";
}

function filterFilm() {
    document.getElementById("video").style.display = "none";
    document.getElementById("24").style.display = "none";
    document.getElementById("22").style.display = "none";
    document.getElementById("23").style.display = "none";
    document.getElementById("1").style.display = "none";
    document.getElementById("2").style.display = "block";
    document.getElementById("3").style.display = "block";
    document.getElementById("4").style.display = "block";
    document.getElementById("5").style.display = "none";
    document.getElementById("6").style.display = "none";
    document.getElementById("7").style.display = "none";
    document.getElementById("8").style.display = "none  ";

    document.getElementById("all").className = "no-current";
    document.getElementById("commercial").className = "no-current";
    document.getElementById("musicvideos").className = "no-current";
    document.getElementById("film").className = "current";

    document.getElementById("footer").className = "";
}

/* galeria 24 */
function myFunctionMinusFour() {
    document.getElementById("galeria-menos-cuatro").style.cssText  = "display: flex;";
    document.getElementById("video").style.cssText  = "display: none;";
    document.getElementById("1").style.cssText  = "margin-top: 50px;";
}

function closeWindowMinusFour() {
    document.getElementById("galeria-menos-cuatro").style.display = "none";
    document.getElementById("1").style.cssText  = "margin-top: 25px;";
}


var slideIndex = 1;
showDivsMinusFour(slideIndex);

function plusDivsMinusFour(n) {
showDivsMinusFour(slideIndex += n);
}

function showDivsMinusFour(n) {
var i;
var x = document.getElementsByClassName("mySlidesMinusFour");
if (n > x.length) {slideIndex = 1}
if (n < 1) {slideIndex = x.length}
for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
}
x[slideIndex-1].style.display = "block";  
}
/* ----24---- */

/* galeria 22 */
function myFunctionMinusTwo() {
    document.getElementById("galeria-menos-dos").style.cssText  = "display: flex;";
    document.getElementById("video").style.cssText  = "display: none;";
    document.getElementById("1").style.cssText  = "margin-top: 50px;";
}

function closeWindowMinusTwo() {
    document.getElementById("galeria-menos-dos").style.display = "none";
    document.getElementById("1").style.cssText  = "margin-top: 25px;";
}


var slideIndex = 1;
showDivsMinusTwo(slideIndex);

function plusDivsMinusTwo(n) {
showDivsMinusTwo(slideIndex += n);
}

function showDivsMinusTwo(n) {
var i;
var x = document.getElementsByClassName("mySlidesMinusTwo");
if (n > x.length) {slideIndex = 1}
if (n < 1) {slideIndex = x.length}
for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
}
x[slideIndex-1].style.display = "block";  
}
/* ----22---- */
/* galeria 23 */
function myFunctionMinusThree() {
    document.getElementById("galeria-menos-tres").style.cssText  = "display: flex;";
    document.getElementById("video").style.cssText  = "display: none;";
    document.getElementById("1").style.cssText  = "margin-top: 50px;";
}

function closeWindowMinusThree() {
    document.getElementById("galeria-menos-tres").style.display = "none";
    document.getElementById("1").style.cssText  = "margin-top: 25px;";
}


var slideIndex = 1;
showDivsMinusThree(slideIndex);

function plusDivsMinusThree(n) {
showDivsMinusThree(slideIndex += n);
}

function showDivsMinusThree(n) {
var i;
var x = document.getElementsByClassName("mySlidesMinusThree");
if (n > x.length) {slideIndex = 1}
if (n < 1) {slideIndex = x.length}
for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
}
x[slideIndex-1].style.display = "block";  
}
/* ----23---- */

/* galeria 1 */
function myFunction() {
    document.getElementById("galeria-uno").style.cssText  = "display: flex;";
    document.getElementById("video").style.cssText  = "display: none;";
    document.getElementById("1").style.cssText  = "margin-top: 50px;";
}

function closeWindow() {
    document.getElementById("galeria-uno").style.display = "none";
    document.getElementById("1").style.cssText  = "margin-top: 25px;";
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
    document.getElementById("1").style.cssText  = "margin-top: 50px;";
}

function closeWindowTwo() {
    document.getElementById("galeria-dos").style.display = "none";
    document.getElementById("1").style.cssText  = "margin-top: 25px;";
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
    document.getElementById("1").style.cssText  = "margin-top: 50px;";
}

function closeWindowThree() {
    document.getElementById("galeria-tres").style.display = "none";
    document.getElementById("1").style.cssText  = "margin-top: 25px;";
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
    document.getElementById("1").style.cssText  = "margin-top: 50px;";
}

function closeWindowFour() {
    document.getElementById("galeria-cuatro").style.display = "none";
    document.getElementById("1").style.cssText  = "margin-top: 25px;";
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
/* galeria 5 */
function myFunctionFive() {
    document.getElementById("galeria-cinco").style.cssText  = "display: flex;";
    document.getElementById("video").style.cssText  = "display: none;";
    document.getElementById("1").style.cssText  = "margin-top: 50px;";
}

function closeWindowFive() {
    document.getElementById("galeria-cinco").style.display = "none";
    document.getElementById("1").style.cssText  = "margin-top: 25px;";
}

var slideIndex = 1;
showDivsFive(slideIndex);

function plusDivsFive(n) {
showDivsFive(slideIndex += n);
}

function showDivsFive(n) {
var i;
var x = document.getElementsByClassName("mySlidesFive");
if (n > x.length) {slideIndex = 1}
if (n < 1) {slideIndex = x.length}
for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
}
x[slideIndex-1].style.display = "block";  
}
/* ----5---- */
/* galeria 6 */
function myFunctionSix() {
    document.getElementById("galeria-seis").style.cssText  = "display: flex;";
    document.getElementById("video").style.cssText  = "display: none;";
    document.getElementById("1").style.cssText  = "margin-top: 50px;";
}

function closeWindowSix() {
    document.getElementById("galeria-seis").style.display = "none";
    document.getElementById("1").style.cssText  = "margin-top: 25px;";
}

var slideIndex = 1;
showDivsSix(slideIndex);

function plusDivsSix(n) {
showDivsSix(slideIndex += n);
}

function showDivsSix(n) {
var i;
var x = document.getElementsByClassName("mySlidesSix");
if (n > x.length) {slideIndex = 1}
if (n < 1) {slideIndex = x.length}
for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
}
x[slideIndex-1].style.display = "block";  
}
/* ----6---- */
/* galeria 7 */
function myFunctionSeven() {
    document.getElementById("galeria-siete").style.cssText  = "display: flex;";
    document.getElementById("video").style.cssText  = "display: none;";
    document.getElementById("1").style.cssText  = "margin-top: 50px;";
}

function closeWindowSeven() {
    document.getElementById("galeria-siete").style.display = "none";
    document.getElementById("1").style.cssText  = "margin-top: 25px;";
}

var slideIndex = 1;
showDivsSeven(slideIndex);

function plusDivsSeven(n) {
showDivsSeven(slideIndex += n);
}

function showDivsSeven(n) {
var i;
var x = document.getElementsByClassName("mySlidesSeven");
if (n > x.length) {slideIndex = 1}
if (n < 1) {slideIndex = x.length}
for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
}
x[slideIndex-1].style.display = "block";  
}
/* ----7---- */
/* galeria 8 */
function myFunctionEight() {
    document.getElementById("galeria-ocho").style.cssText  = "display: flex;";
    document.getElementById("video").style.cssText  = "display: none;";
    document.getElementById("1").style.cssText  = "margin-top: 50px;";
}

function closeWindowEight() {
    document.getElementById("galeria-ocho").style.display = "none";
    document.getElementById("1").style.cssText  = "margin-top: 25px;";
}

var slideIndex = 1;
showDivsEight(slideIndex);

function plusDivsEight(n) {
showDivsEight(slideIndex += n);
}

function showDivsEight(n) {
var i;
var x = document.getElementsByClassName("mySlidesEight");
if (n > x.length) {slideIndex = 1}
if (n < 1) {slideIndex = x.length}
for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
}
x[slideIndex-1].style.display = "block";  
}
/* ----8---- */