import { useState, useEffect, useMemo } from 'react';
import { api } from '../services/api';
import ProductCard from '../components/ProductCard';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';
import SearchBar from '../components/SearchBar';
import SortDropdown from '../components/SortDropdown';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('default');

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await api.getProducts();
      setProducts(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleRetry = () => {
    fetchProducts();
  };

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products;

    if (searchTerm.trim()) {
      filtered = products.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    let sorted = [...filtered];
    switch (sortBy) {
      case 'price-low-high':
        sorted.sort((a, b) => a.price - b.price);
        break;
      case 'price-high-low':
        sorted.sort((a, b) => b.price - a.price);
        break;
      case 'name-a-z':
        sorted.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'name-z-a':
        sorted.sort((a, b) => b.title.localeCompare(a.title));
        break;
      default:
        break;
    }

    return sorted;
  }, [products, searchTerm, sortBy]);

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Products</h1>
          <p className="text-muted-foreground">
            Discover our amazing collection of products
          </p>
        </div>
        <LoadingSpinner text="Loading products..." />
      </div>
    );
  }

  if (error) {
    return (
      <div className="space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Products</h1>
        </div>
        <ErrorMessage
          title="Failed to load products"
          message={`Error: ${error}. Please check your internet connection and try again.`}
          onRetry={handleRetry}
        />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-foreground mb-4">Products</h1>
        <p className="text-muted-foreground">
          Discover our amazing collection of products
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="w-full sm:flex-1 max-w-md">
          <SearchBar
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            placeholder="Search products by name..."
          />
        </div>
        <SortDropdown sortBy={sortBy} onSortChange={setSortBy} />
      </div>

      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <span>
          {searchTerm ? (
            <>
              Showing {filteredAndSortedProducts.length} of {products.length} products
              {searchTerm && (
                <> for "<span className="font-medium">{searchTerm}</span>"</>
              )}
            </>
          ) : (
            <>Showing all {products.length} products</>
          )}
        </span>
      </div>

      {filteredAndSortedProducts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-lg text-muted-foreground">
            {searchTerm ? (
              <>
                No products found for "<span className="font-medium">{searchTerm}</span>".
                <br />
                <span className="text-sm">Try adjusting your search terms.</span>
              </>
            ) : (
              'No products available.'
            )}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredAndSortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;

