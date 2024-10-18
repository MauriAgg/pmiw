let pantallaAct = 0;
let imgs = [];
let textos = [];
let opcionA = "SI";
let opcionB = "NO";
let textoComenzar= "COMENZAR";
let textoVolver= "VOLVER A INICIAR";
let textoCreditos= "CRÉDITOS";
let audioElemento;


function preload() {
  inicializar();
}

function setup() {
  createCanvas(640, 480);
  textSize(22);
  audioElemento = select('#miAudio');
}


function draw() {
  background(0);
  if (pantallaAct === 0) {
    pantallaUnBoton(textoComenzar, pantallaAct);
  } else if ( pantallaAct === 21) {
    pantallaUnBoton(textoVolver, pantallaAct)
  } else if ( pantallaAct === 4 || pantallaAct===13) {
    pantallaDosOpciones(pantallaAct, opcionA, opcionB);
  } else if (pantallaAct === 8 || pantallaAct===16 || pantallaAct===20) { // Pantalla de finales
    pantallaFinal(pantallaAct, textoVolver, textoCreditos);
  } else {
    pintarPantalla(pantallaAct);
  }
}

function mousePressed() {
  if (pantallaAct === 0) { //PANTALLA INICIAL
    if (cambiarColor(width/2, height*0.75, 200, 40) ) { //EMPEZAR
      pantallaAct=1;
    }
  } else if (pantallaAct === 4) { // FLUJO OPCIONES FINAL 1
    if ( cambiarColor(width/2-200, height*0.75+60, 200, 40) ) { //OPCION A
      pantallaAct=5;
    } else if ( cambiarColor(width/2+200, height*0.75+60, 200, 40) ) { //OPCION B
      pantallaAct=9;
    }
  } else if (pantallaAct===13) { // FLUJO OPCIONES FINAL 1
    if ( cambiarColor(width/2-200, height*0.75+60, 200, 40) ) { //OPCION A
      pantallaAct=14;
    } else if ( cambiarColor(width/2+200, height*0.75+60, 200, 40) ) { //OPCION B
      pantallaAct=17;
    }
  } else if (pantallaAct === 8 || pantallaAct===16 || pantallaAct===20) { // FINALES
    if (cambiarColor(width/2, height*0.75, 200, 40) ) { //VOLVER
      pantallaAct=0;
    } else if (cambiarColor(width/2, height*0.75+60, 200, 40) ) { //CREDITOS
      pantallaAct=21;
    }
  } else if (pantallaAct === 21) { // PANTALLA CREDITOS
    if (cambiarColor(width/2, height*0.75, 200, 40) ) { //VOLVER
      pantallaAct=0;
    }
  } else {
    pantallaAct++;
  }
  if (pantallaAct == 1) {
    audioElemento.elt.play();
  } else if (pantallaAct == 21 || pantallaAct == 0) {
    audioElemento.elt.pause();
  }
}
