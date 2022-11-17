// variables de tipo numerico, de texto o cadena, boolenaos
var edadHombre=45;//tipo numero entero
var nombre = "jorge";//tipo cadena
var apagado=false;//booleano
var precio=200.19//tipo numero flotante
var num1=5;
var num2=10;
//var resultado=0;
var suma=0;
var resta=0;
var multiplicacion=0;
var division=0;
// operacion de suma
suma = num1 + num2;//operacion
resta = num1 - num2;
multiplicacion = num1 * num2;
division = num1 / num2;

//alert("hola mundo");
//alert(nombre);

document.write("el primer número es: " + num1);
document.write('<br>');
document.write("el segundo número es: " + num2);
document.write('<br>');
document.write("la suma es: " + suma + "<br>");//salida
document.write("la resta es: " + resta + "<br>");//salida
document.write("la multplicación es: " + multiplicacion + "<br>");//salida
document.write("la división es: " + division);//salida

console.log(suma);//muestra los datos en la consola del devtool o ventana del programador

//var nombre1 = prompt("cuál es tu nombre");//dato de entrada
//document.write(nombre1);

//array o vector sirve para almacenar varias variables

var comics=["batman","spiderman",1952,1945];
//para mostrar una posicion del array comics
document.write("<br>" + comics[0], comics[3]);
