'use client'
import React, { useState } from 'react';
import { LayoutGrid, Settings, Users, ArrowRightToLine } from 'lucide-react';

type Tab = 'Apps' | 'Settings' | 'Users';

const SegmentedControl = () => {
  const [activeTab, setActiveTab] = useState<Tab>('Users');

  const tabs = [
    { id: 'Apps', icon: <LayoutGrid size={18} />, label: 'Apps' },
    { id: 'Settings', icon: <Settings size={18} />, label: 'Settings' },
    { id: 'Users', icon: <Users size={18} />, label: 'Users' },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#050505] p-4">
      <div className="relative flex items-center bg-[#111111] border border-white/10 rounded-2xl p-1 h-14 w-full max-w-md">
        {tabs.map((tab, index) => {
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as Tab)}
              className={`relative flex-1 flex items-center justify-center gap-2 h-full z-10 transition-colors duration-200 ${
                isActive ? 'text-white' : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              {/* Active Border SVG - Hand-drawn path for precision */}
              {isActive && (
                <svg
                  className="absolute inset-0 w-full h-full overflow-visible pointer-events-none"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                >
                  <path
                    d={
                      index === 0 
                        ? "M 0,10 L 92,10 L 100,90 L 0,90 Z" // Left Tab
                        : index === 1
                        ? "M 8,10 L 92,10 L 100,90 L 0,90 Z" // Middle Tab
                        : "M 8,10 L 100,10 L 100,90 L 0,90 Z" // Right Tab
                    }
                    fill="rgba(52, 152, 219, 0.1)"
                    stroke="#3498db"
                    strokeWidth="2"
                    strokeLinejoin="round"
                    className="drop-shadow-[0_0_5px_rgba(52,152,219,0.5)]"
                  />
                </svg>
              )}

              {/* Label & Icon */}
              <span className="flex items-center gap-2 text-sm font-semibold">
                {tab.icon}
                {tab.label}
              </span>

              {/* Static Slanted Dividers */}
              {index < tabs.length - 1 && !isActive && activeTab !== tabs[index+1].id && (
                <div 
                  className="absolute right-0 w-[1px] h-1/2 bg-white/10"
                  style={{ transform: 'skewX(-15deg)' }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Footer Button */}
      <div className="mt-8 flex items-center justify-center w-10 h-10 rounded-lg bg-[#111111] border border-white/10 text-white">
        <ArrowRightToLine size={20} />
      </div>
    </div>
  );
};

export default SegmentedControl;
