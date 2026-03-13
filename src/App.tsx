import { useState } from 'react';
import { Download, Upload, Plus } from 'lucide-react';
import { BookingenOverzicht } from './components/BookingenOverzicht';
import { IndividueelVee } from './components/IndividueelVee';
import { FacturenIndVee } from './components/FacturenIndVee';
import { Sidebar } from './components/Sidebar';
import { BulkVerwerkingWizard } from './components/BulkVerwerkingWizard';
import { MaandWizard } from './components/MaandWizard';
import { NieuweBoekingWizard } from './components/NieuweBoekingWizard';
import { Boeking } from './types/booking';
import { generateMockBookingen } from './utils/mockData';

export default function App() {
  const [activeMenu, setActiveMenu] = useState('individueel-vee');
  const [showBulkWizard, setShowBulkWizard] = useState(false);
  const [selectedSanitel, setSelectedSanitel] = useState<string | null>(null);
  const [showNewBookingWizard, setShowNewBookingWizard] = useState(false);
  const [showMaandWizard, setShowMaandWizard] = useState(false);
  const [selectedMaand, setSelectedMaand] = useState<string>('');
  const [allBookingen, setAllBookingen] = useState<Boeking[]>(() => generateMockBookingen(100));

  const handleNavigateToIndividualAnimal = (sanitel: string) => {
    setSelectedSanitel(sanitel);
    setActiveMenu('individueel-vee');
  };

  const handleNavigateToFacturenIndVee = (handeling: string, datum: string) => {
    // Extract maand from datum (format: DD/MM/YYYY)
    const parts = datum.split('/');
    if (parts.length === 3) {
      const month = parts[1];
      const year = parts[2];
      setSelectedMaand(`${month}/${year}`);
    }
    setActiveMenu('facturen-ind-vee');
    setShowMaandWizard(true);
  };

  const handleOpenNewBooking = () => {
    setShowNewBookingWizard(true);
  };

  const handleNewBookingComplete = (newBoeking: Boeking) => {
    setAllBookingen(prev => [...prev, newBoeking]);
    setShowNewBookingWizard(false);
  };

  const handleOpenMaandWizard = (maand: string) => {
    setSelectedMaand(maand);
    setShowMaandWizard(true);
  };

  return (
    <div className="flex h-screen bg-white overflow-hidden">
      <Sidebar activeMenu={activeMenu} onMenuChange={setActiveMenu} />
      <main className="flex-1 overflow-hidden flex flex-col">
        {/* Header - Gold */}
        <div className="bg-[gold] h-[59px] border-b border-[#e5c100] flex items-center justify-between px-6 shrink-0">
          <h1 className="text-[16px] leading-6 text-[#101828]">Landbouwmonitoringsnetwerk 3</h1>
          <div className="relative bg-white h-[34px] w-[200px] rounded border border-[#d1d5dc] flex items-center px-3">
            <p className="text-[16px] text-[#6a7282]">LANDBUURBEHEEDER</p>
            <div className="absolute right-3 flex gap-1">
              <div key="chevron-up" className="w-4 h-4 overflow-clip">
                <svg className="block size-full" fill="none" viewBox="0 0 16 16">
                  <path d="M4 10L8 6L12 10" stroke="#4A5565" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div key="search" className="w-4 h-4 overflow-clip">
                <svg className="block size-full" fill="none" viewBox="0 0 16 16">
                  <path d="M14 14L11.1067 11.1067M12.6667 7.33333C12.6667 10.2789 10.2789 12.6667 7.33333 12.6667C4.38781 12.6667 2 10.2789 2 7.33333C2 4.38781 4.38781 2 7.33333 2C10.2789 2 12.6667 4.38781 12.6667 7.33333Z" stroke="#4A5565" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Breadcrumb - Yellow */}
        <div className="bg-[#ffed4e] h-[41px] border-b border-[#e5d43e] flex items-center justify-between px-6 shrink-0">
          <p className="text-[16px] leading-6 text-[#364153]">Startscherm</p>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-hidden">
          {activeMenu === 'overzicht-boekingen' && (
            <BookingenOverzicht 
              onNavigateToAnimal={handleNavigateToIndividualAnimal}
              onNavigateToFacturenIndVee={handleNavigateToFacturenIndVee}
            />
          )}
          {activeMenu === 'individueel-vee' && <IndividueelVee selectedSanitel={selectedSanitel} />}
          {activeMenu === 'facturen-ind-vee' && !showMaandWizard && <FacturenIndVee onOpenWizardForMonth={handleOpenMaandWizard} />}
          {activeMenu === 'facturen-ind-vee' && showMaandWizard && (
            <MaandWizard
              maand={selectedMaand}
              onClose={() => setShowMaandWizard(false)}
              onNavigateToIndividualAnimal={handleNavigateToIndividualAnimal}
            />
          )}
          {activeMenu !== 'overzicht-boekingen' && activeMenu !== 'individueel-vee' && activeMenu !== 'facturen-ind-vee' && (
            <div className="p-8">
              <h1>Startscherm</h1>
              <p>Welkom bij het dierregistratiesysteem</p>
            </div>
          )}
        </div>
      </main>

      {/* Bulk Verwerking Wizard Modal */}
      {showBulkWizard && (
        <BulkVerwerkingWizard onClose={() => setShowBulkWizard(false)} />
      )}

      {/* Nieuwe Boeking Wizard Modal */}
      {showNewBookingWizard && (
        <NieuweBoekingWizard
          onClose={() => setShowNewBookingWizard(false)}
          onBookingCreated={handleNewBookingComplete}
        />
      )}
    </div>
  );
}