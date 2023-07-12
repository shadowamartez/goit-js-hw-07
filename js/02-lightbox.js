import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const listItems = document.querySelector(".gallery");

function createMarkupItems(arr) {
    return arr.map(({preview, original, description}) => `
    <li class="gallery__item">
    <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
    </li>`)
    .join('')
}

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt', captionPosition: 'bottom', captionDelay: 250
});