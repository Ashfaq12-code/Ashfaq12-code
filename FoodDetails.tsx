import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { useCart } from '../store/useCart';
import { formatPrice } from '../lib/utils';
import { MENU_ITEMS } from '../data/menu';

export const FoodDetails: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const addItem = useCart((state) => state.addItem);
  
  const item = MENU_ITEMS.find((item) => item.id === id);
  
  if (!item) {
    return (
      <div className="container mx-auto px-4 py-8 text-center text-white">
        Food item not found
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem({ ...item, quantity: 1 });
  };

  const handleBuyNow = () => {
    addItem({ ...item, quantity: 1 });
    navigate('/checkout');
  };

  return (
    <div className="min-h-screen bg-zinc-800 py-8">
      <div className="container mx-auto px-4">
        <div className="overflow-hidden rounded-xl bg-zinc-900 shadow-xl">
          <div className="grid md:grid-cols-2">
            <div className="h-[400px]">
              <img
                src={item.image}
                alt={item.name}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-8">
              <h1 className="mb-4 text-3xl font-bold text-white">{item.name}</h1>
              <p className="mb-6 text-zinc-400">{item.description}</p>
              <div className="mb-8">
                <span className="text-3xl font-bold text-orange-500">
                  {formatPrice(item.price)}
                </span>
              </div>
              <div className="space-y-4">
                <Button
                  onClick={handleAddToCart}
                  className="w-full"
                  size="lg"
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Add to Cart
                </Button>
                <Button
                  onClick={handleBuyNow}
                  variant="secondary"
                  className="w-full"
                  size="lg"
                >
                  Buy Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};