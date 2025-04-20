import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const OrderSuccess: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-zinc-800 py-8">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-md text-center">
          <CheckCircle className="mx-auto mb-6 h-16 w-16 text-green-500" />
          <h1 className="mb-4 text-3xl font-bold text-white">
            Order Placed Successfully!
          </h1>
          <p className="mb-8 text-zinc-400">
            Thank you for your order. We'll send you a confirmation email with your order details.
          </p>
          <Button onClick={() => navigate('/')} size="lg">
            Continue Shopping
          </Button>
        </div>
      </div>
    </div>
  );
};