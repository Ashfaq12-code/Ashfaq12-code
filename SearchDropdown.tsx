import React from 'react';
import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MenuItem } from '../types';
import { formatPrice } from '../lib/utils';
import { MENU_ITEMS } from '../data/menu';

interface SearchDropdownProps {
  searchQuery: string;
  onClose: () => void;
}

export const SearchDropdown: React.FC<SearchDropdownProps> = ({ searchQuery, onClose }) => {
  const filteredItems = MENU_ITEMS.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (searchQuery.length === 0) return null;

  return (
    <div className="absolute left-0 right-0 top-full mt-2 max-h-[70vh] overflow-auto rounded-lg bg-zinc-900 shadow-xl">
      {filteredItems.length > 0 ? (
        <div className="p-2">
          {filteredItems.map((item) => (
            <Link
              key={item.id}
              to={`/food/${item.id}`}
              className="flex items-center gap-4 rounded-lg p-2 transition-colors hover:bg-zinc-800"
              onClick={onClose}
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-16 w-16 rounded-lg object-cover"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-white">{item.name}</h3>
                <p className="text-sm text-zinc-400">{item.category}</p>
              </div>
              <span className="text-orange-500">{formatPrice(item.price)}</span>
            </Link>
          ))}
        </div>
      ) : (
        <div className="flex items-center gap-3 p-4 text-zinc-400">
          <Search className="h-5 w-5" />
          <span>No results found for "{searchQuery}"</span>
        </div>
      )}
    </div>
  );
};