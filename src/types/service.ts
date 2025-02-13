import { ReactNode } from 'react';

export interface ServiceType {
  icon: ReactNode;
  name: string;
  description: string;
  price: string;
  duration: string;
  popular?: boolean;
}