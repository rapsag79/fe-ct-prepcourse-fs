/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
  // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
  // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
  // Estos elementos debe ser cada par clave:valor del objeto recibido.
  // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
  // Tu código:
  // var array = [];
  // for (var i in objeto) {
  //   array.push([i, objeto[i]]);
  // }
  // return array;
  //opcion2
  // var arrayCLaves = Object.keys(objeto);
  // for (var clave of arrayCLaves) {
  //   array.push([clave, objeto[clave]]);
  // }
  // return array;
  return Object.entries(objeto);
}

function numberOfCharacters(string) {
  // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
  // letras del string, y su valor es la cantidad de veces que se repite en el string.
  // Las letras deben estar en orden alfabético.
  // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  // Tu código:
  var objeto = {};
  var arrayLetras = string.split("");
  var letrasOrdenadas = arrayLetras.sort();
  // for (var letra of letrasOrdenadas) {
  //   if (!objeto[letra]) {
  //     objeto[letra] = 1;
  //   } else {
  //     objeto[letra] += 1;
  //   }
  // }
  letrasOrdenadas.forEach((letra) => {
    if (!objeto[letra]) {
      objeto[letra] = 1;
    } else {
      objeto[letra] += 1;
    }
  });
  return objeto;
}

function capToFront(string) {
  // Recibes un string con algunas letras en mayúscula y otras en minúscula.
  // Debes enviar todas las letras en mayúscula al comienzo del string.
  // Retornar el string.
  // [EJEMPLO]: soyHENRY ---> HENRYsoy
  // Tu código:
  // var mayuscula = "";
  // var minuscula = "";
  // for (var i = 0; i < string.length; i++) {
  //   if (string[i] === string[i].toLowerCase()) {
  //     minuscula = minuscula + string[i];
  //   } else {
  //     mayuscula = mayuscula + string[i];
  //   }
  // }
  // return mayuscula + minuscula;
  var arrayString = string.split("");
  var mayusculas = [];
  var minusculas = [];
  for (var letra of arrayString) {
    if (letra === letra.toLowerCase()) {
      minusculas.push(letra);
    } else {
      mayusculas.push(letra);
    }
  }
  return mayusculas.join("") + minusculas.join("");
}

function asAmirror(frase) {
  // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
  // La diferencia es que cada palabra estará escrita al inverso.
  // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
  // Tu código:
  let alrevez = "";
  var frase = frase.split(" ");
  for (var i = 0; i < frase.length; i++) {
    // var palabraArray = frase[i].split(" ")  //=======> ["T", "h", "e"]
    // var reversePalabra = palabraArray.reverse()    //=====>["T", "h", "e"]
    // frase[i] = reversePalabra.join(" ")  //======> "ehT"
    // frase[i] = frase[i].split("").reverse().join("");
    if (i !== 0) alrevez += " " + frase[i].split("").reverse().join("");
    else alrevez += frase[i].split("").reverse().join("");
  }
  return alrevez;
  // return frase.join(" ");
}

function capicua(numero) {
  // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
  // Caso contrario: "No es capicua".
  // Tu código:
  //   let cadena = numero.toStrin();
  //   let cadenaInvertida = "";
  //  for(){   cadenaInvertida = cadena.split("").reverse().join("");
  //     if (cadena === cadenaInvertida) {
  //       return "Es capicua";
  //     }
  //     return "No es capicua";}
  // let newString = "";
  // let newNum = String(numero);
  // for (let i = newNum.length - 1; i >= 0; i--) {
  //   newString = newString + newNum[i];
  // }
  // if (newString == numero) {
  //   return "Es capicua";
  // } else {
  //   return "No es capicua";
  // }
  let newNum = String(numero).split("").reverse().join("");
  if (Number(newNum) === numero) {
    return "Es capicua";
  }
  return "No es capicua";
}

function deleteAbc(string) {
  // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
  // Retorna el string sin estas letras.
  // Tu código:
  // for (let iterador in string) {
  //   if (
  //     string[iterador] === "a" &&
  //     string[iterador] === "b" &&
  //     string[iterador] === "c"
  //   ) {
  //     string = cadena2 += string[iterador];
  //   }
  // }

  return string
    .split("")
    .filter((e) => e !== "a" && e !== "b" && e !== "c")
    .join("");
}

function sortArray(arrayOfStrings) {
  // Recibes un arreglo de strings.
  // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
  // de la longitud de cada string.
  // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
  // Tu código:
  // for (let i = 0; i < arr.length; i++) {
  //   var temp = arr[i];
  //   var j = i - 1;
  //   while (j >= 0 && temp.length < arr[j].length) {
  //     arr[j + 1] = arr[j];
  //     j--;
  //   }
  //   arr[j + 1] = temp;
  // }
  // return arr;
  // return arrayOfStrings.sort(function (a, b) {
  // return a.length - b.length;
  // }); //funciona
  for (let i = 0; i < arrayOfStrings.length; i++) {
    for (let j = i + 1; j < arrayOfStrings.length; j++) {
      if (arrayOfStrings[i].length > arrayOfStrings[j].length) {
        var aux = arrayOfStrings[i];
        arrayOfStrings[i] = arrayOfStrings[j];
        arrayOfStrings[j] = aux;
      }
    }
  }
  return arrayOfStrings;
}

function buscoInterseccion(array1, array2) {
  // Recibes dos arreglos de números.
  // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
  // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
  // Si no tienen elementos en común, retornar un arreglo vacío.
  // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
  // Tu código:
  let arreglo = [];
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) {
        arreglo.push(array1[i]);
      }
    }
  }
  return arreglo;
  // var newArray = array1.filter(coinside => array2.indexOf(coinside) !== -1)return newArray;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  deObjetoAarray,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
