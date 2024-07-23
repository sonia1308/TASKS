const productsWrapper = document.querySelector(".products-wrapper");
const URL = "https://dummyjson.com/products";

fetch(URL)
  .then(res => res.json())
  .then(data => {
    const products = data.products;
    products.forEach((value, index) => {
      console.log(data);
      productsWrapper.innerHTML += `
            <div id="${index}" class="product">
                <div class="product-image">
                  <img
                    src="${value.thumbnail}"
                    alt="${value.title}"
                  />
                </div>

                <div class="product-body">
                  <p class="product-title">${value.title}</p>

                  <p class="product-rating">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                  </p>

                  <p class="product-desc">${value.description}</p>
                  <p class="product-price">$${value.price}</p>

                  <button class="add-favorite">
                    <i class="fa-regular fa-heart"></i>
                  </button>
                </div>
              </div>
      `;
    });
  })
  .catch(error => {
    console.error('Veri çekilirken bir hata oluştu:', error);
  });
