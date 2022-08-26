const carrito=[];

function saludar(){
    alert("bienvenidos a nuestra pagina web")
}
saludar();
//objeto
function cuaderno (color,marca,precio) {
    this.color=color;
    this.marca=marca;
    this.precio=precio;
}
const cuadernoNaranja= new cuaderno("naranja","exito","$700");
const cuadernoRojo= new cuaderno("rojo","exito","$720");
const cuadernoAzul= new cuaderno("azul","exito","$710");


//creando evento
let cuaderno1=document.getElementById("cuadernoRojo");
let cuaderno2=document.getElementById("cuadernoNaranja");
let cuaderno3=document.getElementById("cuadernoAzul");
//evento de carrito
cuaderno1.onclick=()=>{
    alert("Agregaste un cuaderno rojo al carrito");
    carrito.push(cuadernoRojo);
    console.log(carrito);
    sessionStorage.setItem("carrito", JSON.stringify(carrito))
}
cuaderno2.onclick=()=>{
    alert("Agregaste un cuaderno naranja al carrito");
    carrito.push(cuadernoNaranja);
    console.log(carrito);
    sessionStorage.setItem("carrito", JSON.stringify(carrito))
}
cuaderno3.onclick=()=>{
    alert("Agregaste un cuaderno azul al carrito");
    carrito.push(cuadernoAzul);
    console.log(carrito);
    sessionStorage.setItem("carrito", JSON.stringify(carrito))
}

