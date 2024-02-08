let carrito = [];

function agregarAlCarrito() {
  const producto = {
    nombre: 'Protector Solar para Caninos',
    precio: 120000
  };
  carrito.push(producto);
  mostrarCarrito();
}

function mostrarCarrito() {
  const carritoContainer = document.getElementById('lista-carrito');
  carritoContainer.innerHTML = '';
  let total = 0;
  carrito.forEach(producto => {
    const li = document.createElement('li');
    li.textContent = `${producto.nombre} - $${producto.precio}`;
    carritoContainer.appendChild(li);
    total += producto.precio;
  });
  document.getElementById('total').textContent = total;
}
