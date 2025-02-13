import React from 'react';
import { popularServices, otherServices } from '../data/services';
import ServiceCard from './ServiceCard';

export default function Services() {
  return (
    <section className="py-20 bg-dark" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-pr-white mb-6">Our Services</h2>
          <a 
            href="https://booksy.com/en-us/533995_pedro-s-barbershop_barber-shop_20362_olathe"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-pr-red text-pr-white px-12 py-4 rounded-lg font-semibold text-xl hover:bg-pr-blue transition duration-300 shadow-lg"
          >
            Book Now
          </a>
        </div>
        
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-pr-white mb-8 text-center">Popular Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularServices.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-pr-white mb-8 text-center">Additional Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherServices.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}