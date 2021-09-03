console.log("------------------ Practice 10 ------------------");

console.log("Dado un array que contiene [azul, amarillo,rojo, verde, rosa] determinar si un color introducido por el usuario a través de un prompt se encuentra dentro del array o no.")

const StringsArray = ["azul", "amarillo", "rojo", "verde", "rosa"];
let entrada10;
let verificador = Boolean(false);

entrada10 = prompt("Introduzca una palabra.");

for(let i = 0; i < 5; i++)
{
  if(entrada10 == StringsArray[i])
  {
    verificador = true;
  }
}

if(verificador == true)
{
  console.log(`La palabra ${entrada10} está en la lista de palabras.`)
}
else
{
  console.log(`La palabra ${entrada10} no está en la lista de palabras.`)
}

console.log("------------------ End ------------------");