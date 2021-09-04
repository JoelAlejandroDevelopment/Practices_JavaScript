console.log("------------------ Practice 6 ------------------");

console.log("Escribe un programa que permita ir introduciendo una serie indeterminadade números mientras su suma no supere 50. Cuando esto ocurra, se debe mostrar el total acumulado y el contador de cuantos números se han introducido");

let entrada6 = Number(0);
let contadorNumeros = Number(0);
let contadorSuma = Number(0);
let arrayNumbers6 = [];

while(contadorSuma <= 50)
{
  entrada6 = prompt("Ingrese un numero mayor a 0.");
  entrada6 = Number(entrada6);

  arrayNumbers6.push(entrada6)


  contadorNumeros++;
  contadorSuma += entrada6;
}

console.log(arrayNumbers6);

console.log(`Se han introducido ${contadorNumeros} números antes de superar la cifra de 50.`)
console.log(`Y la suma de estos es: ${contadorSuma}.`)

console.log("------------------ End ------------------");