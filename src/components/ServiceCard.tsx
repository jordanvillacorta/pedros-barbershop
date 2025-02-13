import React from 'react';
import { ServiceType } from '../types/service';

interface ServiceCardProps {
  service: ServiceType;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="bg-card rounded-lg p-8 text-center hover:transform hover:scale-105 transition duration-300 border-2 border-pr-white">
      <div className="flex justify-center text-pr-red mb-4">
        {service.icon}
      </div>
      <h3 className="text-xl font-bold text-pr-white mb-2">{service.name}</h3>
      <p className="text-gray-400 mb-4">{service.description}</p>
      <div className="text-pr-red font-bold text-2xl mb-2">{service.price}</div>
      <span className="text-gray-500">{service.duration}</span>
    </div>
  );
}