class Servicio {
  constructor(nombre, precio, id){
    this.nombre = nombre;
    this.precio = precio;
    this.id = id;
  }

asignarId(array){
  this.id= array.lenght;
}
}

const servicios = [
  servicios.push(new Servicio('Uñas esculpidas', 1300, 1)),
  servicios.push(new Servicio('Esmaltado semipermanente', 800, 2)),
  servicios.push(new Servicio('Kapping', 800, 3)),
  servicios.push(new Servicio('Estetica de pies', 750, 4)),
]

do {
    servicio = parseInt(prompt('Ingresa la opción de servicio que deseas contratar'));
    serviciosPermitidos = 4;
    
    if (isNaN(servicio)) {
      alert('Debe ingresar un número');
    } else if (servicio > serviciosPermitidos) {
      alert('Debe ingresar un número de servicio válido');
    } else {
      if (servicio == 1) {
        alert('Gracias por seleccionar Uñas esculpidas. El precio del servicio es de $1.300')
        /*function agregalAlcarrito(servicio1){
          carrito.push(servicio1);*/
        }
      } else if (servicio == 2) {
        alert('Gracias por seleccionar Esmaltado semipermanente. El precio del servicio es de $800')
      } else if (servicio == 3) {
        alert('Gracias por seleccionar Kapping. el precio del servicio es de $800')
      } else if (servicio == 4) {
        alert('Gracias por seleccionar Estética de pies. El precio del servicio es de $750')
      }
    }
  } while (isNaN(servicio) || servicio > serviciosPermitidos);

const servicio1 = [
  nombre: "Uñas esculpidas",
  precio: 1300
];

const carritoDeCompras = {
  items: []
}

let total = 0;
for (let i = 0; i < carritoDeCompras.lenght; i++){
  total += carritoDeCompras[i].precio;
}

console.log("Carrito de compras:");
for (let i = 0; i < carritoDeCompras.lenght; i++) {
  console.log("-" + carritoDeCompras[i].nombre + " ($" + carrito[i].precio + ")");
}
console.log ("Total: $" + total);

let mensaje = "Carrito de compras: ";
for (let i = 0; i < carritoDeCompras.lenght; i++){
  mensaje += "- " + carritoDeCompras[i].nombre + " ($" + carritoDeCompras[i].precio + ")/n";
}
mensaje += "Total: $" + total;
alert(mensaje);






