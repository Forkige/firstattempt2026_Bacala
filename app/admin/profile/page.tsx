'use client';

import Card from '@/components/Card';
import Button from '@/components/Button';
import { useAppContext } from '@/context/AppContext';

export default function AdminProfilePage() {
  const { user, logout } = useAppContext();

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white p-6 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl font-bold text-indigo-600">
              ⚙️
            </div>
            <div>
              <h1 className="text-2xl font-bold">Admin Account</h1>
              <p className="text-indigo-100">Platform Administrator</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto p-4 -mt-8 space-y-4">
        {/* Admin Info */}
        <Card>
          <h2 className="font-bold text-gray-800 mb-4">Admin Details</h2>
          <div className="space-y-3">
            <div>
              <p className="text-sm text-gray-600">Email</p>
              <p className="text-lg font-semibold text-gray-800">{user?.email}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Role</p>
              <p className="text-lg font-semibold text-gray-800">Administrator</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Access Level</p>
              <p className="text-lg font-semibold text-blue-600">Full Access</p>
            </div>
          </div>
        </Card>

        {/* Platform Stats */}
        <Card>
          <h2 className="font-bold text-gray-800 mb-4">Platform Overview</h2>
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 bg-blue-50 rounded-lg">
              <p className="text-xs text-gray-600">Active Users</p>
              <p className="text-2xl font-bold text-blue-600">1.2K</p>
            </div>
            <div className="p-3 bg-green-50 rounded-lg">
              <p className="text-xs text-gray-600">Total Donations</p>
              <p className="text-2xl font-bold text-green-600">₱3.6M</p>
            </div>
            <div className="p-3 bg-purple-50 rounded-lg">
              <p className="text-xs text-gray-600">Campaigns</p>
              <p className="text-2xl font-bold text-purple-600">8</p>
            </div>
            <div className="p-3 bg-orange-50 rounded-lg">
              <p className="text-xs text-gray-600">Success Rate</p>
              <p className="text-2xl font-bold text-orange-600">98%</p>
            </div>
          </div>
        </Card>

        {/* Settings */}
        <Card>
          <h2 className="font-bold text-gray-800 mb-4">Administrator Settings</h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span className="text-gray-700">Email Notifications</span>
              <input type="checkbox" defaultChecked className="w-5 h-5" />
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span className="text-gray-700">System Alerts</span>
              <input type="checkbox" defaultChecked className="w-5 h-5" />
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span className="text-gray-700">Daily Reports</span>
              <input type="checkbox" className="w-5 h-5" />
            </div>
          </div>
        </Card>

        {/* Logout */}
        <Button
          onClick={() => {
            logout();
            window.location.href = '/';
          }}
          variant="danger"
          fullWidth
          size="lg"
        >
          Logout
        </Button>

        <div className="pb-4" />
      </div>
    </div>
  );
}
