const productsWrapper = document.querySelector(".products-wrapper");

function loadFavorites() {
    const favoriteProducts = JSON.parse(localStorage.getItem('favoriteProducts')) || [];

    if (favoriteProducts.length === 0) {
        productsWrapper.innerHTML = '<p>No favorites yet!</p>';
        return;
    }
    favoriteProducts.forEach(product => {c
        const productElement = `
            <div class="product">
                <div class="product-image">
                    <img src="${product.thumbnail}" alt="${product.title}" />
                </div>
                <div class="product-body">
                    <p class="product-title">${product.title}</p>
                    <p class="product-rating">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </p>
                    <p class="product-desc">${product.description}</p>
                    <p class="product-price">$${product.price}</p>
                </div>
            </div>`;
        productsWrapper.innerHTML += productElement;
    });
}

document.addEventListener('DOMContentLoaded', loadFavorites);
