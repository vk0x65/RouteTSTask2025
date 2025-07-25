import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingBag, Star, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] space-y-16">
      <section className="text-center space-y-6">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground">
            Welcome to{' '}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Products Gallery
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover amazing products with our responsive web application. 
            Browse, search, and explore a curated collection of items.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button asChild size="lg" className="text-lg px-8">
            <Link to="/products">
              Browse Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-8">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
            <ShoppingBag className="h-8 w-8 text-primary" />
          </div>
          <h3 className="text-xl font-semibold">Extensive Catalog</h3>
          <p className="text-muted-foreground">
            Browse through a wide variety of products across different categories.
          </p>
        </div>

        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
            <Zap className="h-8 w-8 text-primary" />
          </div>
          <h3 className="text-xl font-semibold">Fast & Responsive</h3>
          <p className="text-muted-foreground">
            Optimized for all devices with lightning-fast performance.
          </p>
        </div>

        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
            <Star className="h-8 w-8 text-primary" />
          </div>
          <h3 className="text-xl font-semibold">Quality Products</h3>
          <p className="text-muted-foreground">
            All products are carefully selected and rated by our community.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;


