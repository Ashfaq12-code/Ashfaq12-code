import React from 'react';
import { Link } from 'react-router-dom';
import { Home, UtensilsCrossed, Pizza, Coffee, Heart, Phone } from 'lucide-react';

interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { icon: Home, label: 'Home', path: '/' },
  { icon: UtensilsCrossed, label: 'All Categories', path: '/categories' },
  { icon: Pizza, label: 'Popular Items', path: '/popular' },
  { icon: Coffee, label: 'Today\'s Special', path: '/special' },
  { icon: Heart, label: 'Favorites', path: '/favorites' },
  { icon: Phone, label: 'Contact Us', path: '/contact' },
];

export const SideMenu: React.FC<SideMenuProps> = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-y-0 left-0 z-50 w-64 transform bg-zinc-900 p-6 shadow-lg transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <nav className="mt-8">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className="mb-4 flex items-center rounded-lg p-2 text-zinc-300 transition-colors hover:bg-zinc-800 hover:text-orange-500"
            onClick={onClose}
          >
            <item.icon className="mr-3 h-5 w-5" />
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
};