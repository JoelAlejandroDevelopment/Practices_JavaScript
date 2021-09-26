console.log("------------------ Practice 8 ------------------");

console.log("Dado un array de letras, solicita un número de DNI y calcula que letra le corresponde. El número no puede ser negativo ni tener más de 8 dígitos. La posición de la letra es el resultado del módulo del número introducido entre 23");
console.log("const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];")

const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

let entrada8DNI = 0;
let lenghtentrada8;
let posicion = 0;
let salidaArray = [];

do
{
  entrada8DNI = prompt("Introduzca un numero de DNI, debe tener menos de 8 dijitos");
  entrada8DNI = Number(entrada8DNI);
}while((string(entrada8DNI).length == 8) && (Math.sign(entrada8DNI) != 1));

lenghtentrada8 = String(entrada8DNI).length;
entrada8DNI = String(entrada8DNI);

for(let i = 0; i < lenghtentrada8; i++ )
{
  posicion = entrada8DNI[i];
  posicion = Number(posicion)
  salidaArray.push(letras[posicion]);
}

console.log(entrada8DNI)
console.log(salidaArray)

console.log("------------------ End ------------------");