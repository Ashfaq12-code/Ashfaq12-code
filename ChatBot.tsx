import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Minimize2 } from 'lucide-react';
import { Button } from './ui/Button';

interface Message {
  id: string;
  type: 'user' | 'bot';
  text: string;
  timestamp: Date;
}

const INITIAL_MESSAGE: Message = {
  id: '0',
  type: 'bot',
  text: 'Welcome to Food Hub! How can I help you today? 🍔🍕🥗',
  timestamp: new Date(),
};

const BOT_RESPONSES: Record<string, string> = {
  'hi': 'Hello! Welcome to our food delivery service. How can I help you today? 🍔🍕🥗',
  'hello': 'Hello! Welcome to our food delivery service. How can I help you today? 🍔🍕🥗',
  'order food': 'Sure! What type of food are you craving today? We have pizza, burgers, pasta, and more!',
  'menu': 'Here\'s our menu categories:\n• Pizza 🍕\n• Burgers 🍔\n• Pasta 🍝\n• Salads 🥗\n• Sushi 🍱\n• Indian 🍛\n• BBQ 🥩\n\nWhat would you like to try?',
  'pizza': 'Great choice! What size would you like? We have:\n• Small (10")\n• Medium (12")\n• Large (14")',
  'discount': 'Yes! Use code "WELCOME10" for 10% off your first order! 🎉',
  'delivery time': 'Delivery usually takes 30-45 minutes depending on your location and order volume.',
  'contact': 'You can reach our support team 24/7:\n• Email: support@foodhub.com\n• Phone: (123) 456-7890',
};

export const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      text: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');

    // Simulate bot typing
    setTimeout(() => {
      const botResponse = getBotResponse(input.toLowerCase());
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        text: botResponse,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  const getBotResponse = (input: string): string => {
    const matchedResponse = Object.entries(BOT_RESPONSES).find(([key]) =>
      input.includes(key)
    );
    return matchedResponse?.[1] || "I'm not sure about that. Would you like to see our menu or place an order?";
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-4 right-4 rounded-full bg-orange-500 p-3 text-white shadow-lg transition-transform hover:scale-110 hover:bg-orange-600"
        >
          <MessageSquare className="h-6 w-6" />
        </button>
      )}

      {isOpen && (
        <div
          className={`fixed right-4 z-50 w-96 rounded-lg bg-zinc-900 shadow-xl transition-all duration-300 ${
            isMinimized ? 'bottom-4 h-auto' : 'bottom-4 h-[600px]'
          }`}
        >
          <div className="flex items-center justify-between border-b border-zinc-800 p-4">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 overflow-hidden rounded-full border-2 border-orange-500">
                <img
                  src="https://i.ibb.co/d49y5yQ/IMG-0565.jpg"
                  alt="Ashfaq's AI"
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Ashfaq's AI</h3>
                <p className="text-sm text-zinc-400">Food Hub Assistant</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={toggleMinimize}
                className="rounded-full p-1.5 text-zinc-400 hover:bg-zinc-800 hover:text-white"
              >
                <Minimize2 className="h-5 w-5" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-full p-1.5 text-zinc-400 hover:bg-zinc-800 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              <div
                ref={messagesContainerRef}
                className="h-[calc(100%-8rem)] overflow-y-auto p-4 scrollbar-thin scrollbar-track-zinc-800 scrollbar-thumb-zinc-700"
              >
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`mb-4 flex ${
                      message.type === 'user' ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    {message.type === 'bot' && (
                      <div className="mr-2 h-8 w-8 overflow-hidden rounded-full border border-orange-500">
                        <img
                          src="https://i.ibb.co/d49y5yQ/IMG-0565.jpg"
                          alt="Ashfaq's AI"
                          className="h-full w-full object-cover"
                        />
                      </div>
                    )}
                    <div
                      className={`max-w-[75%] rounded-2xl p-3 ${
                        message.type === 'user'
                          ? 'bg-orange-500 text-white'
                          : 'bg-zinc-800 text-zinc-200'
                      }`}
                    >
                      <p className="whitespace-pre-wrap text-sm">{message.text}</p>
                      <span className="mt-1 block text-right text-xs opacity-70">
                        {message.timestamp.toLocaleTimeString([], {
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </span>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              <div className="absolute bottom-0 left-0 right-0 border-t border-zinc-800 bg-zinc-900 p-4">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Type your message..."
                    className="flex-1 rounded-full border border-zinc-700 bg-zinc-800 px-4 py-2 text-white placeholder-zinc-400 focus:border-orange-500 focus:outline-none"
                  />
                  <Button
                    onClick={handleSend}
                    disabled={!input.trim()}
                    className="rounded-full px-4"
                  >
                    <Send className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};