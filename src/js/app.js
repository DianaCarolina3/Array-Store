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

// console.log(arrayProducts.length);

function getProducts() {
  for (let index = 0; index < arrayProducts.length; index++) {
    let component = document.createElement("div");
    component.setAttribute("class", "item");
    component.innerHTML = `
    <span class="badge bg-warning text-dark">New</span>
    <img class="image-product" src="${arrayProducts[index].image}" alt="${arrayProducts[index].name}">
    <h3 class="h3">${arrayProducts[index].name}</h3>
    <p class="p">Product type: ${arrayProducts[index].product}</p>
    <p class="p">Color: ${arrayProducts[index].color}</p>
    <p class="p">Price: $${arrayProducts[index].price}</p>
    <button onClick="infoProducts()" href="#" class="btn btn-block btn-primary button-info">Show info</button>
    `
    document.getElementById('testing').appendChild(component)
  }

  let modal = document.getElementsByClassName('button-info')
  modal.innerHTML = `
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
      </div>
    </div>
  </div>
  `
  function eventModal() {
    modal.forEach(button => {
      button.addEventListener('click', () => {
        // function(button.innerText)
        alert(button.innerText)
      })
    })
  }

}

getProducts()

function infoProducts() {}