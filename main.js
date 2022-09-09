const carrito=[];


//objeto
function cuaderno (nombre, color,marca,precio) {
    this.nombre=nombre;
    this.color=color;
    this.marca=marca;
    this.precio=precio;
}
const cuadernoNaranja= new cuaderno( "cuaderno exito", "naranja","exito","$700");
const cuadernoRojo= new cuaderno( "cuaderno exito", "rojo","exito","$720");
const cuadernoAzul= new cuaderno( "cuaderno exito", "azul","exito","$710");


//creando evento
let cuaderno1=document.getElementById("cuadernoRojo");
let cuaderno2=document.getElementById("cuadernoNaranja");
let cuaderno3=document.getElementById("cuadernoAzul");
//evento de carrito
cuaderno1.onclick=()=>{
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'agregaste un producto al carrito',
        showConfirmButton: false,
        timer: 2000
      })
    carrito.push(cuadernoRojo);
    console.log(carrito);
    sessionStorage.setItem("carrito", JSON.stringify(carrito))
}
cuaderno2.onclick=()=>{
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'agregaste un producto al carrito',
      showConfirmButton: false,
      timer: 2000
    })
    carrito.push(cuadernoNaranja);
    console.log(carrito);
    sessionStorage.setItem("carrito", JSON.stringify(carrito))
}
cuaderno3.onclick=()=>{
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'agregaste un producto al carrito',
        showConfirmButton: false,
        timer: 2000
      })
    carrito.push(cuadernoAzul);
    console.log(carrito);
    sessionStorage.setItem("carrito", JSON.stringify(carrito))
}
function obtenerDatos(){
  const URLGET="https://api.itbook.store/1.0/new";
  fetch(URLGET)
 .then (resultado => resultado.json())
 .then ( libros => {
  console.log(libros.books);
       })
  }
obtenerDatos();


