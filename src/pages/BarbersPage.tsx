import React, { useEffect } from 'react';
import Barbers from '../components/Barbers';

export default function BarbersPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-16 lg:pt-0 bg-marble">
      <Barbers />
    </div>
  );
}