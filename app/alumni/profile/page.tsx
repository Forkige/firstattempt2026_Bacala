'use client';

import { useState } from 'react';
import Card from '@/components/Card';
import Button from '@/components/Button';
import Input from '@/components/Input';
import Tabs from '@/components/Tabs';
import { useAppContext } from '@/context/AppContext';

export default function ProfilePage() {
  const { user, logout } = useAppContext();
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: user?.name || 'John Doe',
    email: user?.email || 'john@example.com',
    program: user?.program || 'Bachelor of Science in Computer Science',
    batch: user?.batch || 2020
  });

  const handleSave = () => {
    // In a real app, save to backend
    setIsEditing(false);
  };

  const tabs = [
    { id: 'profile', label: 'Profile' },
    { id: 'academic', label: 'Academic Records' },
    { id: 'donations', label: 'Past Donations' },
    { id: 'settings', label: 'Settings' }
  ];

  const [activeTab, setActiveTab] = useState('profile');

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white p-6 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl font-bold text-indigo-600">
              {profile.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <h1 className="text-2xl font-bold">{profile.name}</h1>
              <p className="text-indigo-100">{profile.program}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto p-4 -mt-8 space-y-4">
        {/* Tabs */}
        <Tabs
          tabs={tabs}
          defaultTab="profile"
          onTabChange={setActiveTab}
        >
          <div />
        </Tabs>

        {/* Profile Tab */}
        {activeTab === 'profile' && (
          <div className="space-y-4">
            <Card>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-gray-800">Personal Information</h2>
                <Button
                  onClick={() => {
                    if (isEditing) handleSave();
                    setIsEditing(!isEditing);
                  }}
                  variant="primary"
                  size="sm"
                >
                  {isEditing ? 'Save' : 'Edit'}
                </Button>
              </div>

              <div className="space-y-4">
                {isEditing ? (
                  <>
                    <Input
                      label="Full Name"
                      value={profile.name}
                      onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                    />
                    <Input
                      type="email"
                      label="Email"
                      value={profile.email}
                      onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                    />
                    <Input
                      label="Program"
                      value={profile.program}
                      onChange={(e) => setProfile({ ...profile, program: e.target.value })}
                    />
                    <Input
                      type="number"
                      label="Batch"
                      value={profile.batch.toString()}
                      onChange={(e) => setProfile({ ...profile, batch: parseInt(e.target.value) })}
                    />
                  </>
                ) : (
                  <>
                    <div className="space-y-1">
                      <p className="text-sm text-gray-600">Full Name</p>
                      <p className="text-lg font-semibold text-gray-800">{profile.name}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-gray-600">Email</p>
                      <p className="text-lg font-semibold text-gray-800">{profile.email}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-gray-600">Program</p>
                      <p className="text-lg font-semibold text-gray-800">{profile.program}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-gray-600">Batch</p>
                      <p className="text-lg font-semibold text-gray-800">Class of {profile.batch}</p>
                    </div>
                  </>
                )}
              </div>
            </Card>

            {/* Downloads */}
            <Card>
              <h2 className="font-bold text-gray-800 mb-4">Documents & Credentials</h2>
              <div className="space-y-2">
                <Button variant="outline" fullWidth className="justify-start">
                  📄 Download Diploma
                </Button>
                <Button variant="outline" fullWidth className="justify-start">
                  🎓 Download Transcript
                </Button>
                <Button variant="outline" fullWidth className="justify-start">
                  📋 Download Certificate of Completion
                </Button>
              </div>
            </Card>
          </div>
        )}

        {/* Academic Records Tab */}
        {activeTab === 'academic' && (
          <Card>
            <h2 className="font-bold text-gray-800 mb-4">Academic Records</h2>
            <div className="space-y-3">
              <div className="p-3 border rounded-lg">
                <p className="font-semibold text-gray-800">Bachelor of Science in Computer Science</p>
                <p className="text-sm text-gray-600">Class of {profile.batch}</p>
                <p className="text-sm text-green-600 font-semibold mt-1">✓ Graduated</p>
              </div>
              <div className="p-3 bg-blue-50 rounded-lg">
                <p className="text-sm text-gray-600">GPA: <span className="font-semibold text-blue-600">3.85 / 4.0</span></p>
              </div>
            </div>
          </Card>
        )}

        {/* Past Donations Tab */}
        {activeTab === 'donations' && (
          <Card>
            <h2 className="font-bold text-gray-800 mb-4">Donation Summary</h2>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                <span className="text-gray-700">Total Donated:</span>
                <span className="font-bold text-lg text-blue-600">₱11,500</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="text-gray-700">Number of Donations:</span>
                <span className="font-bold text-lg text-gray-800">5</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="text-gray-700">Impact Points:</span>
                <span className="font-bold text-lg text-purple-600">245</span>
              </div>
            </div>
          </Card>
        )}

        {/* Settings Tab */}
        {activeTab === 'settings' && (
          <Card>
            <h2 className="font-bold text-gray-800 mb-4">Settings</h2>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="text-gray-700">Email Notifications</span>
                <input type="checkbox" defaultChecked className="w-5 h-5" />
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="text-gray-700">SMS Notifications</span>
                <input type="checkbox" className="w-5 h-5" />
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="text-gray-700">Share Donations Publicly</span>
                <input type="checkbox" defaultChecked className="w-5 h-5" />
              </div>
            </div>

            <Button
              onClick={() => {
                logout();
                window.location.href = '/';
              }}
              variant="danger"
              fullWidth
              className="mt-4"
            >
              Logout
            </Button>
          </Card>
        )}

        <div className="pb-4" />
      </div>
    </div>
  );
}
