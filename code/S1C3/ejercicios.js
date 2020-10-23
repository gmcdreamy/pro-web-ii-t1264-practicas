// 1. Texto truncado
// dado una cadena de texto de n caracteres,
// truncar la cadena de texto a determinado número de caracteres
// en base aun argumento pasado en f(n), donde n es un numero natural > 0
// además concatenear la frase "... Leer más"
// Ej.

function concatenar(texto, n) {
  return texto.substring(0, n) + "... leer mas";
}

console.log(concatenar("estamos haciendo el ejercicio numero uno",10));

// 2. vocales
// dado una cadena de texto de n caracteres
// buscar en cada palabra que compone dicha cadena la última vocal en la
// presente palabra y reemplazarla por una vocal pasada como argumento
// Ej.
/**
 * const input = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`; 
 * vocal pasada como argumento f(a)
   output =  'Loram ipsam dolar sat amat, consectetar adipiscang elat.'
   ** nótese     ^     ^     ^   ^    ^            ^         ^     ^  
 */
let texto = "segundo ejercicio";
 function vocales(a){
let lista_vocales = 'aeiouAEIOU';

texto.forEach(element => {
//     if (lista_vocales.indexOf(element) !== -1)
//     {
        console.log(element);
//       //es vocal
//     }
   });
 }
 console.log(vocales("T"));