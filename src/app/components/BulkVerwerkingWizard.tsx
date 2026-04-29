import { useState, useEffect } from 'react';
import { X, ChevronRight } from 'lucide-react';
import { StatusType } from '../types/booking';

interface Aankoop {
  id: string;
  datum: string;
  gewicht: number;
  waarde: string;
  btwPercentage: string;
  diercategorie: string;
  sanitelnummer: string;
  naam: string;
  ras: string;
  status: StatusType;
}

interface Geboorte {
  id: string;
  datum: string;
  naamKalf: string;
  sanitelnummerKalf: string;
  diercategorieKalf: string;
  rasKalf: string;
  gewicht: number;
  waarde: string;
  btwPercentage: string;
  doodgeboren: boolean;
  meerling: boolean;
  diercategorieMoeder: string;
  sanitelnummerMoeder: string;
  naamMoeder: string;
  rasMoeder: string;
  leeftijdMoeder: string;
  status: StatusType;
}

interface Verkoop {
  id: string;
  datum: string;
  levendGewicht: number;
  slachtPercentage: number;
  waarde: string;
  btwPercentage: string;
  afnemer: string;
  leeftijd: string;
  diercategorie: string;
  sanitelnummer: string;
  naam: string;
  ras: string;
  status: StatusType;
}

interface Sterfte {
  id: string;
  datum: string;
  gewicht: number;
  diercategorie: string;
  sanitelnummer: string;
  naam: string;
  ras: string;
  leeftijd: string;
  status: StatusType;
}

interface BulkVerwerkingWizardProps {
  onClose: () => void;
}

const jaren = ['2024', '2025', '2026', '2027', '2028', '2029', '2030'];
const btwOpties = ['0%', '6%', '12%', '21%'];
const diercategorieën = ['Melkkoe', 'Zoogkoe', 'Jongvee', 'Dekstier', 'Mannelijk Jongvee Melk', 'Vrouwelijk Jongvee Vlees'];
const rassen = ['Holstein Friesian', 'Belgian Blue', 'Jersey', 'Charolais', 'Limousin'];
const afnemers = ['Slachterij A', 'Slachterij B', 'Particulier', 'Veemarkt'];

// Mock data generators
const generateAankopen = (): Aankoop[] => {
  return [
    {
      id: 'a1',
      datum: '02/01/2025',
      gewicht: 320,
      waarde: '',
      btwPercentage: '6%',
      diercategorie: '',
      sanitelnummer: 'BE123456789',
      naam: 'Bella',
      ras: 'Holstein Friesian',
      status: 'Niet afgewerkt'
    },
    {
      id: 'a2',
      datum: '05/01/2025',
      gewicht: 410,
      waarde: '',
      btwPercentage: '6%',
      diercategorie: '',
      sanitelnummer: 'BE124567890',
      naam: 'Bruno',
      ras: 'Holstein Friesian',
      status: 'Niet afgewerkt'
    },
    {
      id: 'a3',
      datum: '08/01/2025',
      gewicht: 380,
      waarde: '',
      btwPercentage: '6%',
      diercategorie: '',
      sanitelnummer: 'BE125678901',
      naam: 'Charlie',
      ras: 'Belgian Blue',
      status: 'Niet afgewerkt'
    }
  ];
};

const generateGeboortes = (): Geboorte[] => {
  return [
    {
      id: 'g1',
      datum: '01/02/2025',
      naamKalf: 'Kalf A',
      sanitelnummerKalf: 'BEK123456',
      diercategorieKalf: '',
      rasKalf: '',
      gewicht: 42,
      waarde: '',
      btwPercentage: '6%',
      doodgeboren: false,
      meerling: false,
      diercategorieMoeder: 'Melkkoe',
      sanitelnummerMoeder: 'BE123456789',
      naamMoeder: 'Bella',
      rasMoeder: 'Holstein Friesian',
      leeftijdMoeder: '4j2m',
      status: 'Niet afgewerkt'
    },
    {
      id: 'g2',
      datum: '03/02/2025',
      naamKalf: 'Kalf B',
      sanitelnummerKalf: 'BEK234567',
      diercategorieKalf: '',
      rasKalf: '',
      gewicht: 38,
      waarde: '',
      btwPercentage: '6%',
      doodgeboren: false,
      meerling: false,
      diercategorieMoeder: 'Zoogkoe',
      sanitelnummerMoeder: 'BE234567890',
      naamMoeder: 'Daisy',
      rasMoeder: 'Belgian Blue',
      leeftijdMoeder: '5j8m',
      status: 'Niet afgewerkt'
    }
  ];
};

const generateVerkopen = (): Verkoop[] => {
  return [
    {
      id: 'v1',
      datum: '05/02/2025',
      levendGewicht: 620,
      slachtPercentage: 58,
      waarde: '',
      btwPercentage: '6%',
      afnemer: '',
      leeftijd: '30m',
      diercategorie: 'Vleesvee',
      sanitelnummer: 'BE888999000',
      naam: 'Gustav',
      ras: 'Charolais',
      status: 'Niet afgewerkt'
    },
    {
      id: 'v2',
      datum: '07/02/2025',
      levendGewicht: 580,
      slachtPercentage: 56,
      waarde: '',
      btwPercentage: '6%',
      afnemer: '',
      leeftijd: '28m',
      diercategorie: 'Vleesvee',
      sanitelnummer: 'BE889000111',
      naam: 'Hans',
      ras: 'Belgian Blue',
      status: 'Niet afgewerkt'
    }
  ];
};

const generateSterftes = (): Sterfte[] => {
  return [
    {
      id: 's1',
      datum: '10/02/2025',
      gewicht: 540,
      diercategorie: 'Melkkoe',
      sanitelnummer: 'BE777888999',
      naam: 'Elsa',
      ras: 'Holstein Friesian',
      leeftijd: '6j1m',
      status: 'Niet afgewerkt'
    }
  ];
};

export function BulkVerwerkingWizard({ onClose }: BulkVerwerkingWizardProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [boekjaar, setBoekjaar] = useState('2024');
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  
  const [aankopen, setAankopen] = useState<Aankoop[]>([]);
  const [geboortes, setGeboortes] = useState<Geboorte[]>([]);
  const [verkopen, setVerkopen] = useState<Verkoop[]>([]);
  const [sterftes, setSterftes] = useState<Sterfte[]>([]);

  // Simulate loading when boekjaar changes
  useEffect(() => {
    if (boekjaar) {
      setIsLoading(true);
      setLoadingProgress(0);
      
      const interval = setInterval(() => {
        setLoadingProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setIsLoading(false);
            // Load data
            setAankopen(generateAankopen());
            setGeboortes(generateGeboortes());
            setVerkopen(generateVerkopen());
            setSterftes(generateSterftes());
            return 100;
          }
          return prev + 10;
        });
      }, 200);
      
      return () => clearInterval(interval);
    }
  }, [boekjaar]);

  const steps = [
    { number: 1, label: 'Parameters' },
    { number: 2, label: 'Aankopen' },
    { number: 3, label: 'Geboortes' },
    { number: 4, label: 'Verkopen' },
    { number: 5, label: 'Sterftes' }
  ];

  const canGoNext = () => {
    if (currentStep === 1) {
      return loadingProgress === 100 && !isLoading;
    }
    if (currentStep === 2) {
      return aankopen.every(a => a.waarde && a.diercategorie);
    }
    if (currentStep === 3) {
      return geboortes.every(g => g.waarde && g.diercategorieKalf && g.rasKalf);
    }
    if (currentStep === 4) {
      return verkopen.every(v => v.waarde && v.afnemer);
    }
    return true;
  };

  const handleNext = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    } else {
      alert('Bulk verwerking voltooid!');
      onClose();
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const updateAankoop = (id: string, field: keyof Aankoop, value: string) => {
    setAankopen(aankopen.map(a => a.id === id ? { ...a, [field]: value } : a));
  };

  const updateGeboorte = (id: string, field: keyof Geboorte, value: string | boolean) => {
    setGeboortes(geboortes.map(g => {
      if (g.id === id) {
        const updated = { ...g, [field]: value };
        // Auto-set waarde to 0 if doodgeboren
        if (field === 'doodgeboren' && value === true) {
          updated.waarde = '0';
        }
        return updated;
      }
      return g;
    }));
  };

  const updateVerkoop = (id: string, field: keyof Verkoop, value: string) => {
    setVerkopen(verkopen.map(v => v.id === id ? { ...v, [field]: value } : v));
  };

  const updateSterfte = (id: string, field: keyof Sterfte, value: string) => {
    setSterftes(sterftes.map(s => s.id === id ? { ...s, [field]: value } : s));
  };

  const isRowInvalid = (type: string, item: any) => {
    if (type === 'aankoop') {
      return !item.waarde || !item.diercategorie;
    }
    if (type === 'geboorte') {
      return !item.waarde || !item.diercategorieKalf || !item.rasKalf;
    }
    if (type === 'verkoop') {
      return !item.waarde || !item.afnemer;
    }
    return false;
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-8">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-6xl max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-6 border-b border-gray-200">
          <h2 className="text-[20px] leading-[30px] text-[#101828]">
            Bulk verwerken van handelingen
          </h2>
          <button
            onClick={onClose}
            className="text-[#4a5565] hover:text-[#101828] transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Stepper */}
        <div className="px-8 py-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div className="flex items-center gap-2">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-[14px] transition-colors ${
                      step.number === currentStep
                        ? 'bg-[#155dfc] text-white'
                        : step.number < currentStep
                        ? 'bg-green-500 text-white'
                        : 'bg-gray-200 text-[#4a5565]'
                    }`}
                  >
                    {step.number < currentStep ? '✓' : step.number}
                  </div>
                  <span
                    className={`text-[14px] ${
                      step.number === currentStep
                        ? 'text-[#101828]'
                        : 'text-[#4a5565]'
                    }`}
                  >
                    {step.label}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <ChevronRight className="w-5 h-5 text-[#4a5565] mx-2" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-8 py-6">
          {/* Stap 1: Parameters */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <h3 className="text-[18px] leading-7 text-[#101828]">
                Selecteer parameters voor bulkverwerking
              </h3>

              <div>
                <label className="block text-[16px] leading-6 text-[#364153] mb-2">
                  Boekjaar
                </label>
                <select
                  value={boekjaar}
                  onChange={(e) => setBoekjaar(e.target.value)}
                  className="w-full max-w-xs h-[42px] px-3 border border-[#d1d5dc] rounded-lg text-[16px]"
                >
                  {jaren.map((jaar) => (
                    <option key={jaar} value={jaar}>
                      {jaar}
                    </option>
                  ))}
                </select>
              </div>

              {boekjaar && (
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 space-y-3">
                  <p className="text-[16px] text-[#364153]">
                    {loadingProgress < 100 ? 'Data wordt ingeladen…' : 'Data succesvol ingeladen'}
                  </p>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div
                      className="bg-[#155dfc] h-full transition-all duration-300"
                      style={{ width: `${loadingProgress}%` }}
                    />
                  </div>
                  <p className="text-[14px] text-[#4a5565]">
                    {loadingProgress}% — Aankopen: {aankopen.length} • Geboortes: {geboortes.length} • Verkopen: {verkopen.length} • Sterftes: {sterftes.length}
                  </p>
                </div>
              )}

              <p className="text-[14px] text-[#6a7282] italic">
                Je kan pas verder zodra alle gegevens volledig zijn ingeladen.
              </p>
            </div>
          )}

          {/* Stap 2: Aankopen */}
          {currentStep === 2 && (
            <div className="space-y-4">
              <h3 className="text-[18px] leading-7 text-[#101828]">
                Aankopen controleren en aanvullen
              </h3>

              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-3 py-2 text-left text-[13px] text-[#4a5565]">Datum ↑</th>
                      <th className="px-3 py-2 text-left text-[13px] text-[#4a5565]">Gewicht</th>
                      <th className="px-3 py-2 text-left text-[13px] text-[#4a5565]">Waarde*</th>
                      <th className="px-3 py-2 text-left text-[13px] text-[#4a5565]">BTW %</th>
                      <th className="px-3 py-2 text-left text-[13px] text-[#4a5565]">Cat.*</th>
                      <th className="px-3 py-2 text-left text-[13px] text-[#4a5565]">Sanitel</th>
                      <th className="px-3 py-2 text-left text-[13px] text-[#4a5565]">Naam</th>
                      <th className="px-3 py-2 text-left text-[13px] text-[#4a5565]">Ras</th>
                      <th className="px-3 py-2 text-left text-[13px] text-[#4a5565]">Status</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-100">
                    {aankopen.map((aankoop) => (
                      <tr
                        key={aankoop.id}
                        className={`${
                          isRowInvalid('aankoop', aankoop)
                            ? 'border-l-4 border-l-red-500'
                            : ''
                        }`}
                      >
                        <td className="px-3 py-2 text-[13px] text-[#101828]">
                          {aankoop.datum}
                        </td>
                        <td className="px-3 py-2 text-[13px] text-[#4a5565]">
                          {aankoop.gewicht} kg
                        </td>
                        <td className="px-3 py-2">
                          <input
                            type="number"
                            value={aankoop.waarde}
                            onChange={(e) => updateAankoop(aankoop.id, 'waarde', e.target.value)}
                            placeholder="€"
                            className="w-24 h-8 px-2 border border-[#d1d5dc] rounded text-[13px]"
                          />
                        </td>
                        <td className="px-3 py-2">
                          <select
                            value={aankoop.btwPercentage}
                            onChange={(e) => updateAankoop(aankoop.id, 'btwPercentage', e.target.value)}
                            className="w-20 h-8 px-2 border border-[#d1d5dc] rounded text-[13px]"
                          >
                            {btwOpties.map((btw) => (
                              <option key={btw} value={btw}>
                                {btw}
                              </option>
                            ))}
                          </select>
                        </td>
                        <td className="px-3 py-2">
                          <select
                            value={aankoop.diercategorie}
                            onChange={(e) => updateAankoop(aankoop.id, 'diercategorie', e.target.value)}
                            className="w-40 h-8 px-2 border border-[#d1d5dc] rounded text-[13px]"
                          >
                            <option value="">Selecteer...</option>
                            {diercategorieën.map((cat) => (
                              <option key={cat} value={cat}>
                                {cat}
                              </option>
                            ))}
                          </select>
                        </td>
                        <td className="px-3 py-2 text-[13px] text-[#4a5565] font-mono">
                          {aankoop.sanitelnummer}
                        </td>
                        <td className="px-3 py-2 text-[13px] text-[#101828]">
                          {aankoop.naam}
                        </td>
                        <td className="px-3 py-2 text-[13px] text-[#4a5565]">
                          {aankoop.ras}
                        </td>
                        <td className="px-3 py-2">
                          <select
                            value={aankoop.status}
                            onChange={(e) => updateAankoop(aankoop.id, 'status', e.target.value)}
                            className={`w-36 h-8 px-2 border border-[#d1d5dc] rounded text-[13px] ${
                              aankoop.status === 'Afgewerkt' ? 'bg-green-50' : aankoop.status === 'Verwijderd' ? 'bg-red-50' : 'bg-amber-50'
                            }`}
                          >
                            <option value="Niet afgewerkt">Niet afgewerkt</option>
                            <option value="Afgewerkt">Afgewerkt</option>
                            <option value="Verwijderd">Verwijderd</option>
                          </select>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {aankopen.some(a => isRowInvalid('aankoop', a)) && (
                <p className="text-[14px] text-red-600">
                  ⚠️ Vul alle verplichte velden (*) in voordat je verder gaat
                </p>
              )}
            </div>
          )}

          {/* Stap 3: Geboortes */}
          {currentStep === 3 && (
            <div className="space-y-4">
              <h3 className="text-[18px] leading-7 text-[#101828]">
                Geboortes verwerken
              </h3>

              <div className="border border-gray-200 rounded-lg overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-2 py-2 text-left text-[12px] text-[#4a5565]">Datum</th>
                      <th className="px-2 py-2 text-left text-[12px] text-[#4a5565]">Naam</th>
                      <th className="px-2 py-2 text-left text-[12px] text-[#4a5565]">Sanitel</th>
                      <th className="px-2 py-2 text-left text-[12px] text-[#4a5565]">Cat.k*</th>
                      <th className="px-2 py-2 text-left text-[12px] text-[#4a5565]">Ras k*</th>
                      <th className="px-2 py-2 text-left text-[12px] text-[#4a5565]">Gewicht</th>
                      <th className="px-2 py-2 text-left text-[12px] text-[#4a5565]">Waarde*</th>
                      <th className="px-2 py-2 text-left text-[12px] text-[#4a5565]">BTW%</th>
                      <th className="px-2 py-2 text-center text-[12px] text-[#4a5565]">☑DB</th>
                      <th className="px-2 py-2 text-center text-[12px] text-[#4a5565]">☑ML</th>
                      <th className="px-2 py-2 text-left text-[12px] text-[#4a5565]">Cat.m</th>
                      <th className="px-2 py-2 text-left text-[12px] text-[#4a5565]">San.m</th>
                      <th className="px-2 py-2 text-left text-[12px] text-[#4a5565]">Naam.m</th>
                      <th className="px-2 py-2 text-left text-[12px] text-[#4a5565]">Leeftijd</th>
                      <th className="px-2 py-2 text-left text-[12px] text-[#4a5565]">Status</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-100">
                    {geboortes.map((geboorte) => (
                      <tr
                        key={geboorte.id}
                        className={`${
                          isRowInvalid('geboorte', geboorte)
                            ? 'border-l-4 border-l-red-500'
                            : ''
                        }`}
                      >
                        <td className="px-2 py-2 text-[12px] text-[#101828]">
                          {geboorte.datum}
                        </td>
                        <td className="px-2 py-2 text-[12px] text-[#101828]">
                          {geboorte.naamKalf}
                        </td>
                        <td className="px-2 py-2 text-[12px] text-[#4a5565] font-mono">
                          {geboorte.sanitelnummerKalf}
                        </td>
                        <td className="px-2 py-2">
                          <select
                            value={geboorte.diercategorieKalf}
                            onChange={(e) => updateGeboorte(geboorte.id, 'diercategorieKalf', e.target.value)}
                            className="w-32 h-8 px-1 border border-[#d1d5dc] rounded text-[12px]"
                          >
                            <option value="">Selecteer...</option>
                            {diercategorieën.map((cat) => (
                              <option key={cat} value={cat}>
                                {cat}
                              </option>
                            ))}
                          </select>
                        </td>
                        <td className="px-2 py-2">
                          <select
                            value={geboorte.rasKalf}
                            onChange={(e) => updateGeboorte(geboorte.id, 'rasKalf', e.target.value)}
                            className="w-32 h-8 px-1 border border-[#d1d5dc] rounded text-[12px]"
                          >
                            <option value="">Selecteer...</option>
                            {rassen.map((ras) => (
                              <option key={ras} value={ras}>
                                {ras}
                              </option>
                            ))}
                          </select>
                        </td>
                        <td className="px-2 py-2 text-[12px] text-[#4a5565]">
                          {geboorte.gewicht} kg
                        </td>
                        <td className="px-2 py-2">
                          <input
                            type="number"
                            value={geboorte.waarde}
                            onChange={(e) => updateGeboorte(geboorte.id, 'waarde', e.target.value)}
                            disabled={geboorte.doodgeboren}
                            placeholder="€"
                            className="w-20 h-8 px-2 border border-[#d1d5dc] rounded text-[12px] disabled:bg-gray-100"
                          />
                        </td>
                        <td className="px-2 py-2">
                          <select
                            value={geboorte.btwPercentage}
                            onChange={(e) => updateGeboorte(geboorte.id, 'btwPercentage', e.target.value)}
                            className="w-16 h-8 px-1 border border-[#d1d5dc] rounded text-[12px]"
                          >
                            {btwOpties.map((btw) => (
                              <option key={btw} value={btw}>
                                {btw}
                              </option>
                            ))}
                          </select>
                        </td>
                        <td className="px-2 py-2 text-center">
                          <input
                            type="checkbox"
                            checked={geboorte.doodgeboren}
                            onChange={(e) => updateGeboorte(geboorte.id, 'doodgeboren', e.target.checked)}
                            className="w-4 h-4"
                          />
                        </td>
                        <td className="px-2 py-2 text-center">
                          <input
                            type="checkbox"
                            checked={geboorte.meerling}
                            onChange={(e) => updateGeboorte(geboorte.id, 'meerling', e.target.checked)}
                            className="w-4 h-4"
                          />
                        </td>
                        <td className="px-2 py-2 text-[12px] text-[#4a5565] bg-gray-50">
                          {geboorte.diercategorieMoeder}
                        </td>
                        <td className="px-2 py-2 text-[12px] text-[#4a5565] bg-gray-50 font-mono">
                          {geboorte.sanitelnummerMoeder}
                        </td>
                        <td className="px-2 py-2 text-[12px] text-[#4a5565] bg-gray-50">
                          {geboorte.naamMoeder}
                        </td>
                        <td className="px-2 py-2 text-[12px] text-[#4a5565] bg-gray-50">
                          {geboorte.leeftijdMoeder}
                        </td>
                        <td className="px-2 py-2">
                          <select
                            value={geboorte.status}
                            onChange={(e) => updateGeboorte(geboorte.id, 'status', e.target.value)}
                            className={`w-36 h-8 px-2 border border-[#d1d5dc] rounded text-[12px] ${
                              geboorte.status === 'Afgewerkt' ? 'bg-green-50' : geboorte.status === 'Verwijderd' ? 'bg-red-50' : 'bg-amber-50'
                            }`}
                          >
                            <option value="Niet afgewerkt">Niet afgewerkt</option>
                            <option value="Afgewerkt">Afgewerkt</option>
                            <option value="Verwijderd">Verwijderd</option>
                          </select>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {geboortes.some(g => isRowInvalid('geboorte', g)) && (
                <p className="text-[14px] text-red-600">
                  ⚠️ Vul alle verplichte velden (*) in voordat je verder gaat
                </p>
              )}
            </div>
          )}

          {/* Stap 4: Verkopen */}
          {currentStep === 4 && (
            <div className="space-y-4">
              <h3 className="text-[18px] leading-7 text-[#101828]">
                Verkopen verwerken
              </h3>

              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-3 py-2 text-left text-[13px] text-[#4a5565]">Datum</th>
                      <th className="px-3 py-2 text-left text-[13px] text-[#4a5565]">Lev. kg</th>
                      <th className="px-3 py-2 text-left text-[13px] text-[#4a5565]">Slacht%</th>
                      <th className="px-3 py-2 text-left text-[13px] text-[#4a5565]">Gesl.kg</th>
                      <th className="px-3 py-2 text-left text-[13px] text-[#4a5565]">Waarde*</th>
                      <th className="px-3 py-2 text-left text-[13px] text-[#4a5565]">BTW%</th>
                      <th className="px-3 py-2 text-left text-[13px] text-[#4a5565]">Afnemer*</th>
                      <th className="px-3 py-2 text-left text-[13px] text-[#4a5565]">Leeftijd</th>
                      <th className="px-3 py-2 text-left text-[13px] text-[#4a5565]">Cat.</th>
                      <th className="px-3 py-2 text-left text-[13px] text-[#4a5565]">Sanitel</th>
                      <th className="px-3 py-2 text-left text-[13px] text-[#4a5565]">Status</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-100">
                    {verkopen.map((verkoop) => (
                      <tr
                        key={verkoop.id}
                        className={`${
                          isRowInvalid('verkoop', verkoop)
                            ? 'border-l-4 border-l-red-500'
                            : ''
                        }`}
                      >
                        <td className="px-3 py-2 text-[13px] text-[#101828]">
                          {verkoop.datum}
                        </td>
                        <td className="px-3 py-2 text-[13px] text-[#4a5565]">
                          {verkoop.levendGewicht} kg
                        </td>
                        <td className="px-3 py-2 text-[13px] text-[#4a5565]">
                          {verkoop.slachtPercentage} %
                        </td>
                        <td className="px-3 py-2 text-[13px] text-[#4a5565] bg-gray-50">
                          {Math.round(verkoop.levendGewicht * verkoop.slachtPercentage / 100)} kg
                        </td>
                        <td className="px-3 py-2">
                          <input
                            type="number"
                            value={verkoop.waarde}
                            onChange={(e) => updateVerkoop(verkoop.id, 'waarde', e.target.value)}
                            placeholder="€"
                            className="w-24 h-8 px-2 border border-[#d1d5dc] rounded text-[13px]"
                          />
                        </td>
                        <td className="px-3 py-2">
                          <select
                            value={verkoop.btwPercentage}
                            onChange={(e) => updateVerkoop(verkoop.id, 'btwPercentage', e.target.value)}
                            className="w-20 h-8 px-2 border border-[#d1d5dc] rounded text-[13px]"
                          >
                            {btwOpties.map((btw) => (
                              <option key={btw} value={btw}>
                                {btw}
                              </option>
                            ))}
                          </select>
                        </td>
                        <td className="px-3 py-2">
                          <select
                            value={verkoop.afnemer}
                            onChange={(e) => updateVerkoop(verkoop.id, 'afnemer', e.target.value)}
                            className="w-32 h-8 px-2 border border-[#d1d5dc] rounded text-[13px]"
                          >
                            <option value="">Selecteer...</option>
                            {afnemers.map((afnemer) => (
                              <option key={afnemer} value={afnemer}>
                                {afnemer}
                              </option>
                            ))}
                          </select>
                        </td>
                        <td className="px-3 py-2 text-[13px] text-[#4a5565]">
                          {verkoop.leeftijd}
                        </td>
                        <td className="px-3 py-2 text-[13px] text-[#4a5565]">
                          {verkoop.diercategorie}
                        </td>
                        <td className="px-3 py-2 text-[13px] text-[#4a5565] font-mono">
                          {verkoop.sanitelnummer}
                        </td>
                        <td className="px-3 py-2">
                          <select
                            value={verkoop.status}
                            onChange={(e) => updateVerkoop(verkoop.id, 'status', e.target.value)}
                            className={`w-36 h-8 px-2 border border-[#d1d5dc] rounded text-[13px] ${
                              verkoop.status === 'Afgewerkt' ? 'bg-green-50' : verkoop.status === 'Verwijderd' ? 'bg-red-50' : 'bg-amber-50'
                            }`}
                          >
                            <option value="Niet afgewerkt">Niet afgewerkt</option>
                            <option value="Afgewerkt">Afgewerkt</option>
                            <option value="Verwijderd">Verwijderd</option>
                          </select>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {verkopen.some(v => isRowInvalid('verkoop', v)) && (
                <p className="text-[14px] text-red-600">
                  ⚠️ Vul alle verplichte velden (*) in voordat je verder gaat
                </p>
              )}
            </div>
          )}

          {/* Stap 5: Sterftes */}
          {currentStep === 5 && (
            <div className="space-y-4">
              <h3 className="text-[18px] leading-7 text-[#101828]">
                Sterftes controleren
              </h3>

              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-3 py-2 text-left text-[13px] text-[#4a5565]">Datum</th>
                      <th className="px-3 py-2 text-left text-[13px] text-[#4a5565]">Gewicht</th>
                      <th className="px-3 py-2 text-left text-[13px] text-[#4a5565]">Cat.</th>
                      <th className="px-3 py-2 text-left text-[13px] text-[#4a5565]">Sanitel</th>
                      <th className="px-3 py-2 text-left text-[13px] text-[#4a5565]">Naam</th>
                      <th className="px-3 py-2 text-left text-[13px] text-[#4a5565]">Ras</th>
                      <th className="px-3 py-2 text-left text-[13px] text-[#4a5565]">Leeftijd</th>
                      <th className="px-3 py-2 text-left text-[13px] text-[#4a5565]">Status</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-100">
                    {sterftes.map((sterfte) => (
                      <tr key={sterfte.id}>
                        <td className="px-3 py-2 text-[13px] text-[#101828]">
                          {sterfte.datum}
                        </td>
                        <td className="px-3 py-2 text-[13px] text-[#4a5565]">
                          {sterfte.gewicht} kg
                        </td>
                        <td className="px-3 py-2 text-[13px] text-[#4a5565]">
                          {sterfte.diercategorie}
                        </td>
                        <td className="px-3 py-2 text-[13px] text-[#4a5565] font-mono">
                          {sterfte.sanitelnummer}
                        </td>
                        <td className="px-3 py-2 text-[13px] text-[#101828]">
                          {sterfte.naam}
                        </td>
                        <td className="px-3 py-2 text-[13px] text-[#4a5565]">
                          {sterfte.ras}
                        </td>
                        <td className="px-3 py-2 text-[13px] text-[#4a5565]">
                          {sterfte.leeftijd}
                        </td>
                        <td className="px-3 py-2">
                          <select
                            value={sterfte.status}
                            onChange={(e) => updateSterfte(sterfte.id, 'status', e.target.value)}
                            className={`w-36 h-8 px-2 border border-[#d1d5dc] rounded text-[13px] ${
                              sterfte.status === 'Afgewerkt' ? 'bg-green-50' : sterfte.status === 'Verwijderd' ? 'bg-red-50' : 'bg-amber-50'
                            }`}
                          >
                            <option value="Niet afgewerkt">Niet afgewerkt</option>
                            <option value="Afgewerkt">Afgewerkt</option>
                            <option value="Verwijderd">Verwijderd</option>
                          </select>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-[14px] text-green-600">
                ✓ Alle gegevens zijn compleet. Je kan de verwerking voltooien.
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-8 py-6 border-t border-gray-200">
          <button
            onClick={onClose}
            className="h-[42px] px-6 border border-gray-300 rounded text-[16px] text-[#4a5565] hover:bg-gray-50"
          >
            Annuleren
          </button>
          <div className="flex gap-3">
            {currentStep > 1 && (
              <button
                onClick={handleBack}
                className="h-[42px] px-6 border border-gray-300 rounded text-[16px] text-[#4a5565] hover:bg-gray-50"
              >
                Vorige
              </button>
            )}
            <button
              onClick={handleNext}
              disabled={!canGoNext()}
              className={`h-[42px] px-6 rounded text-[16px] flex items-center gap-2 ${
                canGoNext()
                  ? 'bg-[#155dfc] text-white hover:bg-[#1348d6]'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              {currentStep === 5 ? (
                <>
                  <span>✔</span>
                  Voltooien
                </>
              ) : (
                <>
                  Volgende
                  <ChevronRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}