import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MapPin } from 'lucide-react';

function Navigation() {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors">
            <MapPin className="h-6 w-6" />
            <span className="font-semibold text-lg">Know Borivali</span>
          </Link>

          <div className="flex space-x-8">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors ${
                isActive('/') 
                  ? 'text-blue-600 border-b-2 border-blue-600 pb-4' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/resources" 
              className={`text-sm font-medium transition-colors ${
                isActive('/resources') 
                  ? 'text-blue-600 border-b-2 border-blue-600 pb-4' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Resources
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;