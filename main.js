function saludar(){
    alert("bienvenidos a nuestra pagina web")
}
function cuaderno (color, marca, precio) {
    this.color=color;
    this.marca=marca;
    this.precio=precio;
}
const cuadernoNaranja= new cuaderno("naranja, exito, $700");
const cuadernoRojo= new cuaderno("rojo, exito, $720");
const cuadernoAzul= new cuaderno("azul, exito, $710");
console.log(cuadernoAzul);

saludar();

let cantidad = parseInt(prompt( "Cantidad de productos que deseas comprar"))
let precio = 4500;
let total = cantidad * precio;
let precioConDescuento = total * 0.95   
alert ("Su compra es de " + total + " pesos");

if (total >= 9000){
    alert("Tienes un descuento del 5%")
    alert("tu precio con descuento es de $ "+precioConDescuento )
    alert("gracias por su compra")
}

else if (total < 9000){
    alert("gracias por su compra")
}
