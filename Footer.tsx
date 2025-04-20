import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-900 py-12 text-zinc-300">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">FoodHub</h3>
            <p className="text-sm">Delivering happiness to your doorstep</p>
          </div>
          <div>
            <h4 className="mb-4 font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-orange-500">About Us</a></li>
              <li><a href="#" className="hover:text-orange-500">Menu</a></li>
              <li><a href="#" className="hover:text-orange-500">Offers</a></li>
              <li><a href="#" className="hover:text-orange-500">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-semibold text-white">Contact Us</h4>
            <ul className="space-y-2 text-sm">
              <li>+1 234 567 890</li>
              <li>support@foodhub.com</li>
              <li>123 Food Street, NY 10001</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-semibold text-white">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-orange-500">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-orange-500">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-orange-500">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-orange-500">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-zinc-800 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} FoodHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};