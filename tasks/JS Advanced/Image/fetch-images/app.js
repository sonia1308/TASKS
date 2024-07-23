document.querySelector('.search-button').addEventListener('click', () => {
    const query = document.getElementById('input-value').value;
    searchImages(query);
});

function searchImages(query) {
    const API_KEY = 'yourApiKey'; // Replace 'yourApiKey' with your actual Pixabay API key
    const API_URL = `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(query)}`;

    fetch(API_URL)
        .then(response => response.json())
        .then(data => {
            displayImages(data.hits);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            Toastify({
                text: "Error fetching data",
                duration: 3000,
                gravity: "top", // `top` or `bottom`
                position: "center", // `left`, `center` or `right`
                backgroundColor: "red",
            }).showToast();
        });
}

function displayImages(images) {
    const imagesWrapper = document.querySelector('.images-wrapper');
    imagesWrapper.innerHTML = '';

    images.forEach(image => {
        const imageBox = document.createElement('div');
        imageBox.classList.add('image-box');

        const imgElement = document.createElement('img');
        imgElement.src = image.webformatURL;
        imgElement.alt = image.tags;

        const textBox = document.createElement('div');
        textBox.classList.add('text-box');

        const userPara = document.createElement('p');
        const userSpan = document.createElement('span');
        userSpan.textContent = 'User: ';
        const userName = document.createElement('span');
        userName.textContent = image.user;
        userPara.appendChild(userSpan);
        userPara.appendChild(userName);

        const link = document.createElement('a');
        link.href = image.pageURL;
        link.textContent = 'Go to page';
        link.target = '_blank';

        textBox.appendChild(userPara);
        textBox.appendChild(link);
        imageBox.appendChild(imgElement);
        imageBox.appendChild(textBox);
        imagesWrapper.appendChild(imageBox);
    });
}
