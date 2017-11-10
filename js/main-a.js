'use strict';
// Create function 'showImages' which
// adds the loaded HTML content to <ul> element

const showImages = () => {
  const ul = document.querySelector('ul');
  fetch('images.html')
  .then((response) => {
    return response.text();
  })
  .then((text) => {
    ul.innerHTML = text;
  });
};

showImages();

/*const loadHTML = (query, url) => {
  const element = document.querySelector(query);
  fetch('images.html')
  .then((response) => {
    return response.text();
  })
  .then((text) => {
    ul.innerHTML = text;
  });
};

loadHTML('ul', 'images.html');*/