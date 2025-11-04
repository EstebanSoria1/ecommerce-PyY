const producto = document.querySelectorAll(".producto");
const miLista = document.querySelector("#lista");
const botonAgregar = document.querySelectorAll(".agregar");
const botonVaciar = document.querySelector("#vaciar");
const botonComprar = document.querySelector("#comprar");
const total = document.querySelector(".totalPrecio");
const hoverImages = document.querySelectorAll('.hover-img');

let precioTotal = 0;

for (let i = 0; i < botonAgregar.length; i++) {
  botonAgregar[i].addEventListener('click', function () {
    const nombreProducto = producto[i].querySelector("h3").textContent;
    const precioProducto = parseFloat(
      producto[i].querySelector("p").textContent
        .replace("$", "")
        .replace(".", "")
        .replace(",", "")
    );

    const nuevoItem = document.createElement("li");
    nuevoItem.innerHTML = `${nombreProducto} - $${precioProducto}`;
    miLista.appendChild(nuevoItem);

    const botonEliminar = document.createElement("button");
    botonEliminar.classList.add("btn", "btn-danger", "btn-sm", "ms-2");
    botonEliminar.innerHTML = '<i class="bi bi-x-lg"></i>';
    nuevoItem.appendChild(botonEliminar);

    botonEliminar.addEventListener('click', () => {
      miLista.removeChild(nuevoItem);
      precioTotal = precioTotal - precioProducto;
      total.textContent = precioTotal;
    });

    precioTotal += precioProducto;
    total.textContent = precioTotal;
  });
}

botonVaciar.addEventListener('click', function () {
  miLista.innerHTML = "";
  precioTotal = 0;
  total.textContent = precioTotal;
});

botonComprar.addEventListener('click', function () {
  miLista.innerHTML = "";
  precioTotal = 0;
  total.textContent = precioTotal;
});

hoverImages.forEach(img => {
  const originalSrc = img.src;
  const hoverSrc = img.dataset.hover;

  img.addEventListener('mouseover', () => {
    img.style.opacity = 0;
    setTimeout(() => {
      img.src = hoverSrc;
      img.style.opacity = 1;
    }, 100);
  });

  img.addEventListener('mouseout', () => {
    img.style.opacity = 0;
    setTimeout(() => {
      img.src = originalSrc;
      img.style.opacity = 1;
    }, 100);
  });
});
document.addEventListener("DOMContentLoaded", function() {
  logo.style.cursor = "pointer";
  logo.addEventListener("click", function() {
    document.body.scrollTo({ top: 0, behavior: "smooth" });
  });
});
