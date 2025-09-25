import React, { useState } from 'react';
import FileUploader from '../components/FileUploader';
import TransactionPreview from '../components/TransactionPreview';
import { Send, CheckCircle } from 'lucide-react';

interface Transaction {
  date: string;
  description: string;
  category: string;
  amount: number;
}

const Upload: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleFileUpload = (file: File) => {
    // Mock data for demonstration
    const mockTransactions: Transaction[] = [
      { date: '2024-01-15', description: 'Investment Portfolio Dividend', category: 'Investment', amount: 12500.00 },
      { date: '2024-01-14', description: 'Real Estate Management Fee', category: 'Property', amount: -2800.00 },
      { date: '2024-01-13', description: 'Bond Interest Payment', category: 'Investment', amount: 8750.00 },
      { date: '2024-01-12', description: 'Private Banking Fee', category: 'Banking', amount: -450.00 },
      { date: '2024-01-11', description: 'Stock Options Exercise', category: 'Investment', amount: 45000.00 },
    ];
    
    setTransactions(mockTransactions);
    setIsSuccess(false);
  };

  const handleSendToAI = async () => {
    setIsProcessing(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setIsProcessing(false);
      setIsSuccess(true);
      
    } catch (error) {
      console.error('Error sending transactions to AI:', error);
      setIsProcessing(false);
      alert('Failed to process transactions. Please try again.');
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-banking-900 dark:text-white mb-2">Upload Transactions</h2>
        <p className="text-banking-600 dark:text-banking-400">
          Upload your transaction data to get personalized AI insights and recommendations.
        </p>
      </div>
      
      <FileUploader onFileUpload={handleFileUpload} />
      
      <TransactionPreview transactions={transactions} />
      
      {transactions.length > 0 && (
        <div className="bg-white dark:bg-banking-800 rounded-xl p-6 shadow-banking border border-banking-200 dark:border-banking-700">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-banking-900 dark:text-white">
              Ready to Process
            </h3>
            {isSuccess && (
              <div className="flex items-center gap-2 text-success-600 dark:text-success-400">
                <CheckCircle className="w-5 h-5" />
                <span className="font-medium">Successfully processed!</span>
              </div>
            )}
          </div>
          
          <p className="text-banking-600 dark:text-banking-400 mb-4">
            {transactions.length} transactions ready to be analyzed by our AI system.
          </p>
          
          <button
            onClick={handleSendToAI}
            disabled={isProcessing || isSuccess}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
              isSuccess
                ? 'bg-success-600 text-white cursor-not-allowed'
                : isProcessing
                ? 'bg-primary-400 text-white cursor-not-allowed'
                : 'bg-primary-600 hover:bg-primary-700 text-white'
            }`}
          >
            {isSuccess ? (
              <>
                <CheckCircle className="w-5 h-5" />
                Processed Successfully
              </>
            ) : isProcessing ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Processing...
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Send to AI
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default Upload;