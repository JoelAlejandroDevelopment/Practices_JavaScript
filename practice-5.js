console.log("------------------ Practice 5 ------------------");

console.log("Escriba un programa que pida un número entero mayor que cero y calcule su factorial.");

function factorial(x) {
  let retorno = 1;
  for (let i = x; i > 0; i--) {
    retorno = Number(retorno) * Number(i);
  }
  return retorno;
}

let entrada5 = 0;

entrada5 = prompt("Ingrese un numero para extraer su factorial");
entrada5 = Number(entrada5);

console.log(`El factorial de ${entrada5} es ${factorial(entrada5)}`)

console.log("------------------ End ------------------");