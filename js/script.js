do {
    servicio = parseInt(prompt('Ingresa la opción de servicio que deseas contratar'));
    serviciosPermitidos = 4;
    
    if (isNaN(servicio)) {
      alert('Debe ingresar un número');
    } else if (servicio > serviciosPermitidos) {
      alert('Por favor ingrese un número de servicio válido');
    } else {
      if (servicio == 1) {
        alert('Gracias por seleccionar Uñas esculpidas. El precio del servicio es de $1.300')
      } else if (servicio == 2) {
        alert('Gracias por seleccionar Esmalte semipermanente. El precio del servicio es de $800')
      } else if (servicio == 3) {
        alert('Gracias por seleccionar Kapping. el precio del servicio es de $800')
      } else if (servicio == 4) {
        alert('Gracias por seleccionar Estética de pies. El precio del servicio es de $750')
      }
    }
  } while (isNaN(servicio) || servicio > serviciosPermitidos);
  
  let nuevoServicio = prompt('Desea agregar un nuevo servicio? (si/no)');
  while (nuevoServicio.toLowerCase() !== 'no') {
    alert('Gracias por visitar nuestro sitio');
    break;
  }






