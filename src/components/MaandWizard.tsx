import { useState } from 'react';
import { X, ChevronRight, Plus, Star, Calculator } from 'lucide-react';
import { StatusType, Boeking } from '../types/booking';
import { ImpactWizard } from './ImpactWizard';
import { analyzeImpact } from '../utils/impactAnalyse';
import { toast } from 'sonner@2.0.3';
import cowIcon from 'figma:asset/a66fdb0db9cbb3734b5cde6aa0a4baea6ced4f3e.png';
import calculatorIcon from 'figma:asset/3264406a1015d1ce0fc45be44eb4da5a0867fd47.png';
import { DierHistoriekModal } from './DierHistoriekModal';

interface BaseItem {
  id: string;
  datum: string;
  sanitelnummer: string;
  status: StatusType;
  isManuallyEdited?: Record<string, boolean>;
}

interface Aankoop extends BaseItem {
  geboortedatum: string;
  gewicht: number;
  waarde: string;
  btwPercentage: string;
  diercategorie: string;
  naam: string;
  rasType: string;
  nota: string;
}

interface Geboorte extends BaseItem {
  geboortedatum: string;
  naamKalf: string;
  sanitelnummerKalf: string;
  diercategorieKalf: string;
  rasKalfType: string;
  gewicht: number;
  waarde: string;
  btwPercentage: string;
  doodgeboren: boolean;
  meerling: boolean;
  diercategorieMoeder: string;
  sanitelnummerMoeder: string;
  naamMoeder: string;
  nota: string;
}

interface Overgang extends BaseItem {
  naam: string;
  geboortedatum: string;
  leeftijd: string;
  huidigeCategorie: string;
  nieuweCategorie: string;
  nota: string;
}

interface Verkoop extends BaseItem {
  geboortedatum: string;
  levendGewicht: number;
  geslachtGewicht: number;
  slachtPercentage: number;
  waarde: string;
  btwPercentage: string;
  afnemer: string;
  leeftijd: string;
  diercategorie: string;
  naam: string;
  noodslacht: boolean;
  afgekeurd: boolean;
  verkoopswijze: string;
  nota: string;
}

interface InterneVerkoop extends BaseItem {
  geboortedatum: string;
  gewicht: number;
  waarde: string;
  leeftijd: string;
  diercategorie: string;
  bedrijfstakNaar: string;
  naam: string;
  nota: string;
}

interface Sterfte extends BaseItem {
  geboortedatum: string;
  leeftijd: string;
  diercategorie: string;
  naam: string;
  nota: string;
}

interface MaandWizardProps {
  maand: string;
  onClose: () => void;
  onNavigateToIndividualAnimal?: (sanitel: string) => void;
}

interface ImpactWizardState {
  show: boolean;
  originalBoeking: Boeking | null;
  pendingUpdate: Partial<Boeking>;
  affectedBookingIds: string[];
  impactReason: string;
  changedField?: keyof Boeking;
  type: string;
  itemId: string;
}

// Mock dieren database voor naam dropdown
interface Dier {
  sanitelnummer: string;
  naam: string;
  categorie: string;
  geboortedatum: string;
}

const btwOpties = ['0%', '6%', '12%', '21%'];
const diercategorieën = ['Melkkoe', 'Zoogkoe', 'Jongvee', 'Dekstier', 'Mannelijk Jongvee Melk', 'Vrouwelijk Jongvee Vlees'];
const rasTypes = ['Vlees', 'Melk', 'Dubbel doel'];
const afnemers = ['Slachterij A', 'Slachterij B', 'Particulier', 'Veemarkt'];
const bedrijfstakken = ['Dekstier', 'Melkkoe', 'Vaars', 'Andere'];
const verkoopswijzen = ['Op voet (geraamd verkoop gewicht)', 'NUKA'];

const highImpactFields = {
  aankoop: ['gewicht', 'waarde', 'diercategorie'],
  geboorte: ['gewicht', 'waarde', 'diercategorieKalf', 'rasKalfType'],
  overgang: ['nieuweCategorie'],
  verkoop: ['levendGewicht', 'waarde'],
  interneVerkoop: ['gewicht'],
  sterfte: []
};

// Generate mock dieren database
const generateMockDieren = (): Dier[] => {
  const namen = ['Bella', 'Luna', 'Rosa', 'Max', 'Boris', 'Rocky', 'Daisy', 'Molly'];
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

// Calculate age in months from birthdate
const calculateAgeInMonths = (geboortedatum: string): string => {
  if (!geboortedatum) return '';
  const parts = geboortedatum.split('/');
  if (parts.length !== 3) return '';
  
  const birthDate = new Date(parseInt(parts[2]), parseInt(parts[1]) - 1, parseInt(parts[0]));
  const today = new Date();
  
  const months = (today.getFullYear() - birthDate.getFullYear()) * 12 + 
                 (today.getMonth() - birthDate.getMonth());
  
  return `${months}`;
};

// Calculate slaughter weight
const calculateSlaughterWeight = (levendGewicht: number, percentage: number): number => {
  return Math.round(levendGewicht * (percentage / 100));
};

// Generate unique naam based on sanitelnummer and year
const generateUniqueDierNaam = (sanitelnummer: string, datum: string, existingNames: string[]): string => {
  if (!sanitelnummer || !datum) return '';
  const laatste4 = sanitelnummer.slice(-4);
  const jaar = datum.split('/')[2];
  let baseName = `${laatste4}-${jaar}`;
  
  // Check if name already exists, if so add a suffix
  let counter = 1;
  let uniqueName = baseName;
  while (existingNames.includes(uniqueName)) {
    uniqueName = `${baseName}-${counter}`;
    counter++;
  }
  
  return uniqueName;
};

const generateAankopen = (): Aankoop[] => {
  const result: Aankoop[] = [];
  const existingNames: string[] = [];
  
  for (let i = 0; i < 10; i++) {
    const hasEmptyFields = Math.random() > 0.7;
    const sanitel = `BE${Math.floor(Math.random() * 900000000) + 100000000}`;
    const datum = `${String(Math.floor(Math.random() * 28) + 1).padStart(2, '0')}/08/2024`;
    const naam = generateUniqueDierNaam(sanitel, datum, existingNames);
    existingNames.push(naam);
    
    result.push({
      id: `a${i + 1}`,
      datum: datum,
      geboortedatum: `${String(Math.floor(Math.random() * 28) + 1).padStart(2, '0')}/03/2022`,
      gewicht: Math.floor(Math.random() * 300) + 300,
      waarde: hasEmptyFields && Math.random() > 0.5 ? '' : String(Math.floor(Math.random() * 1000) + 800),
      btwPercentage: hasEmptyFields && Math.random() > 0.5 ? '' : '0%',
      diercategorie: hasEmptyFields && Math.random() > 0.5 ? '' : diercategorieën[Math.floor(Math.random() * diercategorieën.length)],
      sanitelnummer: sanitel,
      naam: naam,
      rasType: rasTypes[Math.floor(Math.random() * rasTypes.length)],
      nota: '',
      status: 'Ingeladen',
      isManuallyEdited: {}
    });
  }
  return result;
};

const generateGeboortes = (): Geboorte[] => {
  const result: Geboorte[] = [];
  const existingNames: string[] = [];
  
  for (let i = 0; i < 8; i++) {
    const hasEmptyFields = Math.random() > 0.7;
    const sanitelKalf = `BE${Math.floor(Math.random() * 900000000) + 100000000}`;
    const geboortedatum = `${String(Math.floor(Math.random() * 28) + 1).padStart(2, '0')}/08/2024`;
    const naamKalf = generateUniqueDierNaam(sanitelKalf, geboortedatum, existingNames);
    existingNames.push(naamKalf);
    
    result.push({
      id: `g${i + 1}`,
      datum: geboortedatum,
      geboortedatum: geboortedatum,
      naamKalf: hasEmptyFields && Math.random() > 0.5 ? '' : naamKalf,
      sanitelnummerKalf: sanitelKalf,
      diercategorieKalf: hasEmptyFields && Math.random() > 0.5 ? '' : 'Jongvee',
      rasKalfType: hasEmptyFields && Math.random() > 0.5 ? '' : rasTypes[Math.floor(Math.random() * rasTypes.length)],
      gewicht: Math.floor(Math.random() * 20) + 35,
      waarde: hasEmptyFields && Math.random() > 0.5 ? '' : String(Math.floor(Math.random() * 100) + 100),
      btwPercentage: hasEmptyFields && Math.random() > 0.5 ? '' : '0%',
      doodgeboren: false,
      meerling: Math.random() > 0.9,
      diercategorieMoeder: diercategorieën[Math.floor(Math.random() * 2)],
      sanitelnummerMoeder: `BE${Math.floor(Math.random() * 900000000) + 100000000}`,
      naamMoeder: 'Moeder',
      nota: '',
      status: 'Ingeladen',
      sanitelnummer: sanitelKalf,
      isManuallyEdited: {}
    });
  }
  return result;
};

const generateVerkopen = (): Verkoop[] => {
  const result: Verkoop[] = [];
  const existingNames: string[] = [];
  
  for (let i = 0; i < 6; i++) {
    const hasEmptyFields = Math.random() > 0.7;
    const levendGewicht = Math.floor(Math.random() * 200) + 450;
    const slachtPercentage = Math.floor(Math.random() * 10) + 52;
    const geboortedatum = `${String(Math.floor(Math.random() * 28) + 1).padStart(2, '0')}/03/2022`;
    const sanitel = `BE${Math.floor(Math.random() * 900000000) + 100000000}`;
    const datum = `${String(Math.floor(Math.random() * 28) + 1).padStart(2, '0')}/08/2024`;
    const naam = generateUniqueDierNaam(sanitel, datum, existingNames);
    existingNames.push(naam);
    
    result.push({
      id: `v${i + 1}`,
      datum: datum,
      geboortedatum: geboortedatum,
      levendGewicht: levendGewicht,
      geslachtGewicht: calculateSlaughterWeight(levendGewicht, slachtPercentage),
      slachtPercentage: slachtPercentage,
      waarde: hasEmptyFields && Math.random() > 0.5 ? '' : String(Math.floor(Math.random() * 1000) + 1200),
      btwPercentage: hasEmptyFields && Math.random() > 0.5 ? '' : '0%',
      afnemer: hasEmptyFields && Math.random() > 0.5 ? '' : afnemers[Math.floor(Math.random() * afnemers.length)],
      leeftijd: calculateAgeInMonths(geboortedatum),
      diercategorie: diercategorieën[Math.floor(Math.random() * diercategorieën.length)],
      sanitelnummer: sanitel,
      naam: naam,
      noodslacht: false,
      afgekeurd: false,
      verkoopswijze: verkoopswijzen[0],
      nota: '',
      status: 'Ingeladen',
      isManuallyEdited: {}
    });
  }
  return result;
};

const generateInterneVerkopen = (): InterneVerkoop[] => {
  const result: InterneVerkoop[] = [];
  const existingNames: string[] = [];
  
  for (let i = 0; i < 3; i++) {
    const geboortedatum = `${String(Math.floor(Math.random() * 28) + 1).padStart(2, '0')}/03/2022`;
    const gewicht = Math.floor(Math.random() * 200) + 400;
    const sanitel = `BE${Math.floor(Math.random() * 900000000) + 100000000}`;
    const datum = `${String(Math.floor(Math.random() * 28) + 1).padStart(2, '0')}/08/2024`;
    const naam = generateUniqueDierNaam(sanitel, datum, existingNames);
    existingNames.push(naam);
    
    result.push({
      id: `iv${i + 1}`,
      datum: datum,
      geboortedatum: geboortedatum,
      gewicht: gewicht,
      waarde: String(Math.floor(gewicht * 2.5)),
      leeftijd: calculateAgeInMonths(geboortedatum),
      diercategorie: diercategorieën[Math.floor(Math.random() * diercategorieën.length)],
      sanitelnummer: sanitel,
      naam: naam,
      bedrijfstakNaar: '',
      nota: '',
      status: 'Ingeladen',
      isManuallyEdited: {}
    });
  }
  return result;
};

const generateSterftes = (): Sterfte[] => {
  const result: Sterfte[] = [];
  const existingNames: string[] = [];
  
  for (let i = 0; i < 4; i++) {
    const geboortedatum = `${String(Math.floor(Math.random() * 28) + 1).padStart(2, '0')}/03/2020`;
    const sanitel = `BE${Math.floor(Math.random() * 900000000) + 100000000}`;
    const datum = `${String(Math.floor(Math.random() * 28) + 1).padStart(2, '0')}/08/2024`;
    const naam = generateUniqueDierNaam(sanitel, datum, existingNames);
    existingNames.push(naam);
    
    result.push({
      id: `s${i + 1}`,
      datum: datum,
      geboortedatum: geboortedatum,
      leeftijd: calculateAgeInMonths(geboortedatum),
      diercategorie: diercategorieën[Math.floor(Math.random() * diercategorieën.length)],
      sanitelnummer: sanitel,
      naam: naam,
      nota: '',
      status: 'Ingeladen',
      isManuallyEdited: {}
    });
  }
  return result;
};

const convertToBoeking = (item: any, type: string): Boeking => {
  return {
    id: item.id,
    datum: item.datum,
    sanitel: item.sanitelnummer || item.sanitelnummerKalf,
    naam: item.naam || item.naamKalf || '',
    handeling: type as any,
    gewicht: Number(item.gewicht || item.levendGewicht) || 0,
    categorie: (item.diercategorie || item.diercategorieKalf || item.nieuweCategorie) as any,
    waarde: Number(item.waarde) || 0,
    status: item.status
  };
};

export function MaandWizard({ maand, onClose, onNavigateToIndividualAnimal }: MaandWizardProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [impactWizard, setImpactWizard] = useState<ImpactWizardState>({
    show: false,
    originalBoeking: null,
    pendingUpdate: {},
    affectedBookingIds: [],
    impactReason: '',
    type: 'aankoop',
    itemId: ''
  });
  
  const [showDierModal, setShowDierModal] = useState(false);
  const [selectedDierInfo, setSelectedDierInfo] = useState<any>(null);
  
  const [aankopen, setAankopen] = useState<Aankoop[]>(() => generateAankopen());
  const [geboortes, setGeboortes] = useState<Geboorte[]>(() => generateGeboortes());
  const [overgangen, setOvergangen] = useState<Overgang[]>([]);
  const [verkopen, setVerkopen] = useState<Verkoop[]>(() => generateVerkopen());
  const [interneVerkopen, setInterneVerkopen] = useState<InterneVerkoop[]>(() => generateInterneVerkopen());
  const [sterftes, setSterftes] = useState<Sterfte[]>(() => generateSterftes());
  
  // Mock dieren database
  const [beschikbareDieren] = useState<Dier[]>(() => generateMockDieren());
  
  // Temporary values for fields (to prevent impact wizard showing too early)
  const [tempValues, setTempValues] = useState<Record<string, any>>({});

  const allBookingen: Boeking[] = [
    ...aankopen.map(a => convertToBoeking(a, 'Aankoop')),
    ...geboortes.map(g => convertToBoeking(g, 'Geboorte')),
    ...overgangen.map(o => convertToBoeking(o, 'Overgang')),
    ...verkopen.map(v => convertToBoeking(v, 'Verkoop')),
    ...interneVerkopen.map(iv => convertToBoeking(iv, 'Interne beweging')),
    ...sterftes.map(s => convertToBoeking(s, 'Sterfte'))
  ];

  // BTW calculator helper
  const calculateValueExcludingBTW = (valueInclBTW: string, btwPercentage: string): string => {
    const value = parseFloat(valueInclBTW);
    if (isNaN(value) || !btwPercentage) return valueInclBTW;
    
    const btwRate = parseFloat(btwPercentage.replace('%', '')) / 100;
    const valueExclBTW = value / (1 + btwRate);
    return valueExclBTW.toFixed(2);
  };

  const handleNavigateToAnimal = (sanitel: string) => {
    setSelectedDierInfo({
      sanitelnummer: sanitel,
      naam: 'Mock Dier',
      ras: 'Holstein Friesian',
      geboortedatum: '15/03/2022',
      huidigeCategorie: 'Melkkoe',
      moederdier: 'Bella',
      boekingen: [
        {
          id: '1',
          datum: '15/03/2022',
          handeling: 'Geboorte',
          gewicht: 45,
          leeftijd: 30,
          diercategorie: 'Jongvee',
          waarde: 150
        }
      ]
    });
    setShowDierModal(true);
  };

  const getStatusColor = (status: StatusType) => {
    switch (status) {
      case 'Ingeladen': return 'bg-blue-50 text-blue-700';
      case 'Niet afgewerkt': return 'bg-yellow-50 text-yellow-700';
      case 'Afgewerkt': return 'bg-green-50 text-green-700';
      case 'Verwijderd': return 'bg-red-50 text-red-700';
      default: return '';
    }
  };

  const updateStatus = (id: string, newStatus: StatusType, type: string) => {
    if (type === 'aankoop') {
      setAankopen(aankopen.map(a => a.id === id ? { ...a, status: newStatus } : a));
    } else if (type === 'geboorte') {
      setGeboortes(geboortes.map(g => g.id === id ? { ...g, status: newStatus } : g));
    } else if (type === 'overgang') {
      setOvergangen(overgangen.map(o => o.id === id ? { ...o, status: newStatus } : o));
    } else if (type === 'verkoop') {
      setVerkopen(verkopen.map(v => v.id === id ? { ...v, status: newStatus } : v));
    } else if (type === 'interneVerkoop') {
      setInterneVerkopen(interneVerkopen.map(iv => iv.id === id ? { ...iv, status: newStatus } : iv));
    } else if (type === 'sterfte') {
      setSterftes(sterftes.map(s => s.id === id ? { ...s, status: newStatus } : s));
    }
  };

  // Check for impact before updating
  const checkAndUpdate = (type: string, id: string, field: string, value: any, currentItem: any) => {
    // @ts-ignore
    const isHighImpact = highImpactFields[type]?.includes(field);
    
    if (isHighImpact) {
      const originalBoeking = convertToBoeking(currentItem, type.charAt(0).toUpperCase() + type.slice(1));
      const pendingUpdate = { [field]: value };
      const impactResult = analyzeImpact(originalBoeking, pendingUpdate, allBookingen);
      
      if (impactResult.hasHighImpact) {
        setImpactWizard({
          show: true,
          originalBoeking: originalBoeking,
          pendingUpdate: pendingUpdate,
          affectedBookingIds: impactResult.affectedBookings,
          impactReason: impactResult.reason || '',
          changedField: impactResult.changedField,
          type: type,
          itemId: id
        });
        return false; // Don't update yet
      }
    }
    return true; // Update directly
  };

  const handleImpactWizardComplete = (updatedBookings: Boeking[]) => {
    // Apply the update to the specific item
    const { type, itemId, pendingUpdate } = impactWizard;
    
    if (type === 'aankoop') {
      setAankopen(aankopen.map(a => a.id === itemId ? { ...a, ...pendingUpdate, isManuallyEdited: { ...a.isManuallyEdited, ...Object.keys(pendingUpdate).reduce((acc, key) => ({ ...acc, [key]: true }), {}) } } : a));
    } else if (type === 'geboorte') {
      setGeboortes(geboortes.map(g => g.id === itemId ? { ...g, ...pendingUpdate, isManuallyEdited: { ...g.isManuallyEdited, ...Object.keys(pendingUpdate).reduce((acc, key) => ({ ...acc, [key]: true }), {}) } } : g));
    } else if (type === 'overgang') {
      setOvergangen(overgangen.map(o => o.id === itemId ? { ...o, ...pendingUpdate, isManuallyEdited: { ...o.isManuallyEdited, ...Object.keys(pendingUpdate).reduce((acc, key) => ({ ...acc, [key]: true }), {}) } } : o));
    } else if (type === 'verkoop') {
      setVerkopen(verkopen.map(v => v.id === itemId ? { ...v, ...pendingUpdate, isManuallyEdited: { ...v.isManuallyEdited, ...Object.keys(pendingUpdate).reduce((acc, key) => ({ ...acc, [key]: true }), {}) } } : v));
    } else if (type === 'interneVerkoop') {
      setInterneVerkopen(interneVerkopen.map(iv => iv.id === itemId ? { ...iv, ...pendingUpdate, isManuallyEdited: { ...iv.isManuallyEdited, ...Object.keys(pendingUpdate).reduce((acc, key) => ({ ...acc, [key]: true }), {}) } } : iv));
    }
    
    setImpactWizard({ ...impactWizard, show: false });
  };

  // Handle BTW calculator for Aankopen
  const handleBTWCalculatorAankoop = (id: string) => {
    const aankoop = aankopen.find(a => a.id === id);
    if (!aankoop || !aankoop.waarde || !aankoop.btwPercentage) {
      toast.error('Gelieve eerst een waarde en BTW percentage in te geven');
      return;
    }
    
    const newValue = calculateValueExcludingBTW(aankoop.waarde, aankoop.btwPercentage);
    updateAankoop(id, 'waarde', newValue);
    toast.success(`BTW afgetrokken: €${newValue}`);
  };

  // Handle BTW calculator for Verkopen
  const handleBTWCalculatorVerkoop = (id: string) => {
    const verkoop = verkopen.find(v => v.id === id);
    if (!verkoop || !verkoop.waarde || !verkoop.btwPercentage) {
      toast.error('Gelieve eerst een waarde en BTW percentage in te geven');
      return;
    }
    
    const newValue = calculateValueExcludingBTW(verkoop.waarde, verkoop.btwPercentage);
    updateVerkoop(id, 'waarde', newValue);
    toast.success(`BTW afgetrokken: €${newValue}`);
  };

  // Update handlers for each type
  const updateAankoop = (id: string, field: keyof Aankoop, value: any) => {
    const currentAankoop = aankopen.find(a => a.id === id);
    if (!currentAankoop) return;
    
    if (!checkAndUpdate('aankoop', id, field, value, currentAankoop)) return;
    
    setAankopen(aankopen.map(a => {
      if (a.id === id) {
        const updated = { 
          ...a, 
          [field]: value,
          isManuallyEdited: { ...a.isManuallyEdited, [field]: true }
        };
        return updated;
      }
      return a;
    }));
  };

  const updateGeboorte = (id: string, field: keyof Geboorte, value: any) => {
    const currentGeboorte = geboortes.find(g => g.id === id);
    if (!currentGeboorte) return;
    
    if (!checkAndUpdate('geboorte', id, field, value, currentGeboorte)) return;
    
    setGeboortes(geboortes.map(g => {
      if (g.id === id) {
        const updated: any = { 
          ...g, 
          [field]: value,
          isManuallyEdited: { ...g.isManuallyEdited, [field]: true }
        };
        
        // Clear waarde when doodgeboren
        if (field === 'doodgeboren' && value === true) {
          updated.waarde = '';
        }
        
        return updated;
      }
      return g;
    }));
  };

  const updateOvergang = (id: string, field: keyof Overgang, value: any) => {
    const currentOvergang = overgangen.find(o => o.id === id);
    if (!currentOvergang) return;
    
    // Handle naam selection - update sanitelnummer and huidigeCategorie
    if (field === 'naam') {
      const selectedDier = beschikbareDieren.find(d => d.naam === value);
      if (selectedDier) {
        setOvergangen(overgangen.map(o => {
          if (o.id === id) {
            return {
              ...o,
              naam: value,
              sanitelnummer: selectedDier.sanitelnummer,
              huidigeCategorie: selectedDier.categorie,
              geboortedatum: selectedDier.geboortedatum,
              leeftijd: calculateAgeInMonths(selectedDier.geboortedatum),
              isManuallyEdited: { ...o.isManuallyEdited, naam: true }
            };
          }
          return o;
        }));
        return;
      }
    }
    
    if (!checkAndUpdate('overgang', id, field, value, currentOvergang)) return;
    
    setOvergangen(overgangen.map(o => {
      if (o.id === id) {
        return { 
          ...o, 
          [field]: value,
          isManuallyEdited: { ...o.isManuallyEdited, [field]: true }
        };
      }
      return o;
    }));
  };

  const updateVerkoop = (id: string, field: keyof Verkoop, value: any) => {
    const currentVerkoop = verkopen.find(v => v.id === id);
    if (!currentVerkoop) return;
    
    if (!checkAndUpdate('verkoop', id, field, value, currentVerkoop)) return;
    
    setVerkopen(verkopen.map(v => {
      if (v.id === id) {
        const updated: any = { 
          ...v, 
          [field]: value,
          isManuallyEdited: { ...v.isManuallyEdited, [field]: true }
        };
        
        // Recalculate slaughter weight when levendGewicht changes
        if (field === 'levendGewicht') {
          updated.geslachtGewicht = calculateSlaughterWeight(value, v.slachtPercentage);
        }
        
        return updated;
      }
      return v;
    }));
  };

  const updateInterneVerkoop = (id: string, field: keyof InterneVerkoop, value: any) => {
    const currentIV = interneVerkopen.find(iv => iv.id === id);
    if (!currentIV) return;
    
    if (!checkAndUpdate('interneVerkoop', id, field, value, currentIV)) return;
    
    setInterneVerkopen(interneVerkopen.map(iv => {
      if (iv.id === id) {
        return { 
          ...iv, 
          [field]: value,
          isManuallyEdited: { ...iv.isManuallyEdited, [field]: true }
        };
      }
      return iv;
    }));
  };

  const updateSterfte = (id: string, field: keyof Sterfte, value: any) => {
    const currentSterfte = sterftes.find(s => s.id === id);
    if (!currentSterfte) return;
    
    if (!checkAndUpdate('sterfte', id, field, value, currentSterfte)) return;
    
    setSterftes(sterftes.map(s => {
      if (s.id === id) {
        return { 
          ...s, 
          [field]: value,
          isManuallyEdited: { ...s.isManuallyEdited, [field]: true }
        };
      }
      return s;
    }));
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleNext = () => {
    if (currentStep < 6) {
      setCurrentStep(currentStep + 1);
    } else {
      toast.success('Maandverwerking voltooid!');
      onClose();
    }
  };

  const canProceed = () => {
    if (currentStep === 1) {
      return aankopen.every(a => a.waarde && a.btwPercentage && a.diercategorie);
    } else if (currentStep === 2) {
      return geboortes.every(g => g.naamKalf && g.diercategorieKalf && g.rasKalfType && g.waarde && g.btwPercentage);
    } else if (currentStep === 3) {
      return overgangen.every(o => o.nieuweCategorie && o.naam);
    } else if (currentStep === 4) {
      return verkopen.every(v => v.waarde && v.btwPercentage && v.afnemer && v.verkoopswijze);
    } else if (currentStep === 5) {
      return interneVerkopen.every(iv => iv.bedrijfstakNaar);
    }
    return true;
  };

  const handleNieuweBoeking = (type: string) => {
    const defaultDatum = `15/08/2024`;
    const defaultGeboortedatum = `15/03/2022`;
    const newId = `${type[0]}${Date.now()}`;
    
    const existingNames = [
      ...aankopen.map(a => a.naam),
      ...geboortes.map(g => g.naamKalf),
      ...verkopen.map(v => v.naam),
      ...sterftes.map(s => s.naam)
    ];

    if (type === 'aankoop') {
      const sanitel = `BE${Math.floor(Math.random() * 900000000) + 100000000}`;
      const naam = generateUniqueDierNaam(sanitel, defaultDatum, existingNames);
      const newAankoop: Aankoop = {
        id: newId,
        datum: defaultDatum,
        geboortedatum: defaultGeboortedatum,
        gewicht: 0,
        waarde: '',
        btwPercentage: '',
        diercategorie: '',
        sanitelnummer: sanitel,
        naam: naam,
        rasType: rasTypes[0],
        nota: '',
        status: 'Niet afgewerkt',
        isManuallyEdited: {}
      };
      setAankopen([...aankopen, newAankoop]);
      toast.success('Nieuwe aankoop toegevoegd');
    } else if (type === 'geboorte') {
      const sanitelKalf = `BE${Math.floor(Math.random() * 900000000) + 100000000}`;
      const naamKalf = generateUniqueDierNaam(sanitelKalf, defaultDatum, existingNames);
      const newGeboorte: Geboorte = {
        id: newId,
        datum: defaultDatum,
        geboortedatum: defaultDatum,
        naamKalf: naamKalf,
        sanitelnummerKalf: sanitelKalf,
        diercategorieKalf: '',
        rasKalfType: '',
        gewicht: 0,
        waarde: '',
        btwPercentage: '',
        doodgeboren: false,
        meerling: false,
        diercategorieMoeder: '',
        sanitelnummerMoeder: '',
        naamMoeder: '',
        nota: '',
        status: 'Niet afgewerkt',
        sanitelnummer: sanitelKalf,
        isManuallyEdited: {}
      };
      setGeboortes([...geboortes, newGeboorte]);
      toast.success('Nieuwe geboorte toegevoegd');
    } else if (type === 'overgang') {
      const newOvergang: Overgang = {
        id: newId,
        datum: defaultDatum,
        naam: '',
        geboortedatum: '',
        leeftijd: '',
        huidigeCategorie: '',
        nieuweCategorie: '',
        sanitelnummer: '',
        nota: '',
        status: 'Niet afgewerkt',
        isManuallyEdited: {}
      };
      setOvergangen([...overgangen, newOvergang]);
      toast.success('Nieuwe overgang toegevoegd');
    } else if (type === 'verkoop') {
      const sanitel = `BE${Math.floor(Math.random() * 900000000) + 100000000}`;
      const naam = generateUniqueDierNaam(sanitel, defaultDatum, existingNames);
      const newVerkoop: Verkoop = {
        id: newId,
        datum: defaultDatum,
        geboortedatum: defaultGeboortedatum,
        levendGewicht: 0,
        geslachtGewicht: 0,
        slachtPercentage: 55,
        waarde: '',
        btwPercentage: '',
        afnemer: '',
        leeftijd: calculateAgeInMonths(defaultGeboortedatum),
        diercategorie: '',
        sanitelnummer: sanitel,
        naam: naam,
        noodslacht: false,
        afgekeurd: false,
        verkoopswijze: verkoopswijzen[0],
        nota: '',
        status: 'Niet afgewerkt',
        isManuallyEdited: {}
      };
      setVerkopen([...verkopen, newVerkoop]);
      toast.success('Nieuwe verkoop toegevoegd');
    } else if (type === 'interneVerkoop') {
      const newInterneVerkoop: InterneVerkoop = {
        id: newId,
        datum: defaultDatum,
        geboortedatum: defaultGeboortedatum,
        gewicht: 0,
        waarde: '0',
        leeftijd: calculateAgeInMonths(defaultGeboortedatum),
        diercategorie: '',
        sanitelnummer: '',
        bedrijfstakNaar: '',
        nota: '',
        status: 'Niet afgewerkt',
        isManuallyEdited: {}
      };
      setInterneVerkopen([...interneVerkopen, newInterneVerkoop]);
      toast.success('Nieuwe interne verkoop toegevoegd');
    } else if (type === 'sterfte') {
      const sanitel = `BE${Math.floor(Math.random() * 900000000) + 100000000}`;
      const naam = generateUniqueDierNaam(sanitel, defaultDatum, existingNames);
      const newSterfte: Sterfte = {
        id: newId,
        datum: defaultDatum,
        geboortedatum: defaultGeboortedatum,
        leeftijd: calculateAgeInMonths(defaultGeboortedatum),
        diercategorie: '',
        sanitelnummer: sanitel,
        naam: naam,
        nota: '',
        status: 'Niet afgewerkt',
        isManuallyEdited: {}
      };
      setSterftes([...sterftes, newSterfte]);
      toast.success('Nieuwe sterfte toegevoegd');
    }
  };

  const getStepLabel = (step: number) => {
    switch (step) {
      case 1: return `Aankopen (${aankopen.length})`;
      case 2: return `Geboortes (${geboortes.length})`;
      case 3: return `Overgangen (${overgangen.length})`;
      case 4: return `Verkopen (${verkopen.length})`;
      case 5: return `Interne verkopen (${interneVerkopen.length})`;
      case 6: return `Sterftes (${sterftes.length})`;
      default: return '';
    }
  };

  return (
    <>
      {/* Main Wizard - Full Page */}
      <div className="h-full flex flex-col bg-white">
        {/* Header */}
        <div className="border-b border-gray-200 px-8 py-4 flex items-center justify-between shrink-0">
          <div>
            <h2 className="text-2xl font-bold text-[#101828]">Facturen individueel vee - {maand}</h2>
            <p className="text-sm text-gray-600 mt-1">Verwerk alle dierboekingen voor deze maand</p>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Step indicator */}
        <div className="border-b border-gray-200 px-8 py-4 shrink-0">
          <div className="flex items-center gap-2">
            {[1, 2, 3, 4, 5, 6].map((step) => (
              <div key={step} className="flex items-center">
                <div className={`flex items-center gap-2 px-3 py-2 rounded ${currentStep === step ? 'bg-[#155dfc] text-white' : 'bg-gray-100 text-gray-600'}`}>
                  <span className="text-sm font-medium">{step}</span>
                  <span className="text-xs">{getStepLabel(step)}</span>
                </div>
                {step < 6 && <ChevronRight className="w-4 h-4 text-gray-400 mx-1" />}
              </div>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto px-8 py-6">
          {/* Step 1: Aankopen */}
          {currentStep === 1 && (
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-[#101828]">Aankopen ({aankopen.length} rijen)</h2>
                <button
                  onClick={() => handleNieuweBoeking('aankoop')}
                  className="h-[34px] px-4 bg-[#155dfc] text-white rounded text-[14px] hover:bg-[#1348d6] flex items-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  Nieuwe boeking
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full border border-gray-200 text-xs">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-2 py-2 text-left text-xs font-semibold text-[#364153] border-r">Datum*</th>
                      <th className="px-2 py-2 text-left text-xs font-semibold text-[#364153] border-r">Sanitelnr</th>
                      <th className="px-2 py-2 text-left text-xs font-semibold text-[#364153] border-r">Naam*</th>
                      <th className="px-2 py-2 text-left text-xs font-semibold text-[#364153] border-r">Geboortedatum</th>
                      <th className="px-2 py-2 text-left text-xs font-semibold text-[#364153] border-r">Diercategorie*</th>
                      <th className="px-2 py-2 text-left text-xs font-semibold text-[#364153] border-r">Rastype*</th>
                      <th className="px-2 py-2 text-left text-xs font-semibold text-[#364153] border-r">Gewicht (kg)*</th>
                      <th className="px-2 py-2 text-left text-xs font-semibold text-[#364153] border-r">Waarde (€)*</th>
                      <th className="px-2 py-2 text-left text-xs font-semibold text-[#364153] border-r">BTW*</th>
                      <th className="px-2 py-2 text-left text-xs font-semibold text-[#364153] border-r">Nota</th>
                      <th className="px-2 py-2 text-left text-xs font-semibold text-[#364153]">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {aankopen.map((aankoop) => (
                      <tr key={aankoop.id} className="border-b hover:bg-gray-50">
                        <td className="px-2 py-2 border-r">
                          <div className="flex items-center gap-1">
                            <input
                              type="text"
                              value={aankoop.datum}
                              disabled
                              className="w-24 text-xs border rounded px-1 py-1 bg-gray-100 cursor-not-allowed"
                            />
                            {aankoop.isManuallyEdited?.datum && (
                              <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                            )}
                          </div>
                        </td>
                        <td className="px-2 py-2 border-r">
                          <input
                            type="text"
                            value={aankoop.sanitelnummer}
                            disabled
                            className="w-32 text-xs border rounded px-1 py-1 bg-gray-100 cursor-not-allowed font-mono"
                          />
                        </td>
                        <td className="px-2 py-2 border-r">
                          <div className="flex items-center gap-1">
                            <button
                              onClick={() => handleNavigateToAnimal(aankoop.sanitelnummer)}
                              className="hover:opacity-80"
                              title="Bekijk dierhistoriek"
                            >
                              <img src={cowIcon} alt="Dier" className="w-4 h-4" />
                            </button>
                            <input
                              type="text"
                              value={aankoop.naam}
                              onChange={(e) => updateAankoop(aankoop.id, 'naam', e.target.value)}
                              className="w-20 text-xs border rounded px-1 py-1"
                            />
                            {aankoop.isManuallyEdited?.naam && (
                              <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                            )}
                          </div>
                        </td>
                        <td className="px-2 py-2 border-r">
                          <input
                            type="text"
                            value={aankoop.geboortedatum}
                            onChange={(e) => updateAankoop(aankoop.id, 'geboortedatum', e.target.value)}
                            className="w-24 text-xs border rounded px-1 py-1"
                          />
                        </td>
                        <td className="px-2 py-2 border-r">
                          <div className="flex items-center gap-1">
                            <select
                              value={tempValues[`aankoop-${aankoop.id}-diercategorie`] ?? aankoop.diercategorie}
                              onChange={(e) => setTempValues({...tempValues, [`aankoop-${aankoop.id}-diercategorie`]: e.target.value})}
                              onBlur={(e) => {
                                updateAankoop(aankoop.id, 'diercategorie', e.target.value);
                                setTempValues({...tempValues, [`aankoop-${aankoop.id}-diercategorie`]: undefined});
                              }}
                              className={`w-full text-xs border rounded px-1 py-1 ${!aankoop.diercategorie ? 'border-red-300 bg-red-50' : ''}`}
                            >
                              <option value="">--</option>
                              {diercategorieën.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                            </select>
                            {aankoop.isManuallyEdited?.diercategorie && (
                              <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                            )}
                          </div>
                        </td>
                        <td className="px-2 py-2 border-r">
                          <div className="flex items-center gap-1">
                            <select
                              value={aankoop.rasType}
                              onChange={(e) => updateAankoop(aankoop.id, 'rasType', e.target.value)}
                              className="w-full text-xs border rounded px-1 py-1"
                            >
                              {rasTypes.map(ras => <option key={ras} value={ras}>{ras}</option>)}
                            </select>
                            {aankoop.isManuallyEdited?.rasType && (
                              <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                            )}
                          </div>
                        </td>
                        <td className="px-2 py-2 border-r">
                          <div className="flex items-center gap-1">
                            <input
                              type="number"
                              value={tempValues[`aankoop-${aankoop.id}-gewicht`] ?? aankoop.gewicht}
                              onChange={(e) => setTempValues({...tempValues, [`aankoop-${aankoop.id}-gewicht`]: parseInt(e.target.value) || 0})}
                              onBlur={(e) => {
                                updateAankoop(aankoop.id, 'gewicht', parseInt(e.target.value) || 0);
                                setTempValues({...tempValues, [`aankoop-${aankoop.id}-gewicht`]: undefined});
                              }}
                              className="w-16 text-xs border rounded px-1 py-1"
                            />
                            {aankoop.isManuallyEdited?.gewicht && (
                              <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                            )}
                          </div>
                        </td>
                        <td className="px-2 py-2 border-r">
                          <div className="flex items-center gap-1">
                            <input
                              type="text"
                              value={tempValues[`aankoop-${aankoop.id}-waarde`] ?? aankoop.waarde}
                              onChange={(e) => setTempValues({...tempValues, [`aankoop-${aankoop.id}-waarde`]: e.target.value})}
                              onBlur={(e) => {
                                updateAankoop(aankoop.id, 'waarde', e.target.value);
                                setTempValues({...tempValues, [`aankoop-${aankoop.id}-waarde`]: undefined});
                              }}
                              className={`w-16 text-xs border rounded px-1 py-1 ${!aankoop.waarde ? 'border-red-300 bg-red-50' : ''}`}
                            />
                            <button
                              onClick={() => handleBTWCalculatorAankoop(aankoop.id)}
                              className="hover:bg-gray-100 rounded p-0.5"
                              title="BTW aftrekken automatisch, volgens het ingegeven %, van het ingegeven bedrag"
                            >
                              <img src={calculatorIcon} alt="BTW calculator" className="w-4 h-4" />
                            </button>
                            {aankoop.isManuallyEdited?.waarde && (
                              <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                            )}
                          </div>
                        </td>
                        <td className="px-2 py-2 border-r">
                          <div className="flex items-center gap-1">
                            <select
                              value={aankoop.btwPercentage}
                              onChange={(e) => updateAankoop(aankoop.id, 'btwPercentage', e.target.value)}
                              className={`w-full text-xs border rounded px-1 py-1 ${!aankoop.btwPercentage ? 'border-red-300 bg-red-50' : ''}`}
                            >
                              <option value="">--</option>
                              {btwOpties.map(btw => <option key={btw} value={btw}>{btw}</option>)}
                            </select>
                            {aankoop.isManuallyEdited?.btwPercentage && (
                              <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                            )}
                          </div>
                        </td>
                        <td className="px-2 py-2 border-r">
                          <input
                            type="text"
                            value={aankoop.nota}
                            onChange={(e) => updateAankoop(aankoop.id, 'nota', e.target.value)}
                            className="w-32 text-xs border rounded px-1 py-1"
                            placeholder="Vrije tekst..."
                          />
                        </td>
                        <td className="px-2 py-2">
                          <select
                            value={aankoop.status}
                            onChange={(e) => updateStatus(aankoop.id, e.target.value as StatusType, 'aankoop')}
                            className={`w-full text-xs border rounded px-1 py-1 ${getStatusColor(aankoop.status)}`}
                          >
                            <option value="Ingeladen">Ingeladen</option>
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
            </div>
          )}

          {/* Step 2: Geboortes */}
          {currentStep === 2 && (
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-[#101828]">Geboortes ({geboortes.length} rijen)</h2>
                <button
                  onClick={() => handleNieuweBoeking('geboorte')}
                  className="h-[34px] px-4 bg-[#155dfc] text-white rounded text-[14px] hover:bg-[#1348d6] flex items-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  Nieuwe boeking
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full border border-gray-200 text-xs">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-2 py-2 text-left text-xs font-semibold text-[#364153] border-r">Datum*</th>
                      <th className="px-2 py-2 text-left text-xs font-semibold text-[#364153] border-r">Sanitel kalf</th>
                      <th className="px-2 py-2 text-left text-xs font-semibold text-[#364153] border-r">Naam kalf*</th>
                      <th className="px-2 py-2 text-left text-xs font-semibold text-[#364153] border-r">Categorie kalf*</th>
                      <th className="px-2 py-2 text-left text-xs font-semibold text-[#364153] border-r">Ras kalf*</th>
                      <th className="px-2 py-2 text-left text-xs font-semibold text-[#364153] border-r">Gewicht (kg)*</th>
                      <th className="px-2 py-2 text-left text-xs font-semibold text-[#364153] border-r">Waarde (€)*</th>
                      <th className="px-2 py-2 text-left text-xs font-semibold text-[#364153] border-r">BTW*</th>
                      <th className="px-2 py-2 text-left text-xs font-semibold text-[#364153] border-r">Doodgeboren</th>
                      <th className="px-2 py-2 text-left text-xs font-semibold text-[#364153] border-r">Meerling</th>
                      <th className="px-2 py-2 text-left text-xs font-semibold text-[#364153] border-r">Moeder</th>
                      <th className="px-2 py-2 text-left text-xs font-semibold text-[#364153] border-r">Nota</th>
                      <th className="px-2 py-2 text-left text-xs font-semibold text-[#364153]">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {geboortes.map((geboorte) => (
                      <tr key={geboorte.id} className="border-b hover:bg-gray-50">
                        <td className="px-2 py-2 border-r">
                          <input
                            type="text"
                            value={geboorte.datum}
                            disabled
                            className="w-24 text-xs border rounded px-1 py-1 bg-gray-100 cursor-not-allowed"
                          />
                        </td>
                        <td className="px-2 py-2 border-r">
                          <input
                            type="text"
                            value={geboorte.sanitelnummerKalf}
                            disabled
                            className="w-32 text-xs border rounded px-1 py-1 bg-gray-100 cursor-not-allowed font-mono"
                          />
                        </td>
                        <td className="px-2 py-2 border-r">
                          <div className="flex items-center gap-1">
                            <button
                              onClick={() => handleNavigateToAnimal(geboorte.sanitelnummerKalf)}
                              className="hover:opacity-80"
                              title="Bekijk dierhistoriek"
                            >
                              <img src={cowIcon} alt="Dier" className="w-4 h-4" />
                            </button>
                            <input
                              type="text"
                              value={geboorte.naamKalf}
                              onChange={(e) => updateGeboorte(geboorte.id, 'naamKalf', e.target.value)}
                              className={`w-20 text-xs border rounded px-1 py-1 ${!geboorte.naamKalf ? 'border-red-300 bg-red-50' : ''}`}
                            />
                            {geboorte.isManuallyEdited?.naamKalf && (
                              <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                            )}
                          </div>
                        </td>
                        <td className="px-2 py-2 border-r">
                          <div className="flex items-center gap-1">
                            <select
                              value={tempValues[`geboorte-${geboorte.id}-diercategorieKalf`] ?? geboorte.diercategorieKalf}
                              onChange={(e) => setTempValues({...tempValues, [`geboorte-${geboorte.id}-diercategorieKalf`]: e.target.value})}
                              onBlur={(e) => {
                                updateGeboorte(geboorte.id, 'diercategorieKalf', e.target.value);
                                setTempValues({...tempValues, [`geboorte-${geboorte.id}-diercategorieKalf`]: undefined});
                              }}
                              className={`w-full text-xs border rounded px-1 py-1 ${!geboorte.diercategorieKalf ? 'border-red-300 bg-red-50' : ''}`}
                            >
                              <option value="">--</option>
                              {diercategorieën.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                            </select>
                            {geboorte.isManuallyEdited?.diercategorieKalf && (
                              <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                            )}
                          </div>
                        </td>
                        <td className="px-2 py-2 border-r">
                          <div className="flex items-center gap-1">
                            <select
                              value={tempValues[`geboorte-${geboorte.id}-rasKalfType`] ?? geboorte.rasKalfType}
                              onChange={(e) => setTempValues({...tempValues, [`geboorte-${geboorte.id}-rasKalfType`]: e.target.value})}
                              onBlur={(e) => {
                                updateGeboorte(geboorte.id, 'rasKalfType', e.target.value);
                                setTempValues({...tempValues, [`geboorte-${geboorte.id}-rasKalfType`]: undefined});
                              }}
                              className={`w-full text-xs border rounded px-1 py-1 ${!geboorte.rasKalfType ? 'border-red-300 bg-red-50' : ''}`}
                            >
                              <option value="">--</option>
                              {rasTypes.map(ras => <option key={ras} value={ras}>{ras}</option>)}
                            </select>
                            {geboorte.isManuallyEdited?.rasKalfType && (
                              <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                            )}
                          </div>
                        </td>
                        <td className="px-2 py-2 border-r">
                          <div className="flex items-center gap-1">
                            <input
                              type="number"
                              value={tempValues[`geboorte-${geboorte.id}-gewicht`] ?? geboorte.gewicht}
                              onChange={(e) => setTempValues({...tempValues, [`geboorte-${geboorte.id}-gewicht`]: parseInt(e.target.value) || 0})}
                              onBlur={(e) => {
                                updateGeboorte(geboorte.id, 'gewicht', parseInt(e.target.value) || 0);
                                setTempValues({...tempValues, [`geboorte-${geboorte.id}-gewicht`]: undefined});
                              }}
                              className="w-16 text-xs border rounded px-1 py-1"
                            />
                            {geboorte.isManuallyEdited?.gewicht && (
                              <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                            )}
                          </div>
                        </td>
                        <td className="px-2 py-2 border-r">
                          <div className="flex items-center gap-1">
                            <input
                              type="text"
                              value={tempValues[`geboorte-${geboorte.id}-waarde`] ?? geboorte.waarde}
                              onChange={(e) => setTempValues({...tempValues, [`geboorte-${geboorte.id}-waarde`]: e.target.value})}
                              onBlur={(e) => {
                                updateGeboorte(geboorte.id, 'waarde', e.target.value);
                                setTempValues({...tempValues, [`geboorte-${geboorte.id}-waarde`]: undefined});
                              }}
                              disabled={geboorte.doodgeboren}
                              className={`w-16 text-xs border rounded px-1 py-1 ${geboorte.doodgeboren ? 'bg-gray-100' : ''} ${!geboorte.waarde && !geboorte.doodgeboren ? 'border-red-300 bg-red-50' : ''}`}
                            />
                            {geboorte.isManuallyEdited?.waarde && (
                              <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                            )}
                          </div>
                        </td>
                        <td className="px-2 py-2 border-r">
                          <div className="flex items-center gap-1">
                            <select
                              value={geboorte.btwPercentage}
                              onChange={(e) => updateGeboorte(geboorte.id, 'btwPercentage', e.target.value)}
                              className={`w-full text-xs border rounded px-1 py-1 ${!geboorte.btwPercentage ? 'border-red-300 bg-red-50' : ''}`}
                            >
                              <option value="">--</option>
                              {btwOpties.map(btw => <option key={btw} value={btw}>{btw}</option>)}
                            </select>
                            {geboorte.isManuallyEdited?.btwPercentage && (
                              <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                            )}
                          </div>
                        </td>
                        <td className="px-2 py-2 border-r text-center">
                          <input
                            type="checkbox"
                            checked={geboorte.doodgeboren}
                            onChange={(e) => updateGeboorte(geboorte.id, 'doodgeboren', e.target.checked)}
                            className="w-4 h-4"
                          />
                        </td>
                        <td className="px-2 py-2 border-r text-center">
                          <input
                            type="checkbox"
                            checked={geboorte.meerling}
                            onChange={(e) => updateGeboorte(geboorte.id, 'meerling', e.target.checked)}
                            className="w-4 h-4"
                          />
                        </td>
                        <td className="px-2 py-2 border-r">
                          <div className="flex items-center gap-1">
                            <button
                              onClick={() => handleNavigateToAnimal(geboorte.sanitelnummerMoeder)}
                              className="hover:opacity-80"
                              title="Bekijk dierhistoriek"
                            >
                              <img src={cowIcon} alt="Dier" className="w-4 h-4" />
                            </button>
                            <input
                              type="text"
                              value={geboorte.naamMoeder}
                              disabled
                              className="w-24 text-xs border rounded px-1 py-1 bg-gray-100 cursor-not-allowed"
                            />
                          </div>
                        </td>
                        <td className="px-2 py-2 border-r">
                          <input
                            type="text"
                            value={geboorte.nota}
                            onChange={(e) => updateGeboorte(geboorte.id, 'nota', e.target.value)}
                            className="w-32 text-xs border rounded px-1 py-1"
                            placeholder="Vrije tekst..."
                          />
                        </td>
                        <td className="px-2 py-2">
                          <select
                            value={geboorte.status}
                            onChange={(e) => updateStatus(geboorte.id, e.target.value as StatusType, 'geboorte')}
                            className={`w-full text-xs border rounded px-1 py-1 ${getStatusColor(geboorte.status)}`}
                          >
                            <option value="Ingeladen">Ingeladen</option>
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
            </div>
          )}

          {/* Step 3: Overgangen */}
          {currentStep === 3 && (
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-[#101828]">Overgangen ({overgangen.length} rijen)</h2>
                <button
                  onClick={() => handleNieuweBoeking('overgang')}
                  className="h-[34px] px-4 bg-[#155dfc] text-white rounded text-[14px] hover:bg-[#1348d6] flex items-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  Nieuwe boeking
                </button>
              </div>
              {overgangen.length === 0 ? (
                <p className="text-gray-500 italic">Geen overgangen. Klik op "Nieuwe boeking" om een overgang toe te voegen.</p>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full border border-gray-200 text-xs">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-2 py-2 text-left text-xs font-semibold text-[#364153] border-r">Datum*</th>
                        <th className="px-2 py-2 text-left text-xs font-semibold text-[#364153] border-r">Naam*</th>
                        <th className="px-2 py-2 text-left text-xs font-semibold text-[#364153] border-r">Sanitelnr</th>
                        <th className="px-2 py-2 text-left text-xs font-semibold text-[#364153] border-r">Huidige cat.</th>
                        <th className="px-2 py-2 text-left text-xs font-semibold text-[#364153] border-r">Nieuwe cat.*</th>
                        <th className="px-2 py-2 text-left text-xs font-semibold text-[#364153] border-r">Leeftijd (m)</th>
                        <th className="px-2 py-2 text-left text-xs font-semibold text-[#364153] border-r">Nota</th>
                        <th className="px-2 py-2 text-left text-xs font-semibold text-[#364153]">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {overgangen.map((overgang) => (
                        <tr key={overgang.id} className="border-b hover:bg-gray-50">
                          <td className="px-2 py-2 border-r">
                            <input
                              type="text"
                              value={overgang.datum}
                              onChange={(e) => updateOvergang(overgang.id, 'datum', e.target.value)}
                              className="w-24 text-xs border rounded px-1 py-1"
                            />
                          </td>
                          <td className="px-2 py-2 border-r">
                            <div className="flex items-center gap-1">
                              {overgang.sanitelnummer && (
                                <button
                                  onClick={() => handleNavigateToAnimal(overgang.sanitelnummer)}
                                  className="hover:opacity-80"
                                  title="Bekijk dierhistoriek"
                                >
                                  <img src={cowIcon} alt="Dier" className="w-4 h-4" />
                                </button>
                              )}
                              <select
                                value={overgang.naam}
                                onChange={(e) => updateOvergang(overgang.id, 'naam', e.target.value)}
                                className={`w-full text-xs border rounded px-1 py-1 ${!overgang.naam ? 'border-red-300 bg-red-50' : ''}`}
                              >
                                <option value="">-- Selecteer dier --</option>
                                {beschikbareDieren.map(dier => (
                                  <option key={dier.sanitelnummer} value={dier.naam}>
                                    {dier.naam} ({dier.categorie})
                                  </option>
                                ))}
                              </select>
                              {overgang.isManuallyEdited?.naam && (
                                <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                              )}
                            </div>
                          </td>
                          <td className="px-2 py-2 border-r">
                            <input
                              type="text"
                              value={overgang.sanitelnummer}
                              disabled
                              className="w-32 text-xs border rounded px-1 py-1 bg-gray-100 cursor-not-allowed font-mono"
                            />
                          </td>
                          <td className="px-2 py-2 border-r">
                            <input
                              type="text"
                              value={overgang.huidigeCategorie}
                              disabled
                              className="w-28 text-xs border rounded px-1 py-1 bg-gray-100 cursor-not-allowed"
                            />
                          </td>
                          <td className="px-2 py-2 border-r">
                            <div className="flex items-center gap-1">
                              <select
                                value={tempValues[`overgang-${overgang.id}-nieuweCategorie`] ?? overgang.nieuweCategorie}
                                onChange={(e) => setTempValues({...tempValues, [`overgang-${overgang.id}-nieuweCategorie`]: e.target.value})}
                                onBlur={(e) => {
                                  updateOvergang(overgang.id, 'nieuweCategorie', e.target.value);
                                  setTempValues({...tempValues, [`overgang-${overgang.id}-nieuweCategorie`]: undefined});
                                }}
                                className={`w-full text-xs border rounded px-1 py-1 ${!overgang.nieuweCategorie ? 'border-red-300 bg-red-50' : ''}`}
                              >
                                <option value="">--</option>
                                {diercategorieën.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                              </select>
                              {overgang.isManuallyEdited?.nieuweCategorie && (
                                <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                              )}
                            </div>
                          </td>
                          <td className="px-2 py-2 border-r">
                            <input
                              type="text"
                              value={overgang.leeftijd}
                              disabled
                              className="w-16 text-xs border rounded px-1 py-1 bg-gray-100 cursor-not-allowed"
                            />
                          </td>
                          <td className="px-2 py-2 border-r">
                            <input
                              type="text"
                              value={overgang.nota}
                              onChange={(e) => updateOvergang(overgang.id, 'nota', e.target.value)}
                              className="w-32 text-xs border rounded px-1 py-1"
                              placeholder="Vrije tekst..."
                            />
                          </td>
                          <td className="px-2 py-2">
                            <select
                              value={overgang.status}
                              onChange={(e) => updateStatus(overgang.id, e.target.value as StatusType, 'overgang')}
                              className={`w-full text-xs border rounded px-1 py-1 ${getStatusColor(overgang.status)}`}
                            >
                              <option value="Ingeladen">Ingeladen</option>
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
              )}
            </div>
          )}

          {/* Step 4: Verkopen */}
          {currentStep === 4 && (
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-[#101828]">Verkopen ({verkopen.length} rijen)</h2>
                <button
                  onClick={() => handleNieuweBoeking('verkoop')}
                  className="h-[34px] px-4 bg-[#155dfc] text-white rounded text-[14px] hover:bg-[#1348d6] flex items-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  Nieuwe boeking
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full border border-gray-200 text-xs">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-2 py-2 text-left text-xs font-semibold text-[#364153] border-r">Datum*</th>
                      <th className="px-2 py-2 text-left text-xs font-semibold text-[#364153] border-r">Naam*</th>
                      <th className="px-2 py-2 text-left text-xs font-semibold text-[#364153] border-r">Diercategorie</th>
                      <th className="px-2 py-2 text-left text-xs font-semibold text-[#364153] border-r">Levend gew. (kg)*</th>
                      <th className="px-2 py-2 text-left text-xs font-semibold text-[#364153] border-r">Geslacht gew. (kg)</th>
                      <th className="px-2 py-2 text-left text-xs font-semibold text-[#364153] border-r">Leeftijd (m)</th>
                      <th className="px-2 py-2 text-left text-xs font-semibold text-[#364153] border-r">Waarde*</th>
                      <th className="px-2 py-2 text-left text-xs font-semibold text-[#364153] border-r">BTW*</th>
                      <th className="px-2 py-2 text-left text-xs font-semibold text-[#364153] border-r">Afnemer*</th>
                      <th className="px-2 py-2 text-left text-xs font-semibold text-[#364153] border-r">Noodslacht?</th>
                      <th className="px-2 py-2 text-left text-xs font-semibold text-[#364153] border-r">Afgekeurd?</th>
                      <th className="px-2 py-2 text-left text-xs font-semibold text-[#364153] border-r">Verkoopswijze*</th>
                      <th className="px-2 py-2 text-left text-xs font-semibold text-[#364153] border-r">Nota</th>
                      <th className="px-2 py-2 text-left text-xs font-semibold text-[#364153]">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {verkopen.map((verkoop) => (
                      <tr key={verkoop.id} className="border-b hover:bg-gray-50">
                        <td className="px-2 py-2 border-r">
                          <input
                            type="text"
                            value={verkoop.datum}
                            disabled
                            className="w-24 text-xs border rounded px-1 py-1 bg-gray-100 cursor-not-allowed"
                          />
                        </td>
                        <td className="px-2 py-2 border-r">
                          <div className="flex items-center gap-1">
                            <button
                              onClick={() => handleNavigateToAnimal(verkoop.sanitelnummer)}
                              className="hover:opacity-80"
                              title="Bekijk dierhistoriek"
                            >
                              <img src={cowIcon} alt="Dier" className="w-4 h-4" />
                            </button>
                            <input
                              type="text"
                              value={verkoop.naam}
                              disabled
                              className="w-20 text-xs border rounded px-1 py-1 bg-gray-100 cursor-not-allowed"
                            />
                            {verkoop.isManuallyEdited?.naam && (
                              <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                            )}
                          </div>
                        </td>
                        <td className="px-2 py-2 border-r">
                          <select
                            value={verkoop.diercategorie}
                            onChange={(e) => updateVerkoop(verkoop.id, 'diercategorie', e.target.value)}
                            className="w-full text-xs border rounded px-1 py-1"
                          >
                            {diercategorieën.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                          </select>
                        </td>
                        <td className="px-2 py-2 border-r">
                          <div className="flex items-center gap-1">
                            <input
                              type="number"
                              value={tempValues[`verkoop-${verkoop.id}-levendGewicht`] ?? verkoop.levendGewicht}
                              onChange={(e) => setTempValues({...tempValues, [`verkoop-${verkoop.id}-levendGewicht`]: parseInt(e.target.value) || 0})}
                              onBlur={(e) => {
                                updateVerkoop(verkoop.id, 'levendGewicht', parseInt(e.target.value) || 0);
                                setTempValues({...tempValues, [`verkoop-${verkoop.id}-levendGewicht`]: undefined});
                              }}
                              className="w-16 text-xs border rounded px-1 py-1"
                            />
                            {verkoop.isManuallyEdited?.levendGewicht && (
                              <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                            )}
                          </div>
                        </td>
                        <td className="px-2 py-2 border-r">
                          <input
                            type="number"
                            value={verkoop.geslachtGewicht}
                            disabled
                            className="w-16 text-xs border rounded px-1 py-1 bg-gray-100 cursor-not-allowed"
                          />
                        </td>
                        <td className="px-2 py-2 border-r">
                          <input
                            type="text"
                            value={verkoop.leeftijd}
                            disabled
                            className="w-16 text-xs border rounded px-1 py-1 bg-gray-100 cursor-not-allowed"
                          />
                        </td>
                        <td className="px-2 py-2 border-r">
                          <div className="flex items-center gap-1">
                            <input
                              type="text"
                              value={tempValues[`verkoop-${verkoop.id}-waarde`] ?? verkoop.waarde}
                              onChange={(e) => setTempValues({...tempValues, [`verkoop-${verkoop.id}-waarde`]: e.target.value})}
                              onBlur={(e) => {
                                updateVerkoop(verkoop.id, 'waarde', e.target.value);
                                setTempValues({...tempValues, [`verkoop-${verkoop.id}-waarde`]: undefined});
                              }}
                              className={`w-16 text-xs border rounded px-1 py-1 ${!verkoop.waarde ? 'border-red-300 bg-red-50' : ''}`}
                            />
                            <button
                              onClick={() => handleBTWCalculatorVerkoop(verkoop.id)}
                              className="hover:bg-gray-100 rounded p-0.5"
                              title="BTW aftrekken automatisch, volgens het ingegeven %, van het ingegeven bedrag"
                            >
                              <img src={calculatorIcon} alt="BTW calculator" className="w-4 h-4" />
                            </button>
                            {verkoop.isManuallyEdited?.waarde && (
                              <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                            )}
                          </div>
                        </td>
                        <td className="px-2 py-2 border-r">
                          <select
                            value={verkoop.btwPercentage}
                            onChange={(e) => updateVerkoop(verkoop.id, 'btwPercentage', e.target.value)}
                            className={`w-full text-xs border rounded px-1 py-1 ${!verkoop.btwPercentage ? 'border-red-300 bg-red-50' : ''}`}
                          >
                            <option value="">--</option>
                            {btwOpties.map(btw => <option key={btw} value={btw}>{btw}</option>)}
                          </select>
                        </td>
                        <td className="px-2 py-2 border-r">
                          <select
                            value={verkoop.afnemer}
                            onChange={(e) => updateVerkoop(verkoop.id, 'afnemer', e.target.value)}
                            className={`w-full text-xs border rounded px-1 py-1 ${!verkoop.afnemer ? 'border-red-300 bg-red-50' : ''}`}
                          >
                            <option value="">--</option>
                            {afnemers.map(afn => <option key={afn} value={afn}>{afn}</option>)}
                          </select>
                        </td>
                        <td className="px-2 py-2 border-r text-center">
                          <input
                            type="checkbox"
                            checked={verkoop.noodslacht}
                            onChange={(e) => updateVerkoop(verkoop.id, 'noodslacht', e.target.checked)}
                            className="w-4 h-4"
                          />
                        </td>
                        <td className="px-2 py-2 border-r text-center">
                          <input
                            type="checkbox"
                            checked={verkoop.afgekeurd}
                            onChange={(e) => updateVerkoop(verkoop.id, 'afgekeurd', e.target.checked)}
                            className="w-4 h-4"
                          />
                        </td>
                        <td className="px-2 py-2 border-r">
                          <select
                            value={verkoop.verkoopswijze}
                            onChange={(e) => updateVerkoop(verkoop.id, 'verkoopswijze', e.target.value)}
                            className={`w-full text-xs border rounded px-1 py-1 ${!verkoop.verkoopswijze ? 'border-red-300 bg-red-50' : ''}`}
                          >
                            {verkoopswijzen.map(vw => <option key={vw} value={vw}>{vw}</option>)}
                          </select>
                        </td>
                        <td className="px-2 py-2 border-r">
                          <input
                            type="text"
                            value={verkoop.nota}
                            onChange={(e) => updateVerkoop(verkoop.id, 'nota', e.target.value)}
                            className="w-32 text-xs border rounded px-1 py-1"
                            placeholder="Vrije tekst..."
                          />
                        </td>
                        <td className="px-2 py-2">
                          <select
                            value={verkoop.status}
                            onChange={(e) => updateStatus(verkoop.id, e.target.value as StatusType, 'verkoop')}
                            className={`w-full text-xs border rounded px-1 py-1 ${getStatusColor(verkoop.status)}`}
                          >
                            <option value="Ingeladen">Ingeladen</option>
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
            </div>
          )}

          {/* Step 5: Interne Verkopen */}
          {currentStep === 5 && (
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-[#101828]">Interne verkopen ({interneVerkopen.length} rijen)</h2>
                <button
                  onClick={() => handleNieuweBoeking('interneVerkoop')}
                  className="h-[34px] px-4 bg-[#155dfc] text-white rounded text-[14px] hover:bg-[#1348d6] flex items-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  Nieuwe boeking
                </button>
              </div>
              {interneVerkopen.length === 0 ? (
                <p className="text-gray-500 italic">Geen interne verkopen. Klik op "Nieuwe boeking" om een interne verkoop toe te voegen.</p>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full border border-gray-200 text-xs">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-2 py-2 text-left text-xs font-semibold text-[#364153] border-r">Datum*</th>
                        <th className="px-2 py-2 text-left text-xs font-semibold text-[#364153] border-r">Naam</th>
                        <th className="px-2 py-2 text-left text-xs font-semibold text-[#364153] border-r">Diercategorie</th>
                        <th className="px-2 py-2 text-left text-xs font-semibold text-[#364153] border-r">Bedrijfstak naar*</th>
                        <th className="px-2 py-2 text-left text-xs font-semibold text-[#364153] border-r">Gewicht (kg)*</th>
                        <th className="px-2 py-2 text-left text-xs font-semibold text-[#364153] border-r">Waarde (€)</th>
                        <th className="px-2 py-2 text-left text-xs font-semibold text-[#364153] border-r">Leeftijd (m)</th>
                        <th className="px-2 py-2 text-left text-xs font-semibold text-[#364153] border-r">Nota</th>
                        <th className="px-2 py-2 text-left text-xs font-semibold text-[#364153]">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {interneVerkopen.map((iv) => (
                        <tr key={iv.id} className="border-b hover:bg-gray-50">
                          <td className="px-2 py-2 border-r">
                            <input
                              type="text"
                              value={iv.datum}
                              disabled
                              className="w-24 text-xs border rounded px-1 py-1 bg-gray-100 cursor-not-allowed"
                            />
                          </td>
                          <td className="px-2 py-2 border-r">
                            <div className="flex items-center gap-1">
                              <button
                                onClick={() => handleNavigateToAnimal(iv.sanitelnummer)}
                                className="hover:opacity-80"
                                title="Bekijk dierhistoriek"
                              >
                                <img src={cowIcon} alt="Dier" className="w-4 h-4" />
                              </button>
                              <span className="text-xs text-[#101828]">{iv.naam}</span>
                            </div>
                          </td>
                          <td className="px-2 py-2 border-r">
                            <select
                              value={iv.diercategorie}
                              onChange={(e) => updateInterneVerkoop(iv.id, 'diercategorie', e.target.value)}
                              className="w-full text-xs border rounded px-1 py-1"
                            >
                              {diercategorieën.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                            </select>
                          </td>
                          <td className="px-2 py-2 border-r">
                            <select
                              value={iv.bedrijfstakNaar}
                              onChange={(e) => updateInterneVerkoop(iv.id, 'bedrijfstakNaar', e.target.value)}
                              className={`w-full text-xs border rounded px-1 py-1 ${!iv.bedrijfstakNaar ? 'border-red-300 bg-red-50' : ''}`}
                            >
                              <option value="">--</option>
                              {bedrijfstakken.map(bt => <option key={bt} value={bt}>{bt}</option>)}
                            </select>
                          </td>
                          <td className="px-2 py-2 border-r">
                            <div className="flex items-center gap-1">
                              <input
                                type="number"
                                value={tempValues[`iv-${iv.id}-gewicht`] ?? iv.gewicht}
                                onChange={(e) => setTempValues({...tempValues, [`iv-${iv.id}-gewicht`]: parseInt(e.target.value) || 0})}
                                onBlur={(e) => {
                                  updateInterneVerkoop(iv.id, 'gewicht', parseInt(e.target.value) || 0);
                                  setTempValues({...tempValues, [`iv-${iv.id}-gewicht`]: undefined});
                                }}
                                className="w-16 text-xs border rounded px-1 py-1"
                              />
                              {iv.isManuallyEdited?.gewicht && (
                                <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                              )}
                            </div>
                          </td>
                          <td className="px-2 py-2 border-r">
                            <input
                              type="text"
                              value={iv.waarde}
                              onChange={(e) => updateInterneVerkoop(iv.id, 'waarde', e.target.value)}
                              className="w-16 text-xs border rounded px-1 py-1"
                            />
                          </td>
                          <td className="px-2 py-2 border-r">
                            <input
                              type="text"
                              value={iv.leeftijd}
                              disabled
                              className="w-16 text-xs border rounded px-1 py-1 bg-gray-100 cursor-not-allowed"
                            />
                          </td>
                          <td className="px-2 py-2 border-r">
                            <input
                              type="text"
                              value={iv.nota}
                              onChange={(e) => updateInterneVerkoop(iv.id, 'nota', e.target.value)}
                              className="w-32 text-xs border rounded px-1 py-1"
                              placeholder="Vrije tekst..."
                            />
                          </td>
                          <td className="px-2 py-2">
                            <select
                              value={iv.status}
                              onChange={(e) => updateStatus(iv.id, e.target.value as StatusType, 'interneVerkoop')}
                              className={`w-full text-xs border rounded px-1 py-1 ${getStatusColor(iv.status)}`}
                            >
                              <option value="Ingeladen">Ingeladen</option>
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
              )}
            </div>
          )}

          {/* Step 6: Sterftes */}
          {currentStep === 6 && (
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-[#101828]">Sterftes ({sterftes.length} rijen)</h2>
                <button
                  onClick={() => handleNieuweBoeking('sterfte')}
                  className="h-[34px] px-4 bg-[#155dfc] text-white rounded text-[14px] hover:bg-[#1348d6] flex items-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  Nieuwe boeking
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full border border-gray-200 text-xs">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-2 py-2 text-left text-xs font-semibold text-[#364153] border-r">Datum*</th>
                      <th className="px-2 py-2 text-left text-xs font-semibold text-[#364153] border-r">Naam*</th>
                      <th className="px-2 py-2 text-left text-xs font-semibold text-[#364153] border-r">Diercategorie</th>
                      <th className="px-2 py-2 text-left text-xs font-semibold text-[#364153] border-r">Leeftijd (m)</th>
                      <th className="px-2 py-2 text-left text-xs font-semibold text-[#364153] border-r">Nota</th>
                      <th className="px-2 py-2 text-left text-xs font-semibold text-[#364153]">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sterftes.map((sterfte) => (
                      <tr key={sterfte.id} className="border-b hover:bg-gray-50">
                        <td className="px-2 py-2 border-r">
                          <input
                            type="text"
                            value={sterfte.datum}
                            disabled
                            className="w-24 text-xs border rounded px-1 py-1 bg-gray-100 cursor-not-allowed"
                          />
                        </td>
                        <td className="px-2 py-2 border-r">
                          <div className="flex items-center gap-1">
                            <button
                              onClick={() => handleNavigateToAnimal(sterfte.sanitelnummer)}
                              className="hover:opacity-80"
                              title="Bekijk dierhistoriek"
                            >
                              <img src={cowIcon} alt="Dier" className="w-4 h-4" />
                            </button>
                            <input
                              type="text"
                              value={sterfte.naam}
                              disabled
                              className="w-20 text-xs border rounded px-1 py-1 bg-gray-100 cursor-not-allowed"
                            />
                            {sterfte.isManuallyEdited?.naam && (
                              <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                            )}
                          </div>
                        </td>
                        <td className="px-2 py-2 border-r">
                          <select
                            value={sterfte.diercategorie}
                            onChange={(e) => updateSterfte(sterfte.id, 'diercategorie', e.target.value)}
                            className="w-full text-xs border rounded px-1 py-1"
                          >
                            {diercategorieën.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                          </select>
                        </td>
                        <td className="px-2 py-2 border-r">
                          <input
                            type="text"
                            value={sterfte.leeftijd}
                            disabled
                            className="w-16 text-xs border rounded px-1 py-1 bg-gray-100 cursor-not-allowed"
                          />
                        </td>
                        <td className="px-2 py-2 border-r">
                          <input
                            type="text"
                            value={sterfte.nota}
                            onChange={(e) => updateSterfte(sterfte.id, 'nota', e.target.value)}
                            className="w-32 text-xs border rounded px-1 py-1"
                            placeholder="Vrije tekst..."
                          />
                        </td>
                        <td className="px-2 py-2">
                          <select
                            value={sterfte.status}
                            onChange={(e) => updateStatus(sterfte.id, e.target.value as StatusType, 'sterfte')}
                            className={`w-full text-xs border rounded px-1 py-1 ${getStatusColor(sterfte.status)}`}
                          >
                            <option value="Ingeladen">Ingeladen</option>
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
            </div>
          )}
        </div>

        {/* Footer Buttons */}
        <div className="border-t px-8 py-4 flex justify-between bg-white shrink-0">
          <button
            onClick={handleBack}
            disabled={currentStep === 1}
            className="h-[34px] px-4 bg-white border border-gray-300 text-[#364153] rounded text-[14px] hover:bg-gray-50 disabled:opacity-50"
          >
            Vorige
          </button>
          <button
            onClick={handleNext}
            disabled={!canProceed()}
            className="h-[34px] px-4 bg-[#155dfc] text-white rounded text-[14px] hover:bg-[#1348d6] disabled:bg-gray-400"
          >
            {currentStep < 6 ? 'Volgende' : 'Voltooien'}
          </button>
        </div>
      </div>

      {/* Impact Wizard */}
      {impactWizard.show && impactWizard.originalBoeking && (
        <ImpactWizard
          originalBoeking={impactWizard.originalBoeking}
          pendingUpdate={impactWizard.pendingUpdate}
          affectedBookingIds={impactWizard.affectedBookingIds}
          allBookingen={allBookingen}
          impactReason={impactWizard.impactReason}
          changedField={impactWizard.changedField}
          onComplete={handleImpactWizardComplete}
          onCancel={() => setImpactWizard({ ...impactWizard, show: false })}
        />
      )}

      {/* Dier Historiek Modal */}
      {showDierModal && selectedDierInfo && (
        <DierHistoriekModal
          dierInfo={selectedDierInfo}
          onClose={() => {
            setShowDierModal(false);
            setSelectedDierInfo(null);
          }}
        />
      )}
    </>
  );
}
