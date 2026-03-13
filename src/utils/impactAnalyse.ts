import { Boeking, ImpactResult } from '../types/booking';

/**
 * Analyseert de impact van een wijziging op een boeking
 * 
 * Impact detectie regels (VEREENVOUDIGD):
 * - Gewicht: ALTIJD GROOT impact → wizard verplicht
 * - Waarde €: ALTIJD GROOT impact → wizard verplicht
 * - Naam: ALTIJD KLEIN impact → inline OK
 * - Handeling: ALTIJD GROOT impact → wizard verplicht
 * - Categorie: ALTIJD GROOT impact → wizard verplicht
 * - Status: ALTIJD KLEIN impact → inline OK
 * - Datum: ALTIJD GROOT impact → wizard verplicht
 */
export function analyzeImpact(
  original: Boeking,
  updated: Partial<Boeking>,
  allBookingen: Boeking[]
): ImpactResult {
  const changes = Object.keys(updated) as (keyof Boeking)[];
  
  // Check voor hoge impact wijzigingen
  for (const field of changes) {
    // Velden met ALTIJD grote impact
    const highImpactFields: (keyof Boeking)[] = ['gewicht', 'waarde', 'handeling', 'categorie', 'datum'];
    
    if (highImpactFields.includes(field)) {
      const affectedBookings = findAffectedBookingsByAnimal(original, allBookingen);
      
      let reason = '';
      switch (field) {
        case 'gewicht':
          reason = `Gewicht wijzigen van ${original.gewicht}kg naar ${updated.gewicht}kg heeft impact op ${affectedBookings.length} gerelateerde boeking(en) van dit dier.`;
          break;
        case 'waarde':
          reason = `Waarde wijzigen van €${original.waarde} naar €${updated.waarde} heeft impact op ${affectedBookings.length} gerelateerde boeking(en) van dit dier.`;
          break;
        case 'handeling':
          reason = `Handeling wijzigen van "${original.handeling}" naar "${updated.handeling}" beïnvloedt de volledige dierhistoriek en ${affectedBookings.length} gerelateerde boeking(en).`;
          break;
        case 'categorie':
          reason = `Categorie wijzigen van "${original.categorie}" naar "${updated.categorie}" heeft effect op het diertraject en ${affectedBookings.length} gerelateerde registratie(s).`;
          break;
        case 'datum':
          reason = `Datum wijzigen van "${original.datum}" naar "${updated.datum}" kan de chronologische volgorde beïnvloeden van ${affectedBookings.length} boeking(en).`;
          break;
      }
      
      return {
        hasHighImpact: true,
        affectedBookings,
        changedField: field,
        reason
      };
    }
  }
  
  // Lage impact - alleen veldvalidatie nodig (naam, status)
  return {
    hasHighImpact: false,
    affectedBookings: [original.id],
    changedField: changes[0]
  };
}

function findAffectedBookingsByAnimal(boeking: Boeking, allBookingen: Boeking[]): string[] {
  return allBookingen
    .filter(b => b.sanitel === boeking.sanitel)
    .map(b => b.id);
}

export function validateField(field: keyof Boeking, value: any): { valid: boolean; error?: string } {
  switch (field) {
    case 'gewicht':
      if (isNaN(value) || value < 0 || value > 1500) {
        return { valid: false, error: 'Gewicht moet tussen 0 en 1500 kg zijn' };
      }
      break;
    case 'waarde':
      if (isNaN(value) || value < 0) {
        return { valid: false, error: 'Waarde moet een positief getal zijn' };
      }
      break;
    case 'datum':
      if (!/^\d{2}\/\d{2}\/\d{4}$/.test(value)) {
        return { valid: false, error: 'Datum moet formaat DD/MM/JJJJ hebben' };
      }
      break;
    case 'sanitel':
      if (!/^BE\d{9}$/.test(value)) {
        return { valid: false, error: 'SANITEL moet formaat BE + 9 cijfers hebben' };
      }
      break;
  }
  
  return { valid: true };
}