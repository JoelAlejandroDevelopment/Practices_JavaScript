console.log("------------------ Practice 3 ------------------");
console.log("Solicita un número e imprime todos los números pares e impares desde 1 hasta ese número con el mensaje es par o es impar si el número es 5 el resultado será: 1 - es impar 2 - es par 3 - es impar 4 - es par 5 - es impar");

let entrada3 = 0;

entrada3 = prompt("Introduzca un numero");
entrada3 = Number(entrada3);

for(let i = 1; i <= entrada3; i++ )
{
  if(i%2 == 0)
  {
    console.log(`${i} es par\n`);
  }
  else
  {
    console.log(`${i} es impar\n`);
  }
}

console.log("------------------ End ------------------");