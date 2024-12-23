import React from 'react';
import { Home, Search, Bell, MessageSquare, User } from 'lucide-react';

const navigation = [
  { name: 'Home', icon: Home },
  { name: 'Search', icon: Search },
  { name: 'Notifications', icon: Bell },
  { name: 'Messages', icon: MessageSquare },
  { name: 'Profile', icon: User },
];

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white border-b border-gray-200 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <MessageSquare className="h-8 w-8 text-blue-500" />
            <span className="ml-2 text-xl font-bold">SocialApp</span>
          </div>
          <div className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                className="flex items-center text-gray-700 hover:text-blue-500"
              >
                <item.icon className="h-5 w-5" />
                <span className="ml-2">{item.name}</span>
              </button>
            ))}
          </div>
          <div className="md:hidden flex space-x-4">
            {navigation.map((item) => (
              <button
                key={item.name}
                className="text-gray-700 hover:text-blue-500"
              >
                <item.icon className="h-6 w-6" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}