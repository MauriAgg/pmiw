//Aguirre Mauricio 94025/4
// https://youtu.be/HC2qXawE8OA?si=9nUpKyH5AaNamGb9

let optica;
let tamCuadrilla = 2;
let lineasnum = 14;
let cambiarColor = false;
let blanco = 0;
let negro = 255;

function lineas(lineasnum) {
  let numero = 7 + lineasnum/2;
  return numero;
}

function preload() {
  optica = loadImage("data/optica.jpg");
}

function setup() {
  createCanvas(800, 400);
  if (lineasnum == 2*7) {
    console.log("Hay " + lineasnum + " líneas por cuadrilla");
  }
}

function draw() {
  let degrade = map(mouseY, 0, height, blanco, negro);
  if (mouseX > width/2) {
    background(degrade);
  }
  image(optica, 0, 0, 400, 400);
  cuadrilla();
}

function mousePressed() {
  cambiarColor = !cambiarColor;
}
