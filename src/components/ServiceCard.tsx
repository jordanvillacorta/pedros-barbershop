import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ServiceType } from '../types/service';

interface ServiceCardProps {
  service: ServiceType;
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const variants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        delay: index * 0.05
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="bg-card rounded-lg p-4 text-center lg:hover:scale-105 transition duration-300 border border-pr-white/20"
    >
        <div className="flex justify-center text-pr-red mb-2">
          {service.icon}
        </div>
        <h3 className="text-base font-bold text-pr-white mb-1">{service.name}</h3>
        <p className="text-gray-400 text-xs mb-2">{service.description}</p>
        <div className="text-pr-red font-bold text-lg mb-0.5">{service.price}</div>
        <span className="text-gray-500">{service.duration}</span>
    </motion.div>
  );
}