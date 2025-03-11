import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Award, Users, Scissors } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import ScrollReveal from '../components/animations/ScrollReveal';

const timelineEvents = [
  {
    year: '2016',
    title: 'Grand Opening',
    description: 'Pedro\'s Barbershop opened its doors in Olathe, bringing authentic Puerto Rican barbering to Kansas.',
    icon: <Scissors />
  },
  {
    year: '2019',
    title: 'Community Recognition',
    description: 'Recognized as one of the top-rated barbershops in Johnson County.',
    icon: <Award />
  },
  {
    year: '2021',
    title: 'Team Expansion',
    description: 'Welcomed talented barbers to meet growing demand while maintaining our high standards.',
    icon: <Users />
  },
  {
    year: '2024',
    title: 'Growing Strong',
    description: 'Continuing to serve the Olathe community with excellence in barbering and customer service.',
    icon: <Calendar />
  }
];

const cardVariants = {
  hidden: (isEven: boolean) => ({
    opacity: 0,
    x: window.innerWidth >= 768 ? (isEven ? 100 : -100) : 0,
    y: window.innerWidth < 768 ? 50 : 0
  }),
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export default function AboutUsPage() {
  return (
    <div className="pt-16 lg:pt-0 bg-marble min-h-screen">
      <div className="container mx-auto px-4 py-20">
        <ScrollReveal variant="fade" className="max-w-6xl mx-auto mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal variant="slide" className="relative">
              <div className="aspect-square overflow-hidden rounded-lg border-4 border-pr-red">
                <img
                  src="https://github.com/jordanvillacorta/pedros-barbershop/blob/master/images/pedro_hs.JPG?raw=true"
                  alt="Pedro Angel"
                  className="w-full h-full object-cover"
                />
              </div>
            </ScrollReveal>
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-5xl font-black-freedom text-pr-white mb-6"
              >
                Meet Pedro Angel
              </motion.h1>
              <motion.div 
                className="space-y-4 text-gray-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  As the founder and owner of Pedro's Barbershop, I bring over a decade of barbering expertise and Puerto Rican heritage to every cut. My journey in barbering began with a simple passion: helping people look and feel their best.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  Since opening our doors in Olathe, we've built more than just a barbershop – we've created a community where everyone is welcome and every visit ends with confidence and satisfaction.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                >
                  Our commitment to excellence, attention to detail, and genuine care for our clients has made us one of Johnson County's most trusted barbershops.
                </motion.p>
              </motion.div>
            </div>
          </div>
        </ScrollReveal>

        {/* Timeline Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black-freedom text-pr-white text-center mb-12">
            Our Journey
          </h2>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-pr-red" />
            
            {/* Timeline Events */}
            <div className="space-y-20">
              {timelineEvents.map((event, index) => {
                const [ref, inView] = useInView({
                  threshold: 0.2,
                  triggerOnce: true
                });

                return (
                <div
                  key={index}
                  className={`relative flex items-center flex-col md:flex-row ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className="hidden md:block flex-1" />
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-pr-red rounded-full flex items-center justify-center text-white z-10">
                    {event.icon}
                  </div>
                  <motion.div 
                    ref={ref}
                    className="flex-1 w-full md:w-auto"
                    variants={cardVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    custom={index % 2 === 0}
                  >
                    <div className={`bg-card p-6 rounded-lg shadow-lg mx-4 ${
                      index % 2 === 0 ? 'md:ml-12 mt-6 md:mt-0' : 'md:mr-12 mt-6 md:mt-0'
                    }`}>
                      <div className="text-pr-red font-bold text-xl mb-2">{event.year}</div>
                      <h3 className="text-pr-white text-xl mb-2">{event.title}</h3>
                      <p className="text-gray-400">{event.description}</p>
                    </div>
                  </motion.div>
                </div>
              )})}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}