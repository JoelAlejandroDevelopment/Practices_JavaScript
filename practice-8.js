console.log("------------------ Practice 8 ------------------");

console.log("Dado un array de letras, solicita un número de DNI y calcula que letra le corresponde. El número no puede ser negativo ni tener más de 8 dígitos. La posición de la letra es el resultado del módulo del número introducido entre 23");
console.log("const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];")

const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

let entradaDNI = 0;
let lenghtentrada;
let posicion = 0;
let salidaArray = [];

do
{
  entradaDNI = prompt("Intrduzuca un numero de DNI, debe tener menos de 8 dijitos");
  entradaDNI = Number(entradaDNI);
}while((entradaDNI > 100000000) && (Math.sign(entradaDNI) != 1));

lenghtentrada = String(entradaDNI).length;
entradaDNI = String(entradaDNI);

for(let i = 0; i < lenghtentrada; i++ )
{
  posicion = entradaDNI[i];
  posicion = Number(posicion)
  salidaArray.push(letras[posicion]);
}

console.log(entradaDNI)
console.log(salidaArray)

console.log("------------------ End ------------------");