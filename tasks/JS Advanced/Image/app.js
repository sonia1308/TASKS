const BASE_URL = 'https://pixabay.com/api/?key=45092597-c8b3cb91a5c39353489f8ec5e';
const searchButton = document.querySelector('.search-button');
const inputField = document.querySelector('#input-value');
const imagesWrapper = document.querySelector('.images-wrapper');

async function fetchImages(query) {
  const url = `${BASE_URL}&q=${encodeURIComponent(query)}&image_type=photo`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const data = await response.json();
  return data.hits;  
}

function displayImages(images) {
  imagesWrapper.innerHTML = '';

  if (images.length === 0) {
    imagesWrapper.innerHTML = '<p class="not-found">No images found</p>';
    return;
  }

  images.forEach(image => {
    const imageElement = `
      <div class="image-box">
        <img src="${image.webformatURL}" alt="${image.tags}" />
        <div class="text-box">
          <p>${image.tags}</p>
        </div>
      </div>`;
    imagesWrapper.innerHTML += imageElement;
  });
}

searchButton.addEventListener('click', async () => {
  const query = inputField.value.trim();

  if (query) {
    try {
      const images = await fetchImages(query);
      displayImages(images);
    } catch (error) {
      console.error('Error fetching images:', error);
      imagesWrapper.innerHTML = '<p class="not-found">Error fetching images</p>';
    }
  } else {
    imagesWrapper.innerHTML = '<p class="not-found">Please enter a search term</p>';
  }
});