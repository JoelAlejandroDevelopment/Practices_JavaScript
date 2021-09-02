console.log("------------------ Practice 4 ------------------");

console.log("Escribe un programa que pida un número entero mayor que 1 y que escriba si el número primo o no. Un número primo es aquel que solo es divisible por sí mismo y la unidad");

function primo(x) {
  let contador = 0;

  for (let i = 1; i <= x; i++) {
    if( x%i == 0)
    {
      contador++;
    }
  }

  if(contador >= 3)
  {
    return false;
  }
  else
  {
    return true;
  }
}

let entrada;

do
{
  entrada = prompt("Ingrese un numero mayor a 1");
  entrada = Number(entrada);
}while(entrada <= 1);

if(primo(entrada) == true)
{
  console.log(`${entrada} es primo.\n`)
}
else
{
  console.log(`${entrada} no es primo.\n`)
}


console.log("------------------ End ------------------");