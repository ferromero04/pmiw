class Obstaculo{
  
   constructor(){
     this.posX = random(900, 1200);
     this.posY = random(50, 350);
     this.tam;
     this.vida;
     
   }
   
   mover(){
     this.posX--;
   }
   
   dibujar(){
   image(imagenDos,this.posX,this.posY,50,50);
   this.mover();
   }

}
