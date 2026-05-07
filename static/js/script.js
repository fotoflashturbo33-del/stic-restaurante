let carrito = [];
let total = 0;

function agregarCarrito(nombre, precio) {
    carrito.push({ nombre, precio });
    total += precio;
    mostrarCarrito();
}

function mostrarCarrito() {
    const lista = document.getElementById("lista-carrito");
    const totalTexto = document.getElementById("total");

    lista.innerHTML = "";

    carrito.forEach((producto) => {
        const item = document.createElement("li");
        item.textContent = `${producto.nombre} - $${producto.precio.toLocaleString("es-CO")}`;
        lista.appendChild(item);
    });

    totalTexto.textContent = total.toLocaleString("es-CO");
}

function enviarWhatsApp() {
    if (carrito.length === 0) {
        alert("Primero agrega productos al carrito");
        return;
    }

    let mensaje = "Hola, quiero hacer este pedido:%0A%0A";

    carrito.forEach((producto) => {
        mensaje += `- ${producto.nombre}: $${producto.precio.toLocaleString("es-CO")}%0A`;
    });

    mensaje += `%0ATotal: $${total.toLocaleString("es-CO")}`;

    const telefono = "573122596027";
    window.open(`https://wa.me/${telefono}?text=${mensaje}`, "_blank");
}