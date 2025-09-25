import { Link } from "react-router-dom";
import { FlagJordan, BankIcon, UploadIcon, ChatIcon, GeminiIcon } from "../components/Icons";
import DashboardCards from "../components/DashboardCards";
import ExpenseChart from "../components/ExpenseChart";
import TransactionPreview from "../components/TransactionPreview";

const user = { name: "Qusai", bank: "Arab Bank" };

export default function Dashboard() {
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
    <div className="space-y-6 font-sans">
      {/* 1. Personalized Greeting and Actions */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-3">
          <span className="text-2xl font-bold">
            Welcome, {user.name}
          </span>
          <FlagJordan />
          <span className="ml-3 flex items-center bg-blue-50 text-blue-700 px-3 py-1 rounded-lg font-medium text-sm">
            <BankIcon className="w-5 h-5 mr-1" />
            {user.bank}
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ExpenseChart />
        <div className="bg-white rounded-2xl p-4 shadow flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <GeminiIcon className="w-6 h-6 text-blue-600" />
              <span className="font-bold">AI Insights</span>
            </div>
            <p className="text-gray-700">{aiTip}</p>
          </div>
          <div className="mt-4 flex items-center gap-2 text-sm text-gray-400">
            <span>Updated {lastUpdated}</span>
            <span>·</span>
            <span>Powered by Google Gemini</span>
          </div>
        </div>
      </div>

      {/* 4. Recent Transactions Preview */}
      <TransactionPreview transactions={mockTransactions} />

      {/* 5. Optional: Alerts */}
      {/* <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded-xl mt-6 text-yellow-800 flex items-center gap-3">
        <svg className="w-6 h-6" ... />
        Warning: Your expenses exceed your income this month. Try to reduce spending!
      </div> */}
    </div>
  );
}
