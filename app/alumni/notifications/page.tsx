'use client';

import Card from '@/components/Card';
import Button from '@/components/Button';
import Tabs from '@/components/Tabs';
import { notifications } from '@/data/notifications';
import { useState } from 'react';

export default function NotificationsPage() {
  const [activeTab, setActiveTab] = useState('All');
  const [readNotifications, setReadNotifications] = useState<Set<number>>(
    new Set(notifications.filter(n => n.read).map(n => n.id))
  );

  const types = ['All', 'Donations', 'Events', 'System'];
  const filteredNotifications = activeTab === 'All'
    ? notifications
    : notifications.filter(n => n.type === activeTab);

  const markAsRead = (id: number) => {
    setReadNotifications(new Set([...readNotifications, id]));
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 pb-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold mb-1">Notifications 🔔</h1>
          <p className="text-blue-100">Stay updated on your donations and events</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto p-4 -mt-4 space-y-4">
        {/* Tabs */}
        <Tabs
          tabs={types.map(t => ({ id: t, label: t }))}
          defaultTab="All"
          onTabChange={setActiveTab}
          variant="pills"
        >
          <div />
        </Tabs>

        {/* Notifications */}
        {filteredNotifications.length > 0 ? (
          <div className="space-y-3">
            {filteredNotifications.map(notification => (
              <Card
                key={notification.id}
                className={`cursor-pointer hover:shadow-md ${
                  !readNotifications.has(notification.id) ? 'border-l-4 border-blue-600 bg-blue-50' : ''
                }`}
                onClick={() => markAsRead(notification.id)}
              >
                <div className="flex gap-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-xl flex-shrink-0">
                    {notification.type === 'Donations' && '❤️'}
                    {notification.type === 'Events' && '📅'}
                    {notification.type === 'System' && '⚙️'}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-semibold text-gray-800">{notification.title}</h3>
                      <span className="text-xs text-gray-500">{notification.timestamp}</span>
                    </div>
                    <p className="text-sm text-gray-700 mb-3">{notification.message}</p>
                    {notification.action && (
                      <Button
                        onClick={() => {
                          markAsRead(notification.id);
                        }}
                        variant="outline"
                        size="sm"
                      >
                        {notification.action}
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="text-center py-8">
            <p className="text-gray-600">No notifications in this category</p>
          </Card>
        )}

        <div className="pb-4" />
      </div>
    </div>
  );
}
