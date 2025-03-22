import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { galleryImages, GalleryImage } from '../data/gallery';
import { X, Loader2, ImageOff, ChevronDown } from 'lucide-react';
import { getImageUrl } from '../utils/images';

const galleryVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (index: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: index * 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

interface ImageState {
  loaded: boolean;
  error: boolean;
}

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedBarber, setSelectedBarber] = useState<'all' | 'pedro' | 'jesus'>('all');
  const [imageStates, setImageStates] = useState<Record<string, ImageState>>({});

  const filteredImages = useMemo(() => {
    if (selectedBarber === 'all') return galleryImages;
    return galleryImages.filter(image => image.barber === selectedBarber);
  }, [selectedBarber]);

  useEffect(() => {
    // Preload images
    galleryImages.forEach((src) => {
      const loadImage = (width: number) => {
        const img = new Image();
        img.src = getImageUrl(src.url, width);
        img.onload = () => {
          setImageStates(prev => ({
            ...prev,
            [src.url]: { loaded: true, error: false }
          }));
        };
        img.onerror = () => {
          setImageStates(prev => ({
            ...prev,
            [src.url]: { loaded: true, error: true }
          }));
        };
      };
      
      // Load thumbnail first
      loadImage(400);
    });
  }, []);

  const openLightbox = (image: string) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section className="py-20 bg-marble">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12 font-peristiwa">Our Work</h2>
        
        <div className="flex justify-center mb-8">
          <div className="relative w-48">
            <select
              value={selectedBarber}
              onChange={(e) => setSelectedBarber(e.target.value as 'all' | 'pedro' | 'jesus')}
              aria-label="Filter gallery by barber"
              className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg appearance-none cursor-pointer border-2 border-gray-700 hover:border-pr-red transition-colors duration-300 focus:outline-none focus:border-pr-red"
            >
              <option value="all">All Barbers</option>
              <option value="pedro">Pedro</option>
              <option value="jesus">Jesus</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-pr-red pointer-events-none w-5 h-5" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredImages.map((image, index) => {
            const imageState = imageStates[image.url] || { loaded: false, error: false };
            return (
            <motion.div 
              key={index} 
              className={`relative aspect-square overflow-hidden rounded-lg bg-gray-900 ${
                !imageState.loaded ? 'animate-pulse' : ''
              }`}
              variants={galleryVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              custom={index}
            >
              {!imageState.loaded ? (
                <div className="absolute inset-0 flex items-center justify-center">
                  <Loader2 className="w-8 h-8 text-pr-red animate-spin" />
                </div>
              ) : imageState.error ? (
                <div className="absolute inset-0 flex items-center justify-center text-pr-red">
                  <div className="flex flex-col items-center">
                    <ImageOff className="w-8 h-8 mb-2" />
                    <span className="text-sm">Failed to load</span>
                  </div>
                </div>
              ) : (
                <>
                  <img
                    src={getImageUrl(image.url, 400)}
                    srcSet={`
                      ${getImageUrl(image.url, 400)} 400w,
                      ${getImageUrl(image.url, 800)} 800w,
                      ${getImageUrl(image.url, 1200)} 1200w,
                      ${getImageUrl(image.url, 1600)} 1600w
                    `}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    alt={`Haircut example ${index + 1}`}
                    className="object-cover w-full h-full"
                    loading="lazy"
                    decoding="async"
                  />
                </>
              )}
            </motion.div>
          )})}
        </div>
      </div>
    </section>
  );
}