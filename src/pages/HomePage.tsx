import React, { useEffect } from 'react';
import Hero from '../components/Hero';

export default function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-16 lg:pt-0 bg-marble">
      <Hero />
    </div>
  );
}