function inicializar(){
  inicializarImagenes();
  inicializarTextos();
}

//Esta funcion se encarga de guardar todas las imagenes en el arreglo imgs
function inicializarImagenes(){
  imgs[0] = loadImage("data/tm0.jpeg");
  imgs[1] = loadImage("data/tm1.jpg");
  imgs[2] = loadImage("data/tm2.jpg");
  imgs[3] = loadImage("data/tm3.jpg");
  imgs[4] = loadImage("data/tm4.jpg");
  imgs[5] = loadImage("data/tm5.jpg");
  imgs[6] = loadImage("data/tm6.jpg");
  imgs[7] = loadImage("data/tm7.jpg");
  imgs[8] = loadImage("data/tm8.jpg"); //FINAL
  imgs[9] = loadImage("data/tm9.jpg");
  imgs[10] = loadImage("data/tm10.jpg");
  imgs[11] = loadImage("data/tm11.jpg");
  imgs[12] = loadImage("data/tm12.jpg");
  imgs[13] = loadImage("data/tm13.jpg");
  imgs[14] = loadImage("data/tm14.jpg");
  imgs[15] = loadImage("data/tm15.jpg");
  imgs[16] = loadImage("data/tm16.jpg"); //FINAL
  imgs[17] = loadImage("data/tm17.jpg");
  imgs[18] = loadImage("data/tm18.jpg");
  imgs[19] = loadImage("data/tm19.jpg");
  imgs[20] = loadImage("data/tm20.jpeg"); //FINAL
  imgs[21] = loadImage("data/tm21.jpg"); //CREDITOS
}

//Esta funcion se encarga de guardar todos los textos en el arreglo textos
function inicializarTextos(){
  textos[0] = "Monster INC, empresa de energia a base de sustos,\n donde Mike y Sulley trabajan";
  textos[1] = "Mike y Sulley llevan el primer puesto del ranking de asustadores\n y su objetivo es ganar la competencia, \npero Randall (principal competidor) les pisa los talones";
  textos[2] = "Mike tiene la misión de hacer el papeleo todos los dias,\n cosa que olvida muchas veces. \nEsto provoca que lo penalicen por lo que le dan una última oportunidad";
  textos[3] = "Termina la jornada laboral y Mike tiene que ir a cenar a un lugar exclusivo con su novia, pero... ";
  textos[4] = "¿Hizo el papeleo?"; //De acá pasa a la opción 5 (SI) u opción 9 (NO) FALTA FOTO
  textos[5] = "Randall captura a Boo y ejecuta su plan, quitandole energia y encerrandola para luego recuperada volver a quitarle más."; //Principio opción SI
  textos[6] = "La energia comienza a restablecerse y ser cada vez mayor a costa de su plan oscuro";
  textos[7] = "Los empleados son despedidos porque ya no son necesarios, incluso Mike y Sulley, llevandolos a investigar por qué la energia era mayor sin los gritos.";
  textos[8] = "Se asocian con número 1 de CDA y descubren lo que está haciendo Randall y Waternoose, capturandolos y devolviendo a los niños a su mundo"; //FINAL
  textos[9] = "Sulley ayuda a su amigo y se compromete a hacerlo por él. Encuentra la puerta de Boo e investiga lo que pasó"; //Principio opción NO
  textos[10] = "Boo se esconde de Sulley asustandolo. Este, asustado, encierra a Boo y la lleva con Milke al restaurant";
  textos[11] = "En el restaurant escapan de la CDA y deciden ir a su casa para esconder a Boo. Se proponer resolver al otro dia el problema.";
  textos[12] = "Cuando llegan a la empresa ven un descontrol provocado por la CDA que investiga la aparicion en el mundo de Boo. Esto hace pensar a Mike y Sulley, dudando que hacer";
  textos[13] = "¿Deciden entregar a la niña a la CDA?"; //De acá pasa a la opción 14 (SI) u opción 17 (NO) FALTA FOTO
  textos[14] = "La CDA se sorprende de que Mike y Sulley tienen a Boo y los detiente, hasta investigar bien qué pasó y por qué estaba con ellos. Además devuelven a Boo a su mundo."; //Principio opción SI
  textos[15] = "Luego de un tiempo de investigación la CDA no da con los culpables y tampoco tiene elementos para retener a Sulley y Mike, liberándolos";
  textos[16] = "Mike y Sulley vuelven a Monster Inc para retomar sus tareas, pero su gran objetivo, ganar la competencia se volvió inalcanzable. Randall salió ganador, pausando su plan con Waternoose ya que tenian los ojos de la CDA atentos en la empresa"; //FINAL
  textos[17] = "Intentan devolver a la niña, pero descubren el plan malévolo de Randall e intentan a la vez huir de él"; //Principio opción NO
  textos[18] = "Deciden hablar con el Waternoose (el jefe) para que los ayuda y contar el plan de Randall, pero él estaba involucrado y con un engaño, destierra a Mike y Sulley quedandose con Boo.";
  textos[19] = "Mike y Sulley consiguen volver a Metrópolis, salvando a Boo y haciendo que Randall y Waternoose queden arrestados por la CDA";
  textos[20] = "Gracias a Boo descubren que la risa es mucha más fuerte que los gritos. Salvan la compañía y la convierten en una empresa de risas."; //FINAL
  textos[21] = "Este cuento fue presentado por \n Aldi \n Mauri \n Gracias!"; //CREDITOS
}

function pintarBoton(texto, x, y, w, h ) {
  //dibuja un boton centrado:
  push();
  rectMode(CENTER);
  //evaluo para crear efecto rolover:
  if ( cambiarColor( x, y, w, h ) ) {
    fill(20, 200, 0);
  } else {
    fill(100);
  }
  rect(x, y, w, h);
  //texto:
  textAlign(CENTER, CENTER);
  fill(255);
  text(texto, x, y);
  pop();
}

function cambiarColor( x, y, w, h ) {
  //evalua colision boton Centrado:
  return (mouseX>x-w/2 && mouseX<x+w/2 && mouseY>y-h/2 && mouseY<y+h/2);
}

function pintarPantalla(pantallaAct){
  image(imgs[pantallaAct], 0, 0, 640, 480);
  fill(255);
  text(textos[pantallaAct], 50, 50);
}


function pantallaUnBoton(texto, numPantalla){
  push();
  background(255, 0, 0);
  fill(255);
  pintarPantalla(numPantalla);
  textAlign(CENTER);
  pintarBoton(texto, width/2, height*0.75, 200, 40);
  pop();
}

function pantallaFinal(numPantalla,textoB1, textoB2) {
  push();
  fill(255);
  pintarPantalla(numPantalla);
  textAlign(CENTER);
  pintarBoton(textoB1, width/2, height*0.75, 200, 40);
  pintarBoton(textoB2, width/2, height*0.75+60, 200, 40);
  pop();
}

function pantallaDosOpciones( numPantalla , opcionA , opcionB ) {
  push();
  background(255, 0, 0);
  fill(255);
  pintarPantalla(numPantalla);

  //botones:
  //A:
  pintarBoton(opcionA, width/2-200, height*0.75+60, 200, 40);
  //B:
  pintarBoton(opcionB, width/2+200, height*0.75+60, 200, 40);

  pop();
}
