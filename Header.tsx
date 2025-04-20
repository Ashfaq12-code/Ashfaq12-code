import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, User, Menu as MenuIcon, X } from 'lucide-react';
import { Button } from './ui/Button';
import { useCart } from '../store/useCart';
import { SideMenu } from './SideMenu';
import { SearchDropdown } from './SearchDropdown';
import { UserModal } from './UserModal';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  const cartItems = useCart((state) => state.items);
  const cartItemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearchFocused(false);
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-zinc-900 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-orange-500"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6 cursor-pointer" />
                ) : (
                  <MenuIcon className="h-6 w-6 cursor-pointer" />
                )}
              </button>
              <Link to="/" className="ml-4 text-2xl font-bold text-orange-500">
                FoodHub
              </Link>
            </div>

            <form
              onSubmit={handleSearch}
              className="relative hidden flex-1 items-center justify-center px-8 md:flex"
            >
              <div className="relative w-full max-w-xl">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  placeholder="Search your favorite dishes..."
                  className="w-full rounded-full border border-zinc-700 bg-zinc-800 py-2 pl-4 pr-12 text-white placeholder-zinc-400 focus:border-orange-500 focus:outline-none"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-orange-500 p-1.5 text-white hover:bg-orange-600"
                >
                  <Search className="h-4 w-4" />
                </button>
                {isSearchFocused && (
                  <SearchDropdown
                    searchQuery={searchQuery}
                    onClose={() => setIsSearchFocused(false)}
                  />
                )}
              </div>
            </form>

            <div className="flex items-center space-x-4">
              <Link to="/cart" className="relative text-white hover:text-orange-500">
                <ShoppingCart className="h-6 w-6" />
                {cartItemCount > 0 && (
                  <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-xs text-white">
                    {cartItemCount}
                  </span>
                )}
              </Link>
              <Button
                variant="primary"
                size="sm"
                className="hidden md:flex"
                onClick={() => setIsUserModalOpen(true)}
              >
                <User className="mr-2 h-4 w-4" />
                Sign In
              </Button>
            </div>
          </div>
        </div>
      </header>
      <SideMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <UserModal isOpen={isUserModalOpen} onClose={() => setIsUserModalOpen(false)} />
    </>
  );
};