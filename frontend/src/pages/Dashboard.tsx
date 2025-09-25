import { Link } from "react-router-dom";
import { FlagJordan, BankIcon, UploadIcon, ChatIcon, GeminiIcon } from "../components/Icons";
import DashboardCards from "../components/DashboardCards";
import ExpenseChart from "../components/ExpenseChart";
import TransactionPreview from "../components/TransactionPreview";
import { useAuth } from "../contexts/AuthContext";

export default function Dashboard() {
  // استخدام سياق المصادقة للحصول على معلومات المستخدم
  const { user: authUser } = useAuth();
  
  const bank = "Arab Bank";
  const lastUpdated = "2 minutes ago";
  const aiTip = "Gemini AI: Try saving 10 JOD this month by reducing dining out.";

  // Mock transactions data for TransactionPreview
  const mockTransactions = [
    { date: "2024-01-15", description: "Grocery Shopping", category: "Food", amount: -85.50 },
    { date: "2024-01-14", description: "Salary Deposit", category: "Income", amount: 3500.00 },
    { date: "2024-01-13", description: "Gas Station", category: "Transport", amount: -45.00 },
    { date: "2024-01-12", description: "Restaurant", category: "Dining", amount: -67.25 },
    { date: "2024-01-11", description: "Online Purchase", category: "Shopping", amount: -120.00 },
  ];

  return (
    <div className="space-y-4 font-sans p-2">
      {/* 1. Personalized Greeting and Actions */}
      <div className="flex items-center justify-between flex-wrap gap-4 mb-4">
        <div className="flex items-center gap-3">
          <span className="text-2xl font-bold">
            Welcome, {authUser?.firstName || "Guest"}
          </span>
          <FlagJordan />
          <span className="ml-3 flex items-center bg-blue-50 text-blue-700 px-3 py-1 rounded-lg font-medium text-sm">
            <BankIcon className="w-5 h-5 mr-1" />
            {bank}
          </span>
        </div>
        <div className="flex gap-2">
          <Link to="/upload" className="bg-blue-600 text-white px-4 py-2 rounded-xl flex items-center gap-2 hover:shadow">
            <UploadIcon className="w-5 h-5" /> Upload Statement
          </Link>
          <Link to="/recommendations" className="bg-green-600 text-white px-4 py-2 rounded-xl flex items-center gap-2 hover:shadow">
            <ChatIcon className="w-5 h-5" /> Chat with AI
          </Link>
        </div>
      </div>

      {/* 2. Stat Cards */}
      <DashboardCards />

      {/* 3. Charts and AI Insights */}
      <div className="bg-white rounded-xl p-4 shadow border border-gray-100">
        <ExpenseChart />
        <div className="mt-2 flex items-center justify-between text-xs text-gray-500">
          <div>Updated {lastUpdated}</div>
          <div className="flex items-center gap-1">
            <span>Powered by Google Gemini</span>
          </div>
        </div>
      </div>

      {/* 4. Recent Transactions Preview */}
      <TransactionPreview transactions={mockTransactions} />
    </div>
  );
}
