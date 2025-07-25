import { Link, useLocation } from 'react-router-dom';
import { Moon, Sun, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';
import { useTheme } from '../contexts/ThemeContext';

const Header = () => {
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <ShoppingBag className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold text-foreground">Products Gallery</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === '/' 
                  ? 'text-primary' 
                  : 'text-muted-foreground'
              }`}
            >
              Home
            </Link>
            <Link
              to="/products"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname.startsWith('/products') 
                  ? 'text-primary' 
                  : 'text-muted-foreground'
              }`}
            >
              Products
            </Link>
          </nav>

          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="w-9 h-9"
          >
            {isDark ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;

