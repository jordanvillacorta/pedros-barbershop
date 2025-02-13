import React from 'react';
import { galleryImages } from '../data/gallery';

export default function Gallery() {
  return (
    <section className="py-20 bg-black" id="gallery">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Our Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg aspect-square">
              <img
                src={image}
                alt={`Haircut example ${index + 1}`}
                className="object-cover w-full h-full hover:scale-110 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}