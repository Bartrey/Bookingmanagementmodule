import { Home, ChevronDown, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import svgPaths from "../imports/svg-d900zvck8m";

interface SidebarProps {
  activeMenu: string;
  onMenuChange: (menu: string) => void;
}

const mainMenuItems = [
  { id: 'bedrijfskaartgroepen', label: 'Bedrijfskaartgroepen' },
  { id: 'investeringsplan', label: 'Investeringsplan' },
  { id: 'perceelgroepen', label: 'Perceelgroepen' },
  { id: 'teeltplan', label: 'Teeltplan' },
];

const veeSubmenu = [
  { id: 'facturen-groepsvee', label: 'Facturen groepsvee' },
  { id: 'veebew-in-groep', label: 'Veebew. in groep' },
  { id: 'facturen-ind-vee', label: 'Facturen ind. vee' },
  { id: 'individueel-vee', label: 'Individueel vee' },
  { id: 'overzicht-boekingen', label: 'Veebewegingen individueel' },
];

export function Sidebar({ activeMenu, onMenuChange }: SidebarProps) {
  const [boekingenOpen, setBoekingenOpen] = useState(true);
  const [veeOpen, setVeeOpen] = useState(true);
  const [afsluitingOpen, setAfsluitingOpen] = useState(false);
  
  return (
    <aside className="w-[224px] bg-white border-r border-[#d1d5dc] flex flex-col h-full">
      {/* Top navigation icons */}
      <div className="h-[53px] border-b border-[#d1d5dc] flex items-center gap-2 px-3 pt-3">
        <button className="size-7 rounded flex items-center justify-center hover:bg-gray-100">
          <div className="size-5 overflow-clip">
            <svg className="block size-full" fill="none" viewBox="0 0 20 20">
              <path d="M7.5 16.25V10.625C7.5 10.2798 7.77982 10 8.125 10H11.875C12.2202 10 12.5 10.2798 12.5 10.625V16.25M3.125 7.5L10 2.1875L16.875 7.5V15.625C16.875 16.3154 16.3154 16.875 15.625 16.875H4.375C3.68464 16.875 3.125 16.3154 3.125 15.625V7.5Z" stroke="#364153" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </button>
        <button className="size-7 rounded flex items-center justify-center hover:bg-gray-100">
          <div className="size-5 overflow-clip">
            <svg className="block size-full" fill="none" viewBox="0 0 20 20">
              <path d="M7.5 15L12.5 10L7.5 5" stroke="#364153" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </button>
      </div>
      
      {/* Menu items */}
      <nav className="flex-1 overflow-y-auto">
        {mainMenuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onMenuChange(item.id)}
            className={`w-full h-10 flex items-center px-4 text-left text-[16px] leading-6 transition-colors ${
              activeMenu === item.id
                ? 'bg-gray-100 text-[#101828]'
                : 'text-[#364153] hover:bg-gray-50'
            }`}
          >
            {item.label}
          </button>
        ))}

        {/* BOEKINGEN section */}
        <div className="mt-2">
          <button
            onClick={() => setBoekingenOpen(!boekingenOpen)}
            className="w-full h-10 flex items-center justify-between px-4 bg-gray-100 text-[16px] leading-6 text-[#101828]"
          >
            <span>BOEKINGEN</span>
            {boekingenOpen ? (
              <ChevronDown className="w-4 h-4" />
            ) : (
              <ChevronRight className="w-4 h-4" />
            )}
          </button>
          
          {boekingenOpen && (
            <div>
              <button
                onClick={() => setVeeOpen(!veeOpen)}
                className="w-full h-10 flex items-center justify-between px-4 bg-gray-100 text-[16px] leading-6 text-[#101828]"
              >
                <span>VEE</span>
                {veeOpen ? (
                  <ChevronDown className="w-4 h-4" />
                ) : (
                  <ChevronRight className="w-4 h-4" />
                )}
              </button>
              
              {veeOpen && (
                <div className="bg-gray-50">
                  {veeSubmenu.map((sub) => (
                    <button
                      key={sub.id}
                      onClick={() => onMenuChange(sub.id)}
                      className={`w-full h-10 flex items-center pl-8 text-left text-[16px] leading-6 transition-colors ${
                        activeMenu === sub.id
                          ? 'bg-[#155dfc] text-white'
                          : 'text-[#364153] hover:bg-gray-100'
                      }`}
                    >
                      {sub.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* AFSLUITING section */}
        <div className="mt-2">
          <button
            onClick={() => setAfsluitingOpen(!afsluitingOpen)}
            className="w-full h-10 flex items-center justify-between px-4 bg-gray-100 text-[16px] leading-6 text-[#101828]"
          >
            <span>AFSLUITING</span>
            <div className="w-4 h-4 flex items-center justify-center">
              <div className="-rotate-90">
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>
          </button>
        </div>
      </nav>

      {/* Bottom navigation icons */}
      <div className="h-[53px] border-t border-[#d1d5dc] flex items-center gap-2 px-3 pt-3">
        <button className="size-7 rounded flex items-center justify-center hover:bg-gray-100">
          <div className="size-5 overflow-clip">
            <svg className="block size-full" fill="none" viewBox="0 0 20 20">
              <path d="M7.5 16.25V10.625C7.5 10.2798 7.77982 10 8.125 10H11.875C12.2202 10 12.5 10.2798 12.5 10.625V16.25M3.125 7.5L10 2.1875L16.875 7.5V15.625C16.875 16.3154 16.3154 16.875 15.625 16.875H4.375C3.68464 16.875 3.125 16.3154 3.125 15.625V7.5Z" stroke="#364153" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </button>
        <button className="size-7 rounded flex items-center justify-center hover:bg-gray-100">
          <div className="size-5 overflow-clip">
            <svg className="block size-full" fill="none" viewBox="0 0 20 20">
              <path d="M7.5 15L12.5 10L7.5 5" stroke="#364153" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </button>
      </div>
    </aside>
  );
}