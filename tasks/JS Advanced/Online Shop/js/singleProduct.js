document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    
    if (!productId) {
      console.error('Product ID not found in URL');
      return;
    }
  
    console.log(`Product ID: ${productId}`); 
    
    const URL = `https://dummyjson.com/products/${productId}`;
  
    fetch(URL)
      .then(res => res.json())
      .then(product => {
        if (!product) {
          console.error('Product not found');
          return;
        }
        const contentWrapper = document.querySelector('.content-wrapper');
  
        const productElement = `
          <div class="single-product">
            <div class="product-image">
              <img src="${product.thumbnail}" alt="${product.title}" />
            </div>
            <div class="product-body">
              <h1 class="product-title">${product.title}</h1>
              <p class="product-rating">
              ${product.stars}
            </p>
              <p class="product-desc">${product.description}</p>
              <p class="product-price">$${product.price}</p>
            </div>
          </div>`;
        
        contentWrapper.innerHTML = productElement;
      })
      .catch(error => {
        console.error('Error fetching product details:', error);
      });
  });
  