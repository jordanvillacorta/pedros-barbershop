import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { galleryImages } from '../data/gallery';
import { X, Loader2, ImageOff } from 'lucide-react';
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
  const [imageStates, setImageStates] = useState<Record<string, ImageState>>({});

  useEffect(() => {
    // Preload images
    galleryImages.forEach((src) => {
      const loadImage = (width: number) => {
        const img = new Image();
        img.src = getImageUrl(src, width);
        img.onload = () => {
          setImageStates(prev => ({
            ...prev,
            [src]: { loaded: true, error: false }
          }));
        };
        img.onerror = () => {
          setImageStates(prev => ({
            ...prev,
            [src]: { loaded: true, error: true }
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
        <h2 className="text-4xl font-bold text-center text-white mb-12">Our Work</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => {
            const imageState = imageStates[image] || { loaded: false, error: false };
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
                    src={getImageUrl(image, 400)}
                    srcSet={`
                      ${getImageUrl(image, 400)} 400w,
                      ${getImageUrl(image, 800)} 800w,
                      ${getImageUrl(image, 1200)} 1200w,
                      ${getImageUrl(image, 1600)} 1600w
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