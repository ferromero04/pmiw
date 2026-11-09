class juego{
   constructor(){
     this.crearPersonaje();
     this.crearObstaculos();
     
     
   }
   
   dibujar(){
     image(fondo,0,0,800,400);
     this.personaje.dibujar();
     
      
      for(let i=0; i<10;i++){
       this.obstaculos[i].dibujar();
       
       this.detectarColisionPersonaje();
      }
   }
   
   iniciar(){
   }
   
   crearPersonaje(){
     this.personaje = new Personaje();
     
   }
   
   crearObstaculos(){
     this.obstaculos = [];
     for(let i=0; i<10;i++){
       this.obstaculos[i] = new Obstaculo();
     }
   }
   
    teclaPresionada(keyCode){
      this.personaje.teclaPresionada(keyCode);
     }
     
      detectarColisionPersonaje(){
    for(let i=0; i<10;i++){
      
      if(dist(
        this.personaje.posX, 
        this.personaje.posY, 
        this.obstaculos[i].posX,
        this.obstaculos[i].posY,
      ) < 50){
        this.personaje.morir();
      }
     }
   }
   personajePerdio(){
   }
   
   personajeGano(){
   }
   
   

}
