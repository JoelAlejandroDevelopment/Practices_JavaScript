console.log("------------------ Practice 10 ------------------");

console.log("Dado un array que contiene [azul, amarillo,rojo, verde, rosa] determinar si un color introducido por el usuario a través de un prompt se encuentra dentro del array o no.")

const StringsArray = ["azul", "amarillo", "rojo", "verde", "rosa"];
let entrada;
let verificador = Boolean(false);

entrada = prompt("Introduzca una palabra.");

for(let i = 0; i < 5; i++)
{
  if(entrada == StringsArray[i])
  {
    verificador = true;
  }
}

if(verificador == true)
{
  console.log(`La palabra ${entrada} está en la lista de palabras.`)
}
else
{
  console.log(`La palabra ${entrada} no está en la lista de palabras.`)
}

console.log("------------------ End ------------------");