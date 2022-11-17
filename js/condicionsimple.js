//estructura de control if 
let edad= prompt("cuál es tu edad?");//dato de entrada
document.write("la edad es: " + edad + "<br>");//dato de salida
/*se debe definir quien puede ingresar al bar, todas las que sean mayores de edad
if(edad>=18){
    document.write("Puedes ingresar al bar");
}else{
    document.write("No puedes ingresar al bar" + "<br>" + "<br>");
}*/

let dpto = prompt("Cuál es del dpto");
document.write("El departamento es: " + dpto + "<br>");
if(dpto==="sistemas" && edad>=45){
    var sal = 1000000 + 100000;
    document.write("Tienes una bonificacion de: " + sal + "<br>");
}else{
    var sal = 1000000;
    document.write("No hay bonificacion: " + sal);
}


