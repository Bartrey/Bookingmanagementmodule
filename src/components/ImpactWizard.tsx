import { useState } from 'react';
import { X, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { Boeking, StatusType } from '../types/booking';

interface ImpactWizardProps {
  originalBoeking: Boeking;
  pendingUpdate: Partial<Boeking>;
  affectedBookingIds: string[];
  allBookingen: Boeking[];
  impactReason: string;
  changedField?: keyof Boeking;
  isNewBooking?: boolean;
  onComplete: (updatedBookings: Boeking[]) => void;
  onCancel: () => void;
}

export function ImpactWizard({
  originalBoeking,
  pendingUpdate,
  affectedBookingIds,
  allBookingen,
  impactReason,
  changedField,
  isNewBooking,
  onComplete,
  onCancel
}: ImpactWizardProps) {
  const [wijzigingReden, setWijzigingReden] = useState('');
  const [editedBoeking, setEditedBoeking] = useState<Boeking>(originalBoeking);
  const [bookingStatuses, setBookingStatuses] = useState<Record<string, StatusType>>(() => {
    const statuses: Record<string, StatusType> = {};
    affectedBookingIds.forEach(id => {
      statuses[id] = 'Niet afgewerkt';
    });
    return statuses;
  });

  const affectedBookings = allBookingen.filter(b => affectedBookingIds.includes(b.id));

  const handleStatusChange = (boekingId: string, status: StatusType) => {
    setBookingStatuses(prev => ({
      ...prev,
      [boekingId]: status
    }));
  };

  const handleBulkMarkAfgewerkt = () => {
    const newStatuses: Record<string, StatusType> = {};
    affectedBookingIds.forEach(id => {
      newStatuses[id] = 'Afgewerkt';
    });
    setBookingStatuses(newStatuses);
  };

  const handleComplete = () => {
    if (isNewBooking) {
      onComplete([editedBoeking]);
    } else {
      const updatedBookings = affectedBookings.map(boeking => {
        if (boeking.id === originalBoeking.id) {
          return { ...boeking, ...pendingUpdate };
        }
        return { ...boeking, status: bookingStatuses[boeking.id] };
      });
      onComplete(updatedBookings);
    }
  };

  const getFieldLabel = (field: keyof Boeking): string => {
    const labels: Record<string, string> = {
      handeling: 'Handeling',
      categorie: 'Categorie',
      gewicht: 'Gewicht',
      datum: 'Datum',
      sanitel: 'SANITEL',
      naam: 'Naam',
      waarde: 'Waarde',
      status: 'Status'
    };
    return labels[field] || field;
  };

  const nietAfgewerktCount = Object.values(bookingStatuses).filter(s => s === 'Niet afgewerkt').length;
  const afgewerktCount = Object.values(bookingStatuses).filter(s => s === 'Afgewerkt').length;
  const verwijderdCount = Object.values(bookingStatuses).filter(s => s === 'Verwijderd').length;

  return (
    <div className="fixed inset-y-0 right-0 w-[40%] bg-white shadow-2xl flex flex-col z-50 border-l border-gray-300 animate-in slide-in-from-right duration-300">
      {/* Header - Gele banner zoals andere schermen */}
      <div className="bg-[#f4c000] px-6 py-4 flex items-center justify-between border-b border-[#d4a800]">
        <div className="flex items-center gap-3">
          <AlertTriangle className="w-5 h-5 text-[#101828]" />
          <div>
            <h2 className="text-[#101828] font-semibold text-lg">Impact analyse</h2>
            <p className="text-sm text-[#101828]/80">
              {changedField && getFieldLabel(changedField)} aangepast — {affectedBookings.length} boeking(en) geïmpacteerd
            </p>
          </div>
        </div>
        <button onClick={onCancel} className="hover:bg-[#d4a800] p-1 rounded text-[#101828]">
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Content - Alle stappen onder elkaar op 1 pagina */}
      <div className="flex-1 overflow-y-auto">
        {/* SECTIE 1: Wijziging bevestigen */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-semibold">
              1
            </div>
            <h3 className="text-lg font-semibold text-[#101828]">Wijziging bevestigen</h3>
          </div>
          
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
            <div className="flex gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-gray-700">{impactReason}</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <div className="text-sm font-medium mb-3 text-gray-700">Boeking details:</div>
            <div className="grid grid-cols-2 gap-4 text-sm mb-4">
              <div>
                <span className="text-gray-600">Datum:</span>{' '}
                <span className="text-gray-900">{originalBoeking.datum}</span>
              </div>
              <div>
                <span className="text-gray-600">Naam:</span>{' '}
                <span className="text-gray-900">{originalBoeking.naam}</span>
              </div>
              <div className="col-span-2">
                <span className="text-gray-600">SANITEL:</span>{' '}
                <span className="font-mono text-gray-900">{originalBoeking.sanitel}</span>
              </div>
            </div>
            
            <div className="pt-4 border-t border-blue-200">
              <div className="text-sm font-medium mb-3 text-gray-700">Wijziging:</div>
              {Object.entries(pendingUpdate).map(([key, value]) => (
                <div key={key} className="text-sm mb-2">
                  <span className="text-gray-600">{getFieldLabel(key as keyof Boeking)}:</span>
                  {' '}
                  <span className="line-through text-gray-500">
                    {String(originalBoeking[key as keyof Boeking])}
                  </span>
                  {' → '}
                  <span className="text-blue-600 font-medium">{String(value)}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700">
              Reden wijziging (optioneel)
            </label>
            <textarea
              value={wijzigingReden}
              onChange={(e) => setWijzigingReden(e.target.value)}
              placeholder="Beschrijf waarom deze wijziging nodig is..."
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm resize-none outline-none focus:border-blue-500"
              rows={3}
            />
          </div>
        </div>

        {/* SECTIE 2: Geïmpacteerde boekingen */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-semibold">
              2
            </div>
            <h3 className="text-lg font-semibold text-[#101828]">Geïmpacteerde boekingen</h3>
          </div>

          <div className="flex items-center justify-between mb-4">
            <p className="text-sm text-gray-600">
              {affectedBookings.length} boekingen worden beïnvloed door deze wijziging
            </p>
            <button
              onClick={handleBulkMarkAfgewerkt}
              className="text-sm text-blue-600 hover:text-blue-700 flex items-center gap-1 font-medium"
            >
              <CheckCircle2 className="w-4 h-4" />
              Markeer alles als afgewerkt
            </button>
          </div>

          <div className="space-y-3">
            {affectedBookings.map((boeking) => (
              <div
                key={boeking.id}
                className="border border-gray-200 rounded-lg p-4 hover:shadow-sm transition-shadow bg-white"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="text-sm mb-1">
                      <span className="text-gray-900">{boeking.datum}</span> — <span className="text-blue-600 font-medium">{boeking.handeling}</span>
                    </div>
                    <div className="text-sm text-gray-600">
                      {boeking.naam} • {boeking.categorie} • {boeking.gewicht}kg
                    </div>
                    <div className="text-xs text-gray-500 font-mono mt-1">
                      {boeking.sanitel}
                    </div>
                  </div>
                  {boeking.id === originalBoeking.id && (
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded font-medium">
                      Hoofdboeking
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                  <span className="text-xs text-gray-600 font-medium">Status:</span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleStatusChange(boeking.id, 'Niet afgewerkt')}
                      className={`px-3 py-1 text-xs rounded border transition-colors font-medium ${
                        bookingStatuses[boeking.id] === 'Niet afgewerkt'
                          ? 'bg-amber-100 text-amber-800 border-amber-300'
                          : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      Niet afgewerkt
                    </button>
                    <button
                      onClick={() => handleStatusChange(boeking.id, 'Afgewerkt')}
                      className={`px-3 py-1 text-xs rounded border transition-colors font-medium ${
                        bookingStatuses[boeking.id] === 'Afgewerkt'
                          ? 'bg-green-100 text-green-800 border-green-300'
                          : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      Afgewerkt
                    </button>
                    <button
                      onClick={() => handleStatusChange(boeking.id, 'Verwijderd')}
                      className={`px-3 py-1 text-xs rounded border transition-colors font-medium ${
                        bookingStatuses[boeking.id] === 'Verwijderd'
                          ? 'bg-red-100 text-red-800 border-red-300'
                          : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      Verwijderd
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTIE 3: Samenvatting */}
        <div className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-semibold">
              3
            </div>
            <h3 className="text-lg font-semibold text-[#101828]">Samenvatting</h3>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-gray-700">
              <p className="mb-2">
                De wijzigingen worden toegepast op <strong>{originalBoeking.naam}</strong> ({originalBoeking.sanitel}) 
                en <strong>{affectedBookings.length} gerelateerde boekingen</strong>.
              </p>
              <p>
                Status van deze boekingen is bijgewerkt volgens uw selectie.
              </p>
            </div>
          </div>

          {/* Wijziging overzicht */}
          <div className="mb-6">
            <h4 className="text-sm font-medium mb-3 text-gray-700">Hoofdwijziging:</h4>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              {Object.entries(pendingUpdate).map(([key, value]) => (
                <div key={key} className="text-sm mb-1">
                  <span className="text-gray-600">{getFieldLabel(key as keyof Boeking)}:</span>
                  {' '}
                  <span className="line-through text-gray-500">
                    {String(originalBoeking[key as keyof Boeking])}
                  </span>
                  {' → '}
                  <span className="text-blue-600 font-medium">{String(value)}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Status overzicht */}
          <div className="mb-6">
            <h4 className="text-sm font-medium mb-3 text-gray-700">Status overzicht:</h4>
            <div className="grid grid-cols-3 gap-3 text-sm">
              <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                <div className="text-xs text-gray-600 mb-1 font-medium">Afgewerkt</div>
                <div className="text-2xl text-green-700 font-bold">{afgewerktCount}</div>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                <div className="text-xs text-gray-600 mb-1 font-medium">Niet afgewerkt</div>
                <div className="text-2xl text-amber-700 font-bold">{nietAfgewerktCount}</div>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                <div className="text-xs text-gray-600 mb-1 font-medium">Verwijderd</div>
                <div className="text-2xl text-red-700 font-bold">{verwijderdCount}</div>
              </div>
            </div>
          </div>

          {wijzigingReden && (
            <div>
              <h4 className="text-sm font-medium mb-2 text-gray-700">Reden wijziging:</h4>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm text-gray-700">
                {wijzigingReden}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer - Actieknoppen */}
      <div className="border-t border-gray-200 px-6 py-4 bg-gray-50 flex items-center justify-between">
        <button
          onClick={onCancel}
          className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded border border-gray-300"
        >
          Annuleren
        </button>

        <button
          onClick={handleComplete}
          className="px-6 py-2 text-sm bg-green-600 text-white rounded hover:bg-green-700 font-medium"
        >
          Wijzigingen opslaan
        </button>
      </div>
    </div>
  );
}
