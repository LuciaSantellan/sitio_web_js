//usar estos datos para el ingreso de usuarios//
const usuarios = [
  {
    nombre: "Lucia",
    mail: "lusantellan@gmail.com",
    pass: "cursojavascript",
  },
];

const mailLogin = document.getElementById("emailLogin"),
  passLogin = document.getElementById("passwordLogin"),
  recordar = document.getElementById("recordarme"),
  btnLogin = document.getElementById("modalLogin"),
  modalEl = document.querySelector("#modalLogin"),
  nombreUsuario = document.getElementById("nombreUsuario"),
  contTarjetas = document.getElementById("tarjetas"),
  toggles = document.querySelectorAll(".toggles"),
  btnLogout = document.getElementById("btnLogout");

function validarUsuario(usersDB, user, pass) {
  let encontrado = usersDB.find((userDB) => userDB.mail == user);

  if (typeof encontrado === "undefined") {
    return false;
  } else {
    if (encontrado.pass != pass) {
      return false;
    } else {
      return encontrado;
    }
  }
}

function guardarDatos(usuarioDB, storage) {
  const usuario = {
    name: usuarioDB.nombre,
    user: usuarioDB.mail,
    pass: usuarioDB.pass,
  };
  storage.setItem("usuario", JSON.stringify(usuario));
}

function recuperarUsuario(storage) {
  let usuarioEnStorage = JSON.parse(storage.getItem("usuario"));
  return usuarioEnStorage;
}

function saludar(usuario) {
  nombreUsuario.innerHTML = `Bienvenido/a, <span>${usuario.name}</span>`
}

//falta agregar tarjetas//

function mostrarInfo(array, clase) {
  array.forEach((element) => {
    element.classList.toggle(clase);
  });
}

btnLogin.addEventListener("click", (e) => {
  e.preventDefault();

  if (!mailLogin.value || !passLogin.value) {
    alert("Complete todos los campos requeridos");
  } else {
    let data = validarUsuario(usuarios, mailLogin.value, passLogin.value);
    if (!data) {
      alert(`El usuario y/o contraseña no son correctos`);
    } else {
      if (recordar.checked) {
        guardarDatos(data, localStorage);
        saludar(recuperarUsuario(localStorage));
      } else {
        guardarDatos(data, sessionStorage);
        saludar(recuperarUsuario(sessionStorage));
      }

      modal.hide();
    }
  }
});

function borrarDatos() {
  localStorage.clear();
  sessionStorage.clear();
}

btnLogout.addEventListener("click", () => {
  borrarDatos();
  mostrarInfo(toggles, "d-none");
});

function logAbierto(usuario) {
  if (usuario) {
    saludar(usuario);
    mostrarInfo(toggles, "d-none");
  }
}

logAbierto(recuperarUsuario(localStorage));

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
let ingresoServicio = 0

let serviciosPermitidos = 4;

 do {
  let ingresoServicio = parseInt(prompt('Ingresa la opción de servicio que deseas contratar(Op.1: Uñas esculpidas. Op.2: Esmaltado semipermanente. Op.3: Kapping. Op.4: Estética de pies.)'));

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









