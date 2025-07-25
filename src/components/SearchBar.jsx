import { Search, X } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';

const SearchBar = ({ searchTerm, onSearchChange, placeholder = "Search products..." }) => {
  const handleClear = () => {
    onSearchChange('');
  };

  return (
    <div className="relative">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
        <input
          type="text"
          placeholder={placeholder}
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-10 pr-10 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent text-foreground placeholder:text-muted-foreground"
        />
        {searchTerm && (
          <Button
            variant="ghost"
            size="sm"
            onClick={handleClear}
            className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0 hover:bg-muted"
          >
            <X className="w-4 h-4" />
          </Button>
        )}
      </div>
    </div>
  );
};

export default SearchBar;

