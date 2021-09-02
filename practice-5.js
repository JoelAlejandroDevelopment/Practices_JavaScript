console.log("------------------ Practice 4 ------------------");

console.log("Escriba un programa que pida un número entero mayor que cero y calcule su factorial.");

function factorial(x) {
  let retorno = 1;
  for (let i = x; i > 0; i--) {
    retorno = Number(retorno) * Number(i);
  }
  return retorno;
}

let entrada = 0;

entrada = prompt("Ingrese un numero para extraer su factorial");
entrada = Number(entrada);

console.log(`El factorial de ${entrada} es ${factorial(entrada)}`)

console.log("------------------ End ------------------");