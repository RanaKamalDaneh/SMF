import React from 'react';
import { DashboardCards } from '../components/DashboardCards';
import ExpenseChart from '../components/ExpenseChart';
import { TrendingUp, Activity, Users, DollarSign, Zap, Globe, Shield, Bell } from 'lucide-react';

const Dashboard: React.FC = () => {
  const mockTransactions = [
    { id: '1', description: 'Investment Portfolio Dividend', date: '2024-01-15', category: 'Investment', amount: 12500, type: 'income' as const },
    { id: '2', description: 'Real Estate Management Fee', date: '2024-01-14', category: 'Property', amount: -2800, type: 'expense' as const },
    { id: '3', description: 'Bond Interest Payment', date: '2024-01-13', category: 'Investment', amount: 8750, type: 'income' as const },
    { id: '4', description: 'Private Banking Fee', date: '2024-01-12', category: 'Banking', amount: -450, type: 'expense' as const },
    { id: '5', description: 'Stock Options Exercise', date: '2024-01-11', category: 'Investment', amount: 45000, type: 'income' as const },
  ];

  return (
    <div className="w-full max-w-none space-y-6">
      {/* Live Dashboard Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white tracking-tight">Executive Dashboard</h1>
          <div className="flex items-center space-x-2 bg-success-100 dark:bg-success-900/20 text-success-800 dark:text-success-400 px-3 py-1 rounded-full text-sm font-medium">
            <div className="w-2 h-2 bg-success-500 rounded-full animate-pulse"></div>
            <span>LIVE DASHBOARD</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-right">
            <p className="text-sm text-gray-500 dark:text-gray-400">Last Updated</p>
            <p className="text-lg font-semibold text-gray-900 dark:text-white">{new Date().toLocaleTimeString()}</p>
          </div>
        </div>
      </div>

      {/* Quick Stats - Wider Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:scale-105">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Active Accounts</p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">12</p>
            </div>
            <Users className="w-12 h-12 text-primary-600 hover:scale-110 transition-transform duration-300" />
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:scale-105">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Global Markets</p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">24</p>
            </div>
            <Globe className="w-12 h-12 text-success-600 hover:scale-110 transition-transform duration-300" />
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:scale-105">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Performance Score</p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">98%</p>
            </div>
            <Activity className="w-12 h-12 text-warning-600 hover:scale-110 transition-transform duration-300" />
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:scale-105">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">YTD Return</p>
              <p className="text-3xl font-bold text-success-600">+15.7%</p>
            </div>
            <TrendingUp className="w-12 h-12 text-success-600 hover:scale-110 transition-transform duration-300" />
          </div>
        </div>
      </div>

      {/* Main Dashboard Content - Wider Layout */}
      <div className="w-full space-y-6">
        {/* Financial Cards - Full Width */}
        <div className="w-full">
          <DashboardCards />
        </div>
        
        {/* Secondary Content Grid - Wider Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
          {/* Market Overview - Wider */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">نظرة عامة على السوق</h3>
              <div className="flex items-center space-x-2 bg-success-100 dark:bg-success-900/20 text-success-800 dark:text-success-400 px-3 py-1.5 rounded-full text-sm font-medium">
                <div className="w-2 h-2 bg-success-500 rounded-full animate-pulse"></div>
                <span>مباشر</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-5 bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg">S</div>
                  <div>
                    <p className="font-semibold text-lg text-gray-900 dark:text-white">S&P 500</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">الحجم: 2.1B</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-xl text-gray-900 dark:text-white">4,567.89</p>
                  <p className="text-sm text-success-600 font-semibold">+1.2%</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-5 bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg">N</div>
                  <div>
                    <p className="font-semibold text-lg text-gray-900 dark:text-white">NASDAQ</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">الحجم: 1.8B</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-xl text-gray-900 dark:text-white">14,234.56</p>
                  <p className="text-sm text-success-600 font-semibold">+0.8%</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-5 bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg">D</div>
                  <div>
                    <p className="font-semibold text-lg text-gray-900 dark:text-white">Dow Jones</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">الحجم: 890M</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-xl text-gray-900 dark:text-white">34,567.12</p>
                  <p className="text-sm text-danger-600 font-semibold">-0.3%</p>
                </div>
              </div>
            </div>
          </div>

          {/* AI Insights - Wider */}
          <div className="bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/30 dark:to-primary-800/30 p-8 rounded-3xl border border-primary-200 dark:border-primary-800 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center space-x-3 mb-6">
              <Zap className="w-8 h-8 text-primary-600" />
              <h3 className="text-2xl font-bold text-primary-900 dark:text-primary-100">رؤى الذكاء الاصطناعي</h3>
              <div className="bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-medium">ذكي</div>
            </div>
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-primary-200 dark:border-primary-700 hover:shadow-lg transition-all">
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">يُنصح بإعادة توازن المحفظة للربع الأول 2024</p>
                <button className="text-primary-600 text-sm font-medium hover:text-primary-700 transition-colors">عرض التفاصيل ←</button>
              </div>
              <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-primary-200 dark:border-primary-700 hover:shadow-lg transition-all">
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">تم تحديد فرصة لتحسين الضرائب</p>
                <button className="text-primary-600 text-sm font-medium hover:text-primary-700 transition-colors">جدولة مكالمة ←</button>
              </div>
            </div>
          </div>

          {/* Account Summary - Wider */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all duration-300">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">ملخص الحسابات</h3>
            <div className="space-y-5">
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-600 dark:text-gray-400 font-medium text-lg">الحساب الجاري</span>
                <span className="font-bold text-xl text-gray-900 dark:text-white">$125,430.50</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-600 dark:text-gray-400 font-medium text-lg">حساب التوفير</span>
                <span className="font-bold text-xl text-gray-900 dark:text-white">$2,847,920.75</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-600 dark:text-gray-400 font-medium text-lg">الاستثمارات</span>
                <span className="font-bold text-xl text-gray-900 dark:text-white">$8,456,789.25</span>
              </div>
              <hr className="my-4 border-gray-200 dark:border-gray-700" />
              <div className="flex justify-between items-center py-2">
                <span className="font-bold text-xl text-gray-900 dark:text-white">صافي الثروة</span>
                <span className="font-bold text-3xl text-success-600">$11,430,140.50</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Charts Section - Wider */}
      <div className="w-full bg-white dark:bg-gray-800 p-10 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Portfolio Performance</h2>
          <div className="flex items-center space-x-4">
            <select className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg px-4 py-3 text-sm">
              <option>Last 30 Days</option>
              <option>Last 90 Days</option>
              <option>Last Year</option>
            </select>
          </div>
        </div>
        <ExpenseChart />
      </div>

      {/* Recent Transactions - Wider */}
      <div className="w-full bg-white dark:bg-gray-800 p-10 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Recent Activity</h2>
          <button className="text-primary-600 font-medium hover:text-primary-700 text-lg">View All →</button>
        </div>
        <div className="space-y-4">
          {mockTransactions.slice(0, 5).map((transaction, index) => (
            <div key={index} className="flex items-center justify-between p-6 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200">
              <div className="flex items-center space-x-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  transaction.amount > 0 ? 'bg-success-100 dark:bg-success-900/20 text-success-600' : 'bg-danger-100 dark:bg-danger-900/20 text-danger-600'
                }`}>
                  <DollarSign className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold text-lg text-gray-900 dark:text-white">{transaction.description}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{transaction.date}</p>
                </div>
              </div>
              <div className="text-right">
                <p className={`font-bold text-xl ${transaction.amount > 0 ? 'text-success-600' : 'text-danger-600'}`}>
                  {transaction.amount > 0 ? '+' : ''}${Math.abs(transaction.amount).toLocaleString()}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{transaction.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;