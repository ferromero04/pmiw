class Obstaculo {

  constructor(indice) {
    let separacion = 110; 
    this.posX = 900 + indice * separacion + random(-50, 50);
    this.posY = random(30, 350);
    this.esquivado = false;
  }

  mover() {
    this.posX -= 3; 
  }

  dibujar() {
    image(imagenDos, this.posX, this.posY, 50, 50);
  }
}
