import React from 'react';
import { X, User, LogIn, UserPlus, Settings, LogOut } from 'lucide-react';
import { Button } from './ui/Button';

interface UserModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const UserModal: React.FC<UserModalProps> = ({ isOpen, onClose }) => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-full max-w-md rounded-lg bg-zinc-900 p-6">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-bold text-white">
            {isLoggedIn ? 'My Account' : 'Sign In'}
          </h2>
          <button
            onClick={onClose}
            className="rounded-full p-1 text-zinc-400 hover:bg-zinc-800 hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {isLoggedIn ? (
          <div className="space-y-4">
            <div className="flex items-center gap-4 rounded-lg bg-zinc-800 p-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500">
                <User className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white">John Doe</h3>
                <p className="text-sm text-zinc-400">john.doe@example.com</p>
              </div>
            </div>
            <button className="flex w-full items-center gap-3 rounded-lg p-3 text-left text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-white">
              <Settings className="h-5 w-5" />
              Account Settings
            </button>
            <button
              onClick={() => setIsLoggedIn(false)}
              className="flex w-full items-center gap-3 rounded-lg p-3 text-left text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-red-500"
            >
              <LogOut className="h-5 w-5" />
              Sign Out
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="space-y-4">
              <div>
                <label className="mb-1 block text-sm text-zinc-400">Email</label>
                <input
                  type="email"
                  className="w-full rounded-lg border border-zinc-700 bg-zinc-800 p-2 text-white"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm text-zinc-400">Password</label>
                <input
                  type="password"
                  className="w-full rounded-lg border border-zinc-700 bg-zinc-800 p-2 text-white"
                  placeholder="Enter your password"
                />
              </div>
            </div>
            <Button
              onClick={() => setIsLoggedIn(true)}
              className="w-full"
              size="lg"
            >
              <LogIn className="mr-2 h-5 w-5" />
              Sign In
            </Button>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-zinc-800" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-zinc-900 px-2 text-zinc-400">Or</span>
              </div>
            </div>
            <Button variant="outline" className="w-full" size="lg">
              <UserPlus className="mr-2 h-5 w-5" />
              Create Account
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};