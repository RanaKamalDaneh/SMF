import React, { useState } from 'react';

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
  const [selected, setSelected] = useState<Transaction | null>(null);

  if (transactions.length === 0) return null;

  return (
    <div className="bg-white dark:bg-banking-800 rounded-xl p-6 shadow-banking border border-banking-200 dark:border-banking-700 mt-6">
      <h3 className="text-lg font-semibold text-banking-900 dark:text-white mb-4" id="transaction-preview-title">
        Transaction Preview
      </h3>
      <div className="overflow-x-auto" tabIndex={0} aria-labelledby="transaction-preview-title">
        <table className="w-full text-sm" aria-label="Recent transactions">
          <thead>
            <tr className="border-b border-banking-200 dark:border-banking-700">
              <th scope="col" className="text-left py-3 px-2 font-medium text-banking-900 dark:text-white">Date</th>
              <th scope="col" className="text-left py-3 px-2 font-medium text-banking-900 dark:text-white">Description</th>
              <th scope="col" className="text-left py-3 px-2 font-medium text-banking-900 dark:text-white">Category</th>
              <th scope="col" className="text-right py-3 px-2 font-medium text-banking-900 dark:text-white">Amount</th>
            </tr>
          </thead>
          <tbody>
            {transactions.slice(0, 5).map((transaction, index) => (
              <tr
                key={index}
                className="border-b border-banking-100 dark:border-banking-700 cursor-pointer hover:bg-banking-100/60 dark:hover:bg-banking-900/40 focus:outline-none"
                tabIndex={0}
                aria-label={`Transaction: ${transaction.description}, ${transaction.amount >= 0 ? "Income" : "Expense"} of $${Math.abs(transaction.amount).toFixed(2)} on ${transaction.date}`}
                onClick={() => setSelected(transaction)}
                onKeyDown={e => {
                  if (e.key === "Enter" || e.key === " ") setSelected(transaction);
                }}
              >
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
          <div className="flex justify-center items-center pt-4">
            <a
              href="#"
              className="text-blue-600 dark:text-blue-400 text-sm hover:underline"
              aria-label={`View all ${transactions.length} transactions`}
              // For demo, just alert; link to your "All Transactions" page in a real app
              onClick={e => { e.preventDefault(); alert('Show all transactions (not implemented)'); }}
            >
              ... and {transactions.length - 5} more transactions
            </a>
          </div>
        )}
      </div>

      {/* Transaction details modal */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/30 flex items-center justify-center z-50"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          tabIndex={-1}
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white dark:bg-banking-800 rounded-xl shadow-lg max-w-sm w-full p-6 relative"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 dark:hover:text-white text-2xl"
              aria-label="Close details"
            >
              ×
            </button>
            <h4 className="text-lg font-bold mb-3" id="modal-title">Transaction Details</h4>
            <div className="space-y-2">
              <div>
                <span className="font-semibold">Date:</span> {selected.date}
              </div>
              <div>
                <span className="font-semibold">Description:</span> {selected.description}
              </div>
              <div>
                <span className="font-semibold">Category:</span> {selected.category}
              </div>
              <div>
                <span className="font-semibold">Amount:</span>{" "}
                <span className={selected.amount >= 0
                  ? "text-success-600 dark:text-success-400"
                  : "text-danger-600 dark:text-danger-400"
                }>
                  ${Math.abs(selected.amount).toFixed(2)} {selected.amount >= 0 ? "(Income)" : "(Expense)"}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TransactionPreview;
