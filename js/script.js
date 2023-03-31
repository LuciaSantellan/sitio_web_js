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
  items = items.filter(item => item.nombre !== itemNombre);
  localStorage.setItem('items', JSON.stringify(items));
  actualizarLista(items);
}

function actualizarTotal(items) {
  const total = items.reduce((acc, item) => acc + parseInt(item.precio.slice(1)) * item.cantidad, 0);
  const totalElement = document.createElement('div');
  totalElement.innerHTML = `<span>Total: $${total}</span>`;}