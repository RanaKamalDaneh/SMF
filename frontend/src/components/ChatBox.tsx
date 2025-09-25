import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User } from 'lucide-react';

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

const ChatBox: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hello! I'm your AI Financial Assistant. How can I help you optimize your finances today?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponses = [
        "Based on your spending patterns, I recommend setting aside 20% of your income for savings. This aligns with the 50/30/20 budgeting rule.",
        "I notice you spend a lot on dining out. Consider meal planning to save $200-400 monthly while maintaining your lifestyle.",
        "Your emergency fund looks healthy! Consider investing excess savings in a diversified portfolio for long-term growth.",
        "I see opportunities to optimize your subscriptions. You could save $50/month by reviewing unused services.",
        "Your debt-to-income ratio is good. Focus on paying off high-interest debt first to minimize interest payments."
      ];

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: aiResponses[Math.floor(Math.random() * aiResponses.length)],
        isUser: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMessage]);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="bg-white dark:bg-banking-800 rounded-xl shadow-banking border border-banking-200 dark:border-banking-700 flex flex-col h-96">
      <div className="p-4 border-b border-banking-200 dark:border-banking-700">
        <h3 className="text-lg font-semibold text-banking-900 dark:text-white">AI Financial Assistant</h3>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}>
            <div className={`flex items-start gap-3 max-w-xs lg:max-w-md ${message.isUser ? 'flex-row-reverse' : ''}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                message.isUser 
                  ? 'bg-primary-600 text-white' 
                  : 'bg-success-100 dark:bg-success-900/20 text-success-600 dark:text-success-400'
              }`}>
                {message.isUser ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>
              <div className={`rounded-xl p-3 ${
                message.isUser
                  ? 'bg-primary-600 text-white'
                  : 'bg-banking-100 dark:bg-banking-700 text-banking-900 dark:text-white'
              }`}>
                <p className="text-sm">{message.content}</p>
                <p className={`text-xs mt-1 opacity-70`}>
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
          </div>
        ))}
        
        {isLoading && (
          <div className="flex justify-start">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-success-100 dark:bg-success-900/20 text-success-600 dark:text-success-400 flex items-center justify-center">
                <Bot className="w-4 h-4" />
              </div>
              <div className="bg-banking-100 dark:bg-banking-700 rounded-xl p-3">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-banking-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-banking-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-banking-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      
      <form onSubmit={handleSendMessage} className="p-4 border-t border-banking-200 dark:border-banking-700">
        <div className="flex gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ask about your finances..."
            className="flex-1 border border-banking-300 dark:border-banking-600 rounded-lg px-3 py-2 bg-white dark:bg-banking-700 text-banking-900 dark:text-white placeholder-banking-500 dark:placeholder-banking-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={!inputValue.trim() || isLoading}
            className="bg-primary-600 hover:bg-primary-700 disabled:bg-banking-400 text-white p-2 rounded-lg transition-colors"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatBox;