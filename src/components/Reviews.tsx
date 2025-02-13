import React from 'react';
import { reviews } from '../data/reviews';
import ReviewCard from './ReviewCard';

export default function Reviews() {
  return (
    <section className="py-20 bg-dark" id="reviews">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-pr-white mb-12">Client Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reviews.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}