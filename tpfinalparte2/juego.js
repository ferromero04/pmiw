class juego {
  constructor() {
    this.cantidadObstaculos = 35;
    this.obstaculosParaGanar = 30;
    this.estado = "inicio"; // "inicio", "creditos", "jugando", "perdio", "gano"
    

    // botones
    this.botonJugar = { x: 300, y: 250, w: 200, h: 50 };
    this.botonCreditos = { x: 300, y: 315, w: 200, h: 50 };
    this.botonVolver = { x: 300, y: 335, w: 200, h: 45 };
  }

  // partida 
  iniciarPartida() {
    this.estado = "jugando";
    this.esquivados = 0;
    this.crearPersonaje();
    this.crearObstaculos();
    if (!musica.isPlaying()) {
      musica.loop();
    }
  }

  crearPersonaje() {
    this.personaje = new Personaje();
  }

  crearObstaculos() {
    this.obstaculos = [];
    for (let i = 0; i < this.cantidadObstaculos; i++) {
      this.obstaculos[i] = new Obstaculo(i);
    }
  }

  //  dibujar según pantalla
  dibujar() {
    if (this.estado == "inicio") {
      this.pantallaInicio();
    } else if (this.estado == "creditos") {
      this.pantallaCreditos();
    } else {
      this.dibujarJuego();
    }
  }

  dibujarJuego() {
    image(fondo, 0, 0, 800, 400);
    this.personaje.dibujar();

    for (let i = 0; i < this.cantidadObstaculos; i++) {
      if (this.estado == "jugando") {
        this.obstaculos[i].mover();
      }
      this.obstaculos[i].dibujar();
    }

    if (this.estado == "jugando") {
      this.contarEsquivados();
      this.detectarColisionPersonaje();
      this.mostrarContador();
    } else if (this.estado == "perdio") {
      this.pantallaFinal("¡Perdiste!", color(200, 30, 30));
    } else if (this.estado == "gano") {
      this.pantallaFinal("¡Ganaste!", color(30, 160, 60));
    }
  }

  // inicio 
  pantallaInicio() {
    image(fondo, 0, 0, 800, 400);
    fill(0, 170);
    rect(0, 0, width, height);

    fill(255);
    textAlign(CENTER, CENTER);
    textSize(44);
    text("TORMENTA EN EL SAHARA", width / 2, 45);

    textSize(20);
    text("Instrucciones", width / 2, 100);
    textSize(16);
    text("Usá las flechas ARRIBA y ABAJO para mover el globo", width / 2, 135);
    text("Esquivá los rayos que vienen hacia vos", width / 2, 160);
    text("Si tocás un rayo, perdés", width / 2, 185);
    text("Esquivá " + this.obstaculosParaGanar + " rayos para ganar", width / 2, 210);

    this.dibujarBoton("Iniciar juego", this.botonJugar);
    this.dibujarBoton("Créditos", this.botonCreditos);
  }

  //  créditos 
  pantallaCreditos() {
  image(fondo, 0, 0, 800, 400);
  fill(0, 190);
  rect(0, 0, width, height);

  fill(255);
  textAlign(CENTER, CENTER);

  textSize(40);
  text("CRÉDITOS", width / 2, 60);

 
  textSize(22);
  text("Integrantes:", width / 2, 120);
  text("Romero Fernán Antonio, LEGAJO:88228/6", width / 2, 160);
  text("Gimenez Monzon Victoria, LEGAJO: 125583/7", width / 2, 195);
  text("Comisión: 5", width / 2, 245);
  text("Profesor: Leonardo Garay", width / 2, 285);

  this.dibujarBoton("Volver al inicio", this.botonVolver);
}

  //  botones
  dibujarBoton(texto, boton) {
    if (this.mouseSobre(boton)) {
      fill(255, 220, 60);
    } else {
      fill(255);
    }
    rect(boton.x, boton.y, boton.w, boton.h, 10);

    fill(0);
    textAlign(CENTER, CENTER);
    textSize(20);
    text(texto, boton.x + boton.w / 2, boton.y + boton.h / 2);
  }

  mouseSobre(boton) {
    return mouseX > boton.x && mouseX < boton.x + boton.w &&
           mouseY > boton.y && mouseY < boton.y + boton.h;
  }

  clickMouse() {
    if (this.estado == "inicio") {
      if (this.mouseSobre(this.botonJugar)) {
        this.iniciarPartida();
      } else if (this.mouseSobre(this.botonCreditos)) {
        this.estado = "creditos";
      }
    } else if (this.estado == "creditos") {
      if (this.mouseSobre(this.botonVolver)) {
        this.estado = "inicio";
      }
    } else if (this.estado == "perdio" || this.estado == "gano") {
      if (this.mouseSobre(this.botonVolver)) {
        this.estado = "inicio";
      }
    }
  }

  // teclado
  teclaPresionada(keyCode) {
    if (this.estado == "jugando") {
      this.personaje.teclaPresionada(keyCode);
    } else if ((this.estado == "perdio" || this.estado == "gano") && keyCode == ENTER) {
      this.iniciarPartida();
    }
  }

  
  detectarColisionPersonaje() {
    let margen = 10;

    for (let i = 0; i < this.cantidadObstaculos; i++) {
      let o = this.obstaculos[i];
      let p = this.personaje;

      let choca =
        p.posX + margen < o.posX + 50 - margen &&
        p.posX + 70 - margen > o.posX + margen &&
        p.posY + margen < o.posY + 50 - margen &&
        p.posY + 100 - margen > o.posY + margen;

      if (choca) {
        this.personaje.morir();
        this.personajePerdio();
      }
    }
  }

  contarEsquivados() {
    for (let i = 0; i < this.cantidadObstaculos; i++) {
      let o = this.obstaculos[i];
      if (!o.esquivado && o.posX + 50 < this.personaje.posX) {
        o.esquivado = true;
        this.esquivados++;
      }
    }
    if (this.esquivados >= this.obstaculosParaGanar) {
      this.personajeGano();
    }
  }

  mostrarContador() {
    fill(255);
    textSize(20);
    textAlign(LEFT, TOP);
    text("Esquivados: " + this.esquivados + " / " + this.obstaculosParaGanar, 10, 10);
  }

  pantallaFinal(mensaje, colorTexto) {
    fill(0, 170);
    rect(0, 0, width, height);
    fill(colorTexto);
    textAlign(CENTER, CENTER);
    textSize(60);
    text(mensaje, width / 2, height / 2 - 50);
    fill(255);
    textSize(20);
    text("Presioná ENTER para volver a jugar", width / 2, height / 2 + 10);
    this.dibujarBoton("Volver al inicio", this.botonVolver);
  }

  personajePerdio() {
    this.estado = "perdio";
    musica.stop();
  }

  personajeGano() {
    this.estado = "gano";
    musica.stop();
  }
}
