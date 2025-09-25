import React from 'react';
import { TrendingUp, TrendingDown, DollarSign, CreditCard, PiggyBank, Wallet, ArrowUpRight, ArrowDownRight, Target, Zap, Shield, Globe } from 'lucide-react';

export const DashboardCards: React.FC = () => {
  const cards = [
    {
      title: 'إجمالي قيمة المحفظة',
      value: '$2,847,392.50',
      change: '+12.5%',
      changeValue: '+$327,450',
      subtitle: 'عبر جميع الحسابات',
      icon: Wallet,
      gradient: 'from-primary-600 to-primary-700',
      bgGradient: 'from-primary-50 via-primary-100 to-primary-50 dark:from-primary-900/30 dark:via-primary-800/30 dark:to-primary-900/30',
      borderGradient: 'from-primary-200 to-primary-300 dark:from-primary-800 dark:to-primary-700'
    },
    {
      title: 'الدخل الشهري',
      value: '$184,750.00',
      change: '+8.2%',
      changeValue: '+$14,200',
      subtitle: 'جميع مصادر الدخل',
      icon: TrendingUp,
      gradient: 'from-success-600 to-success-700',
      bgGradient: 'from-success-50 via-success-100 to-success-50 dark:from-success-900/30 dark:via-success-800/30 dark:to-success-900/30',
      borderGradient: 'from-success-200 to-success-300 dark:from-success-800 dark:to-success-700'
    },
    {
      title: 'المصروفات الشهرية',
      value: '$67,234.80',
      change: '-3.1%',
      changeValue: '-$2,150',
      subtitle: 'إنفاق محسن',
      icon: CreditCard,
      gradient: 'from-warning-600 to-warning-700',
      bgGradient: 'from-warning-50 via-warning-100 to-warning-50 dark:from-warning-900/30 dark:via-warning-800/30 dark:to-warning-900/30',
      borderGradient: 'from-warning-200 to-warning-300 dark:from-warning-800 dark:to-warning-700'
    },
    {
      title: 'عوائد الاستثمار',
      value: '$117,515.20',
      change: '+15.7%',
      changeValue: '+$16,350',
      subtitle: 'أداء العام الحالي',
      icon: PiggyBank,
      gradient: 'from-purple-600 to-purple-700',
      bgGradient: 'from-purple-50 via-purple-100 to-purple-50 dark:from-purple-900/30 dark:via-purple-800/30 dark:to-purple-900/30',
      borderGradient: 'from-purple-200 to-purple-300 dark:from-purple-800 dark:to-purple-700'
    },
    {
      title: 'الأهداف المالية',
      value: '85%',
      change: '+5.2%',
      changeValue: 'مكتمل',
      subtitle: 'تقدم الأهداف',
      icon: Target,
      gradient: 'from-emerald-600 to-emerald-700',
      bgGradient: 'from-emerald-50 via-emerald-100 to-emerald-50 dark:from-emerald-900/30 dark:via-emerald-800/30 dark:to-emerald-900/30',
      borderGradient: 'from-emerald-200 to-emerald-300 dark:from-emerald-800 dark:to-emerald-700'
    },
    {
      title: 'الأمان المالي',
      value: '98%',
      change: '+2.1%',
      changeValue: 'ممتاز',
      subtitle: 'مستوى الحماية',
      icon: Shield,
      gradient: 'from-indigo-600 to-indigo-700',
      bgGradient: 'from-indigo-50 via-indigo-100 to-indigo-50 dark:from-indigo-900/30 dark:via-indigo-800/30 dark:to-indigo-900/30',
      borderGradient: 'from-indigo-200 to-indigo-300 dark:from-indigo-800 dark:to-indigo-700'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 animate-fade-in">
      {cards.map((card, index) => {
        const Icon = card.icon;
        const isPositive = card.change.startsWith('+');
        const changeColor = isPositive ? 'text-success-600 dark:text-success-400' : 'text-danger-600 dark:text-danger-400';
        const TrendIcon = isPositive ? ArrowUpRight : ArrowDownRight;

        return (
          <div
            key={index}
            className={`relative overflow-hidden bg-gradient-to-br ${card.bgGradient} border border-transparent bg-clip-padding rounded-3xl p-10 hover:shadow-2xl hover:shadow-primary-500/10 transition-all duration-300 group animate-slide-up cursor-pointer hover:scale-105`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${card.borderGradient} opacity-20 rounded-3xl`}></div>
            <div className="relative">
              <div className="flex items-center justify-between mb-8">
                <div className={`relative p-4 rounded-2xl bg-gradient-to-br ${card.gradient} shadow-lg shadow-${card.gradient.split('-')[1]}-500/25 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  <Icon className="w-7 h-7 text-white" />
                  <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className={`flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-banking-800/80 backdrop-blur-sm ${changeColor} shadow-lg`}>
                  <TrendIcon className="w-4 h-4" />
                  <span className="text-sm font-bold">{card.change}</span>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-bold text-banking-600 dark:text-banking-400 mb-1">
                    {card.title}
                  </p>
                  <p className="text-xs text-banking-500 dark:text-banking-400 font-medium">
                    {card.subtitle}
                  </p>
                </div>
                <p className="text-5xl font-black text-banking-900 dark:text-white tracking-tight group-hover:scale-105 transition-transform duration-300">
                  {card.value}
                </p>
                <div className="flex items-center justify-between">
                  <p className={`text-sm font-bold ${changeColor} flex items-center gap-1`}>
                    <Zap className="w-3 h-3" />
                    {card.changeValue}
                  </p>
                  <p className="text-xs text-banking-500 dark:text-banking-400 font-medium">
                    هذا الشهر
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};