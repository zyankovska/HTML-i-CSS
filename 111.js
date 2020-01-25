
function button(){
	var a = document.getElementById("ImNaz");
	a.innerHTML = "Zlata Yankovska";
}
function Lista(){
	var b = prompt("Podaj produkt");
	var c = document.getElementById("Lista");
	c.innerHTML=c.innerHTML+"<li>"+b+"</li>";
}

function A() {
	document.getElementById('a').innerHTML = "5";
	document.getElementById('b').innerHTML = "1";
	document.getElementById('c').innerHTML = "2";
	document.getElementById('d').innerHTML = "3";
	document.getElementById('e').innerHTML = "4";
}

function B() {
	document.getElementById('a').innerHTML = "4";
	document.getElementById('b').innerHTML = "5";
	document.getElementById('c').innerHTML = "1";
	document.getElementById('d').innerHTML = "2";
	document.getElementById('e').innerHTML = "3";
}

function C() {
	document.getElementById('a').innerHTML = "3";
	document.getElementById('b').innerHTML = "4";
	document.getElementById('c').innerHTML = "5";
	document.getElementById('d').innerHTML = "1";
	document.getElementById('e').innerHTML = "2";
}

function D() {
	document.getElementById('a').innerHTML = "2";
	document.getElementById('b').innerHTML = "3";
	document.getElementById('c').innerHTML = "4";
	document.getElementById('d').innerHTML = "5";
	document.getElementById('e').innerHTML = "1";
}

function E() {
	document.getElementById('a').innerHTML = "1";
	document.getElementById('b').innerHTML = "2";
	document.getElementById('c').innerHTML = "3";
	document.getElementById('d').innerHTML = "4";
	document.getElementById('e').innerHTML = "5";
}
function Ocena() {
	document.getElementById('Ocena').innerHTML = "Dziekuje za ocene!";
}
function Czerwony() {
	document.getElementById('Disco').style.color = "#FF0000";	
}

function Zielony() {
	document.getElementById('Disco').style.color = "#00FF00";	
}

function Niebieski() {
	document.getElementById('Disco').style.color = "#0000FF";	
}

function Fuksja() {
	document.getElementById('Disco').style.color = "#FF00FF";	
}

function Cyjan() {
	document.getElementById('Disco').style.color = "#00FFFF";	
}

function Czarny() {
	document.getElementById('Disco').style.color = "#000000";	
}

function Off() {
	document.getElementById('off').style.display = "none";
	document.getElementById('on').style.display = "block";	
}

function On() {
	document.getElementById('off').style.display = "block";
	document.getElementById('on').style.display = "none";	
}
