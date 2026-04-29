import { useState } from 'react';
import { X, Plus } from 'lucide-react';
import { Boeking, StatusType, HandelingType } from '../types/booking';
import { toast } from 'sonner@2.0.3';
import calculatorIcon from 'figma:asset/3264406a1015d1ce0fc45be44eb4da5a0867fd47.png';
import cowIcon from 'figma:asset/a66fdb0db9cbb3734b5cde6aa0a4baea6ced4f3e.png';

interface NieuweBoekingWizardProps {
  allBookingen?: Boeking[];
  initialSanitel?: string;
  onComplete?: (newBoeking: Boeking) => void;
  onBookingCreated?: (newBoeking: Boeking) => void;
  onCancel: () => void;
  onClose: () => void;
}

// Mock dieren database voor naam dropdown (overgang)
interface Dier {
  sanitelnummer: string;
  naam: string;
  categorie: string;
  geboortedatum: string;
}

const diercategorieën = ['Melkkoe', 'Zoogkoe', 'Jongvee', 'Dekstier', 'Mannelijk Jongvee Melk', 'Vrouwelijk Jongvee Vlees'];
const rasTypes = ['Vlees', 'Melk', 'Dubbel doel'];
const afnemers = ['Slachterij A', 'Slachterij B', 'Particulier', 'Veemarkt'];
const bedrijfstakken = ['Dekstier', 'Melkkoe', 'Vaars', 'Andere'];
const verkoopswijzen = ['Op voet (geraamd verkoop gewicht)', 'NUKA'];

// Generate mock dieren database
const generateMockDieren = (): Dier[] => {
  const result: Dier[] = [];
  
  for (let i = 0; i < 20; i++) {
    const sanitel = `BE${Math.floor(Math.random() * 900000000) + 100000000}`;
    const laatste4 = sanitel.slice(-4);
    const jaar = '2022';
    result.push({
      sanitelnummer: sanitel,
      naam: `${laatste4}-${jaar}`,
      categorie: diercategorieën[Math.floor(Math.random() * diercategorieën.length)],
      geboortedatum: `${String(Math.floor(Math.random() * 28) + 1).padStart(2, '0')}/03/2022`
    });
  }
  return result;
};

// Calculate age in months from birthdate (DD/MM/YYYY)
const calculateAgeInMonths = (geboortedatum: string): string => {
  if (!geboortedatum) return '';
  const [day, month, year] = geboortedatum.split('/').map(Number);
  const birthDate = new Date(year, month - 1, day);
  const now = new Date();
  const months = (now.getFullYear() - birthDate.getFullYear()) * 12 + (now.getMonth() - birthDate.getMonth());
  return months.toFixed(2);
};

export function NieuweBoekingWizard({
  allBookingen = [],
  initialSanitel = '',
  onComplete,
  onBookingCreated,
  onCancel,
  onClose
}: NieuweBoekingWizardProps) {
  const [beschikbareDieren] = useState<Dier[]>(() => generateMockDieren());
  
  // Form fields
  const [handeling, setHandeling] = useState<HandelingType | ''>('');
  const [datum, setDatum] = useState('');
  const [sanitel, setSanitel] = useState(initialSanitel);
  const [naam, setNaam] = useState('');
  const [geboortedatum, setGeboortedatum] = useState('');
  const [gewicht, setGewicht] = useState('');
  const [waarde, setWaarde] = useState('');
  const [btwPercentage, setBtwPercentage] = useState('21');
  const [categorie, setCategorie] = useState('');
  const [status] = useState<StatusType>('Niet afgewerkt');
  
  // Aankoop specific
  const [rasType, setRasType] = useState('');
  const [nota, setNota] = useState('');
  
  // Geboorte specific fields
  const [sanitelMoeder, setSanitelMoeder] = useState('');
  const [naamMoeder, setNaamMoeder] = useState('');
  const [categorieMoeder, setCategorieMoeder] = useState('');
  const [doodgeboren, setDoodgeboren] = useState(false);
  const [meerling, setMeerling] = useState(false);
  const [naamKalf, setNaamKalf] = useState('');
  const [sanitelKalf, setSanitelKalf] = useState('');
  const [categorieKalf, setCategorieKalf] = useState('');
  const [rasKalfType, setRasKalfType] = useState('');
  
  // Verkoop specific fields
  const [afnemer, setAfnemer] = useState('');
  const [levendGewicht, setLevendGewicht] = useState('');
  const [geslachtGewicht, setGeslachtGewicht] = useState('');
  const [slachtPercentage, setSlachtPercentage] = useState('');
  const [leeftijd, setLeeftijd] = useState('');
  const [noodslacht, setNoodslacht] = useState(false);
  const [afgekeurd, setAfgekeurd] = useState(false);
  const [verkoopswijze, setVerkoopswijze] = useState('');
  
  // Interne beweging/verkoop specific fields
  const [categorieVan, setCategorieVan] = useState('');
  const [categorieNaar, setCategorieNaar] = useState('');
  const [bedrijfstakNaar, setBedrijfstakNaar] = useState('');
  
  // Overgang specific
  const [huidigeCategorie, setHuidigeCategorie] = useState('');
  const [nieuweCategorie, setNieuweCategorie] = useState('');

  // Sterfte specific
  // Uses basic fields: datum, sanitel, naam, geboortedatum, leeftijd, categorie, nota

  const allSanitelnummers = Array.from(new Set(allBookingen.map(b => b.sanitel)));

  // BTW calculator helper
  const calculateValueExcludingBTW = (valueInclBTW: string, btwPercentage: string): string => {
    const value = parseFloat(valueInclBTW);
    if (isNaN(value) || !btwPercentage) return valueInclBTW;
    
    const btwRate = parseFloat(btwPercentage.replace('%', '')) / 100;
    const valueExclBTW = value / (1 + btwRate);
    return valueExclBTW.toFixed(2);
  };

  const handleBTWCalculator = () => {
    if (!waarde || !btwPercentage) {
      toast.error('Gelieve eerst een waarde en BTW percentage in te geven');
      return;
    }
    
    const newValue = calculateValueExcludingBTW(waarde, btwPercentage);
    setWaarde(newValue);
    toast.success(`BTW afgetrokken: €${newValue}`);
  };

  // Handle naam selection for Overgang
  const handleNaamSelectieOvergang = (selectedNaam: string) => {
    const selectedDier = beschikbareDieren.find(d => d.naam === selectedNaam);
    if (selectedDier) {
      setNaam(selectedNaam);
      setSanitel(selectedDier.sanitelnummer);
      setHuidigeCategorie(selectedDier.categorie);
      setGeboortedatum(selectedDier.geboortedatum);
      setLeeftijd(calculateAgeInMonths(selectedDier.geboortedatum));
    }
  };

  // Handle naam selection for Interne beweging
  const handleNaamSelectieIntern = (selectedNaam: string) => {
    const selectedDier = beschikbareDieren.find(d => d.naam === selectedNaam);
    if (selectedDier) {
      setNaam(selectedNaam);
      setSanitel(selectedDier.sanitelnummer);
      setGeboortedatum(selectedDier.geboortedatum);
      setLeeftijd(calculateAgeInMonths(selectedDier.geboortedatum));
      setCategorie(selectedDier.categorie);
    }
  };

  // Handle moeder selection for Geboorte
  const handleMoederSelectie = (selectedNaam: string) => {
    const selectedDier = beschikbareDieren.find(d => d.naam === selectedNaam);
    if (selectedDier) {
      setNaamMoeder(selectedNaam);
      setSanitelMoeder(selectedDier.sanitelnummer);
      setCategorieMoeder(selectedDier.categorie);
    }
  };

  const canSave = () => {
    if (!handeling) return false;
    
    switch (handeling) {
      case 'Aankoop':
        return !!(datum && sanitel && naam && geboortedatum && gewicht && waarde && btwPercentage && categorie && rasType);
      case 'Geboorte':
        return !!(datum && sanitelKalf && naamKalf && geboortedatum && gewicht && waarde && btwPercentage && naamMoeder && categorieKalf && rasKalfType);
      case 'Verkoop':
        return !!(datum && naam && afnemer && levendGewicht && waarde && btwPercentage && categorie && verkoopswijze);
      case 'Interne beweging':
        return !!(datum && naam && gewicht && waarde && bedrijfstakNaar);
      case 'Overgang':
        return !!(datum && naam && nieuweCategorie);
      case 'Sterfte':
        return !!(datum && naam && geboortedatum && leeftijd && categorie);
      default:
        return false;
    }
  };

  const createBoeking = (): Boeking => {
    // Use the appropriate sanitel based on handeling type
    const finalSanitel = handeling === 'Geboorte' ? sanitelKalf : sanitel;
    const finalNaam = handeling === 'Geboorte' ? naamKalf : naam;
    const finalCategorie = handeling === 'Geboorte' ? categorieKalf : 
                          handeling === 'Overgang' ? nieuweCategorie :
                          handeling === 'Interne beweging' ? categorieNaar :
                          categorie;
    const finalGewicht = handeling === 'Verkoop' ? parseFloat(levendGewicht) || 0 : parseFloat(gewicht) || 0;
    
    return {
      id: `new-${Date.now()}`,
      datum,
      sanitel: finalSanitel,
      naam: finalNaam,
      handeling: handeling as HandelingType,
      gewicht: finalGewicht,
      categorie: finalCategorie,
      waarde: parseFloat(waarde) || 0,
      status: status
    };
  };

  const handleSave = () => {
    if (!canSave()) {
      toast.error('Vul alle verplichte velden in voordat u opslaat.');
      return;
    }
    
    const newBoeking = createBoeking();
    if (onComplete) onComplete(newBoeking);
    if (onBookingCreated) onBookingCreated(newBoeking);
    toast.success('Boeking succesvol toegevoegd!');
    onClose();
  };

  return (
    <div className="fixed inset-y-0 right-0 w-[40%] bg-white shadow-2xl flex flex-col z-50 border-l border-gray-300 animate-in slide-in-from-right duration-300">
      {/* Header */}
      <div className="bg-blue-600 px-6 py-4 flex items-center justify-between border-b">
        <div className="flex items-center gap-3">
          <Plus className="w-5 h-5 text-white" />
          <div>
            <h2 className="text-white">123456 &gt; 2026 &gt; Nieuwe boeking toevoegen</h2>
            <p className="text-sm text-blue-100">
              Voeg een nieuwe dierregistratie toe aan het systeem
            </p>
          </div>
        </div>
        <button onClick={onCancel} className="hover:bg-blue-700 p-1 rounded text-white">
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-6">
        <div>
          <h3 className="text-lg mb-4">Boekingsgegevens</h3>
          
          {/* Type Handeling */}
          <div className="mb-4">
            <label className="block text-sm mb-2 text-gray-700">
              Type handeling <span className="text-red-600">*</span>
            </label>
            <select
              value={handeling}
              onChange={(e) => setHandeling(e.target.value as HandelingType)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm outline-none focus:border-blue-500"
            >
              <option value="">Selecteer een handeling...</option>
              <option value="Aankoop">Aankoop</option>
              <option value="Geboorte">Geboorte</option>
              <option value="Verkoop">Verkoop</option>
              <option value="Interne beweging">Interne beweging</option>
              <option value="Overgang">Overgang</option>
              <option value="Sterfte">Sterfte</option>
            </select>
          </div>

          {/* Status field - always visible when handeling is selected */}
          {handeling && (
            <div className="mb-4">
              <label className="block text-sm mb-2 text-gray-700">
                Status
              </label>
              <input
                type="text"
                value={status}
                disabled
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm outline-none bg-gray-100 cursor-not-allowed"
              />
            </div>
          )}

          {/* Dynamic fields based on handeling */}
          {handeling && (
            <div className="space-y-4">
              {/* Common field: Datum */}
              <div>
                <label className="block text-sm mb-2 text-gray-700">
                  Datum <span className="text-red-600">*</span>
                </label>
                <input
                  type="date"
                  value={datum}
                  onChange={(e) => setDatum(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm outline-none focus:border-blue-500"
                  disabled={handeling === 'Geboorte'}
                />
              </div>

              {/* AANKOOP fields */}
              {handeling === 'Aankoop' && (
                <>
                  <div>
                    <label className="block text-sm mb-2 text-gray-700">
                      Sanitelnummer <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      value={sanitel}
                      onChange={(e) => setSanitel(e.target.value)}
                      placeholder="Bijv. BE123456789"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm font-mono outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2 text-gray-700">
                      Naam dier <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      value={naam}
                      onChange={(e) => setNaam(e.target.value)}
                      placeholder="Naam van het dier"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2 text-gray-700">
                      Geboortedatum <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="date"
                      value={geboortedatum}
                      onChange={(e) => setGeboortedatum(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2 text-gray-700">
                      Gewicht (kg) <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      value={gewicht}
                      onChange={(e) => setGewicht(e.target.value)}
                      placeholder="0.00"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2 text-gray-700">
                      Waarde (€) <span className="text-red-600">*</span>
                    </label>
                    <div className="flex gap-2 items-center">
                      <input
                        type="number"
                        step="0.01"
                        value={waarde}
                        onChange={(e) => setWaarde(e.target.value)}
                        placeholder="0.00"
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm outline-none focus:border-blue-500"
                      />
                      <button
                        onClick={handleBTWCalculator}
                        className="hover:bg-gray-100 rounded p-2"
                        title="BTW aftrekken automatisch, volgens het ingegeven %, van het ingegeven bedrag"
                      >
                        <img src={calculatorIcon} alt="BTW calculator" className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm mb-2 text-gray-700">
                      BTW % <span className="text-red-600">*</span>
                    </label>
                    <select
                      value={btwPercentage}
                      onChange={(e) => setBtwPercentage(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm outline-none focus:border-blue-500"
                    >
                      <option value="0">0%</option>
                      <option value="6">6%</option>
                      <option value="12">12%</option>
                      <option value="21">21%</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm mb-2 text-gray-700">
                      Diercategorie <span className="text-red-600">*</span>
                    </label>
                    <select
                      value={categorie}
                      onChange={(e) => setCategorie(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm outline-none focus:border-blue-500"
                    >
                      <option value="">Selecteer een categorie...</option>
                      {diercategorieën.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm mb-2 text-gray-700">
                      Ras type <span className="text-red-600">*</span>
                    </label>
                    <select
                      value={rasType}
                      onChange={(e) => setRasType(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm outline-none focus:border-blue-500"
                    >
                      <option value="">Selecteer ras type...</option>
                      {rasTypes.map(ras => (
                        <option key={ras} value={ras}>{ras}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm mb-2 text-gray-700">
                      Nota (optioneel)
                    </label>
                    <textarea
                      value={nota}
                      onChange={(e) => setNota(e.target.value)}
                      placeholder="Notities..."
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm outline-none focus:border-blue-500"
                    />
                  </div>
                </>
              )}

              {/* GEBOORTE fields */}
              {handeling === 'Geboorte' && (
                <>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-2">
                    <p className="text-sm font-medium text-blue-900">Kalf gegevens</p>
                  </div>
                  <div>
                    <label className="block text-sm mb-2 text-gray-700">
                      Sanitelnummer kalf <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      value={sanitelKalf}
                      disabled
                      placeholder="Bijv. BE123456789"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm font-mono outline-none bg-gray-100 cursor-not-allowed"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2 text-gray-700">
                      Naam kalf <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      value={naamKalf}
                      onChange={(e) => setNaamKalf(e.target.value)}
                      placeholder="Naam van het kalf"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2 text-gray-700">
                      Diercategorie kalf <span className="text-red-600">*</span>
                    </label>
                    <select
                      value={categorieKalf}
                      onChange={(e) => setCategorieKalf(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm outline-none focus:border-blue-500"
                    >
                      <option value="">Selecteer een categorie...</option>
                      {diercategorieën.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm mb-2 text-gray-700">
                      Ras kalf type <span className="text-red-600">*</span>
                    </label>
                    <select
                      value={rasKalfType}
                      onChange={(e) => setRasKalfType(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm outline-none focus:border-blue-500"
                    >
                      <option value="">Selecteer ras type...</option>
                      {rasTypes.map(ras => (
                        <option key={ras} value={ras}>{ras}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm mb-2 text-gray-700">
                      Gewicht (kg) <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      value={gewicht}
                      onChange={(e) => setGewicht(e.target.value)}
                      placeholder="0.00"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2 text-gray-700">
                      Waarde (€) <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      value={waarde}
                      onChange={(e) => setWaarde(e.target.value)}
                      placeholder="0.00"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2 text-gray-700">
                      BTW % <span className="text-red-600">*</span>
                    </label>
                    <select
                      value={btwPercentage}
                      onChange={(e) => setBtwPercentage(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm outline-none focus:border-blue-500"
                    >
                      <option value="0">0%</option>
                      <option value="6">6%</option>
                      <option value="12">12%</option>
                      <option value="21">21%</option>
                    </select>
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-2 mt-4">
                    <p className="text-sm font-medium text-green-900">Moederdier gegevens</p>
                  </div>
                  <div>
                    <label className="block text-sm mb-2 text-gray-700">
                      Moeder <span className="text-red-600">*</span>
                    </label>
                    <select
                      value={naamMoeder}
                      onChange={(e) => handleMoederSelectie(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm outline-none focus:border-blue-500"
                    >
                      <option value="">-- Selecteer moederdier --</option>
                      {beschikbareDieren.map(dier => (
                        <option key={dier.sanitelnummer} value={dier.naam}>
                          🐄 {dier.naam} ({dier.categorie})
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex gap-6">
                    <label className="flex items-center gap-2 text-sm text-gray-700">
                      <input
                        type="checkbox"
                        checked={doodgeboren}
                        onChange={(e) => setDoodgeboren(e.target.checked)}
                        className="w-4 h-4"
                      />
                      Doodgeboren
                    </label>
                    <label className="flex items-center gap-2 text-sm text-gray-700">
                      <input
                        type="checkbox"
                        checked={meerling}
                        onChange={(e) => setMeerling(e.target.checked)}
                        className="w-4 h-4"
                      />
                      Meerling
                    </label>
                  </div>
                  <div>
                    <label className="block text-sm mb-2 text-gray-700">
                      Nota (optioneel)
                    </label>
                    <textarea
                      value={nota}
                      onChange={(e) => setNota(e.target.value)}
                      placeholder="Notities..."
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm outline-none focus:border-blue-500"
                    />
                  </div>
                </>
              )}

              {/* VERKOOP fields */}
              {handeling === 'Verkoop' && (
                <>
                  <div>
                    <label className="block text-sm mb-2 text-gray-700">
                      Naam dier <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      value={naam}
                      disabled
                      placeholder="Naam van het dier"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm outline-none bg-gray-100 cursor-not-allowed"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2 text-gray-700">
                      Geboortedatum <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="date"
                      value={geboortedatum}
                      disabled
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm outline-none bg-gray-100 cursor-not-allowed"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2 text-gray-700">
                      Afnemer <span className="text-red-600">*</span>
                    </label>
                    <select
                      value={afnemer}
                      onChange={(e) => setAfnemer(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm outline-none focus:border-blue-500"
                    >
                      <option value="">Selecteer afnemer...</option>
                      {afnemers.map(afn => (
                        <option key={afn} value={afn}>{afn}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm mb-2 text-gray-700">
                      Levend gewicht (kg) <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      value={levendGewicht}
                      onChange={(e) => {
                        setLevendGewicht(e.target.value);
                        // Auto-calculate slacht percentage if geslacht gewicht exists
                        if (geslachtGewicht && e.target.value) {
                          const percentage = (parseFloat(geslachtGewicht) / parseFloat(e.target.value)) * 100;
                          setSlachtPercentage(percentage.toFixed(2));
                        }
                      }}
                      placeholder="0.00"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2 text-gray-700">
                      Geslacht gewicht (kg)
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      value={geslachtGewicht}
                      onChange={(e) => {
                        setGeslachtGewicht(e.target.value);
                        // Auto-calculate slacht percentage if levend gewicht exists
                        if (levendGewicht && e.target.value) {
                          const percentage = (parseFloat(e.target.value) / parseFloat(levendGewicht)) * 100;
                          setSlachtPercentage(percentage.toFixed(2));
                        }
                      }}
                      placeholder="0.00"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2 text-gray-700">
                      Slacht percentage (%)
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      value={slachtPercentage}
                      onChange={(e) => setSlachtPercentage(e.target.value)}
                      placeholder="0.00"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm outline-none focus:border-blue-500 bg-gray-50"
                      readOnly
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2 text-gray-700">
                      Waarde (€) <span className="text-red-600">*</span>
                    </label>
                    <div className="flex gap-2 items-center">
                      <input
                        type="number"
                        step="0.01"
                        value={waarde}
                        onChange={(e) => setWaarde(e.target.value)}
                        placeholder="0.00"
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm outline-none focus:border-blue-500"
                      />
                      <button
                        onClick={handleBTWCalculator}
                        className="hover:bg-gray-100 rounded p-2"
                        title="BTW aftrekken automatisch, volgens het ingegeven %, van het ingegeven bedrag"
                      >
                        <img src={calculatorIcon} alt="BTW calculator" className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm mb-2 text-gray-700">
                      BTW % <span className="text-red-600">*</span>
                    </label>
                    <select
                      value={btwPercentage}
                      onChange={(e) => setBtwPercentage(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm outline-none focus:border-blue-500"
                    >
                      <option value="0">0%</option>
                      <option value="6">6%</option>
                      <option value="12">12%</option>
                      <option value="21">21%</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm mb-2 text-gray-700">
                      Diercategorie <span className="text-red-600">*</span>
                    </label>
                    <select
                      value={categorie}
                      onChange={(e) => setCategorie(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm outline-none focus:border-blue-500"
                    >
                      <option value="">Selecteer een categorie...</option>
                      {diercategorieën.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm mb-2 text-gray-700">
                      Leeftijd (maanden)
                    </label>
                    <input
                      type="text"
                      value={leeftijd}
                      onChange={(e) => setLeeftijd(e.target.value)}
                      placeholder="0.00"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2 text-gray-700">
                      Verkoopswijze <span className="text-red-600">*</span>
                    </label>
                    <select
                      value={verkoopswijze}
                      onChange={(e) => setVerkoopswijze(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm outline-none focus:border-blue-500"
                    >
                      <option value="">Selecteer verkoopswijze...</option>
                      {verkoopswijzen.map(vw => (
                        <option key={vw} value={vw}>{vw}</option>
                      ))}
                    </select>
                  </div>
                  <div className="flex gap-6">
                    <label className="flex items-center gap-2 text-sm text-gray-700">
                      <input
                        type="checkbox"
                        checked={noodslacht}
                        onChange={(e) => setNoodslacht(e.target.checked)}
                        className="w-4 h-4"
                      />
                      Noodslacht
                    </label>
                    <label className="flex items-center gap-2 text-sm text-gray-700">
                      <input
                        type="checkbox"
                        checked={afgekeurd}
                        onChange={(e) => setAfgekeurd(e.target.checked)}
                        className="w-4 h-4"
                      />
                      Afgekeurd
                    </label>
                  </div>
                  <div>
                    <label className="block text-sm mb-2 text-gray-700">
                      Nota (optioneel)
                    </label>
                    <textarea
                      value={nota}
                      onChange={(e) => setNota(e.target.value)}
                      placeholder="Notities..."
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm outline-none focus:border-blue-500"
                    />
                  </div>
                </>
              )}

              {/* INTERNE BEWEGING fields */}
              {handeling === 'Interne beweging' && (
                <>
                  <div>
                    <label className="block text-sm mb-2 text-gray-700">
                      Naam dier <span className="text-red-600">*</span>
                    </label>
                    <select
                      value={naam}
                      onChange={(e) => handleNaamSelectieIntern(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm outline-none focus:border-blue-500"
                    >
                      <option value="">-- Selecteer dier --</option>
                      {beschikbareDieren.map(dier => (
                        <option key={dier.sanitelnummer} value={dier.naam}>
                          🐄 {dier.naam} ({dier.categorie})
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm mb-2 text-gray-700">
                      Geboortedatum
                    </label>
                    <input
                      type="text"
                      value={geboortedatum}
                      disabled
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm outline-none bg-gray-100 cursor-not-allowed"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2 text-gray-700">
                      Gewicht (kg) <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      value={gewicht}
                      onChange={(e) => setGewicht(e.target.value)}
                      placeholder="0.00"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2 text-gray-700">
                      Waarde (€) <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      value={waarde}
                      onChange={(e) => setWaarde(e.target.value)}
                      placeholder="0.00"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2 text-gray-700">
                      Leeftijd (maanden)
                    </label>
                    <input
                      type="text"
                      value={leeftijd}
                      disabled
                      placeholder="0.00"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm outline-none bg-gray-100 cursor-not-allowed"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2 text-gray-700">
                      Diercategorie
                    </label>
                    <input
                      type="text"
                      value={categorie}
                      disabled
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm outline-none bg-gray-100 cursor-not-allowed"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2 text-gray-700">
                      Bedrijfstak naar <span className="text-red-600">*</span>
                    </label>
                    <select
                      value={bedrijfstakNaar}
                      onChange={(e) => setBedrijfstakNaar(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm outline-none focus:border-blue-500"
                    >
                      <option value="">Selecteer bedrijfstak...</option>
                      {bedrijfstakken.map(bt => (
                        <option key={bt} value={bt}>{bt}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm mb-2 text-gray-700">
                      Nota (optioneel)
                    </label>
                    <textarea
                      value={nota}
                      onChange={(e) => setNota(e.target.value)}
                      placeholder="Notities..."
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm outline-none focus:border-blue-500"
                    />
                  </div>
                </>
              )}

              {/* OVERGANG fields */}
              {handeling === 'Overgang' && (
                <>
                  <div>
                    <label className="block text-sm mb-2 text-gray-700">
                      Naam dier <span className="text-red-600">*</span>
                    </label>
                    <select
                      value={naam}
                      onChange={(e) => handleNaamSelectieOvergang(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm outline-none focus:border-blue-500"
                    >
                      <option value="">-- Selecteer dier --</option>
                      {beschikbareDieren.map(dier => (
                        <option key={dier.sanitelnummer} value={dier.naam}>
                          🐄 {dier.naam} ({dier.categorie})
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm mb-2 text-gray-700">
                      Geboortedatum
                    </label>
                    <input
                      type="text"
                      value={geboortedatum}
                      disabled
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm outline-none bg-gray-100 cursor-not-allowed"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2 text-gray-700">
                      Leeftijd (maanden)
                    </label>
                    <input
                      type="text"
                      value={leeftijd}
                      disabled
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm outline-none bg-gray-100 cursor-not-allowed"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2 text-gray-700">
                      Huidige categorie
                    </label>
                    <input
                      type="text"
                      value={huidigeCategorie}
                      disabled
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm outline-none bg-gray-100 cursor-not-allowed"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2 text-gray-700">
                      Nieuwe categorie <span className="text-red-600">*</span>
                    </label>
                    <select
                      value={nieuweCategorie}
                      onChange={(e) => setNieuweCategorie(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm outline-none focus:border-blue-500"
                    >
                      <option value="">Selecteer nieuwe categorie...</option>
                      {diercategorieën.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm mb-2 text-gray-700">
                      Nota (optioneel)
                    </label>
                    <textarea
                      value={nota}
                      onChange={(e) => setNota(e.target.value)}
                      placeholder="Notities..."
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm outline-none focus:border-blue-500"
                    />
                  </div>
                </>
              )}

              {/* STERFTE fields */}
              {handeling === 'Sterfte' && (
                <>
                  <div>
                    <label className="block text-sm mb-2 text-gray-700">
                      Naam dier <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      value={naam}
                      disabled
                      placeholder="Naam van het dier"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm outline-none bg-gray-100 cursor-not-allowed"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2 text-gray-700">
                      Geboortedatum <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="date"
                      value={geboortedatum}
                      disabled
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm outline-none bg-gray-100 cursor-not-allowed"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2 text-gray-700">
                      Leeftijd (maanden) <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      value={leeftijd}
                      onChange={(e) => setLeeftijd(e.target.value)}
                      placeholder="0.00"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2 text-gray-700">
                      Diercategorie <span className="text-red-600">*</span>
                    </label>
                    <select
                      value={categorie}
                      onChange={(e) => setCategorie(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm outline-none focus:border-blue-500"
                    >
                      <option value="">Selecteer een categorie...</option>
                      {diercategorieën.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm mb-2 text-gray-700">
                      Nota (optioneel)
                    </label>
                    <textarea
                      value={nota}
                      onChange={(e) => setNota(e.target.value)}
                      placeholder="Notities..."
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm outline-none focus:border-blue-500"
                    />
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-200 px-6 py-4 bg-gray-50 flex items-center justify-between">
        <button
          onClick={onCancel}
          className="h-[34px] px-4 bg-white border border-gray-300 text-[#364153] rounded text-[14px] hover:bg-gray-50"
        >
          Annuleren
        </button>

        <button
          onClick={handleSave}
          disabled={!canSave()}
          className="h-[34px] px-6 bg-blue-600 text-white rounded text-[14px] hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Bewaren
        </button>
      </div>
    </div>
  );
}
