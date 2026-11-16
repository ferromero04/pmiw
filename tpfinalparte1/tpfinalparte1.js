//Comisión 5
// Romero Fernán Antonio, LEGAJO:88228/6
// Gimenez Monzon Victoria, LEGAJO: 125583/7
//https://youtu.be/tPOk-TWv5RA

let imagenCreditos;
let contadorCreditos = 0; 
let imagenes = [];   // arreglo con las imágenes
let pantalla = 0;    // número de la pantalla actual
let efectos = [];    //para los sonidos
 
// texto de cada pantalla
let textos = [
  "EL GLOBO POR EL SÁHARA",                      // 0
  "Viajas con tus dos amigos a Francia, visitan varios lugares, hay muchas cosas interesantes que hacer.",// 1
  "Se suben a un globo aerostático y resulta que se avecina una tormenta, deberan tomar una decisión rápida",// 2
  "logran aterrizar con éxito en el desierto, pero se encuentran perdidos",// 3
  "Después de un largo caminar, pasan por unas dunas y ven hullas en el piso, no son suyas. se extienden hacia lo que podria ser un lugar con gente que puede ayudarlos. ¿qué hacen?",// 4
  "Al seguir las huellas llegan a un campamento de refugiados y dentro se encuentran con un deposito de chatarra",// 5
  "Con lo que encuentran logran armar un radio comunicador, creen que lo pueden usar para comunicarse pero antes que puedan hacerlo se les presenta un hombre llamado Donato que dice que a cambio del objeto los puede llevar a un lugar seguro.",   // 6
  "Logran comunicarse con Exito con el centro de salvamento y los llevan a un lugar seguro. Vuelven a salvo",// 7
  "se metieron por la tormenta y más allá de las turbulencias logran pasarla a salvo. Ahora tienen que decidir a donde ir ",// 8
  "Bajaron al desierto pero no ven personas o civilización cerca",// 9
  "Caminando a lo lejos observan como el globo en el que vinieron se va volando, unas personas se fueron en el.",// 10
  "ven caer del globo una bolsa de suministros, al mismo tiempo ven una figura en el aire del otro lado, no saben para donde ir.",// 11
  "Al acercarse más, pueden distinguir que es un globo aerostático que esta descendiendo.",// 12
  "Al llegar ven que no hay nadie, los que vinieron en el lo abandonaron. se empieza a debatir la idea de robarlo o seguir camino.",// 13
  "Siguen adelante porque no saben si esta abandonado o los dueños van a volver, no quieren que les pase lo mismo que a ellos.",// 14
  "Nunca encuentran un lugar donde pedir ayuda, se les acaban los insumos y no puden seguir más. No logran regresar a casa.", // 15
  "Siguen volando para ver si encuentran un lugar seguro a donde bajar pero sienten que algo golpea y empiezan a caer bruscamente.", //16
  "Luego de revisar que todos estan bien siguen caminando buscando refugio.", //17
  "caminan, caminan y no dejan de caminar.", //18
  "Después de una larga caminata ven por fin personas, aunque dudan al verlas con turbantes y armas.",//19
  "Al acercarse se dan cuenta que son terroristas y ahora tienen que seguir sus ordenes.", //20
  "Los mandan al aeropuero de Francia y lamentablemente su final es detonar una bomba, fueron usados para un atentado.", //21
  "Siguen de largo y a unos pocos km encuentran un chatarrerio y en el un radiocomunicador que al parecer funciona.", //22
  "Empiezan a elevarse en el globo y ven como se acercan unos sujetos corriendo queriendo alcanzarlos, se sienten mal por pensar que era de ellos y le lanzan una bolsa con suministros.", //23
  "El hombre los arroja de la camioneta y se roba el radiocomunicador."//24
  
];
 
// primer botón de cada pantalla y a qué pantalla lleva
let boton1 = [
  "Iniciar", "pasear en globo aerostático", "descender al piso", "empezar a caminar",
  "seguir las huellas", "buscar entre la chatarra", "usar el radio comunicador para pedir ayuda", "Volver al inicio",
  "descender al piso", "explorar el área", "Continuar", "seguir la figura en el aire",
  "Continuar", "deciden seguir camino y no robar el globo", "Continuar", "Volver al inicio", "continuar", 
  "estamos todos bien sigamos", "seguir caminando", "pidamos ayuda", "seguir sus ordenes", "volver al inicio", "probar comunicador", 
  "lanzar bolsas y seguir", "ir hacia el norte"
];
let destino1 = [1, 2, 3, 4, 5, 6, 7, 0, 9, 10, 11, 12, 13, 14, 15, 0, 17, 18, 19, 20, 21, 0, 7, 16, 19];
 
// segundo botón 
let boton2 = [
  "Créditos","", "", "seguir y pasar por la tormenta", "",
  "ir para el otro lado", "", "darselo a Donato", "",
  "seguir en vuelo", "", "", "ir hacia el norte",
  "", "deciden robar el globo", "", "", "", "", "", "seguir de largo", "", "", "", "", "seguir la figura del cielo"
];
let destino2 = [-1, 0, 0, 8, 0, 10, 0, 24, 0, 16, 0, 0, 19, 0, 23, 0, 0, 0, 0, 0, 22, 0, 0, 0, 0, 12];
 
// carga las imágenes
function preload() {
  for (let i = 0; i < 25; i++) {
    imagenes[i] = loadImage("images/" + i + ".jpg");
  }
  imagenCreditos = loadImage("images/creditos.jpg");
  efectos[2] = loadSound("audio/viento.mp3");
  efectos[8] = loadSound("audio/pajaros.mp3");
  efectos[5] = loadSound("audio/multitud.mp3");
  efectos[6] = loadSound("audio/radio.mp3");
}
 
function setup() {
  createCanvas(800, 600);
}
 
function draw() {
  background(20);
 
   if (pantalla == -1) {
    dibujarCreditos();
    return;
  }
  
  // imagen
  image(imagenes[pantalla], 0, 0, 800, 360);
 
  // texto
  dibujarTexto(textos[pantalla]);
 
  // botones
  dibujarBoton(490, boton1[pantalla]);
  if (boton2[pantalla] != "") {
    dibujarBoton(540, boton2[pantalla]);
  }
}
 
// dibuja el cuadro con el texto de la historia
function dibujarTexto(mensaje) {
  fill(0, 200);
  noStroke();
  rect(0, 360, 800, 120);
  fill(255);
  textAlign(LEFT, TOP);
  textSize(20);
  text(mensaje, 30, 380, 740, 90);
}
 
// dibuja un botón en la altura y, con el texto indicado
function dibujarBoton(y, mensaje) {
  if (mouseEncima(y)) {
    fill(255, 200, 80);
  } else {
    fill(230);
  }
  stroke(0);
  rect(150, y, 500, 40, 8);
  fill(0);
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(18);
  text(mensaje, 400, y + 20);
}
 
// devuelve true si el mouse está sobre el botón que está en la altura y
function mouseEncima(y) {
  if (mouseX > 150 && mouseX < 650 && mouseY > y && mouseY < y + 40) {
    return true;
  } else {
    return false;
  }
}

function sonarEfecto(numero) {
  if (efectos[numero]) {
    efectos[numero].play();
  }
}

function cambiarPantalla(nueva) {
  if (efectos[pantalla]) {
    efectos[pantalla].stop();
  }
  
  if (nueva == -1) {
    contadorCreditos = 0;     
  }
  
  pantalla = nueva;
  sonarEfecto(pantalla);
}

function dibujarCreditos() {
  // fondo
  image(imagenCreditos, 0, 0, 800, 600);

  // animación: el contador sube y el progreso va de 0 a 1 en 60 vueltas
  contadorCreditos = contadorCreditos + 1;
  let progreso = min(contadorCreditos / 60, 1);
  let transparencia = progreso * 255;       // aparece de a poco
  let desplazamiento = (1 - progreso) * 80; // sube desde abajo hasta su lugar

  let y = 170 + desplazamiento;

  // contenedor
  fill(0, transparencia * 0.7);
  stroke(255, transparencia);
  strokeWeight(2);
  rect(100, y - 30, 600, 320, 15);
  strokeWeight(1);

  // texto
  noStroke();
  fill(255, transparencia);
  textAlign(CENTER, TOP);

  textSize(28);
  text("Producido por", 400, y);
  textSize(20);
  text("Romero Fernán Antonio, LEGAJO:88228/6", 400, y + 45);
  text("Gimenez Monzon Victoria, LEGAJO: 125583/7", 400, y + 75);
  

  textSize(28);
  text("Basado en la obra", 400, y + 170);
  textSize(20);
  text("En globo por el Sahara", 400, y + 215);
  text("del Autor: Douglas Terman", 400, y + 245);

  // botón para volver
  dibujarBoton(540, "Volver al inicio");
}
 
function mousePressed() {
  
  if (pantalla == -1) {
    if (mouseEncima(540)) {
      cambiarPantalla(0);
    }
    return;
  }
  
  // pantalla "Continuará"
  if (pantalla >= textos.length) {
    if (mouseEncima(400)) {
      cambiarPantalla(0);
    }
    return;
  }

  // botón 1
  if (mouseEncima(490)) {
    cambiarPantalla(destino1[pantalla]);
  }
  // botón 2 (solo si existe)
  else if (boton2[pantalla] != "" && mouseEncima(540)) {
    cambiarPantalla(destino2[pantalla]);
  }
}
 
