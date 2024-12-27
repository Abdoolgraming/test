import React from 'react';
import { Menu, LogOut, Home, Users, BookOpen, Calendar, FileText, Clock } from 'lucide-react';
import { Link, useLocation, Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

interface SidebarLinkProps {
  to: string;
  icon: React.ReactNode;
  label: string;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({ to, icon, label }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link
      to={to}
      className={`flex items-center space-x-2 p-3 rounded-lg transition-colors ${
        isActive
          ? 'bg-blue-100 text-blue-700'
          : 'text-gray-600 hover:bg-gray-100'
      }`}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
};

const Layout: React.FC = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Menu className="h-6 w-6 text-gray-600" />
              <span className="ml-2 text-xl font-semibold text-gray-800">
                Results Management System
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <button 
                onClick={handleLogout}
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-800"
              >
                <LogOut className="h-5 w-5" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex">
        <aside className="w-64 bg-white shadow-sm min-h-screen p-4">
          <div className="space-y-2">
            <SidebarLink to="/dashboard" icon={<Home className="h-5 w-5" />} label="Dashboard" />
            <SidebarLink to="/students" icon={<Users className="h-5 w-5" />} label="Students" />
            <SidebarLink to="/subjects" icon={<BookOpen className="h-5 w-5" />} label="Subjects" />
            <SidebarLink to="/attendance" icon={<Calendar className="h-5 w-5" />} label="Attendance" />
            <SidebarLink to="/results" icon={<FileText className="h-5 w-5" />} label="Results" />
            <SidebarLink to="/timetable" icon={<Clock className="h-5 w-5" />} label="Timetable" />
          </div>
        </aside>

        <main className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;