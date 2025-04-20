import React from 'react';
import { Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './ui/Button';
import { MenuItem } from '../types';
import { useCart } from '../store/useCart';
import { formatPrice } from '../lib/utils';

interface MenuCardProps {
  item: MenuItem;
}

export const MenuCard: React.FC<MenuCardProps> = ({ item }) => {
  const addItem = useCart((state) => state.addItem);

  return (
    <div className="overflow-hidden rounded-lg bg-white shadow-md transition-transform hover:scale-105">
      <Link to={`/food/${item.id}`}>
        <img
          src={item.image}
          alt={item.name}
          className="h-48 w-full object-cover"
        />
      </Link>
      <div className="p-4">
        <Link to={`/food/${item.id}`}>
          <h3 className="text-lg font-semibold hover:text-orange-600">{item.name}</h3>
        </Link>
        <p className="mt-1 text-sm text-gray-600 line-clamp-2">{item.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-bold text-orange-600">
            {formatPrice(item.price)}
          </span>
          <Button
            onClick={() => addItem({ ...item, quantity: 1 })}
            size="sm"
            className="flex items-center"
          >
            <Plus className="mr-1 h-4 w-4" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};