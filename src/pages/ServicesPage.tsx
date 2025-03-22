import React, { useEffect } from 'react';
import Services from '../components/Services';

export default function ServicesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-16 lg:pt-0 bg-marble">
      <Services />
    </div>
  );
}