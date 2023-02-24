let servicio = parseInt(prompt('Ingresa la opción de servicio que deseas contratar'));
let serviciosPermitidos = 4;

if (servicio == 1){
    alert('Gracias por seleccionar Uñas esculpidas. El precio del servicio es de $1.300')
} else if (servicio == 2){
    alert('Gracias por seleccionar Esmalte semipermanente. El precio del servicio es de $800')
} else if (servicio == 3){
    alert('Gracias por seleccionar Kapping. el precio del servicio es de $800')
} else if (servicio == 4){
    alert('Gracias por seleccionar Estética de pies. El precio del servicio es de $750')
}

if(servicio>serviciosPermitidos){
    alert('Por favor ingrese un número de servicio válido')
}

let nuevoServicio = parseInt(prompt('Desea agregar un nuevo servicio?'));
while(nuevoServicio='no'){
    alert('Gracias por visitar nuestro sitio');
    break
}







