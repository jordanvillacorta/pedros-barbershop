import React, { useEffect } from 'react';
import Gallery from '../components/Gallery';

export default function GalleryPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-16 lg:pt-0 bg-marble">
      <Gallery />
    </div>
  );
}