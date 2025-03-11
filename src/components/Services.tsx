import React from 'react';
import { popularServices, otherServices } from '../data/services';
import ServiceCard from './ServiceCard';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Services() {
  const [popularRef, popularInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [otherRef, otherInView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="py-20 bg-marble" id="services">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-pr-white mb-6">Our Services</h2>
          <motion.a 
            href="/barbers"
            className="inline-block bg-pr-red text-pr-white px-8 py-3 rounded-lg font-semibold hover:bg-pr-blue transition-colors duration-300"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.3 }}
          >
            Book A Barber
          </motion.a>
        </motion.div>
        
        <div className="mb-16">
          <motion.h3
            className="text-2xl font-bold text-pr-white mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={popularInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Popular Services
          </motion.h3>
          <div
            ref={popularRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
          >
            {popularServices.map((service, index) => (
              <ServiceCard 
                key={index} 
                service={service} 
                index={index} 
              />
            ))}
          </div>
        </div>

        <div>
          <motion.h3
            className="text-2xl font-bold text-pr-white mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={otherInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Additional Services
          </motion.h3>
          <div
            ref={otherRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
          >
            {otherServices.map((service, index) => (
              <ServiceCard 
                key={index} 
                service={service} 
                index={index} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}