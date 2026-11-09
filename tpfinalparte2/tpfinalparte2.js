let objJuego;
let imagen;
let imagenDos;
let fondo;

function preload(){
imagen = loadImage("images/globo.png");
imagenDos = loadImage("images/rayo.png");
fondo = loadImage("images/tormenta.png");
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
