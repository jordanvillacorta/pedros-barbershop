import React from 'react';
import { motion } from 'framer-motion';
import { type Barber } from '../data/barbers';
import { Scissors } from 'lucide-react';
import { getImageUrl } from '../utils/images';

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

interface BarberCardProps {
  barber: Barber;
  index: number;
}

export default function BarberCard({ barber, index }: BarberCardProps) {
  return (
    <motion.div
      className="bg-card rounded-lg overflow-hidden border-2 border-pr-white"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      custom={index}
    >
      <div className="aspect-square overflow-hidden">
        <img
          src={getImageUrl(barber.image, 400)}
          srcSet={`
            ${getImageUrl(barber.image, 400)} 400w,
            ${getImageUrl(barber.image, 800)} 800w
          `}
          sizes="(max-width: 768px) 100vw, 50vw"
          alt={barber.name}
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="p-6">
        <h3 className="text-3xl text-pr-white mb-1">{barber.name}</h3>
        <p className="text-pr-red mb-4">{barber.title}</p>
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-gray-300 mb-6"
        >
          {barber.bio}
        </motion.p>
        
        <motion.div 
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <h4 className="text-pr-white font-semibold mb-2">Specialties:</h4>
          <div className="flex flex-wrap gap-2">
            {barber.specialties.map((specialty, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                className="bg-black/50 text-pr-white px-3 py-1 rounded-full text-sm flex items-center"
              >
                <Scissors className="w-3 h-3 mr-1" />
                {specialty}
              </motion.span>
            ))}
          </div>
        </motion.div>
        
        <motion.a
          initial={false}
          viewport={{ once: true }}
          href={barber.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block w-full bg-pr-red hover:bg-pr-blue text-white text-center py-3 rounded-lg transition-colors duration-300"
        >
          Book with {barber.name.split(' ')[0]}
        </motion.a>
      </div>
    </motion.div>
  );
}