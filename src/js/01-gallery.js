// Add imports above this line
import "simplelightbox/dist/simple-lightbox.min.css";
import SimpleLightbox from "simplelightbox";
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

galleryEl.insertAdjacentHTML('afterbegin', createGalleryItems(galleryItems));

function createGalleryItems(image) {    

    return image.map(({ preview, original, description }) => {
        return `
        
            <a class="gallery__item" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />        
            </a>
        
        `
    })
        .join('');   
    
};
    
let gallery = new SimpleLightbox('.gallery a' ,
      {
        captionsData: 'alt',   
        
        captionDelay: 250,
        scrollZoom: false,
        
    });
