import { Star } from 'lucide-react';

const StarRating = ({ rating, size = 'default', showCount = false, count = 0 }) => {
  const sizeClasses = {
    sm: 'w-3 h-3',
    default: 'w-4 h-4',
    lg: 'w-5 h-5'
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={i} className={`${sizeClasses[size]} fill-yellow-400 text-yellow-400`} />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative">
          <Star className={`${sizeClasses[size]} text-gray-300`} />
          <div className="absolute inset-0 overflow-hidden w-1/2">
            <Star className={`${sizeClasses[size]} fill-yellow-400 text-yellow-400`} />
          </div>
        </div>
      );
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Star key={`empty-${i}`} className={`${sizeClasses[size]} text-gray-300`} />
      );
    }

    return stars;
  };

  return (
    <div className="flex items-center space-x-1">
      <div className="flex items-center space-x-1">
        {renderStars(rating)}
      </div>
      {showCount && count > 0 && (
        <span className="text-sm text-muted-foreground">
          ({count})
        </span>
      )}
    </div>
  );
};

export default StarRating;

