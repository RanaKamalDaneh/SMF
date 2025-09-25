

import React from "react";

const cardIcons = [
  // Portfolio Value
  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" stroke="currentColor" />
    <path d="M12 6v6l4 2" stroke="currentColor" />
  </svg>,
  // Income
  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path d="M12 19V5m0 0l-7 7m7-7l7 7" stroke="currentColor" />
  </svg>,
  // Expenses
  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path d="M12 5v14m0 0l-7-7m7 7l7-7" stroke="currentColor" />
  </svg>,
  // Investment Returns
  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <rect x="3" y="11" width="4" height="10" stroke="currentColor" />
    <rect x="9" y="7" width="4" height="14" stroke="currentColor" />
    <rect x="15" y="3" width="4" height="18" stroke="currentColor" />
  </svg>,
  // Financial Goals
  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" stroke="currentColor" />
    <path d="M12 8v4l2 2" stroke="currentColor" />
  </svg>,
  // Financial Health
  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path d="M12 21c4.97 0 9-4.03 9-9S16.97 3 12 3 3 7.03 3 12s4.03 9 9 9zm-2-9l2 2 4-4" stroke="currentColor" />
  </svg>,
];

const cards = [
  {
    label: "Total Portfolio Value",
    value: "$2,847,392.50",
    sublabel: "Across all accounts",
    change: "+12.5%",
    color: "bg-blue-100 text-blue-700",
  },
  {
    label: "Monthly Income",
    value: "$184,750.00",
    sublabel: "All income sources",
    change: "+8.2%",
    color: "bg-green-100 text-green-700",
  },
  {
    label: "Monthly Expenses",
    value: "$67,234.80",
    sublabel: "Optimized spending",
    change: "-3.1%",
    color: "bg-yellow-100 text-yellow-700",
  },
  {
    label: "Investment Returns",
    value: "$117,515.20",
    sublabel: "Current year performance",
    change: "+15.7%",
    color: "bg-purple-100 text-purple-700",
  },
  {
    label: "Financial Goals",
    value: "85%",
    sublabel: "Goals progress",
    change: "+5.2%",
    color: "bg-green-100 text-green-700",
  },
  {
    label: "Financial Health",
    value: "98%",
    sublabel: "Health score",
    change: "+2.1%",
    color: "bg-blue-100 text-blue-700",
  },
];

export default function DashboardCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 font-sans">
      {cards.map((card, idx) => (
        <div
          key={idx}
          className={`rounded-2xl p-6 shadow ${card.color} flex flex-col justify-between`}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-white/60 rounded-full p-2 shadow">{cardIcons[idx]}</div>
            <div className="text-sm font-medium">{card.label}</div>
          </div>
          <div className="text-3xl font-bold mb-2">{card.value}</div>
          <div className="flex items-center justify-between">
            <span className="text-xs">{card.sublabel}</span>
            <span className="text-xs font-semibold">{card.change}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
