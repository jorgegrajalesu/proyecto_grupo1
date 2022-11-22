//crear una funcion
function calcular(){
    //definir variables iva, precio y cantidad, se realizaran las operaciones
    const iva = 0.19;
    let precio = document.simuladorFactura.precio.value;
    let cantidad = document.simuladorFactura.cantidad.value;
    producto = document.getElementById('producto').value;

    //validar o aplicar una estructura condicional, para poder hacer el calulo
    if(precio == 0 || precio == null){
        alert("No se puede realizar la simulación, intente de nuevo");
    }else{
        // realizar las operaciones
        let valorTotal = precio * cantidad;
        let valorIva = valorTotal * iva;
        let totalPagar = valorTotal + valorIva;

        //imprimir los resultados en la pagina con DOM
        document.getElementById("valorProd").innerHTML = producto;
        document.getElementById("valorT").innerHTML = valorTotal;
        document.getElementById("valorI").innerHTML = valorIva;
        document.getElementById("totalP").innerHTML = totalPagar;
    }
}