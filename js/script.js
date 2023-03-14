class Servicio {
  constructor(nombre, precio, id){
    this.nombre = nombre;
    this.precio = precio;
    this.id = id;
  }

asignarId(array){
  this.id= array.length;
}
}

const servicios = [
  new Servicio('Uñas esculpidas', 1300, 1),
  new Servicio('Esmaltado semipermanente', 800, 2),
  new Servicio('Kapping', 800, 3),
  new Servicio('Estetica de pies', 750, 4),
]

let ingresoServicio = parseInt(prompt('Ingresa la opción de servicio que deseas contratar'));
serviciosPermitidos = 4;

do {

    if (isNaN(ingresoServicio)) {
      alert('Debe ingresar un número');
    } else if (ingresoServicio > serviciosPermitidos) {
      alert('Debe ingresar un número de servicio válido');
    } else if (ingresoServicio == 1) {
        alert('Gracias por seleccionar Uñas esculpidas. El precio del servicio es de $1.300')
        /*function agregalAlcarrito(servicio1){
          carrito.push(servicio1);
        }*/
      } else if (ingresoServicio == 2) {
        alert('Gracias por seleccionar Esmaltado semipermanente. El precio del servicio es de $800')
      } else if (ingresoServicio == 3) {
        alert('Gracias por seleccionar Kapping. el precio del servicio es de $800')
      } else if (ingresoServicio == 4) {
        alert('Gracias por seleccionar Estética de pies. El precio del servicio es de $750')
      }
    } while (isNaN(ingresoServicio) || ingresoServicio > serviciosPermitidos);

const carritoDeCompras = {
  items: []
}

let total = 0;
for (let i = 0; i < carritoDeCompras.length; i++){
  total += carritoDeCompras[i].precio;
}

console.log("Carrito de compras:");
for (let i = 0; i < carritoDeCompras.length; i++) {
  console.log("-" + carritoDeCompras[i].nombre + " ($" + carritoDeCompras[i].precio + ")");
}
console.log ("Total: $" + total);

let mensaje = "Carrito de compras: ";
for (let i = 0; i < carritoDeCompras.length; i++){
  mensaje += "- " + carritoDeCompras[i].nombre + " ($" + carritoDeCompras[i].precio + ")/n";
}
mensaje += "Total: $" + total;
alert(mensaje);






