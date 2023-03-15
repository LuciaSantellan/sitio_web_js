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

 do {
  servicio = parseInt(prompt('Ingresa la opción de servicio que deseas contratar'));
  serviciosPermitidos = 4;
  
  if (isNaN(servicio)) {
    alert('Debe ingresar un número');
  } else if (servicio > serviciosPermitidos) {
    alert('Por favor ingrese un número de servicio válido');
  } 
  const buscarServicio = servicios.find(serv => serv.id === ingresoServicio)
  console.log('servicio encontrado');
  
   if (servicioEncontrado) {
     alert(`Gracias por seleccionar ${servicioEncontrado.nombre} El precio del servicio es de $${servicioEncontrado.precio}`);
   } else {
     alert('Por favor ingresa un nombre de servicio válido');
   }
  } while (isNaN(servicio) || servicio > serviciosPermitidos);









