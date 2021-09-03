console.log("------------------ Practice 7 ------------------");

console.log("Crea 3 arrays. El primero tendra 5 números y el segundo se llamará pares y el tercero impares, ambos estarán vacíos. Después multiplica cada uno de los números del primer array por un número aleatorio entre 1 y 10, si el resultado es par guarda ese número en el array de pares y si es impar en el array de impares. Muestra por consola: -la multiplicación que se produce junto con su resultado con el formato 2 x 3 = 6 -el array de pares e impares");

const Numeros = 5;
let arrayNumbers7 = [ 2 , 43 , 76 , 32 , 23];
let Pares = [];
let Impares = [];
let numberRandom = 0;

for(let i = 0 ; i < Numeros; i++)
{
  numberRandom = arrayNumbers7[i] * 10 *Math.random();
  numberRandom =  Math.round(numberRandom);
  if(numberRandom % 2 == 0)
  {
    Pares.push(numberRandom);
  }
  else
  {
    Impares.push(numberRandom);
  }
}

console.log(Pares);
console.log(Impares);

console.log("------------------ End ------------------");