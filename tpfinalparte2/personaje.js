class Personaje{
   constructor(){
     this.posX = 100;
     this.posY = 100;
     this.vida = true;
     
   }

 dibujar(){
   if(this.vida){
   image(imagen,this.posX,this.posY,70,100);
   
   }
 }
 
   teclaPresionada(keyCode){
    if(this.vida){
     if(keyCode == UP_ARROW){
       this.moverArriba();
     }
     else if(keyCode == DOWN_ARROW){
       this.moverAbajo();
     }
    }
  }
   
     moverArriba() {
    this.posY = constrain(this.posY - 30, 0, height - 100);
  }

  moverAbajo() {
    this.posY = constrain(this.posY + 30, 0, height - 100);
  }
   
   morir(){
     this.vida = false;
   }

}
