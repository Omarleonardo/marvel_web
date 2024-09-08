const btnCart = document.querySelector(".container_cart_icon");
const containerCartProducts = document.querySelector(".container_cart_products");

btnCart.addEventListener('click', () => {
    containerCartProducts.classList.toggle('hidden_cart');
});

const cartInfo = document.querySelector(".cart_product");
const rowProduct = document.querySelector(".row_product");

//Lista de contenedor de los productos
const listProducts = document.querySelector(".item_boxes");

// Variable de arreglos de Productos
let allProducts = [];

const totalValue = document.querySelector(".total_to_pay");

const countProducts = document.querySelector("#counter_products");

const cartEmpty = document.querySelector(".cart_empty");
const cartTotal = document.querySelector(".cart_total");

// console.log(listProducts)

listProducts.addEventListener("click", e => {
    if (e.target.classList.contains("button_article")) {
        const product = e.target.parentElement;

        const infoProduct = {
            quantity: 1,
            title: product.querySelector('h3').textContent,
            price: product.querySelector('p').textContent,
        };

        const exits = allProducts.some(
            product => product.title === infoProduct.title
        );
        if (exits) {
            console.log(exits)
            const products = allProducts.map(product => {
                if (product.title === infoProduct.title) {
                    product.quantity++;
                    return product;
                } else {
                    return product;
                }
            });
            allProducts = [...products];
        } else {
            allProducts = [...allProducts, infoProduct];
        }

        showHTML();
    }
});

rowProduct.addEventListener('click', e => {
    if (e.target.classList.contains('icon_close')) {
        const product = e.target.parentElement;
        const title = product.querySelector('p').textContent;

        allProducts = allProducts.filter(
            product => product.title !== title
        );

        console.log(allProducts);

        showHTML();
    }
});

const showHTML = () => {
    if (!allProducts.length) {
        cartEmpty.classList.remove('hidden_cart');
        rowProduct.classList.add('hidden');
        cartTotal.classList.add("hidden");
    } else {
        cartEmpty.classList.add('hidden_cart');
        rowProduct.classList.remove('hidden');
        cartTotal.classList.remove('hidden');
    }

    // Limpiar HTML
    rowProduct.innerHTML = '';

    let total = 0;
    let totalOfProducts = 0;

    allProducts.forEach(product => {
        const containerProduct = document.createElement("div");
        console.log(product)

        containerProduct.classList.add("cart_product");

        containerProduct.innerHTML = `
            <div class="info_cart_product">
                <span class="quantity_product_cart">${product.quantity}</span>
                <p class="title_product_cart">${product.title}</p>
                <span class="price_product_cart">${product.price}</span>
            </div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#000"
                class="icon_close"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                />
            </svg>
        `;

        rowProduct.append(containerProduct);

        total =
            total + parseInt(product.quantity * product.price.slice(1));
        totalOfProducts = totalOfProducts + product.quantity;
    });

    totalValue.innerText = `$${total}`;
    countProducts.innerText = totalOfProducts;
};


/* Sticky Header */

window.onscroll = function () { stickyHeader() };

// Get the header
var header = document.querySelector("header");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyHeader() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}