import { useState, useMemo } from 'react';
import { Search, ChevronDown, ChevronUp, Download, Upload, Plus } from 'lucide-react';
import { Boeking, HandelingType, StatusType } from '../types/booking';
import { generateMockBookingen } from '../utils/mockData';
import { analyzeImpact, validateField } from '../utils/impactAnalyse';
import { BookingenTable } from './BookingenTable';
import { ImpactWizard } from './ImpactWizard';

interface BookingenOverzichtProps {
  onNavigateToAnimal: (sanitel: string) => void;
  onNavigateToFacturenIndVee?: (handeling: string, datum: string) => void;
}

export function BookingenOverzicht({ onNavigateToAnimal, onNavigateToFacturenIndVee }: BookingenOverzichtProps) {
  const [bookingen, setBookingen] = useState<Boeking[]>(() => generateMockBookingen(100));
  const [zoekfiltersOpen, setZoekfiltersOpen] = useState(true);
  const [handlingFilter, setHandlingFilter] = useState<string>('Alle');
  const [datumVan, setDatumVan] = useState('');
  const [datumTot, setDatumTot] = useState('');
  const [sanitelFilter, setSanitelFilter] = useState('');
  const [diercategorieFilter, setDiercategorieFilter] = useState('');
  const [wizardOpen, setWizardOpen] = useState(false);
  const [selectedBoeking, setSelectedBoeking] = useState<Boeking | null>(null);
  const [pendingUpdate, setPendingUpdate] = useState<Partial<Boeking> | null>(null);
  const [affectedBookingIds, setAffectedBookingIds] = useState<string[]>([]);
  const [impactReason, setImpactReason] = useState<string>('');
  const [changedField, setChangedField] = useState<keyof Boeking | undefined>();
  const [isNewBooking, setIsNewBooking] = useState(false);
  const [showDierModal, setShowDierModal] = useState(false);
  const [selectedDierInfo, setSelectedDierInfo] = useState<any>(null);

  const parseDatum = (datum: string): Date => {
    const [day, month, year] = datum.split('/');
    return new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
  };

  const filteredBookingen = useMemo(() => {
    let filtered = bookingen.filter((boeking) => {
      // Handling filter
      if (handlingFilter !== 'Alle' && boeking.handeling !== handlingFilter) {
        return false;
      }

      // Datum van filter
      if (datumVan) {
        const boekingDate = parseDatum(boeking.datum);
        const vanDate = new Date(datumVan);
        if (boekingDate < vanDate) return false;
      }

      // Datum tot filter
      if (datumTot) {
        const boekingDate = parseDatum(boeking.datum);
        const totDate = new Date(datumTot);
        if (boekingDate > totDate) return false;
      }

      // Sanitel filter
      if (sanitelFilter) {
        if (!boeking.sanitel.toLowerCase().includes(sanitelFilter.toLowerCase())) {
          return false;
        }
      }

      // Diercategorie filter
      if (diercategorieFilter) {
        if (!boeking.categorie.toLowerCase().includes(diercategorieFilter.toLowerCase())) {
          return false;
        }
      }

      return true;
    });

    // Sortering: eerst op SANITEL (alfabetisch), dan op datum (descending)
    filtered.sort((a, b) => {
      const sanitelCompare = a.sanitel.localeCompare(b.sanitel);
      if (sanitelCompare !== 0) return sanitelCompare;
      
      const dateA = parseDatum(a.datum);
      const dateB = parseDatum(b.datum);
      return dateB.getTime() - dateA.getTime();
    });

    return filtered;
  }, [bookingen, handlingFilter, datumVan, datumTot, sanitelFilter, diercategorieFilter]);

  const handleBoekingUpdate = (id: string, updates: Partial<Boeking>) => {
    const original = bookingen.find(b => b.id === id);
    if (!original) return;

    // Valideer eerst de velden
    for (const [field, value] of Object.entries(updates)) {
      const validation = validateField(field as keyof Boeking, value);
      if (!validation.valid) {
        alert(validation.error);
        return;
      }
    }

    // Voer impactanalyse uit
    const impactResult = analyzeImpact(original, updates, bookingen);

    if (impactResult.hasHighImpact) {
      setSelectedBoeking(original);
      setPendingUpdate(updates);
      setAffectedBookingIds(impactResult.affectedBookings);
      setImpactReason(impactResult.reason || '');
      setChangedField(impactResult.changedField);
      setIsNewBooking(false);
      setWizardOpen(true);
    } else {
      // Lage impact - direct opslaan
      setBookingen(prev =>
        prev.map(b => (b.id === id ? { ...b, ...updates } : b))
      );
    }
  };

  const handleOpenWizard = (boeking: Boeking, updates: Partial<Boeking>) => {
    setSelectedBoeking(boeking);
    setPendingUpdate(updates);
    setWizardOpen(true);
  };

  const handleOpenNewBooking = () => {
    // Create a new empty booking
    const newBoeking: Boeking = {
      id: `new-${Date.now()}`,
      datum: new Date().toLocaleDateString('nl-NL'),
      sanitel: '',
      naam: '',
      handeling: 'Aankoop',
      gewicht: 0,
      categorie: 'Melkkoe',
      waarde: 0,
      status: 'Niet afgewerkt'
    };
    setSelectedBoeking(newBoeking);
    setPendingUpdate({});
    setAffectedBookingIds([]);
    setImpactReason('');
    setChangedField(undefined);
    setIsNewBooking(true);
    setWizardOpen(true);
  };

  const handleWizardComplete = (updatedBookings: Boeking[]) => {
    if (isNewBooking) {
      // Add new booking to the list
      setBookingen(prev => [...prev, ...updatedBookings]);
    } else {
      // Update existing bookings
      setBookingen(prev => {
        const newBookingen = [...prev];
        updatedBookings.forEach(updated => {
          const index = newBookingen.findIndex(b => b.id === updated.id);
          if (index !== -1) {
            newBookingen[index] = updated;
          }
        });
        return newBookingen;
      });
    }
    setWizardOpen(false);
    setSelectedBoeking(null);
    setPendingUpdate(null);
    setAffectedBookingIds([]);
    setChangedField(undefined);
    setIsNewBooking(false);
  };

  const handleWizardCancel = () => {
    setWizardOpen(false);
    setSelectedBoeking(null);
    setPendingUpdate(null);
    setAffectedBookingIds([]);
    setChangedField(undefined);
    setIsNewBooking(false);
  };

  return (
    <div className="h-full flex flex-col bg-white overflow-hidden">
      {/* Main content */}
      <div className="flex-1 overflow-auto">
        {/* Title section */}
        <div className="border-b border-gray-200 px-6 pt-4 pb-2">
          <h2 className="text-[20px] leading-[30px] text-[#101828] mb-1">Overzicht boekingen</h2>
          <p className="text-[16px] leading-6 text-[#4a5565]">
            Alle boekingen in chronologische volgorde. Dubbelklik op een rij of klik op het chevron icoon om naar het bijhorende dier te navigeren.
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
              <div className="flex gap-4 mb-4">
                {/* Handeling dropdown */}
                <div className="flex-1">
                  <label className="block text-[16px] leading-6 text-[#364153] mb-1">
                    Handeling
                  </label>
                  <select
                    value={handlingFilter}
                    onChange={(e) => setHandlingFilter(e.target.value)}
                    className="w-full h-[42px] px-3 border border-[#d1d5dc] rounded-lg text-[16px] bg-white"
                  >
                    <option>Alle</option>
                    <option>Aankoop</option>
                    <option>Sterfte</option>
                    <option>Geboorte</option>
                    <option>Verkoop</option>
                    <option>Interne Beweging</option>
                    <option>Overgang</option>
                  </select>
                </div>

                {/* Datum van */}
                <div className="flex-1">
                  <label className="block text-[16px] leading-6 text-[#364153] mb-1">
                    Datum van
                  </label>
                  <input
                    type="date"
                    value={datumVan}
                    onChange={(e) => setDatumVan(e.target.value)}
                    className="w-full h-[42px] px-3 border border-[#d1d5dc] rounded-lg text-[16px]"
                  />
                </div>

                {/* Datum tot */}
                <div className="flex-1">
                  <label className="block text-[16px] leading-6 text-[#364153] mb-1">
                    Datum tot
                  </label>
                  <input
                    type="date"
                    value={datumTot}
                    onChange={(e) => setDatumTot(e.target.value)}
                    className="w-full h-[42px] px-3 border border-[#d1d5dc] rounded-lg text-[16px]"
                  />
                </div>
              </div>

              <div className="flex gap-4 mb-4">
                {/* Sanitel filter */}
                <div className="flex-1">
                  <label className="block text-[16px] leading-6 text-[#364153] mb-1">
                    Sanitel
                  </label>
                  <input
                    type="text"
                    value={sanitelFilter}
                    onChange={(e) => setSanitelFilter(e.target.value)}
                    className="w-full h-[42px] px-3 border border-[#d1d5dc] rounded-lg text-[16px]"
                  />
                </div>

                {/* Diercategorie filter */}
                <div className="flex-1">
                  <label className="block text-[16px] leading-6 text-[#364153] mb-1">
                    Diercategorie
                  </label>
                  <input
                    type="text"
                    value={diercategorieFilter}
                    onChange={(e) => setDiercategorieFilter(e.target.value)}
                    className="w-full h-[42px] px-3 border border-[#d1d5dc] rounded-lg text-[16px]"
                  />
                </div>
              </div>

              <div className="flex items-center gap-4">
                <button className="h-[42px] px-4 bg-[#155dfc] text-white rounded text-[16px] flex items-center gap-2 hover:bg-[#1348d6]">
                  <Search className="w-4 h-4" />
                  Zoeken
                </button>
                <button className="h-[42px] px-4 bg-[#155dfc] text-white rounded text-[16px] flex items-center gap-2 hover:bg-[#1348d6]">
                  🔄 Zoekopdracht initialiseren
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Results count */}
        <div className="px-6 py-2 text-[14px] text-[#4a5565]">
          {filteredBookingen.length} boekingen gevonden
        </div>

        {/* Table */}
        <div className="px-6 pb-6">
          <BookingenTable
            bookingen={filteredBookingen}
            onNavigateToAnimal={onNavigateToAnimal}
            onNavigateToFacturenIndVee={(boeking) => {
              if (onNavigateToFacturenIndVee) {
                // Navigate to the correct maand wizard based on handeling and datum
                onNavigateToFacturenIndVee(boeking.handeling, boeking.datum);
              }
            }}
          />
        </div>
      </div>

      {/* Impact Wizard */}
      {wizardOpen && selectedBoeking && (
        <ImpactWizard
          originalBoeking={selectedBoeking}
          pendingUpdate={pendingUpdate || {}}
          affectedBookingIds={affectedBookingIds}
          allBookingen={bookingen}
          impactReason={impactReason}
          changedField={changedField}
          isNewBooking={isNewBooking}
          onComplete={handleWizardComplete}
          onCancel={handleWizardCancel}
        />
      )}
    </div>
  );
}