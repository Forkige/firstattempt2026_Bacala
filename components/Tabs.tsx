// Reusable Tabs component
import React, { useState } from 'react';

interface TabItem {
  id: string;
  label: string;
}

interface TabsProps {
  tabs: TabItem[];
  defaultTab?: string;
  onTabChange?: (tabId: string) => void;
  children: React.ReactNode;
  variant?: 'default' | 'pills';
}

export default function Tabs({
  tabs,
  defaultTab,
  onTabChange,
  children,
  variant = 'default'
}: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id || '');

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    onTabChange?.(tabId);
  };

  const tabStyles = {
    default: 'border-b-2 pb-3 px-4',
    pills: 'px-4 py-2 rounded-full'
  };

  const activeStyles = {
    default: 'border-blue-600 text-blue-600 font-semibold',
    pills: 'bg-blue-600 text-white'
  };

  const inactiveStyles = {
    default: 'border-transparent text-gray-600 hover:text-blue-600',
    pills: 'bg-gray-200 text-gray-700 hover:bg-gray-300'
  };

  return (
    <div className="w-full">
      {/* Tab buttons */}
      <div className={variant === 'default' ? 'flex border-b border-gray-200 gap-0' : 'flex gap-2 flex-wrap'}>
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => handleTabChange(tab.id)}
            className={`${tabStyles[variant]} transition-colors duration-200 ${
              activeTab === tab.id ? activeStyles[variant] : inactiveStyles[variant]
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="py-4">
        {children}
      </div>
    </div>
  );
}
