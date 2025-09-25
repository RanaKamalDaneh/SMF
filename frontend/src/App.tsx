import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Upload from './pages/Upload';
import Recommendations from './pages/Recommendations';
import Reports from './pages/Reports';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
          <div className="flex">
            {/* Fixed Sidebar */}
            <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />
            
            {/* Main Content Area - Scrollable */}
            <div className="flex-1 lg:ml-80">
              <div className="flex flex-col min-h-screen">
                <Header onToggleSidebar={toggleSidebar} />
                
                <main className="flex-1 bg-gray-50 dark:bg-gray-900">
                  <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-7xl">
                    <Routes>
                      <Route path="/" element={<Dashboard />} />
                      <Route path="/upload" element={<Upload />} />
                      <Route path="/recommendations" element={<Recommendations />} />
                      <Route path="/reports" element={<Reports />} />
                    </Routes>
                  </div>
                </main>
              </div>
            </div>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;