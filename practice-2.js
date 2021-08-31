console.log("------------------ Practice 2 ------------------");

console.log("Escribe un programa que pueda calcular el área de 3 figuras geométricas, triángulo, rectángulo y círculo. En primer lugar pregunta de qué figura se quiere calcular el área, después solicita los datos que necesites para calcularlo. triángulo = b * h/2 rectángulo = b * h círculo = π * r2 (pi * radio al cuadrado)");

let opciones = ["circulo" , "triangulo" , "rectangulo"];

let respuesta;
respuesta = prompt("De que figura desea sacar el area.\n1. Circulo.\n2. Triangulo.\n3. Rectangulo.\coloque correctamente el nombre.");

let b;
let h;
let r;
let resultado;

respuesta;

switch(respuesta)
{
  case "circulo":
    r = prompt("Ingrese la medida del radio: ");
    r = Number(r);
    
    resultado = Math.PI * Math.pow(r,2);
    console.log(resultado);
    break;
    
    case "triangulo":
      b = prompt("Ingrese la medida de la base: ");
      b = Number(b);
      h = prompt("Ingrese la medida de la altura: ");
      h = Number(h);

      resultado = (b*h)/2;
      
      console.log(resultado)
      break;
      
      case "rectangulo":
        b = prompt("Ingrese la medida de la base: ");
        b = Number(b);
        h = prompt("Ingrese la medida de la altura: ");
        h = Number(h);
        resultado = (b*h);
        
        console.log(resultado)
        break;
        
  default:
    console.log("El dato ingresado es incorrecto") ;
  break;
}


console.log("------------------ End ------------------");