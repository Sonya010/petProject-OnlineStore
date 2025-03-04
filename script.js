const getProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products?limit=15");
    const products = await response.json();
    return products;
};

const renderProducts = async () => {
    const products = await getProducts();
    const container = document.querySelector(".products-container");
    for (item of products) {
        //create elements
        const productLi = document.createElement("li");
        const productImg = document.createElement("img");
        const productTitle = document.createElement("h4");
        const productDescription = document.createElement("p");
        const productPriceSection = document.createElement("section");
        const productPrice = document.createElement("span");
        const productBtn = document.createElement("button");
        //setting values for elements
        productLi.classList.add("product-item");
        productPriceSection.classList.add("product-price-section");
        productImg.src = item.image;
        productTitle.innerText = item.title;
        productDescription.innerText = item.description;
        productPrice.innerText = `${item.price}$`;
        productBtn.innerText = "Add to cart";
        //appending elements inside the wrappers
        productPriceSection.append(productPrice, productBtn);
        productLi.append(
            productImg,
            productTitle,
            productDescription,
            productPriceSection
        );
        container.append(productLi);
    }
};

renderProducts();
