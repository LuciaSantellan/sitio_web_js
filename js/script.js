const botonesAgregar = document.querySelectorAll('.boton');

botonesAgregar.forEach(boton => {
    boton.addEventListener('click', agregarAlCarrito);
});

function agregarAlCarrito(e) {
    const item = e.target.parentElement;
    const itemNombre = item.querySelector('.titulo__subt').textContent;
    const itemPrecio = item.querySelector('.parrafo_precio').textContent;
    const nuevoItem = {
        nombre: itemNombre,
        precio: itemPrecio,
        cantidad: 1
    }
    agregarItemLocalStorage(nuevoItem);
}

function agregarItemLocalStorage(nuevoItem) {
  let items = obtenerItemsLocalStorage();
  items.push(nuevoItem);
  localStorage.setItem('items', JSON.stringify(items));
  actualizarLista(items);
}

function obtenerItemsLocalStorage() {
  let items;
  if (localStorage.getItem('items') === null) {
      items = [];
  } else {
      items = JSON.parse(localStorage.getItem('items'));
  }
  return items;
}

function actualizarLista(items) {
  const lista = document.querySelector('#lista-carrito');
  lista.innerHTML = '';

  items.forEach(item => {
      const li = document.createElement('li');
      li.innerHTML = `
          <span>${item.nombre}</span>
          <span>${item.precio}</span>
          <span>${item.cantidad}</span>
          <button class="eliminar-item" data-nombre="${item.nombre}">Eliminar</button>
      `;
      lista.appendChild(li);
  });

  actualizarTotal(items);
}

const listaCarrito = document.querySelector('#lista-carrito');

listaCarrito.addEventListener('click', (e) => {
    if (e.target.classList.contains('eliminar-item')) {
        const itemNombre = e.target.dataset.nombre;
        eliminarItemLocalStorage(itemNombre);
    }
});

function eliminarItemLocalStorage(itemNombre) {
  let items = obtenerItemsLocalStorage();
  for (let i = 0; i < items.length; i++) {
    if (items[i].nombre === itemNombre) {
      items.splice(i, 1);
      break;
    }
  }
  localStorage.setItem('items', JSON.stringify(items));
  actualizarLista(items);
}

function actualizarTotal(items) {
  const total = items.reduce((acc, item) => acc + parseInt(item.precio.slice(1)) * item.cantidad, 0);
  const totalElement = document.createElement('div');
  totalElement.innerHTML = `<span>Total: $${total}</span>`;
}

const botonVaciar = document.querySelector('#vaciar-carrito');

botonVaciar.addEventListener('click', vaciarCarrito);

function vaciarCarrito() {
  localStorage.removeItem('items');
  actualizarLista([]);
}
const btnToast = document.querySelectorAll('.botonToast');

btnToast.forEach((btn) => {
    btn.onclick = () => {
      Toastify({
        text: 'Producto agregado al carrito',
        duration: 3000,
        style: {
          color: '#c9184a',
          width: '16vw',
          height: 80,
          background: "radial-gradient(circle, rgba(255,240,243,1) 0%, rgba(255,143,163,1) 100%)"
        },
        offset: {
          x: 10,
          y: 10,
        },
      }).showToast();
    };
  });

const btnSwal = document.getElementById('botonSwal');

btnSwal.addEventListener('click', function() {
Swal.fire({
  position: 'center',
  icon: 'success',
  title: 'Tu compra fue realizada correctamente.',
  showConfirmButton: false,
  timer: 1500
  });
  });

function iniciarMap(){
  let coord ={lat:-34.9030298, lng:-56.1360138};
  let map = new google.maps.Map(document.getElementById('map'),{
    zoom: 10,
    center: coord
  });
  let marker = new google.maps.Marker({
    position: coord,
    map: map
  })
}

/*function initMap() {
  let map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.9030298, lng: -56.1360138},
    zoom: 10
  });
  let marker = new google.maps.Marker({
    position: coord,
    map: map
  })
}*/

function initMap() {
  let miLatLng = {lat: -34.9030298, lng: -56.1360138};
  let map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: miLatLng
  });
  
  let marker = new google.maps.Marker({
    position: miLatLng,
    map: map,
    title: 'Mi punto específico'
  });
}