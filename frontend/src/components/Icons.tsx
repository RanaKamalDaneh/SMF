import React from 'react';
import {  
  Upload, 
  MessageCircle, 
  Building2,
  Sparkles
} from 'lucide-react';

// Currency JOD Icon
export const CurrencyJOD: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <div className={`${className} flex items-center justify-center bg-green-100 text-green-600 rounded-full font-bold text-xs`}>
    JOD
  </div>
);

// Jordan Flag Icon
export const FlagJordan: React.FC<{ className?: string }> = ({ className = "w-6 h-4" }) => (
  <div className={`${className} flex flex-col rounded-sm overflow-hidden border`}>
    <div className="h-1/3 bg-black"></div>
    <div className="h-1/3 bg-white"></div>
    <div className="h-1/3 bg-green-600"></div>
  </div>
);

// Bank Icon
export const BankIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <Building2 className={className} />
);

// Upload Icon
export const UploadIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <Upload className={className} />
);

// Chat Icon
export const ChatIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <MessageCircle className={className} />
);

// Gemini AI Icon
export const GeminiIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <Sparkles className={className} />
);