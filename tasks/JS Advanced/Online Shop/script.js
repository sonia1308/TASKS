const productsWrapper = document.querySelector(".products-wrapper");
const URL = "https://dummyjson.com/products";

fetch(URL)
  .then(res => res.json())
  .then(data => {
    const products = data.products;
    products.forEach((product, index) => {
      const productElement = `
        <div id="product-${index}" class="product">
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
            <button class="add-favorite" onclick="toggleFavorite(${index})">
              <i class="fa-regular fa-heart"></i>
            </button>
          </div>
        </div>`;
      productsWrapper.innerHTML += productElement;

      updateFavoriteButton(index);
    });
  })
  .catch(error => {
    console.error('Error fetching products:', error);
  });

function toggleFavorite(index) {
  const favoriteButton = document.querySelector(`#product-${index} .add-favorite i`);
  let favoriteProducts = JSON.parse(localStorage.getItem('favoriteProducts')) || [];

  const productIndex = favoriteProducts.findIndex(p => p.id === index);
  
  if (productIndex > -1) {
    favoriteProducts.splice(productIndex, 1);
    favoriteButton.classList.remove('fa-solid');
    favoriteButton.classList.add('fa-regular');
  } else {
    const productElement = document.getElementById(`product-${index}`);
    const product = {
      id: index,
      title: productElement.querySelector('.product-title').textContent,
      description: productElement.querySelector('.product-desc').textContent,
      price: productElement.querySelector('.product-price').textContent.replace('$', ''),
      thumbnail: productElement.querySelector('.product-image img').src,
    };
    favoriteProducts.push(product);
    favoriteButton.classList.remove('fa-regular');
    favoriteButton.classList.add('fa-solid');
  }
  
//#region  localStorage
  localStorage.setItem('favoriteProducts', JSON.stringify(favoriteProducts));
}
//#endregion
//#region update favorite button\
function updateFavoriteButton(index) {
  const favoriteButton = document.querySelector(`#product-${index} .add-favorite i`);
  let favoriteProducts = JSON.parse(localStorage.getItem('favoriteProducts')) || [];
  
  const isFavorite = favoriteProducts.some(p => p.id === index);
  if (isFavorite) {
    favoriteButton.classList.remove('fa-regular');
    favoriteButton.classList.add('fa-solid');
  } else {
    favoriteButton.classList.remove('fa-solid');
    favoriteButton.classList.add('fa-regular');
  }
}
