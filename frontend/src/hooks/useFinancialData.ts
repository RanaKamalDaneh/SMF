import { useState, useEffect } from 'react';

// Types for financial data
export interface FinancialSummary {
  totalBalance: number;
  monthlyIncome: number;
  monthlyExpenses: number;
  savings: number;
  balanceChange: number;
  incomeChange: number;
  expenseChange: number;
  savingsChange: number;
}

export interface MonthlyData {
  month: string;
  income: number;
  expenses: number;
}

export interface Transaction {
  id: string;
  date: string;
  description: string;
  category: string;
  amount: number;
  type: 'income' | 'expense';
}

// Custom hook for financial data
export const useFinancialData = () => {
  const [summary, setSummary] = useState<FinancialSummary | null>(null);
  const [monthlyData, setMonthlyData] = useState<MonthlyData[]>([]);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchFinancialSummary = async () => {
    try {
      const response = await fetch('/api/user/financial-summary', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch financial summary');
      }

      const data = await response.json();
      setSummary(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    }
  };

  const fetchMonthlyData = async () => {
    try {
      const response = await fetch('/api/user/monthly-summary?months=6', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch monthly data');
      }

      const data = await response.json();
      setMonthlyData(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    }
  };

  const fetchRecentTransactions = async () => {
    try {
      const response = await fetch('/api/user/transactions?limit=10', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch transactions');
      }

      const data = await response.json();
      setTransactions(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    }
  };

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      await Promise.all([
        fetchFinancialSummary(),
        fetchMonthlyData(),
        fetchRecentTransactions(),
      ]);
      setLoading(false);
    };

    loadData();
  }, []);

  const refreshData = () => {
    setLoading(true);
    Promise.all([
      fetchFinancialSummary(),
      fetchMonthlyData(),
      fetchRecentTransactions(),
    ]).finally(() => setLoading(false));
  };

  return {
    summary,
    monthlyData,
    transactions,
    loading,
    error,
    refreshData,
  };
};