import React from 'react';

interface Transaction {
  date: string;
  description: string;
  category: string;
  amount: number;
}

interface TransactionPreviewProps {
  transactions: Transaction[];
}

const TransactionPreview: React.FC<TransactionPreviewProps> = ({ transactions }) => {
  if (transactions.length === 0) return null;

  return (
    <div className="bg-white dark:bg-banking-800 rounded-xl p-6 shadow-banking border border-banking-200 dark:border-banking-700 mt-6">
      <h3 className="text-lg font-semibold text-banking-900 dark:text-white mb-4">Transaction Preview</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-banking-200 dark:border-banking-700">
              <th className="text-left py-3 px-2 font-medium text-banking-900 dark:text-white">Date</th>
              <th className="text-left py-3 px-2 font-medium text-banking-900 dark:text-white">Description</th>
              <th className="text-left py-3 px-2 font-medium text-banking-900 dark:text-white">Category</th>
              <th className="text-right py-3 px-2 font-medium text-banking-900 dark:text-white">Amount</th>
            </tr>
          </thead>
          <tbody>
            {transactions.slice(0, 5).map((transaction, index) => (
              <tr key={index} className="border-b border-banking-100 dark:border-banking-700">
                <td className="py-3 px-2 text-banking-600 dark:text-banking-300">{transaction.date}</td>
                <td className="py-3 px-2 text-banking-900 dark:text-white">{transaction.description}</td>
                <td className="py-3 px-2">
                  <span className="px-2 py-1 bg-primary-100 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 rounded-full text-xs">
                    {transaction.category}
                  </span>
                </td>
                <td className={`py-3 px-2 text-right font-medium ${
                  transaction.amount >= 0 
                    ? 'text-success-600 dark:text-success-400' 
                    : 'text-danger-600 dark:text-danger-400'
                }`}>
                  ${Math.abs(transaction.amount).toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {transactions.length > 5 && (
          <p className="text-center text-banking-500 dark:text-banking-400 py-3">
            ... and {transactions.length - 5} more transactions
          </p>
        )}
      </div>
    </div>
  );
};

export default TransactionPreview;