import React from 'react';
import { GiRazor } from 'react-icons/gi';
import { ServiceType } from '../types/service';

export const popularServices: ServiceType[] = [
  {
    icon: <GiRazor className="w-8 h-8 scale-x-[-1]" />,
    name: 'Adult Haircut',
    description: 'Any type of haircut beard not included.',
    price: '$40',
    duration: '30 mins',
    popular: true,
  },
  {
    icon: <GiRazor className="w-8 h-8 scale-x-[-1]" />,
    name: 'Haircut & Beard Trim',
    description: 'Haircut & straight razor beard shave or shape up',
    price: '$50',
    duration: '30 mins',
    popular: true,
  },
  {
    icon: <GiRazor className="w-8 h-8 scale-x-[-1]" />,
    name: 'Teens Haircut',
    description: 'Special rate for teens aged 13-18',
    price: '$40',
    duration: '30 mins',
    popular: true,
  },
  {
    icon: <GiRazor className="w-8 h-8 scale-x-[-1]" />,
    name: 'Kids Haircut',
    description: 'Special rate for kids 12 & under',
    price: '$30',
    duration: '30 mins',
    popular: true,
  },
];

export const otherServices: ServiceType[] = [
  {
    icon: <GiRazor className="w-8 h-8 scale-x-[-1]" />,
    name: 'Beard Trim & Shave',
    description: 'Professional beard trimming & shaving service',
    price: '$25',
    duration: '30 mins',
  },
  {
    icon: <GiRazor className="w-8 h-8 scale-x-[-1]" />,
    name: 'Eyebrows',
    description: 'Razor shape eyebrows',
    price: '$12',
    duration: '15 mins',
  },
  {
    icon: <GiRazor className="w-8 h-8 scale-x-[-1]" />,
    name: 'After Hours Haircut',
    description: 'Call for available times',
    price: 'Starting at $100',
    duration: '30 mins',
  },
];
