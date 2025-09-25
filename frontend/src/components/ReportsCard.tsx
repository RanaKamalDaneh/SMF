import React from 'react';
import { Download, TrendingUp, PieChart, Calendar } from 'lucide-react';
import jsPDF from 'jspdf';

interface Report {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  data: string;
}

const ReportsCard: React.FC = () => {
  const reports: Report[] = [
    {
      id: 'spending-breakdown',
      title: 'Spending Breakdown',
      description: 'Detailed analysis of your expenses by category',
      icon: <PieChart className="w-6 h-6" />,
      color: 'from-purple-500 to-purple-600',
      data: 'Housing: 35% • Food: 20% • Transport: 15% • Entertainment: 10% • Other: 20%'
    },
    {
      id: 'savings-tips',
      title: 'Personalized Savings Tips',
      description: 'AI-generated recommendations to optimize your spending',
      icon: <TrendingUp className="w-6 h-6" />,
      color: 'from-emerald-500 to-emerald-600',
      data: 'Reduce dining out by 25% • Switch to a high-yield savings account • Cancel unused subscriptions'
    },
    {
      id: 'monthly-summary',
      title: 'Monthly Summary',
      description: 'Comprehensive overview of your financial activity',
      icon: <Calendar className="w-6 h-6" />,
      color: 'from-blue-500 to-blue-600',
      data: 'Income: $8,200 • Expenses: $3,654 • Savings: $4,546 • Growth: +8.1%'
    }
  ];

  const downloadReport = async (report: Report) => {
    const pdf = new jsPDF();
    
    // Add title
    pdf.setFontSize(20);
    pdf.text(report.title, 20, 30);
    
    // Add description
    pdf.setFontSize(12);
    pdf.text(report.description, 20, 50);
    
    // Add data
    pdf.setFontSize(10);
    const lines = pdf.splitTextToSize(report.data, 170);
    pdf.text(lines, 20, 70);
    
    // Add timestamp
    pdf.text(`Generated on: ${new Date().toLocaleDateString()}`, 20, 90);
    
    pdf.save(`${report.title.toLowerCase().replace(/\s+/g, '-')}-report.pdf`);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {reports.map((report) => (
        <div
          key={report.id}
          className="bg-white dark:bg-banking-800 rounded-xl p-6 shadow-banking border border-banking-200 dark:border-banking-700 hover:shadow-banking-lg transition-shadow duration-200"
        >
          <div className="flex items-center justify-between mb-4">
            <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${report.color} flex items-center justify-center text-white`}>
              {report.icon}
            </div>
            <button
              onClick={() => downloadReport(report)}
              className="p-2 text-banking-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              title="Download PDF"
            >
              <Download className="w-5 h-5" />
            </button>
          </div>
          
          <h3 className="text-lg font-semibold text-banking-900 dark:text-white mb-2">
            {report.title}
          </h3>
          
          <p className="text-sm text-banking-600 dark:text-banking-400 mb-4">
            {report.description}
          </p>
          
          <div className="bg-banking-50 dark:bg-banking-700 rounded-lg p-4">
            <p className="text-sm text-banking-700 dark:text-banking-300">
              {report.data}
            </p>
          </div>
          
          <button
            onClick={() => downloadReport(report)}
            className="w-full mt-4 bg-gradient-to-r from-primary-600 to-purple-600 hover:from-primary-700 hover:to-purple-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
          >
            <Download className="w-4 h-4" />
            Download PDF
          </button>
        </div>
      ))}
    </div>
  );
};

export default ReportsCard;