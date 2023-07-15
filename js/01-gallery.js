import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const listItems = document.querySelector(".gallery");

function createMarkupItems(arr) {
  return arr.map(({preview, original, description}) => `
  <li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>`)
  .join('')
}

listItems.insertAdjacentHTML('beforeend', createMarkupItems(galleryItems));

listItems.addEventListener('click', handlerClickImage);

function handlerClickImage(evt) {
  evt.preventDefault();

  if (evt.target.classList.contains('gallery__item')) {
    return
  }
  const instance = basicLightbox.create(
    `<img src="${evt.target.dataset.source}" width="1400" height ="900">`,
    {
      onShow: () => {
        window.addEventListener('keydown', onEsc);
      },
      onClose: () => {
        window.removeEventListener('keydown', onEsc);
      },
    }
  )
  instance.show();

  function onEsc(event) {
    if (event.key === 'Escape') {
      instance.close();
    }
  }
};