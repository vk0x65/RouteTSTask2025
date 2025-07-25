import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';
import { api } from '../services/api';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';
import StarRating from '../components/StarRating';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProduct = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await api.getProduct(id);
      setProduct(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      fetchProduct();
    }
  }, [id]);

  const handleRetry = () => {
    fetchProduct();
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  if (loading) {
    return (
      <div className="space-y-6">
        <Button variant="ghost" onClick={handleGoBack} className="mb-4">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
        <LoadingSpinner text="Loading product details..." />
      </div>
    );
  }

  if (error) {
    return (
      <div className="space-y-6">
        <Button variant="ghost" onClick={handleGoBack} className="mb-4">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
        <ErrorMessage
          title="Failed to load product"
          message={`Error: ${error}. Please check your internet connection and try again.`}
          onRetry={handleRetry}
        />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="space-y-6">
        <Button variant="ghost" onClick={handleGoBack} className="mb-4">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
        <div className="text-center py-12">
          <p className="text-lg text-muted-foreground">Product not found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Button variant="ghost" onClick={handleGoBack} className="mb-4">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back
      </Button>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        <div className="space-y-4">
          <div className="aspect-square bg-white rounded-lg border p-8 flex items-center justify-center">
            <img
              src={product.image}
              alt={product.title}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex items-center space-x-2">
            <Tag className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground capitalize">
              {product.category}
            </span>
          </div>

          <h1 className="text-3xl font-bold text-foreground">
            {product.title}
          </h1>

          {product.rating && (
            <div className="flex items-center space-x-3">
              <StarRating rating={product.rating.rate} size="lg" />
              <span className="text-lg font-medium">
                {product.rating.rate}
              </span>
              <span className="text-muted-foreground">
                ({product.rating.count} reviews)
              </span>
            </div>
          )}

          <div className="space-y-2">
            <span className="text-4xl font-bold text-primary">
              ${product.price}
            </span>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Description</h3>
            <p className="text-muted-foreground leading-relaxed">
              {product.description}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" className="flex-1">
              <ShoppingCart className="w-5 h-5 mr-2" />
              Add to Cart
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/products">
                Continue Shopping
              </Link>
            </Button>
          </div>

          <div className="border-t pt-6 space-y-3">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="font-medium">Category:</span>
                <span className="ml-2 text-muted-foreground capitalize">
                  {product.category}
                </span>
              </div>
              <div>
                <span className="font-medium">Product ID:</span>
                <span className="ml-2 text-muted-foreground">
                  {product.id}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

