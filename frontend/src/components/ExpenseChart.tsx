import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

const ExpenseChart: React.FC = () => {
  const data = [
    { month: 'Jan', revenue: 182000, expenses: 64000, investment: 118000, profit: 118000 },
    { month: 'Feb', revenue: 195000, expenses: 68000, investment: 127000, profit: 127000 },
    { month: 'Mar', revenue: 178000, expenses: 62000, investment: 116000, profit: 116000 },
    { month: 'Apr', revenue: 188000, expenses: 65000, investment: 123000, profit: 123000 },
    { month: 'May', revenue: 201000, expenses: 71000, investment: 130000, profit: 130000 },
    { month: 'Jun', revenue: 185000, expenses: 67000, investment: 118000, profit: 118000 },
  ];

  const portfolioData = [
    { month: 'Jan', value: 2520000 },
    { month: 'Feb', value: 2647000 },
    { month: 'Mar', value: 2563000 },
    { month: 'Apr', value: 2686000 },
    { month: 'May', value: 2754000 },
    { month: 'Jun', value: 2847000 },
  ];

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 animate-fade-in">
      <div className="banking-card p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-banking-900 dark:text-white">Financial Performance</h3>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-success-500 rounded-full"></div>
              <span className="text-sm text-banking-600 dark:text-banking-400">Revenue</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-warning-500 rounded-full"></div>
              <span className="text-sm text-banking-600 dark:text-banking-400">Expenses</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-primary-500 rounded-full"></div>
              <span className="text-sm text-banking-600 dark:text-banking-400">Investment</span>
            </div>
          </div>
        </div>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" opacity={0.3} />
              <XAxis 
                dataKey="month" 
                stroke="#64748b"
                fontSize={12}
                fontWeight={500}
              />
              <YAxis 
                stroke="#64748b"
                fontSize={12}
                fontWeight={500}
                tickFormatter={(value) => `$${(value / 1000).toFixed(0)}K`}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '12px',
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                  color: '#1e293b'
                }}
                formatter={(value: any) => [`$${(value / 1000).toFixed(0)}K`, '']}
              />
              <Bar 
                dataKey="revenue" 
                fill="#22c55e" 
                radius={[6, 6, 0, 0]}
                name="Revenue"
              />
              <Bar 
                dataKey="expenses" 
                fill="#f59e0b" 
                radius={[6, 6, 0, 0]}
                name="Expenses"
              />
              <Bar 
                dataKey="investment" 
                fill="#3b82f6" 
                radius={[6, 6, 0, 0]}
                name="Investment"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      <div className="banking-card p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-banking-900 dark:text-white">Portfolio Growth</h3>
          <div className="flex items-center gap-2 px-3 py-1 bg-success-50 dark:bg-success-900/20 rounded-full">
            <div className="w-2 h-2 bg-success-500 rounded-full"></div>
            <span className="text-sm font-semibold text-success-600 dark:text-success-400">+12.5% YTD</span>
          </div>
        </div>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={portfolioData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <defs>
                <linearGradient id="portfolioGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" opacity={0.3} />
              <XAxis 
                dataKey="month" 
                stroke="#64748b"
                fontSize={12}
                fontWeight={500}
              />
              <YAxis 
                stroke="#64748b"
                fontSize={12}
                fontWeight={500}
                tickFormatter={(value) => `$${(value / 1000000).toFixed(1)}M`}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '12px',
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                  color: '#1e293b'
                }}
                formatter={(value: any) => [`$${(value / 1000000).toFixed(2)}M`, 'Portfolio Value']}
              />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#3b82f6"
                strokeWidth={3}
                fill="url(#portfolioGradient)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default ExpenseChart;