import { useState, useEffect } from 'react';
import { ChevronRight, Download } from 'lucide-react';
import { StatusType } from '../types/booking';

interface MaandOverzicht {
  maand: string;
  afgewerkt: number;
  ingeladen: number;
  nietAfgewerkt: number;
}

interface FacturenIndVeeProps {
  onOpenWizardForMonth?: (maand: string) => void;
}

// Mock data voor ingeladen maanden
const generateMaandOverzicht = (): MaandOverzicht[] => {
  return [
    { maand: 'Januari 2024', afgewerkt: 15, ingeladen: 8, nietAfgewerkt: 3 },
    { maand: 'Februari 2024', afgewerkt: 12, ingeladen: 5, nietAfgewerkt: 7 },
    { maand: 'Maart 2024', afgewerkt: 18, ingeladen: 10, nietAfgewerkt: 2 },
    { maand: 'April 2024', afgewerkt: 14, ingeladen: 6, nietAfgewerkt: 4 },
    { maand: 'Mei 2024', afgewerkt: 20, ingeladen: 12, nietAfgewerkt: 5 },
    { maand: 'Juni 2024', afgewerkt: 16, ingeladen: 9, nietAfgewerkt: 3 },
    { maand: 'Juli 2024', afgewerkt: 19, ingeladen: 11, nietAfgewerkt: 6 },
  ];
};

export function FacturenIndVee({ onOpenWizardForMonth }: FacturenIndVeeProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [loadingDetails, setLoadingDetails] = useState('');
  const [maandOverzichten, setMaandOverzichten] = useState<MaandOverzicht[]>(() => generateMaandOverzicht());
  const [showPeriodChoice, setShowPeriodChoice] = useState(false);
  const [periodChoice, setPeriodChoice] = useState<'maand' | 'kwartaal' | null>(() => {
    // Check if user has made a choice before
    const saved = localStorage.getItem('periodChoice');
    return saved ? (saved as 'maand' | 'kwartaal') : null;
  });
  
  // Huidige beschikbare datum (laatste dag van vorige maand)
  const beschikbareTotDatum = new Date(2024, 8, 30); // 30 september 2024
  const formattedDatum = `${beschikbareTotDatum.getDate().toString().padStart(2, '0')}/${(beschikbareTotDatum.getMonth() + 1).toString().padStart(2, '0')}/${beschikbareTotDatum.getFullYear()}`;

  const handleInladenDiergegevens = () => {
    // Check if user hasn't made a choice yet
    if (!periodChoice) {
      setShowPeriodChoice(true);
      return;
    }
    
    startLoading();
  };

  const handlePeriodChoice = (choice: 'maand' | 'kwartaal') => {
    setPeriodChoice(choice);
    localStorage.setItem('periodChoice', choice);
    setShowPeriodChoice(false);
    startLoading();
  };

  const startLoading = () => {
    setIsLoading(true);
    setLoadingProgress(0);
    setLoadingDetails('');
    
    // Simulate progressive loading
    const steps = [
      { progress: 25, detail: 'Aankopen: 3', delay: 300 },
      { progress: 50, detail: 'Aankopen: 3 • Geboortes: 2', delay: 600 },
      { progress: 75, detail: 'Aankopen: 3 • Geboortes: 2 • Verkopen: 2', delay: 900 },
      { progress: 100, detail: 'Aankopen: 3 • Geboortes: 2 • Verkopen: 2 • Sterftes: 1', delay: 1200 }
    ];
    
    steps.forEach((step) => {
      setTimeout(() => {
        setLoadingProgress(step.progress);
        setLoadingDetails(step.detail);
        
        if (step.progress === 100) {
          setTimeout(() => {
            setIsLoading(false);
            // Voeg nieuwe maand toe aan de lijst
            const nieuweMaand = {
              maand: 'Augustus 2024',
              afgewerkt: 0,
              ingeladen: 8,
              nietAfgewerkt: 0
            };
            setMaandOverzichten([nieuweMaand, ...maandOverzichten]);
          }, 500);
        }
      }, step.delay);
    });
  };

  const handleNavigateToMonth = (maand: string) => {
    // Open wizard in new tab
    if (onOpenWizardForMonth) {
      onOpenWizardForMonth(maand);
    } else {
      // Default: open in new window/tab
      const url = `/wizard?maand=${encodeURIComponent(maand)}`;
      window.open(url, '_blank');
    }
  };

  return (
    <div className="h-full overflow-y-auto bg-white">
      <div className="p-8">
        {/* Parameters sectie */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-[#101828]">Nieuwe diergegevens inladen</h2>
          
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 space-y-4">
            <p className="text-[16px] text-[#364153]">
              Diergegevens tot datum: <span className="font-semibold">{formattedDatum}</span> zijn beschikbaar.
            </p>
            
            <button
              onClick={handleInladenDiergegevens}
              disabled={isLoading}
              className="h-[34px] px-4 bg-[#155dfc] text-white rounded text-[14px] hover:bg-[#1348d6] disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              {periodChoice === 'kwartaal' ? 'Inladen kwartaal gegevens' : 'Inladen maandelijkse gegevens'}
            </button>
            
            {/* Progress bar */}
            {isLoading && (
              <div className="mt-4 space-y-2">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <p className="text-[14px] text-[#364153] mb-2">Data succesvol ingeladen</p>
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-[#155dfc] transition-all duration-300"
                      style={{ width: `${loadingProgress}%` }}
                    />
                  </div>
                  <p className="text-[14px] text-[#6a7282] mt-2">
                    {loadingProgress}% — {loadingDetails}
                  </p>
                </div>
                <p className="text-[14px] text-[#6a7282] italic">
                  Je kan pas verder zodra alle gegevens volledig zijn ingeladen
                </p>
              </div>
            )}
          </div>
        </div>
        
        {/* Overzicht sectie */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-[#101828]">
            Overzicht ingeladen diergegevens
          </h2>
          
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-4 py-3 text-left text-[14px] font-semibold text-[#364153]">Periode</th>
                  <th className="px-4 py-3 text-left text-[14px] font-semibold text-[#364153]">Afgewerkte boekingen</th>
                  <th className="px-4 py-3 text-left text-[14px] font-semibold text-[#364153]">Ingeladen boekingen</th>
                  <th className="px-4 py-3 text-left text-[14px] font-semibold text-[#364153]">Niet afgewerkte boekingen</th>
                  <th className="px-4 py-3 w-12"></th>
                </tr>
              </thead>
              <tbody>
                {maandOverzichten.map((overzicht, index) => (
                  <tr 
                    key={index}
                    onDoubleClick={() => handleNavigateToMonth(overzicht.maand)}
                    className="border-b border-gray-200 hover:bg-gray-50 cursor-pointer transition-colors"
                  >
                    <td className="px-4 py-3 text-[14px] text-[#364153]">{overzicht.maand}</td>
                    <td className="px-4 py-3 text-[14px] text-[#364153]">{overzicht.afgewerkt}</td>
                    <td className="px-4 py-3 text-[14px] text-[#364153]">{overzicht.ingeladen}</td>
                    <td className="px-4 py-3 text-[14px] text-[#364153]">{overzicht.nietAfgewerkt}</td>
                    <td className="px-4 py-3">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleNavigateToMonth(overzicht.maand);
                        }}
                        className="p-1 rounded hover:bg-gray-200 transition-colors"
                        title="Open wizard"
                      >
                        <ChevronRight className="w-5 h-5 text-[#364153]" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Period Choice Modal */}
      {showPeriodChoice && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4 shadow-xl">
            <h3 className="text-lg font-semibold mb-4 text-[#101828]">
              Selecteer inleesperiode voor dit boekjaar
            </h3>
            <p className="text-sm text-gray-600 mb-6">
              Wilt u de diergegevens maandelijks of per kwartaal inlezen? Deze keuze wordt bewaard voor het hele boekjaar.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => handlePeriodChoice('maand')}
                className="flex-1 h-[40px] px-4 bg-[#155dfc] text-white rounded text-[14px] hover:bg-[#1348d6]"
              >
                Maandelijks
              </button>
              <button
                onClick={() => handlePeriodChoice('kwartaal')}
                className="flex-1 h-[40px] px-4 bg-[#155dfc] text-white rounded text-[14px] hover:bg-[#1348d6]"
              >
                Per kwartaal
              </button>
            </div>
            <button
              onClick={() => setShowPeriodChoice(false)}
              className="w-full mt-3 h-[34px] px-4 bg-white border border-gray-300 text-[#364153] rounded text-[14px] hover:bg-gray-50"
            >
              Annuleren
            </button>
          </div>
        </div>
      )}
    </div>
  );
}