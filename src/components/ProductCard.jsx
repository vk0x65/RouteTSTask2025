import { Link } from 'react-router-dom';
import StarRating from './StarRating';

const ProductCard = ({ product }) => {
  const { id, title, price, image, rating } = product;

  return (
    <Link to={`/products/${id}`} className="group">
      <div className="bg-card rounded-lg border shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden">
        <div className="aspect-square bg-white p-4 flex items-center justify-center">
          <img
            src={image}
            alt={title}
            className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-200"
            loading="lazy"
          />
        </div>

        <div className="p-4 space-y-2">
          <h3 className="font-semibold text-card-foreground line-clamp-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          
          {rating && (
            <div className="flex items-center space-x-2">
              <StarRating rating={rating.rate} showCount={true} count={rating.count} />
            </div>
          )}

          <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-primary">
              ${price}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;

