//variables
//Tema de Variables

let EstaEsUnaVariableLet = "";
var EstaEsUnaVariableVar = "";
const EstaEsUnaVariableConst = "";

function holamundo(nombre) {
    var saludo = "hola" + nombre;
    console.log(saludo);
}

holamundo("Anibal");

//exportar funciones
const { myfunction,
    myfunction2,
    myfunctionflecha } = require("./module-example");

console.log(myfunction());
console.log(myfunction2("german"));
console.log(myfunctionflecha());