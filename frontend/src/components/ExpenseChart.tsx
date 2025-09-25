import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  AreaChart, Area, PieChart, Pie, Cell
} from 'recharts';

// بيانات الشارتات
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

const expenseCategories = [
  { name: 'Housing', value: 24000 },
  { name: 'Food', value: 8000 },
  { name: 'Transport', value: 6500 },
  { name: 'Shopping', value: 5400 },
  { name: 'Dining', value: 3300 },
  { name: 'Other', value: 7100 }
];
const pieColors = ['#6366f1', '#f59e0b', '#10b981', '#ef4444', '#3b82f6', '#a21caf'];

// Label for the Pie Chart
const renderCustomizedLabel = (props: any) => {
  const { cx, cy, midAngle, innerRadius, outerRadius, percent } = props;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * Math.PI / 180);
  const y = cy + radius * Math.sin(-midAngle * Math.PI / 180);
  
  return (
    <text 
      x={x} 
      y={y} 
      fill="white" 
      textAnchor={x > cx ? 'start' : 'end'} 
      dominantBaseline="central"
      fontSize={12}
      fontWeight="bold"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const ExpenseChart: React.FC = () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Financial Performance */}
        <div className="bg-white p-4 rounded-xl shadow border border-gray-100">
          <h3 className="text-lg font-bold mb-2">Financial Performance</h3>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" opacity={0.3} />
                <XAxis dataKey="month" stroke="#64748b" fontSize={11} />
                <YAxis stroke="#64748b" fontSize={11}
                  tickFormatter={value => `$${(value / 1000).toFixed(0)}K`}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#ffffff',
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                    color: '#1e293b'
                  }}
                  formatter={(value: any) => [`$${(value / 1000).toFixed(0)}K`, '']}
                  labelStyle={{ fontWeight: 'bold' }}
                />
                <Bar dataKey="revenue" fill="#22c55e" radius={[4, 4, 0, 0]} name="Revenue" />
                <Bar dataKey="expenses" fill="#f59e0b" radius={[4, 4, 0, 0]} name="Expenses" />
                <Bar dataKey="investment" fill="#3b82f6" radius={[4, 4, 0, 0]} name="Investment" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Portfolio Growth */}
        <div className="bg-white p-4 rounded-xl shadow border border-gray-100">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-bold">Portfolio Growth</h3>
            <div className="flex items-center gap-1 px-2 py-0.5 bg-green-50 text-green-700 rounded-full text-xs font-medium">
              <span>+12.5% YTD</span>
            </div>
          </div>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={portfolioData} margin={{ top: 10, right: 10, left: 0, bottom: 5 }}>
                <defs>
                  <linearGradient id="portfolioGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" opacity={0.3} />
                <XAxis dataKey="month" stroke="#64748b" fontSize={11} />
                <YAxis stroke="#64748b" fontSize={11}
                  tickFormatter={value => `$${(value / 1000000).toFixed(1)}M`}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#ffffff',
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                    color: '#1e293b'
                  }}
                  formatter={(value: any) => [`$${(value / 1000000).toFixed(2)}M`, 'Portfolio Value']}
                />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#3b82f6"
                  strokeWidth={2}
                  fill="url(#portfolioGradient)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Spending Breakdown */}
        <div className="bg-white p-4 rounded-xl shadow border border-gray-100">
          <h3 className="text-lg font-bold mb-2">Spending Breakdown</h3>
          <div className="flex flex-col items-center">
            <div className="h-64 w-full flex justify-center">
              <ResponsiveContainer width={180} height={180}>
                <PieChart>
                  <Pie
                    data={expenseCategories}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={70}
                    fill="#8884d8"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    isAnimationActive
                  >
                    {expenseCategories.map((_, idx) => (
                      <Cell key={`cell-${idx}`} fill={pieColors[idx % pieColors.length]} />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(value: any, name: string) =>
                      [`$${value.toLocaleString()}`, name]
                    }
                    contentStyle={{
                      backgroundColor: '#fff',
                      border: '1px solid #e2e8f0',
                      borderRadius: '8px',
                      color: '#1e293b',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="w-full grid grid-cols-3 gap-1 mt-1">
              {expenseCategories.map((cat, idx) => (
                <div key={cat.name} className="flex items-center gap-1 text-xs">
                  <span className="inline-block w-2 h-2 rounded-full" style={{background: pieColors[idx % pieColors.length]}} />
                  <span style={{color: pieColors[idx % pieColors.length]}}>{cat.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseChart;
