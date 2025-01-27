const productList = [
    {
        seller: "Arvum",
        productName:"Gran Reserva Vinegar",
        volume: 200,
        price: 32.51,
        productImage: "/assets/images/product-list/product1.png"
    },
    {
        seller: "Arvum",
        productName:"Gran Reserva Vinegar",
        volume: 200,
        price: 32.51,
        productImage: "/assets/images/product-list/product2.png"
    },
    {
        seller: "Arvum",
        productName:"Gran Reserva Vinegar",
        volume: 200,
        price: 32.51,
        productImage: "/assets/images/product-list/product3.png"
    },
    {
        seller: "Arvum",
        productName:"Gran Reserva Vinegar",
        volume: 200,
        price: 32.51,
        productImage: "/assets/images/product-list/product4.png"
    }
]

const productListElement = document.querySelector(".product-list");

productList.forEach(product => {
    const newElement = document.createElement("div");

    newElement.classList.add("product-item");
    newElement.innerHTML = `
                                <img src="${product.productImage}" class="product-item-main-image"/>
                                <p class="product-item-seller">${product.seller}</p>
                                <p class="product-item-name">
                                    <b>${product.productName},</b> ${product.volume}ml
                                </p>
                                <p class="product-item-price">${product.price} &euro;</p>
                                <button class="product-item-button">
                                    <img src="/assets/icons/bag-primary.png" alt="Bag"/>
                                    <p>Add to cart</p>
                                </button>
                            `

    productListElement.appendChild(newElement);
})