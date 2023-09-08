let containerCards;

async function fetchProducts() {
    const apiURL = "https://64f659ae2b07270f705e6753.mockapi.io/api/products";
    const apiResponse = await fetch(apiURL)
    const jsonData = await apiResponse.json();
    console.log(apiResponse.status);
    console.log(jsonData);
    return jsonData;
}

async function onDocumentLoad() {
    containerCards = document.querySelector(".container-cards");
    const products = await fetchProducts();

    products.forEach((product,id) => {

        const tarjetaProducto = document.createElement("div");
        tarjetaProducto.classList.add("productCard");
        
        if(product.featured == true){
            tarjetaProducto.innerHTML = `
            <div class="part1">
                <img  class= "stillson"src="${product.image}" alt="">
                <div class="product-data">
                    <h3 class="name-of-products">${product.title}</h3>
                    <p class="identifier-number">Número de identificación ${id}</p>
                </div>
                <p class="previous-price">$${product.price}</p>
            </div>
            <div class="cart-part2">
                <div class="button-cart">
                    <img id="shopping-bag" src="./images/shopping-bag.png" alt="">
                    <img id="plus" src="./images/plus.png" alt="">
                </div>
                <div class="part-card-2">
                    <p class="actual-price">$${product.previousPrice}</p>
                </div>
            </div>
        `;

        containerCards.appendChild(tarjetaProducto);
        }
    });
}

window.addEventListener("load", onDocumentLoad);
