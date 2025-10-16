'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Shield, LogOut, Users, CreditCard, Settings, BarChart } from 'lucide-react';

export default function AdminClient() {
  const router = useRouter();
  const [loggingOut, setLoggingOut] = useState(false);

  const handleLogout = async () => {
    setLoggingOut(true);
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      router.push('/');
      router.refresh();
    } catch (error) {
      console.error('Logout error:', error);
      setLoggingOut(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />

      {/* Header */}
      <header className="relative bg-gray-800/50 backdrop-blur-xl border-b border-gray-700">
        <div className="container-custom py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Shield className="h-8 w-8 text-primary-400" />
              <div>
                <h1 className="text-xl font-bold text-white">Admin Dashboard</h1>
                <p className="text-xs text-gray-400">Secure Administration Area</p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              disabled={loggingOut}
              className="flex items-center space-x-2 px-4 py-2 bg-red-600/10 hover:bg-red-600/20 text-red-400 rounded-lg transition-colors"
            >
              <LogOut className="h-4 w-4" />
              <span>{loggingOut ? 'Logging out...' : 'Logout'}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative container-custom py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Stats Cards */}
          <div className="bg-gray-800/50 backdrop-blur-xl rounded-xl border border-gray-700 p-6">
            <div className="flex items-center justify-between mb-4">
              <Users className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold text-white">1,234</span>
            </div>
            <h3 className="text-gray-400 text-sm">Total Customers</h3>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-xl rounded-xl border border-gray-700 p-6">
            <div className="flex items-center justify-between mb-4">
              <CreditCard className="h-8 w-8 text-green-400" />
              <span className="text-2xl font-bold text-white">$0</span>
            </div>
            <h3 className="text-gray-400 text-sm">Processing Fees Saved</h3>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-xl rounded-xl border border-gray-700 p-6">
            <div className="flex items-center justify-between mb-4">
              <BarChart className="h-8 w-8 text-purple-400" />
              <span className="text-2xl font-bold text-white">98.5%</span>
            </div>
            <h3 className="text-gray-400 text-sm">System Uptime</h3>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-gray-800/50 backdrop-blur-xl rounded-xl border border-gray-700 p-8">
          <h2 className="text-xl font-bold text-white mb-6">Quick Actions</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <button className="p-4 bg-primary-600/10 hover:bg-primary-600/20 border border-primary-600/20 rounded-lg text-primary-400 transition-colors">
              <Settings className="h-6 w-6 mx-auto mb-2" />
              <span className="block text-sm">System Settings</span>
            </button>
            <button className="p-4 bg-blue-600/10 hover:bg-blue-600/20 border border-blue-600/20 rounded-lg text-blue-400 transition-colors">
              <Users className="h-6 w-6 mx-auto mb-2" />
              <span className="block text-sm">Manage Users</span>
            </button>
            <button className="p-4 bg-green-600/10 hover:bg-green-600/20 border border-green-600/20 rounded-lg text-green-400 transition-colors">
              <BarChart className="h-6 w-6 mx-auto mb-2" />
              <span className="block text-sm">View Reports</span>
            </button>
          </div>
        </div>

        {/* Security Notice */}
        <div className="mt-8 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
          <div className="flex items-start space-x-3">
            <Shield className="h-5 w-5 text-yellow-400 mt-0.5" />
            <div>
              <h3 className="text-yellow-400 font-medium">Security Notice</h3>
              <p className="text-gray-400 text-sm mt-1">
                This is a protected area. All actions are logged and monitored.
                Your session will expire after 24 hours of inactivity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}