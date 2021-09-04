console.log("------------------ Practice 9 ------------------");

console.log("Solicitar al usuario una palabra y mostrar por consola el número de consonantes, vocales y longitud de la palabra.");

let lenghtString;
let numeroConsonante = 0;
let numeroVocales = 0;
let entrada9;

entrada9 = prompt("Introduzca una palabra.");

lenghtString = entrada9.length;
lenghtString = Number(lenghtString);
numeroConsonante = Number(numeroConsonante);
numeroVocales = Number(numeroVocales);

for(let i = 0; i < lenghtString; i++)
{
  switch(entrada9[i])
  {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
      numeroVocales++;
      break;
    
    default:
      numeroConsonante++;
    break;
  }
}

console.log(`La longitud de la palabra es: ${lenghtString}`)
console.log(`El numero de vocales es: ${numeroVocales}.\nY el numero de consonantes es: ${numeroConsonante}.`);

console.log("------------------ End ------------------");