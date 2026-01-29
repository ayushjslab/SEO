'use client'
import React, { useState } from 'react';
import { LayoutGrid, Settings, Users, ArrowRightToLine } from 'lucide-react';

type Tab = 'Apps' | 'Settings' | 'Users';

const SegmentedControl = () => {
  const [activeTab, setActiveTab] = useState<Tab>('Users');

  const tabs = [
    { id: 'Apps', icon: <LayoutGrid size={20} />, label: 'Apps' },
    { id: 'Settings', icon: <Settings size={20} />, label: 'Settings' },
    { id: 'Users', icon: <Users size={20} />, label: 'Users' },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black p-4">
      <div className="relative flex items-center bg-[#1a1a1a] rounded-[32px] p-1.5 h-[72px] w-full max-w-2xl">
        {tabs.map((tab, index) => {
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as Tab)}
              className={`relative flex-1 flex items-center justify-center gap-3 h-full z-10 transition-all duration-300 ${
                isActive ? 'text-white' : 'text-gray-500 hover:text-gray-400'
              }`}
            >
              {/* Active Border - Parallelogram Shape */}
              {isActive && (
                <div
                  className="absolute inset-0 border-2 border-[#3b9eff] rounded-[28px] bg-[#3b9eff]/5"
                  style={{
                    clipPath: index === 0 
                      ? 'polygon(0% 0%, 92% 0%, 100% 100%, 0% 100%)' // Left - slanted right edge
                      : index === 1
                      ? 'polygon(8% 0%, 92% 0%, 100% 100%, 0% 100%)' // Middle - slanted both edges
                      : 'polygon(8% 0%, 100% 0%, 100% 100%, 0% 100%)', // Right - slanted left edge
                    boxShadow: '0 0 20px rgba(59, 158, 255, 0.3)',
                  }}
                />
              )}

              {/* Content */}
              <span className="flex items-center gap-3 text-base font-medium z-10">
                {tab.icon}
                {tab.label}
              </span>

              {/* Divider Lines */}
              {index < tabs.length - 1 && (
                <div 
                  className="absolute right-0 w-[1px] h-8 bg-gray-700/50"
                  style={{ transform: 'skewX(-12deg)' }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Footer Button */}
      <div className="mt-12 flex items-center justify-center w-12 h-12 rounded-xl bg-[#1a1a1a] border border-gray-800 text-white hover:bg-[#222] transition-colors cursor-pointer">
        <ArrowRightToLine size={20} />
      </div>
    </div>
  );
};

export default SegmentedControl;
