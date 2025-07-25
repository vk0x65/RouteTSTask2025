import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select.jsx";

const SortDropdown = ({ sortBy, onSortChange }) => {
  const sortOptions = [
    { value: 'default', label: 'Default' },
    { value: 'price-low-high', label: 'Price: Low to High' },
    { value: 'price-high-low', label: 'Price: High to Low' },
    { value: 'name-a-z', label: 'Name: A to Z' },
    { value: 'name-z-a', label: 'Name: Z to A' },
  ];

  return (
    <div className="w-full sm:w-48">
      <Select value={sortBy} onValueChange={onSortChange}>
        <SelectTrigger>
          <SelectValue placeholder="Sort by..." />
        </SelectTrigger>
        <SelectContent>
          {sortOptions.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default SortDropdown;

