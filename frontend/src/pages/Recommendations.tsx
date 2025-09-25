import React from 'react';
import ChatBox from '../components/ChatBox';
import { Lightbulb, Target, TrendingUp, PiggyBank } from 'lucide-react';

const Recommendations: React.FC = () => {
  const quickTips = [
    {
      icon: <PiggyBank className="w-5 h-5" />,
      title: 'Emergency Fund',
      description: 'Build 3-6 months of expenses in savings',
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: 'Investment Growth',
      description: 'Consider low-cost index funds for long-term growth',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: 'Debt Reduction',
      description: 'Pay off high-interest debt first',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: <Lightbulb className="w-5 h-5" />,
      title: 'Smart Spending',
      description: 'Track and optimize your monthly expenses',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-banking-900 dark:text-white mb-2">AI Recommendations</h2>
        <p className="text-banking-600 dark:text-banking-400">
          Get personalized financial advice from our AI assistant.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <ChatBox />
        </div>
        
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-banking-900 dark:text-white mb-4">Quick Tips</h3>
          {quickTips.map((tip, index) => (
            <div
              key={index}
              className="bg-white dark:bg-banking-800 rounded-lg p-4 shadow-banking border border-banking-200 dark:border-banking-700 hover:shadow-banking-lg transition-shadow"
            >
              <div className="flex items-start gap-3">
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${tip.color} flex items-center justify-center text-white flex-shrink-0`}>
                  {tip.icon}
                </div>
                <div>
                  <h4 className="font-medium text-banking-900 dark:text-white mb-1">{tip.title}</h4>
                  <p className="text-sm text-banking-600 dark:text-banking-400">{tip.description}</p>
                </div>
              </div>
            </div>
          ))}
          
          <div className="bg-gradient-to-r from-primary-50 to-purple-50 dark:from-primary-900/20 dark:to-purple-900/20 rounded-lg p-6 border border-primary-200 dark:border-primary-700">
            <h4 className="font-semibold text-banking-900 dark:text-white mb-2">Premium Feature</h4>
            <p className="text-sm text-banking-600 dark:text-banking-400 mb-4">
              Unlock advanced AI insights, personalized investment recommendations, and detailed financial planning tools.
            </p>
            <button className="bg-gradient-to-r from-primary-600 to-purple-600 hover:from-primary-700 hover:to-purple-700 text-white text-sm font-medium py-2 px-4 rounded-md transition-all">
              Upgrade Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommendations;