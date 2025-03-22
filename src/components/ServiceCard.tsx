import React from 'react';
import { motion } from 'framer-motion';
import { ServiceType } from '../types/service';

interface ServiceCardProps {
  service: ServiceType;
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const variants = {
    hidden: { 
      opacity: 0,
      y: 20,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: index * 0.1
      }
    }
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      role="article"
      aria-labelledby={`service-${index}`}
      viewport={{ once: true, margin: "-50px", amount: 0.3 }}
      whileHover={{ 
        scale: 1.02,
        transition: { type: "spring", stiffness: 400, damping: 10 }
      }}
      className="bg-[#004687] rounded-lg p-4 text-center border border-pr-white/20 shadow-lg"
    >
        <div className="flex justify-center text-pr-red mb-2">
          <motion.div
            initial={{ rotate: 0 }}
            whileHover={{ rotate: 180 }}
            transition={{ duration: 0.3 }}
          >
            {service.icon}
          </motion.div>
        </div>
        <h3 id={`service-${index}`} className="text-2xl font-bold text-pr-white mb-1 font-['Proxima_Nova']">{service.name}</h3>
        <p className="text-gray-400 text-xs mb-2">{service.description}</p>
        <div className="text-pr-white font-bold text-base mb-0.5" aria-label={`Price: ${service.price}`}>{service.price}</div>
        <span className="text-pr-red">{service.duration}</span>
    </motion.div>
  );
}