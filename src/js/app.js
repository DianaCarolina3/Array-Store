var arrayProducts = [
  {
    id:  Math.random(),
    name: "spacex t-shirt",
    product: "shirt",
    price: 22,
    color: "black",
    image: "https://andrescampuzano.github.io/Ecommerce-Javascript/assets/img/spacex_black.webp"
  },
  {
    id: Math.random(),
    name: "starman t-shirt",
    product: "shirt",
    price: 22,
    color: "black",
    image: "https://andrescampuzano.github.io/Ecommerce-Javascript/assets/img/starman.webp"
  },
  {
    id:  Math.random(),
    name: "spacex t-shirt",
    product: "shirt",
    price: 22,
    color: "blue",
    image: "https://andrescampuzano.github.io/Ecommerce-Javascript/assets/img/spacex_blue.webp"
  },
  {
    id:  Math.random(),
    name: "spacex cap",
    product: "cap",
    price: 10,
    color: "black",
    image: "https://andrescampuzano.github.io/Ecommerce-Javascript/assets/img/cap_black.webp"
  },
  {
    id:  Math.random(),
    name: "spacex cap",
    product: "cap",
    price: 10,
    color: "blue",
    image: "https://andrescampuzano.github.io/Ecommerce-Javascript/assets/img/cap_blue.webp"
  },
  {
    id: Math.random(),
    name: "spacex cap",
    product: "cap",
    price: 10,
    color: "blue",
    image: "https://andrescampuzano.github.io/Ecommerce-Javascript/assets/img/cap_blue.webp"
  },
  {
    id: Math.random(),
    name: "occupy mars mug",
    product: "mug",
    price: 12,
    color: "black",
    image: "https://andrescampuzano.github.io/Ecommerce-Javascript/assets/img/spacex_mug_mars.webp"
  },
  {
    id:  Math.random(),
    name: "occupy earth mug",
    product: "mug",
    price: 12,
    color: "black",
    image: "https://andrescampuzano.github.io/Ecommerce-Javascript/assets/img/spacex_mug_earth.webp"
  },
  {
    id: Math.random(),
    name: "spacex mug",
    product: "mug",
    price: 12,
    color: "black",
    image: "https://andrescampuzano.github.io/Ecommerce-Javascript/assets/img/spacex_mug_normal.webp"
  },]

var getCap = arrayProducts.filter(function(products) {
  return products.price
})

console.log(arrayProducts);

//Show all products in screen
function showProducts() {
  for (let index = 0; index < arrayProducts.length; index++) {
    let component = document.createElement("div");
    component.setAttribute("class", "item");
    component.setAttribute("style","cursor:pointer")
    component.innerHTML = `
    <span class="badge bg-warning text-dark">New</span>
    <img class="image-product" src="${arrayProducts[index].image}" alt="${arrayProducts[index].name}">
    <h3 class="h3">${arrayProducts[index].name}</h3>
    <p class="p">Product type: ${arrayProducts[index].product}</p>
    <p class="p">Color: ${arrayProducts[index].color}</p>
    <p class="p">Price: $${arrayProducts[index].price}</p>
    <button name="data-button-info" href="#" class="btn btn-block btn-primary">Show info</button>
    `
    document.getElementById('testing').appendChild(component)
    infoModal(component, index, arrayProducts);
  }
}
showProducts()


// MODAL All PRODUCTS=
function infoModal(element, index, array) {
  element.addEventListener('click', () => {
    console.log('test: ', element, index);
    console.log(`Product:  ${array[index].name}, ${array[index].product}, $${array[index].price}, ${array[index].color}`);
    document.getElementById('showModal').innerHTML = `
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">${array[index].name}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <img class="image-product" src="${array[index].image}" alt="${array[index].name}">
          <h3 class="h3">${array[index].name}</h3>
          <p class="p">Product type: ${array[index].product}</p>
          <p class="p">Color: ${array[index].color}</p>
          <p class="p">Price: $${array[index].price}</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Back</button>
          <button type="button" class="btn btn-warning">Buy</button>
        </div>
        </div>
      </div>
    </div>
    `
  })
}