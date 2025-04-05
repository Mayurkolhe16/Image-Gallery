// Sample image data (replace with your own images)
const images = [
    'https://source.unsplash.com/random/300x300?nature',
    'https://source.unsplash.com/random/300x300?city',
    'https://source.unsplash.com/random/300x300?people',
    'https://source.unsplash.com/random/300x300?animal',
    'https://source.unsplash.com/random/300x300?food',
    'https://source.unsplash.com/random/300x300?architecture',
    'https://source.unsplash.com/random/300x300?travel',
    'https://source.unsplash.com/random/300x300?technology'
];

const gallery = document.getElementById('gallery');

// Function to create gallery items
function createGallery() {
    images.forEach(imageUrl => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        
        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = 'Gallery image';
        
        galleryItem.appendChild(img);
        gallery.appendChild(galleryItem);
    });
}

// Initialize gallery when page loads
window.addEventListener('DOMContentLoaded', createGallery);
