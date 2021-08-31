
console.log("------------------ Practice 1 ------------------");
console.log("1 - Solicita un nombre, la edad y muestra por consola el mensaje.\n Hola ____, tienes ____ años y el año que viene tendrás ____ años.\nRealiza el ejercicio con prompt(mensaje) y haz uso de los template strings");

let nombre = "default"
let edad = 0 ;

nombre = prompt("Ingrese su nombre: ");
edad = prompt("ingrese su edad: ");

edad = Number(edad);

console.log(`Hola ${nombre}, tienes ${edad} años, y el año que viene tendras ${edad+1}`);


console.log("------------------ End ------------------");