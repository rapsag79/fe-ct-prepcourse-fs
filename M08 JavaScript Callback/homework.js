/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function mayuscula(nombre) {
  // Esta función recibe un nombre (string).
  // Debe devolver el mismo nombre, pero con la primera letra en mayúscula.
  // [Ejemplo]: "mario" ----> "Mario".
  // Tu código:
  // let primera = nombre[0].toUpperCase();
  // for (let i = 0; i < primera.length; i++) {
  //   const element = primera[i];
  // }
  // return primera;
  return nombre[0].toUpperCase() + nombre.slice(1);
}

function invocarCallback(cb) {
  // Invoca/ejecuta el callback `cb`.
  // [NOTA]: no debes reotrnar nada.
  // Tu código:
  cb();
}

function operacionMatematica(num1, num2, cb) {
  // En este ejercicio recibirás dos números y un callback.
  // El callback realiza una operación matemática, por lo que necesita de los dos números.
  // Retorna el resultado del callback pasándole como parámetros los números.
  // Tu código:
  cb(num1, num2);
}

function sumarArray(arrayOfNumbers, cb) {
  // Recibes un arreglo de números y un callback.
  // Suma todos los números del arreglo.
  // Este resultado debes pasárselo como argumento al callback recibido.
  // [NOTA]: no debes reotrnar nada.
  // Tu código:
  //[1, 3, 4, 5]
  //1) 1+3+4+5 = 13
  // 2) cb(13)
  //['a', 'b', 'c'] -> 'abc'
  // opcion 1 : metodo reduce metodo arrays
  // var resultado = arrayOfNumbers.reduse((numeros, acumulador) => {
  //   return acumulador + numeros
  // });
  // cb(resultado)

  //opcion 2 : for i
  var resultado = 0;
  for (var i = 0; i < arrayOfNumbers.length; i++) {
    // resultado = resultado + arrayOfNumbers[i]
    resultado += arrayOfNumbers[i];
  }
  cb(resultado);
}

function forEach(array, cb) {
  // Recibes un arreglo y un callback.
  // Debes iterar sobre el arreglo, y por cada elemento ejecutar el callback.
  // Debes pasarle el elemento como argumento al callback.
  // Tu código:
  // ["a", 1, true];
  //recorer ese arreglo
  // por cada elemento -> cb(elemento)

  //opcion 1 forEach
  // array.forEach((elemento) => {
  //   cb(elemento);
  // });

  //opcion 2 for in
  for (var i in array) {
    cb(array[i]);
  }
}

function map(array, cb) {
  // Debes iterar sobre el arreglo, y cada elemento pasárselo como arguemento al callback.
  // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
  // Retorna el nuevo arreglo.
  // Tu código:
  //el metodo map sirve para arrays

  let nuevoArreglo = [];
  nuevoArreglo = array.map((e) => cb(e));
  return nuevoArreglo;

  // let nuevoArreglo = [];
  // array.forEach((e) => nuevoArreglo.push(cb(e)))
  // return nuevoArreglo;
}

function filter(arrayOfStrings) {
  // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
  // Luego retorna un nuevo arreglo con estos elementos.
  // Tu código:
  let nuevoArreglo = [];
  nuevoArreglo = arrayOfStrings.filter((elemento) => elemento[0] === "a");
  return nuevoArreglo;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter,
};
