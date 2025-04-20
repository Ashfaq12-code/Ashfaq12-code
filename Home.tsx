import React from 'react';
import { MenuCard } from '../components/MenuCard';

const MENU_ITEMS = [
  {
    id: '1',
    name: 'Margherita Pizza',
    description: 'Fresh tomatoes, mozzarella, basil, and olive oil',
    price: 14.99,
    image: 'https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=800',
    category: 'Pizza',
  },
  {
    id: '2',
    name: 'Classic Burger',
    description: 'Beef patty, lettuce, tomato, cheese, and special sauce',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800',
    category: 'Burgers',
  },
  {
    id: '3',
    name: 'Chicken Caesar Salad',
    description: 'Grilled chicken, romaine lettuce, croutons, and Caesar dressing',
    price: 10.99,
    image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=800',
    category: 'Salads',
  },
  {
    id: '4',
    name: 'Sushi Roll Platter',
    description: 'Assorted fresh sushi rolls with wasabi and soy sauce',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800',
    category: 'Sushi',
  },
  {
    id: '5',
    name: 'Pasta Carbonara',
    description: 'Creamy pasta with pancetta, egg, and parmesan cheese',
    price: 16.99,
    image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=800',
    category: 'Pasta',
  },
  {
    id: '6',
    name: 'Chicken Tikka Masala',
    description: 'Tender chicken in rich, creamy tomato curry sauce',
    price: 18.99,
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800',
    category: 'Indian',
  },
  {
    id: '7',
    name: 'Fish & Chips',
    description: 'Crispy battered cod with thick-cut fries',
    price: 15.99,
    image: 'https://images.unsplash.com/photo-1579208575657-c595a05383b7?w=800',
    category: 'Seafood',
  },
  {
    id: '8',
    name: 'Beef Stir Fry',
    description: 'Tender beef strips with mixed vegetables in savory sauce',
    price: 17.99,
    image: 'https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=800',
    category: 'Asian',
  },
  {
    id: '9',
    name: 'Greek Salad',
    description: 'Fresh vegetables, olives, and feta cheese with olive oil',
    price: 11.99,
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800',
    category: 'Salads',
  },
  {
    id: '10',
    name: 'BBQ Ribs',
    description: 'Slow-cooked pork ribs with house-made BBQ sauce',
    price: 22.99,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800',
    category: 'BBQ',
  }
];

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-zinc-800 py-8">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-white">Choose Your Tasty Food</h1>
          <p className="text-zinc-400">Discover our delicious menu with premium quality ingredients</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {MENU_ITEMS.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};