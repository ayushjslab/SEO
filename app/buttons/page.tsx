'use client'

import React, { useState } from 'react';
import { LayoutGrid, Settings, Users, LogOut } from 'lucide-react';

type TabId = 'Apps' | 'Settings' | 'Users';

const SegmentedControl = () => {
  const [activeTab, setActiveTab] = useState<TabId>('Settings');

  const tabs = [
    { id: 'Apps' as TabId, icon: <LayoutGrid size={18} />, label: 'Apps' },
    { id: 'Settings' as TabId, icon: <Settings size={18} />, label: 'Settings' },
    { id: 'Users' as TabId, icon: <Users size={18} />, label: 'Users' },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black p-4">
      {/* Outer Container */}
      <div className="relative flex items-center bg-[#151515] border border-white/10 rounded-2xl p-1 overflow-hidden h-[60px]">
        
        {tabs.map((tab, index) => {
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                relative flex items-center justify-center gap-2 px-10 h-full transition-colors duration-300 z-10
                ${isActive ? 'text-white' : 'text-gray-400 hover:text-white'}
              `}
            >
              {/* The Blue Border Highlight (Only shows when active) */}
              {isActive && (
                <div className="absolute inset-0 z-[-1] scale-x-110">
                  {/* Top Border */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#3498db] shadow-[0_0_8px_#3498db]" />
                  {/* Bottom Border */}
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#3498db] shadow-[0_0_8px_#3498db]" />
                  {/* The Background Parallelogram */}
                  <div 
                    className="absolute inset-0 bg-white/5"
                    style={{
                      transform: 'skewX(-15deg)',
                      borderLeft: '2px solid #3498db',
                      borderRight: '2px solid #3498db',
                    }}
                  />
                </div>
              )}

              {/* Tab Content */}
              <span className="flex items-center gap-2 text-lg font-medium tracking-wide">
                {tab.icon}
                {tab.label}
              </span>

              {/* Dividers (Slanted) */}
              {index < tabs.length - 1 && (
                <div 
                  className="absolute -right-[1px] top-[20%] h-[60%] w-[1px] bg-white/20"
                  style={{ transform: 'skewX(-15deg)' }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Logout/Arrow Icon Button at bottom */}
      <button className="mt-10 p-3 bg-[#151515] border border-white/10 rounded-xl text-white hover:bg-[#202020] transition-colors">
        <LogOut size={22} className="rotate-180" />
      </button>
    </div>
  );
};

export default SegmentedControl;
