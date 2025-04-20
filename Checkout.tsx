import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { useCart } from '../store/useCart';
import { formatPrice } from '../lib/utils';

export const Checkout: React.FC = () => {
  const navigate = useNavigate();
  const { items, clearCart } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);
  
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000));
    clearCart();
    navigate('/order-success');
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-zinc-800 py-8">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-2xl font-bold text-white">No items to checkout</h2>
          <Button onClick={() => navigate('/')}>Continue Shopping</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-800 py-8">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-8 text-3xl font-bold text-white">Checkout</h1>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <div className="rounded-lg bg-zinc-900 p-6">
                <h2 className="mb-4 text-xl font-bold text-white">
                  Delivery Address
                </h2>
                <form className="space-y-4">
                  <div>
                    <label className="mb-1 block text-sm text-zinc-400">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-lg border border-zinc-700 bg-zinc-800 p-2 text-white"
                      required
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm text-zinc-400">
                      Address
                    </label>
                    <textarea
                      className="w-full rounded-lg border border-zinc-700 bg-zinc-800 p-2 text-white"
                      rows={3}
                      required
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm text-zinc-400">
                      Phone
                    </label>
                    <input
                      type="tel"
                      className="w-full rounded-lg border border-zinc-700 bg-zinc-800 p-2 text-white"
                      required
                    />
                  </div>
                </form>
              </div>
              <div className="rounded-lg bg-zinc-900 p-6">
                <h2 className="mb-4 text-xl font-bold text-white">
                  Payment Details
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="mb-1 block text-sm text-zinc-400">
                      Card Number
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-lg border border-zinc-700 bg-zinc-800 p-2 text-white"
                      placeholder="1234 5678 9012 3456"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="mb-1 block text-sm text-zinc-400">
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        className="w-full rounded-lg border border-zinc-700 bg-zinc-800 p-2 text-white"
                        placeholder="MM/YY"
                        required
                      />
                    </div>
                    <div>
                      <label className="mb-1 block text-sm text-zinc-400">
                        CVV
                      </label>
                      <input
                        type="text"
                        className="w-full rounded-lg border border-zinc-700 bg-zinc-800 p-2 text-white"
                        placeholder="123"
                        required
                      />
                    </div>
                  </div>
                  <Button
                    type="submit"
                    className="mt-6 w-full"
                    size="lg"
                    disabled={isProcessing}
                  >
                    {isProcessing ? 'Processing...' : `Pay ${formatPrice(total + 5.99)}`}
                  </Button>
                </form>
              </div>
            </div>
            <div>
              <div className="rounded-lg bg-zinc-900 p-6">
                <h2 className="mb-4 text-xl font-bold text-white">Order Summary</h2>
                <div className="space-y-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between">
                      <div className="text-zinc-400">
                        <span>{item.name}</span>
                        <span className="ml-2 text-sm">x{item.quantity}</span>
                      </div>
                      <span className="text-white">
                        {formatPrice(item.price * item.quantity)}
                      </span>
                    </div>
                  ))}
                  <div className="border-t border-zinc-800 pt-4">
                    <div className="flex justify-between text-zinc-400">
                      <span>Subtotal</span>
                      <span>{formatPrice(total)}</span>
                    </div>
                    <div className="flex justify-between text-zinc-400">
                      <span>Delivery Fee</span>
                      <span>{formatPrice(5.99)}</span>
                    </div>
                    <div className="mt-2 flex justify-between text-lg font-bold text-white">
                      <span>Total</span>
                      <span>{formatPrice(total + 5.99)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};