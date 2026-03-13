export type HandelingType = 'Aankoop' | 'Geboorte' | 'Verkoop' | 'Sterfte' | 'Overgang';
export type CategorieType = 'Melkkoe' | 'Zoogkoe' | 'Jongvee' | 'Dekstier' | 'M.Jongv Melk' | 'M.Jongv Vlees';
export type StatusType = 'Afgewerkt' | 'Niet afgewerkt' | 'Verwijderd' | 'Ingeladen';

export interface Boeking {
  id: string;
  datum: string;
  sanitel: string;
  naam: string;
  handeling: HandelingType;
  gewicht: number; // in kg
  categorie: CategorieType;
  waarde: number; // in €
  status: StatusType;
  hasImpact?: boolean;
  impactLevel?: 'low' | 'high';
}

export interface ImpactResult {
  hasHighImpact: boolean;
  affectedBookings: string[];
  reason?: string;
  changedField?: keyof Boeking;
}