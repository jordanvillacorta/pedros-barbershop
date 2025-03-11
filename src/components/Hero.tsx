import React from 'react';
import { motion } from 'framer-motion';

import { getImageUrl } from '../utils/images';
import ScrollReveal from './animations/ScrollReveal';
import ParallaxSection from './animations/ParallaxSection';


export default function Hero() {
  const heroImage = "https://d2zdpiztbgorvt.cloudfront.net/region1/us/533995/biz_photo/3376f71fa1ca4e5987abe82454834c-pedro-s-barbershop-biz-photo-f08a7cf45e5549a8b2e8083daa4dd6-booksy.jpeg";
  const logoImage = "https://d2zdpiztbgorvt.cloudfront.net/region1/us/533995/logo/a6335cb701b346d9a96adfdafd0a51-pedro-s-barbershop-logo-7f2d6777d972410992271a5e2643c9-booksy.jpeg";

  return (
    <motion.div 
      className="relative min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url('${getImageUrl(heroImage, 1920)}')`
        }}
      />
      <ParallaxSection className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4 pt-16">
        <ScrollReveal variant="scale" delay={0.2}>
          <img 
            src={getImageUrl(logoImage, 150)}
            srcSet={`
              ${getImageUrl(logoImage, 150)} 150w,
              ${getImageUrl(logoImage, 300)} 300w
            `}
            sizes="150px"
            alt="Pedro's Barbershop Logo"
            className="w-32 h-32 mb-6 rounded-full border-4 border-pr-red"
            loading="eager"
          />
        </ScrollReveal>
        
        <ScrollReveal variant="slide" delay={0.4}>
          <h1 className="text-5xl md:text-7xl font-bold text-pr-white mb-4 md:font-black-freedom">
            Pedro's Barbershop
          </h1>
        </ScrollReveal>
        
        <ScrollReveal variant="fade" delay={0.6}>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Premier Barbershop in Olathe, KS
          </p>
        </ScrollReveal>
        
        <ScrollReveal variant="slide" delay={0.8}>
          <motion.a
            href="/barbers"
            className="bg-pr-red text-pr-white px-8 py-3 rounded-lg font-semibold hover:bg-pr-blue transition-colors duration-300"
          >
            Book A Barber
          </motion.a>
        </ScrollReveal>
      </ParallaxSection>
    </motion.div>
  );
}