import React from 'react';
import { User, Moon, Sun, Menu, Bell, Search, Settings, ChevronDown, Globe, Shield, Zap } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface HeaderProps {
  onToggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ onToggleSidebar }) => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className="bg-white/95 dark:bg-banking-900/95 backdrop-blur-2xl border-b border-banking-200/50 dark:border-banking-700/50 px-4 sm:px-6 py-4 sticky top-0 z-50 shadow-banking">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={onToggleSidebar}
            className="lg:hidden p-2.5 rounded-xl text-banking-600 dark:text-banking-300 hover:bg-banking-100 dark:hover:bg-banking-700 transition-all duration-200 hover:scale-105"
          >
            <Menu className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 rounded-2xl flex items-center justify-center shadow-xl shadow-primary-500/25">
                <span className="text-white font-bold text-xl">₿</span>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-success-500 border-2 border-white dark:border-banking-900 rounded-full animate-pulse"></div>
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-banking-900 via-primary-800 to-banking-700 dark:from-white dark:via-primary-200 dark:to-banking-200 bg-clip-text text-transparent">
                MINDX
              </h1>
              <div className="flex items-center gap-2">
                <p className="text-xs text-banking-500 dark:text-banking-400 hidden sm:block font-medium">MINDX</p>
                <div className="hidden sm:flex items-center gap-1 px-2 py-0.5 bg-success-100 dark:bg-success-900/20 rounded-full">
                  <div className="w-1.5 h-1.5 bg-success-500 rounded-full"></div>
                  <span className="text-xs text-success-600 dark:text-success-400 font-semibold">MINDX</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-3 flex-1 max-w-lg mx-8">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-banking-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search transactions, accounts, investments..."
              className="w-full pl-12 pr-4 py-3 bg-banking-50/80 dark:bg-banking-800/80 border border-banking-200 dark:border-banking-700 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent focus:bg-white dark:focus:bg-banking-800 transition-all duration-200 backdrop-blur-sm"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <kbd className="px-2 py-1 text-xs text-banking-400 bg-banking-200 dark:bg-banking-700 rounded border">⌘K</kbd>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-1">
          <div className="hidden lg:flex items-center gap-1 mr-4">
            <div className="flex items-center gap-2 px-3 py-2 bg-banking-50 dark:bg-banking-800 rounded-xl">
              <Globe className="w-4 h-4 text-banking-500" />
              <span className="text-sm font-medium text-banking-700 dark:text-banking-300">USD</span>
              <ChevronDown className="w-3 h-3 text-banking-400" />
            </div>
          </div>
          
          <button className="p-2.5 rounded-xl text-banking-600 dark:text-banking-300 hover:bg-banking-100 dark:hover:bg-banking-700 transition-all duration-200 relative hover:scale-105">
            <Bell className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-danger-500 rounded-full flex items-center justify-center border-2 border-white dark:border-banking-900">
              <span className="text-xs text-white font-bold">3</span>
            </span>
          </button>
          
          <button className="p-2.5 rounded-xl text-banking-600 dark:text-banking-300 hover:bg-banking-100 dark:hover:bg-banking-700 transition-all duration-200 hover:scale-105">
            <Settings className="w-5 h-5" />
          </button>
          
          <div className="w-px h-8 bg-banking-200 dark:bg-banking-700 mx-3"></div>
          
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-xl text-banking-600 dark:text-banking-300 hover:bg-banking-100 dark:hover:bg-banking-700 transition-all duration-200 hover:scale-105"
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          
          <div className="flex items-center gap-3 pl-4 border-l border-banking-200 dark:border-banking-700">
            <div className="hidden sm:block text-right">
              <div className="flex items-center gap-2 justify-end mb-1">
                <p className="text-sm font-bold text-banking-900 dark:text-white">Alexander Morgan</p>
                <Shield className="w-3 h-3 text-primary-500" />
              </div>
              <div className="flex items-center gap-2 justify-end">
                <span className="px-2 py-0.5 bg-gradient-to-r from-primary-500 to-primary-600 text-white text-xs font-semibold rounded-full">PREMIUM</span>
                <p className="text-xs text-banking-500 dark:text-banking-400">Private Banking</p>
              </div>
            </div>
            <div className="relative group cursor-pointer">
              <div className="w-12 h-12 bg-gradient-to-br from-success-400 to-success-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-200 group-hover:scale-105">
                <User className="w-5 h-5 text-white" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-success-500 border-2 border-white dark:border-banking-900 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <ChevronDown className="absolute -bottom-1 -left-1 w-4 h-4 text-banking-400 bg-white dark:bg-banking-900 rounded-full p-0.5" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;