'use strict';
// Create function 'showImages' which
// loads images.json which has links to images as an array.

// create a loop which builds the following HTML from every image in the array: 
/*
<li>
    <figure>
        <a href="img/original/filename.jpg"><img src="img/thumbs/filename.jpg"></a>
        <figcaption>
            <h3>Title</h3>
        </figcaption>
    </figure>
</li>
*/
// Make the above HTML by using DOM methods.
// Create elements with createElement()
// Add attributes with setAttribute()
// Add elements with appendChild
// Add text with createTextNode
// When the above HTML is ready append it to the <ul> element

const showImages = () => {
  const ul = document.querySelector('ul');

  fetch('images.json')
  .then((response) => {
    return response.json();
  })
  .then((json) => {
    json.forEach((image) => {
      /* put code here */
          const elem = document.createElement("LI");
          const aElem = document.createElement("A");
          const textnode = document.createTextNode(image.mediaTitle);
          const h3 = document.createElement("H3");
          const img = document.createElement('IMG');
          const fig = document.createElement('FIGURE');
          const figcaption = document.createElement('FIGCAPTION');

          aElem.setAttribute("href", "img/original/"+image.mediaUrl);
          img.setAttribute("src", "img/thumbs/"+image.mediaThumb);
          elem.appendChild(fig);
          fig.appendChild(aElem);
          aElem.appendChild(img);
          figcaption.appendChild(h3);
          h3.appendChild(textnode);
          elem.appendChild(h3);
          ul.appendChild(elem);
    })
  });
};

showImages();