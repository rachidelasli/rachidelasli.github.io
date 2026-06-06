import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Users, Shuffle } from 'lucide-react';
import ManageClasses from './pages/ManageClasses';
import RandomPicker from './pages/RandomPicker';

const NavLink = ({ to, icon: Icon, children }: { to: string, icon: any, children: React.ReactNode }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link
      to={to}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
        isActive 
          ? 'bg-blue-600 text-white shadow-md' 
          : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
      }`}
    >
      <Icon size={20} />
      <span className="font-semibold">{children}</span>
    </Link>
  );
};

const AppLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="bg-blue-600 text-white p-2 rounded-lg">
                <Users size={24} />
              </div>
              <h1 className="text-xl font-bold text-gray-900">إدارة الأقسام</h1>
            </div>
            <nav className="flex gap-2">
              <NavLink to="/" icon={Users}>إدارة الأفواج</NavLink>
              <NavLink to="/random" icon={Shuffle}>اختيار عشوائي</NavLink>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Routes>
          <Route path="/" element={<ManageClasses />} />
          <Route path="/random" element={<RandomPicker />} />
        </Routes>
      </main>
      
      <footer className="bg-white border-t border-gray-200 py-4 mt-auto">
        <div className="max-w-5xl mx-auto px-4 text-center text-sm text-gray-500">
          تطبيق إدارة الأفواج واختيار التلاميذ العشوائي &copy; {new Date().getFullYear()}
        </div>
      </footer>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}
