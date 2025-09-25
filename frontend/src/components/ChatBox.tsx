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

    try {
      // Prepare messages for API
      const apiMessages = messages.concat(userMessage).map(msg => ({
        content: msg.content,
        isUser: msg.isUser
      }));

      // Call our FastAPI backend
      const response = await fetch('http://localhost:8000/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: apiMessages,
          // You can add user context here if needed
          user_context: {
            // Example: financial data that could be passed to the AI
            // income: 5000,
            // expenses: 3000,
            // savings: 20000,
            // investments: 50000,
            // goals: ['retirement', 'house']
          }
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response from AI');
      }

      const data = await response.json();
      
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: data.response,
        isUser: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error communicating with AI:', error);
      
      // Fallback response in case of error
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "I'm sorry, I'm having trouble connecting to my financial advice service. Please try again later.",
        isUser: false,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
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