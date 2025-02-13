import React, { useState } from 'react';
import { Star } from 'lucide-react';
import { ReviewType } from '../types/review';

interface ReviewCardProps {
  review: ReviewType;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 150;
  const needsReadMore = review.comment.length > maxLength;
  
  const displayText = isExpanded 
    ? review.comment 
    : `${review.comment.slice(0, maxLength)}${needsReadMore ? '...' : ''}`;

  return (
    <div className="bg-card rounded-lg p-8 border-2">
      <div className="flex mb-4">
        {[...Array(review.rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-pr-red fill-current" />
        ))}
      </div>
      <p className="text-gray-300 mb-4">"{displayText}"</p>
      {needsReadMore && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-pr-red hover:text-pr-blue transition-colors duration-300 text-sm font-semibold mb-4"
        >
          {isExpanded ? 'Show Less' : 'Read More'}
        </button>
      )}
      <div className="flex justify-between items-center">
        <span className="text-pr-white font-semibold">{review.name}</span>
        <span className="text-gray-500 text-sm">{review.date}</span>
      </div>
    </div>
  );
}