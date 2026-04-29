import { Boeking, HandelingType, CategorieType, StatusType } from '../types/booking';

const handelingen: HandelingType[] = ['Aankoop', 'Geboorte', 'Verkoop', 'Sterfte', 'Overgang'];
const categorien: CategorieType[] = ['Melkkoe', 'Zoogkoe', 'Jongvee', 'Dekstier', 'M.Jongv Melk', 'M.Jongv Vlees'];
const statuses: StatusType[] = ['Afgewerkt', 'Niet afgewerkt'];
const namen = [
  'Bruno', 'Bella', 'Elvis', 'Jeltje', 'Daisy', 'Rosie', 'Luna', 'Mila', 'Nora', 'Sophie', 
  'Emma', 'Lisa', 'Truus', 'Greetje', 'Wilma', 'Ineke', 'Petra', 'Anke', 'Sofie', 'Laura', 
  'Nina', 'Tessa', 'Fleur', 'Isa', 'Sanne', 'Eva', 'Lotte', 'Fien', 'Noor', 'Liv', 
  'Sara', 'Julie', 'Karel', 'Piet', 'Jozef', 'Willem', 'Hendrik', 'Frits'
];

function generateSanitel(): string {
  const prefix = 'BE';
  const numbers = Math.floor(Math.random() * 900000000) + 100000000;
  return `${prefix}${numbers}`;
}

function generateStaalnr(): string {
  return Math.floor(Math.random() * 900) + 100 + '';
}

function generateLeeftijd(): string {
  const months = Math.floor(Math.random() * 120) + 1;
  return months.toString();
}

function generateWaarde(): string {
  const codes = ['€790', '€543', '€612', '€456', '€789', '€234', '€890', '€456', '€678', '€123'];
  return codes[Math.floor(Math.random() * codes.length)];
}

function generateGewicht(handeling: HandelingType, categorie: CategorieType): number {
  if (handeling === 'Geboorte') {
    return Math.floor(Math.random() * 30) + 35; // 35-65 kg
  }
  if (categorie === 'Jongvee' || categorie === 'M.Jongv Melk' || categorie === 'M.Jongv Vlees') {
    return Math.floor(Math.random() * 200) + 100; // 100-300 kg
  }
  if (categorie === 'Dekstier') {
    return Math.floor(Math.random() * 400) + 400; // 400-800 kg
  }
  // Melkkoe/Zoogkoe
  return Math.floor(Math.random() * 300) + 400; // 400-700 kg
}

function generateWaardeEuro(handeling: HandelingType, gewicht: number): number {
  if (handeling === 'Sterfte') return 0;
  if (handeling === 'Geboorte') return 0;
  
  // Prijs per kg varieert
  const prijsPerKg = Math.floor(Math.random() * 2) + 2; // €2-4 per kg
  return Math.floor(gewicht * prijsPerKg);
}

function generateDatum(index: number): string {
  const startDate = new Date(2025, 1, 12); // 12 februari 2025
  const daysToAdd = Math.floor(index / 8); // Ongeveer 8 boekingen per dag
  const date = new Date(startDate.getTime() + daysToAdd * 24 * 60 * 60 * 1000);
  
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  
  return `${day}/${month}/${year}`;
}

export function generateMockBookingen(count: number = 100): Boeking[] {
  const bookingen: Boeking[] = [];
  
  for (let i = 0; i < count; i++) {
    const handeling = handelingen[Math.floor(Math.random() * handelingen.length)];
    const categorie = categorien[Math.floor(Math.random() * categorien.length)];
    const gewicht = generateGewicht(handeling, categorie);
    const status = i % 4 === 0 ? 'Niet afgewerkt' : 'Afgewerkt'; // 25% niet afgewerkt
    
    bookingen.push({
      id: `booking-${i + 1}`,
      datum: generateDatum(i),
      sanitel: generateSanitel(),
      naam: namen[Math.floor(Math.random() * namen.length)],
      handeling,
      gewicht,
      categorie,
      waarde: generateWaardeEuro(handeling, gewicht),
      status,
      impactLevel: 'low'
    });
  }
  
  return bookingen;
}