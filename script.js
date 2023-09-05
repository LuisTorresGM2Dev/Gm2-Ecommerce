let containerCards;
const products = [
    {
        image:'./images/llaveInglesa.png',
        name:'Stillson',
        price: '999',
        priceDescount:'699',
        description:'Lorem Ipsum Dolor Sit Amet Consectetur'
    },

    {
        image:'./images/llaveInglesa.png',
        name:'Stillson',
        price: '999',
        priceDescount:'699',
        description: 'Lorem Ipsum Dolor Sit Amet Consectetur'
    },
    {
        image:'./images/llaveInglesa.png',
        name:'Stillson',
        price: '999',
        priceDescount:'699',
        description: 'Lorem Ipsum Dolor Sit Amet Consectetur'
    },
    {
        image:'./images/llaveInglesa.png',
        name:'Stillson',
        price: '999',
        priceDescount:'699',
        description: 'Lorem Ipsum Dolor Sit Amet Consectetur'
    }
]


window.addEventListener("load", () => {
    containerCards = document.querySelector(".container-cards");

    products.forEach((producto, index) => {

        const tarjetaProducto = document.createElement("div");
        tarjetaProducto.classList.add("productCard");

        tarjetaProducto.innerHTML = `
            <div class="part1">
                <img  class= "stillson"src="${producto.image}" alt="${producto.name}">
                <div class="product-data">
                    <h3 class="name-of-products">${producto.description}</h3>
                    <p class="identifier-number">Número de identificación ${index + 1}</p>
                </div>
                <p class="previous-price">$${producto.price}</p>
            </div>
            <div class="cart-part2">
                <div class="button-cart">
                    <img id="shopping-bag" src="./images/shopping-bag.png" alt="">
                    <img id="plus" src="./images/plus.png" alt="">
                </div>
                <div class="part-card-2">
                    <p class="actual-price">$${producto.priceDescount}</p>
                </div>
            </div>
        `;


        containerCards.appendChild(tarjetaProducto);
    });
});
