import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Upload, MessageSquare, FileText, X, TrendingUp, CreditCard, PieChart, Shield, Headphones, Star, Zap, Award, Users, Globe2, BarChart3, Wallet, Settings } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const navItems = [
    { to: '/', icon: LayoutDashboard, label: 'Executive Dashboard', badge: null, description: 'Overview & KPIs' },
    { to: '/upload', icon: Upload, label: 'Data Import', badge: null, description: 'Transaction Processing' },
    { to: '/recommendations', icon: MessageSquare, label: 'AI Advisory', badge: 'AI', description: 'Smart Insights' },
    { to: '/reports', icon: FileText, label: 'Analytics Suite', badge: null, description: 'Advanced Reports' },
  ];

  const quickActions = [
    { icon: TrendingUp, label: 'Portfolio Management', color: 'text-success-600', bgColor: 'bg-success-50 dark:bg-success-900/20' },
    { icon: CreditCard, label: 'Credit Operations', color: 'text-primary-600', bgColor: 'bg-primary-50 dark:bg-primary-900/20' },
    { icon: PieChart, label: 'Risk Assessment', color: 'text-warning-600', bgColor: 'bg-warning-50 dark:bg-warning-900/20' },
    { icon: Shield, label: 'Compliance Center', color: 'text-purple-600', bgColor: 'bg-purple-50 dark:bg-purple-900/20' },
    { icon: Globe2, label: 'Global Markets', color: 'text-blue-600', bgColor: 'bg-blue-50 dark:bg-blue-900/20' },
    { icon: BarChart3, label: 'Performance Analytics', color: 'text-emerald-600', bgColor: 'bg-emerald-50 dark:bg-emerald-900/20' },
  ];

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-80 bg-white/98 dark:bg-gray-900/98 backdrop-blur-2xl border-r border-gray-200/50 dark:border-gray-700/50 transform transition-all duration-300 ease-in-out shadow-xl
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="flex items-center justify-between p-6 lg:hidden border-b border-gray-200/50 dark:border-gray-700/50">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-sm">₿</span>
            </div>
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">Elite Banking</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 hover:scale-105"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="p-6 h-full flex flex-col overflow-y-auto">
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Navigation</h3>
              <div className="flex items-center gap-1">
                <Star className="w-3 h-3 text-warning-500 fill-current" />
                <span className="text-xs font-semibold text-warning-600 dark:text-warning-400">PREMIUM</span>
              </div>
            </div>
            <nav>
              <ul className="space-y-3">
                {navItems.map(({ to, icon: Icon, label, badge, description }) => (
                  <li key={to}>
                    <NavLink
                      to={to}
                      onClick={onClose}
                      className={({ isActive }) =>
                        `group flex items-center justify-between px-5 py-4 rounded-2xl transition-all duration-200 ${
                          isActive
                            ? 'bg-gradient-to-r from-primary-50 via-primary-100 to-primary-50 dark:from-primary-900/30 dark:via-primary-800/30 dark:to-primary-900/30 text-primary-700 dark:text-primary-300 shadow-lg shadow-primary-500/10 border border-primary-200 dark:border-primary-800'
                            : 'text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 dark:hover:from-gray-800 dark:hover:to-gray-700 hover:text-gray-900 dark:hover:text-white hover:shadow-md'
                        }`
                      }
                    >
                      <div className="flex items-center gap-4 flex-1">
                        <div className="relative">
                          <Icon className="w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-sm">{label}</div>
                          <div className="text-xs text-banking-500 dark:text-banking-400 group-hover:text-banking-600 dark:group-hover:text-banking-300">{description}</div>
                        </div>
                      </div>
                      {badge && (
                        <span className={`px-2.5 py-1 text-xs font-bold rounded-full ${
                          badge === 'AI' 
                            ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg' 
                            : 'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300'
                        }`}>
                          {badge}
                        </span>
                      )}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xs font-bold text-banking-500 dark:text-banking-400 uppercase tracking-wider mb-4">Quick Access</h3>
            <div className="grid grid-cols-2 gap-3">
              {quickActions.map((action, index) => (
                <button
                  key={index}
                  className={`flex flex-col items-center gap-2 p-4 rounded-2xl transition-all duration-200 group hover:shadow-lg hover:scale-105 ${action.bgColor} hover:${action.bgColor.replace('50', '100').replace('900/20', '800/30')}`}
                >
                  <action.icon className={`w-6 h-6 ${action.color} group-hover:scale-110 transition-transform duration-200`} />
                  <span className="font-semibold text-xs text-center text-banking-700 dark:text-banking-300 group-hover:text-banking-900 dark:group-hover:text-white">{action.label}</span>
                </button>
              ))}
            </div>
          </div>
          
          <div className="flex-1"></div>
          
          <div className="mb-6">
            <div className="bg-gradient-to-br from-banking-50 to-banking-100 dark:from-banking-800 dark:to-banking-700 rounded-2xl p-4 border border-banking-200 dark:border-banking-600">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-warning-500" />
                  <span className="text-sm font-bold text-banking-900 dark:text-white">Account Status</span>
                </div>
                <Zap className="w-4 h-4 text-primary-500" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-banking-600 dark:text-banking-400">Premium Tier</span>
                  <span className="font-bold text-primary-600 dark:text-primary-400">PLATINUM</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-banking-600 dark:text-banking-400">Assets Under Management</span>
                  <span className="font-bold text-banking-900 dark:text-white">$2.8M</span>
                </div>
                <div className="w-full bg-banking-200 dark:bg-banking-600 rounded-full h-2 mt-3">
                  <div className="bg-gradient-to-r from-primary-500 to-success-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
                <p className="text-xs text-banking-500 dark:text-banking-400">85% to Diamond Tier</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-primary-50 via-primary-100 to-primary-50 dark:from-primary-900/30 dark:via-primary-800/30 dark:to-primary-900/30 rounded-2xl p-6 border border-primary-200 dark:border-primary-800 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl flex items-center justify-center shadow-lg">
                <Headphones className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-banking-900 dark:text-white text-sm">Concierge Support</h3>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-success-500 rounded-full animate-pulse"></div>
                  <p className="text-xs text-banking-600 dark:text-banking-400 font-medium">Available 24/7</p>
                </div>
              </div>
            </div>
            <div className="space-y-3 mb-5">
              <p className="text-sm text-banking-700 dark:text-banking-300 leading-relaxed font-medium">
                Connect with certified financial advisors and wealth management specialists
              </p>
              <div className="flex items-center gap-4 text-xs text-banking-600 dark:text-banking-400">
                <div className="flex items-center gap-1">
                  <Shield className="w-3 h-3 text-primary-500" />
                  <span>Certified Advisors</span>
                </div>
                <div className="flex items-center gap-1">
                  <Zap className="w-3 h-3 text-warning-500" />
                  <span>Instant Response</span>
                </div>
              </div>
              
              <div className="space-y-3">
                <button className="w-full bg-gradient-to-r from-primary-600 via-primary-700 to-purple-600 hover:from-primary-700 hover:via-primary-800 hover:to-purple-700 text-white font-bold py-4 px-6 rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-3 group">
                  <Users className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                  <span>Connect Now</span>
                  <div className="w-2 h-2 bg-white/80 rounded-full animate-pulse"></div>
                </button>
                
                <div className="flex gap-2">
                  <button className="flex-1 bg-white/80 dark:bg-banking-700/50 hover:bg-white dark:hover:bg-banking-700 text-banking-700 dark:text-banking-300 font-semibold py-2.5 px-4 rounded-xl transition-all duration-200 text-xs border border-banking-200 dark:border-banking-600 hover:shadow-md">
                    📞 Call
                  </button>
                  <button className="flex-1 bg-white/80 dark:bg-banking-700/50 hover:bg-white dark:hover:bg-banking-700 text-banking-700 dark:text-banking-300 font-semibold py-2.5 px-4 rounded-xl transition-all duration-200 text-xs border border-banking-200 dark:border-banking-600 hover:shadow-md">
                    💬 Chat
                  </button>
                  <button className="flex-1 bg-white/80 dark:bg-banking-700/50 hover:bg-white dark:hover:bg-banking-700 text-banking-700 dark:text-banking-300 font-semibold py-2.5 px-4 rounded-xl transition-all duration-200 text-xs border border-banking-200 dark:border-banking-600 hover:shadow-md">
                    📧 Email
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;