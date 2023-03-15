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

let ingresoServicio = parseInt(prompt('Ingresa la opción de servicio que deseas contratar(Op.1: Uñas esculpidas. Op.2: Esmaltado semipermanente. Op.3: Kapping. Op.4: Estética de pies.)'));
let serviciosPermitidos = 4;

 do {
  if (isNaN(ingresoServicio)) {
    alert('Debe ingresar un número');
  } else if (ingresoServicio > serviciosPermitidos) {
    alert('Por favor ingrese un número de servicio válido');
  } else{
  const servicioEncontrado = servicios.find(serv => serv.id === ingresoServicio)
  console.log(servicioEncontrado);
  
   if (servicioEncontrado) {
     alert(`Gracias por seleccionar ${servicioEncontrado.nombre} El precio del servicio es de $${servicioEncontrado.precio}`);
   }
  }
  } while (isNaN(ingresoServicio) || ingresoServicio > serviciosPermitidos);









