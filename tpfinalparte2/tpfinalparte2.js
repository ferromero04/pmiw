//Comisión 5
// Romero Fernán Antonio, LEGAJO:88228/6
// Gimenez Monzon Victoria, LEGAJO: 125583/7
//https://youtu.be/q2kKmzwAf5U

let objJuego;
let imagen;
let imagenDos;
let fondo;
let musica;

function preload(){
imagen = loadImage("images/globo.png");
imagenDos = loadImage("images/rayo.png");
fondo = loadImage("images/tormenta.png");
musica = loadSound("sonidos/viento.mp3");
}

function setup() {
  createCanvas(800,400);
  objJuego = new juego();
}


function draw() {
  objJuego.dibujar();
}

function keyPressed (){
  objJuego.teclaPresionada(keyCode);
}

function mousePressed() {
  objJuego.clickMouse();
}
