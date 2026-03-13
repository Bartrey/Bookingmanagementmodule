import { useState } from 'react';
import { Search, ChevronDown, ChevronUp, ChevronRight, Flame } from 'lucide-react';
import React from 'react';
import { NieuweBoekingWizard } from './NieuweBoekingWizard';
import { Boeking as BookingType, StatusType } from '../types/booking';
import { ImpactWizard } from './ImpactWizard';
import { analyzeImpact } from '../utils/impactAnalyse';
import { toast } from 'sonner';

interface Boeking {
  id: string;
  datum: string;
  handeling: string;
  gewicht: number;
  leeftijd: number;
  diercategorie: string;
  waarde: number;
}

interface Dier {
  id: string;
  sanitelnummer: string;
  naam: string;
  ras: string;
  geboortedatum: string;
  huidigeCategorie: string;
  moederdier: string;
  boekingen: Boeking[];
}

// Mock data voor dieren
const generateMockDieren = (): Dier[] => {
  const rassen = ['Holstein Friesian', 'Belgian Blue', 'Jersey', 'Charolais', 'Limousin'];
  const namen = ['BRUNO', 'BELLA', 'CHARLIE', 'DAISY', 'ELVIS', 'FLORA', 'GEORGE', 'HEIDI', 'IVAN', 'JULIA'];
  const categorieën = ['Melkkoe', 'Zoogkoe', 'Jongvee', 'Dekstier', 'Mannelijk Jongvee Melk', 'Vrouwelijk Jongvee Vlees'];
  const handelingen = ['Interne Beweging', 'Sterfte', 'Overgang', 'Geboorte', 'Aankoop', 'Verkoop'];
  const moederdieren = ['Betsy', 'Daisy', 'Emma', 'Flora', 'Greta', 'Hannah', 'Iris', 'Jane'];

  const dieren: Dier[] = [];

  for (let i = 0; i < 32; i++) {
    const naam = namen[i % namen.length];
    const ras = rassen[Math.floor(Math.random() * rassen.length)];
    const categorie = categorieën[Math.floor(Math.random() * categorieën.length)];
    const moederdier = moederdieren[Math.floor(Math.random() * moederdieren.length)];
    
    // Generate sanitelnummer
    const sanitelnummer = `BE${Math.floor(Math.random() * 900000000 + 100000000)}`;
    
    // Generate geboortedatum
    const year = 2018 + Math.floor(Math.random() * 6);
    const month = String(Math.floor(Math.random() * 12) + 1).padStart(2, '0');
    const day = String(Math.floor(Math.random() * 28) + 1).padStart(2, '0');
    const geboortedatum = `${day}/${month}/${year}`;

    // Generate boekingen voor dit dier
    const aantalBoekingen = Math.floor(Math.random() * 5) + 2;
    const boekingen: Boeking[] = [];
    
    for (let j = 0; j < aantalBoekingen; j++) {
      const boekingYear = year + Math.floor(j / 2);
      const boekingMonth = String(Math.floor(Math.random() * 12) + 1).padStart(2, '0');
      const boekingDay = String(Math.floor(Math.random() * 28) + 1).padStart(2, '0');
      
      boekingen.push({
        id: `boeking-${i}-${j}`,
        datum: `${boekingDay}/${boekingMonth}/${boekingYear}`,
        handeling: handelingen[Math.floor(Math.random() * handelingen.length)],
        gewicht: Math.floor(Math.random() * 500) + 150,
        leeftijd: Math.floor(Math.random() * 60) + 1,
        diercategorie: categorieën[Math.floor(Math.random() * categorieën.length)],
        waarde: Math.floor(Math.random() * 2000) + 300
      });
    }

    dieren.push({
      id: `dier-${i}`,
      sanitelnummer,
      naam: `${naam}${i > namen.length - 1 ? i : ''}`,
      ras,
      geboortedatum,
      huidigeCategorie: categorie,
      moederdier,
      boekingen
    });
  }

  return dieren;
};

export function IndividueelVee({ selectedSanitel }: { selectedSanitel?: string | null }) {
  const [dieren] = useState<Dier[]>(() => generateMockDieren());
  const [zoekfiltersOpen, setZoekfiltersOpen] = useState(true);
  const [expandedDierId, setExpandedDierId] = useState<string | null>(() => {
    // If a sanitel is selected, find and expand that animal
    if (selectedSanitel) {
      const foundDier = generateMockDieren().find(d => d.sanitelnummer === selectedSanitel);
      return foundDier?.id || null;
    }
    return null;
  });
  
  // Filter states
  const [naamFilter, setNaamFilter] = useState('');
  const [sanitelnummerFilter, setSanitelnummerFilter] = useState('');
  const [rasFilter, setRasFilter] = useState('');
  const [geboortedatumVan, setGeboortedatumVan] = useState('');
  
  // Wizard state
  const [showWizard, setShowWizard] = useState(false);
  const [selectedDierSanitel, setSelectedDierSanitel] = useState<string>('');

  const filteredDieren = dieren.filter((dier) => {
    if (naamFilter && !dier.naam.toLowerCase().includes(naamFilter.toLowerCase())) {
      return false;
    }
    if (sanitelnummerFilter && !dier.sanitelnummer.includes(sanitelnummerFilter)) {
      return false;
    }
    if (rasFilter && !dier.ras.toLowerCase().includes(rasFilter.toLowerCase())) {
      return false;
    }
    return true;
  });

  const handleToggleExpand = (dierId: string) => {
    setExpandedDierId(expandedDierId === dierId ? null : dierId);
  };

  const handleZoekenReset = () => {
    setNaamFilter('');
    setSanitelnummerFilter('');
    setRasFilter('');
    setGeboortedatumVan('');
  };

  return (
    <div className="h-full flex flex-col bg-white overflow-hidden">
      {/* Main content */}
      <div className="flex-1 overflow-auto">
        {/* Title section */}
        <div className="border-b border-gray-200 px-6 pt-4 pb-2">
          <h2 className="text-[20px] leading-[30px] text-[#101828] mb-1">Dierregistratie — Overzicht</h2>
          <p className="text-[16px] leading-6 text-[#4a5565]">
            Gebruik de zoekfilters om specifieke dieren te vinden. Klik op een dier om de boekinghistoriek te bekijken.
          </p>
        </div>

        {/* Zoekfilters collapsible */}
        <div>
          <button
            onClick={() => setZoekfiltersOpen(!zoekfiltersOpen)}
            className="w-full h-14 flex items-center justify-between px-6 hover:bg-gray-50"
          >
            <h3 className="text-[16px] leading-6 text-[#101828]">Zoekfilters</h3>
            {zoekfiltersOpen ? (
              <ChevronDown className="w-5 h-5 text-[#4A5565]" />
            ) : (
              <ChevronUp className="w-5 h-5 text-[#4A5565]" />
            )}
          </button>

          {zoekfiltersOpen && (
            <div className="px-6 pb-6">
              <div className="grid grid-cols-4 gap-4 mb-4">
                {/* Dier naam */}
                <div>
                  <label className="block text-[16px] leading-6 text-[#364153] mb-1">
                    Dier naam
                  </label>
                  <input
                    type="text"
                    value={naamFilter}
                    onChange={(e) => setNaamFilter(e.target.value)}
                    placeholder="Bijv. BRUNO"
                    className="w-full h-[42px] px-3 border border-[#d1d5dc] rounded-lg text-[16px]"
                  />
                </div>

                {/* Sanitelnummer */}
                <div>
                  <label className="block text-[16px] leading-6 text-[#364153] mb-1">
                    Sanitelnummer
                  </label>
                  <input
                    type="text"
                    value={sanitelnummerFilter}
                    onChange={(e) => setSanitelnummerFilter(e.target.value)}
                    placeholder="Bijv. BE123456789"
                    className="w-full h-[42px] px-3 border border-[#d1d5dc] rounded-lg text-[16px]"
                  />
                </div>

                {/* Ras */}
                <div>
                  <label className="block text-[16px] leading-6 text-[#364153] mb-1">
                    Ras
                  </label>
                  <input
                    type="text"
                    value={rasFilter}
                    onChange={(e) => setRasFilter(e.target.value)}
                    placeholder="Bijv. Holstein"
                    className="w-full h-[42px] px-3 border border-[#d1d5dc] rounded-lg text-[16px]"
                  />
                </div>

                {/* Geboortedatum van */}
                <div>
                  <label className="block text-[16px] leading-6 text-[#364153] mb-1">
                    Geboortedatum van
                  </label>
                  <input
                    type="date"
                    value={geboortedatumVan}
                    onChange={(e) => setGeboortedatumVan(e.target.value)}
                    className="w-full h-[42px] px-3 border border-[#d1d5dc] rounded-lg text-[16px]"
                  />
                </div>
              </div>

              <div className="flex items-center gap-4">
                <button className="h-[42px] px-4 bg-[#155dfc] text-white rounded text-[16px] flex items-center gap-2 hover:bg-[#1348d6]">
                  <Search className="w-4 h-4" />
                  Zoeken
                </button>
                <button 
                  onClick={handleZoekenReset}
                  className="bg-[#277fa4] text-white px-[12px] py-[6px] rounded-[8px] flex gap-[6px] items-center text-[20px] hover:bg-[#1f6380]"
                >
                  🔄 Zoekvelden initialiseren
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Results count */}
        <div className="px-6 py-2 text-[14px] text-[#4a5565]">
          {filteredDieren.length} dieren gevonden
        </div>

        {/* Dieren lijst (Master) */}
        <div className="px-6 pb-6">
          <div className="border border-gray-200 rounded overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-3 py-2 w-[44px]"></th>
                  <th className="px-3 py-2 text-left text-[14px] leading-5 text-[#4a5565]">Sanitelnummer</th>
                  <th className="px-3 py-2 text-left text-[14px] leading-5 text-[#4a5565]">Naam</th>
                  <th className="px-3 py-2 text-left text-[14px] leading-5 text-[#4a5565]">Ras</th>
                  <th className="px-3 py-2 text-left text-[14px] leading-5 text-[#4a5565]">Geboortedatum</th>
                  <th className="px-3 py-2 text-left text-[14px] leading-5 text-[#4a5565]">Huidige diercategorie</th>
                  <th className="px-3 py-2 text-left text-[14px] leading-5 text-[#4a5565]">Moederdier</th>
                  <th className="px-3 py-2 text-left text-[14px] leading-5 text-[#4a5565]">Acties</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {filteredDieren.map((dier, index) => (
                  <React.Fragment key={dier.id}>
                    {/* Master row */}
                    <tr className="border-b border-gray-100 hover:bg-gray-50 group">
                      <td className="px-3 py-2">
                        <button
                          onClick={() => handleToggleExpand(dier.id)}
                          className="text-[#4A5565] hover:text-[#101828] transition-transform"
                          style={{
                            transform: expandedDierId === dier.id ? 'rotate(90deg)' : 'rotate(0deg)'
                          }}
                        >
                          <ChevronRight className="w-5 h-5" />
                        </button>
                      </td>
                      <td className="px-3 py-2 text-[14px] leading-5 text-[#4a5565] font-mono">
                        {dier.sanitelnummer}
                      </td>
                      <td className="px-3 py-2 text-[14px] leading-5 text-[#101828]">
                        {dier.naam}
                      </td>
                      <td className="px-3 py-2 text-[14px] leading-5 text-[#4a5565]">
                        {dier.ras}
                      </td>
                      <td className="px-3 py-2 text-[14px] leading-5 text-[#101828]">
                        {dier.geboortedatum}
                      </td>
                      <td className="px-3 py-2 text-[14px] leading-5 text-[#4a5565]">
                        {dier.huidigeCategorie}
                      </td>
                      <td className="px-3 py-2 text-[14px] leading-5 text-[#4a5565]">
                        {dier.moederdier}
                      </td>
                      <td className="px-3 py-2">
                        <button 
                          onClick={() => {
                            setSelectedDierSanitel(dier.sanitelnummer);
                            setShowWizard(true);
                          }}
                          className="h-[34px] px-4 bg-[#155dfc] text-white rounded text-[14px] hover:bg-[#1348d6]"
                        >
                          Nieuwe boeking
                        </button>
                      </td>
                    </tr>

                    {/* Detail row (Boekinghistoriek) */}
                    {expandedDierId === dier.id && (
                      <tr>
                        <td colSpan={8} className="bg-gray-50 px-6 py-4">
                          <div className="mb-3">
                            <h4 className="text-[16px] text-[#101828] mb-2">
                              Boekinghistoriek
                            </h4>
                            <p className="text-[14px] text-[#4a5565]">
                              Historiek van alle boekingen voor {dier.naam}
                            </p>
                          </div>
                          
                          <div className="bg-white border border-gray-200 rounded overflow-hidden">
                            <table className="w-full">
                              <thead className="bg-gray-100 border-b border-gray-200">
                                <tr>
                                  <th className="px-3 py-2 text-left text-[13px] leading-5 text-[#4a5565]">Datum</th>
                                  <th className="px-3 py-2 text-left text-[13px] leading-5 text-[#4a5565]">Handeling</th>
                                  <th className="px-3 py-2 text-left text-[13px] leading-5 text-[#4a5565]">Gewicht (kg)</th>
                                  <th className="px-3 py-2 text-left text-[13px] leading-5 text-[#4a5565]">Leeftijd (maanden)</th>
                                  <th className="px-3 py-2 text-left text-[13px] leading-5 text-[#4a5565]">Diercategorie</th>
                                  <th className="px-3 py-2 text-left text-[13px] leading-5 text-[#4a5565]">Waarde</th>
                                  <th className="px-3 py-2 text-left text-[13px] leading-5 text-[#4a5565]">Acties</th>
                                </tr>
                              </thead>
                              <tbody className="bg-white divide-y divide-gray-100">
                                {dier.boekingen.map((boeking) => (
                                  <tr key={boeking.id} className="hover:bg-gray-50">
                                    <td className="px-3 py-2 text-[13px] leading-5 text-[#101828]">
                                      {boeking.datum}
                                    </td>
                                    <td className="px-3 py-2 text-[13px] leading-5 text-[#4a5565]">
                                      {boeking.handeling}
                                    </td>
                                    <td className="px-3 py-2 text-[13px] leading-5 text-[#101828]">
                                      {boeking.gewicht}
                                    </td>
                                    <td className="px-3 py-2 text-[13px] leading-5 text-[#101828]">
                                      {boeking.leeftijd.toFixed(2)}
                                    </td>
                                    <td className="px-3 py-2 text-[13px] leading-5 text-[#4a5565]">
                                      {boeking.diercategorie}
                                    </td>
                                    <td className="px-3 py-2 text-[13px] leading-5 text-[#101828]">
                                      €{boeking.waarde}
                                    </td>
                                    <td className="px-3 py-2">
                                      {/* Bewerk knop verwijderd zoals gevraagd */}
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between mt-4 text-[14px] text-[#4a5565]">
            <div>
              Pagina 1 van 6
            </div>
            <div className="flex gap-2">
              <button key="prev" className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50">
                Vorige
              </button>
              <button key="1" className="px-3 py-1 border rounded bg-[#155dfc] text-white border-[#155dfc]">
                1
              </button>
              <button key="2" className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50">
                2
              </button>
              <button key="3" className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50">
                3
              </button>
              <button key="4" className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50">
                4
              </button>
              <button key="5" className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50">
                5
              </button>
              <button key="6" className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50">
                6
              </button>
              <button key="next" className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50">
                Volgende
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Wizard Modal */}
      {showWizard && (
        <NieuweBoekingWizard
          allBookingen={[]}
          initialSanitel={selectedDierSanitel}
          onComplete={(newBoeking) => {
            console.log('Nieuwe boeking toegevoegd:', newBoeking);
            setShowWizard(false);
          }}
          onCancel={() => setShowWizard(false)}
          onClose={() => setShowWizard(false)}
        />
      )}
    </div>
  );
}