import React from 'react';
import { Scissors } from 'lucide-react';
import { ServiceType } from '../types/service';

export const popularServices: ServiceType[] = [
  {
    icon: <Scissors className="w-8 h-8" />,
    name: "Adult Haircut",
    description: "Any type of haircut beard not included.",
    price: "$35",
    duration: "30 mins",
    popular: true
  },
  {
    icon: <Scissors className="w-8 h-8 rotate-45" />,
    name: "Haircut and Beard Trim",
    description: "Haircut and straight razor beard shave or shape up",
    price: "$45",
    duration: "30 mins",
    popular: true
  },
  {
    icon: <Scissors className="w-8 h-8 -rotate-45" />,
    name: "Teens Haircut",
    description: "Special rate for teens aged 13-18",
    price: "$30",
    duration: "30 mins",
    popular: true
  }
];

export const otherServices: ServiceType[] = [
  {
    icon: <Scissors className="w-8 h-8 rotate-90" />,
    name: "Kids Haircut",
    description: "Special rate for kids 12 and under",
    price: "$30",
    duration: "30 mins"
  },
  {
    icon: <Scissors className="w-8 h-8 -rotate-90" />,
    name: "Beard Trim and Shave",
    description: "Professional beard trimming and shaving service",
    price: "$25",
    duration: "30 mins"
  },
  {
    icon: <Scissors className="w-8 h-8 rotate-180" />,
    name: "Eyebrows",
    description: "Razor shape eyebrows",
    price: "$12",
    duration: "15 mins"
  },
  {
    icon: <Scissors className="w-8 h-8" />,
    name: "After Hours Haircut",
    description: "Call for available times",
    price: "$100",
    duration: "30 mins"
  }
];