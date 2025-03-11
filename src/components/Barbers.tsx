import React from 'react';
import { barbers } from '../data/barbers';
import BarberCard from './BarberCard';

export default function Barbers() {
  return (
    <section className="py-20 bg-marble">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-pr-white mb-12">Meet Our Barbers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {barbers.map((barber, index) => (
            <BarberCard key={index} barber={barber} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}