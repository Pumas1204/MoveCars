// src/components/ImageGallery.js
import React from 'react';
import './ImageGallery.css';

const images = [
    {
        src: 'https://oregonwild.org/wp-content/uploads/2024/05/SparksLake.MicahLundstedt.jpg',
        caption: 'Oregon'
    },
    {
        src: 'https://static.independent.co.uk/2023/06/23/16/iStock-1483998656.jpg',
        caption: 'Texas'
    },
    {
        src: 'https://www.mayflower.com/_next/image?url=https%3A%2F%2Fmayflowerc.wpenginepowered.com%2Fwp-content%2Fuploads%2F2022%2F05%2FMiami-City-Guide_Header-scaled.jpg&w=3840&q=75',
        caption: 'Miami'
    },
    {
        src: 'https://images.musement.com/cover/0002/42/view-on-manhattan-at-night-new-york-city_header-141511.jpeg?w=1200&h=630&q=95&fit=cropg',
        caption: 'New York'
    }
];

const ImageGallery = () => {
    return (
        <div className="image-gallery">
            {images.map((image, index) => (
                <a key={index} className="img-box" href={image.src}>
                    <img src={image.src} alt={image.caption} style={{ width: '250px', height: '150px', margin: '5px' }} />
                    <span>{image.caption}</span>
                </a>
            ))}
        </div>
    );
};

export default ImageGallery;
