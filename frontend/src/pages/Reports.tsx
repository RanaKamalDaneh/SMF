import React from 'react';
import ReportsCard from '../components/ReportsCard';
import { BarChart3, FileText, Calendar } from 'lucide-react';

const Reports: React.FC = () => {
  const stats = [
    { label: 'Reports Generated', value: '24', icon: <FileText className="w-5 h-5" /> },
    { label: 'This Month', value: '6', icon: <Calendar className="w-5 h-5" /> },
    { label: 'Data Points', value: '1.2K', icon: <BarChart3 className="w-5 h-5" /> },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-banking-900 dark:text-white mb-2">Financial Reports</h2>
        <p className="text-banking-600 dark:text-banking-400">
          Download comprehensive reports and insights about your financial data.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white dark:bg-banking-800 rounded-lg p-6 shadow-banking border border-banking-200 dark:border-banking-700"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-banking-900 dark:text-white">{stat.value}</p>
                <p className="text-sm text-banking-600 dark:text-banking-400">{stat.label}</p>
              </div>
              <div className="w-12 h-12 bg-primary-50 dark:bg-primary-900/20 rounded-lg flex items-center justify-center text-primary-600 dark:text-primary-400">
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <ReportsCard />
      
      <div className="bg-white dark:bg-banking-800 rounded-xl p-6 shadow-banking border border-banking-200 dark:border-banking-700">
        <h3 className="text-lg font-semibold text-banking-900 dark:text-white mb-4">Custom Report Request</h3>
        <p className="text-banking-600 dark:text-banking-400 mb-4">
          Need a specific report? Our AI can generate custom financial analysis based on your requirements.
        </p>
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Describe the report you need..."
            className="flex-1 border border-banking-300 dark:border-banking-600 rounded-lg px-3 py-2 bg-white dark:bg-banking-700 text-banking-900 dark:text-white placeholder-banking-500 dark:placeholder-banking-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
          <button className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-6 rounded-lg transition-colors">
            Generate
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reports;