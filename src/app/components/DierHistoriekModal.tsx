import { X } from 'lucide-react';

interface Boeking {
  id: string;
  datum: string;
  handeling: string;
  gewicht: number;
  leeftijd: number;
  diercategorie: string;
  waarde: number;
}

interface DierInfo {
  sanitelnummer: string;
  naam: string;
  ras: string;
  geboortedatum: string;
  huidigeCategorie: string;
  moederdier: string;
  boekingen: Boeking[];
}

interface DierHistoriekModalProps {
  dierInfo: DierInfo;
  onClose: () => void;
}

export function DierHistoriekModal({ dierInfo, onClose }: DierHistoriekModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-6xl w-full max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-[#101828]">Dierhistoriek - {dierInfo.naam}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {/* Dier informatie */}
          <div className="mb-6 bg-gray-50 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-[#101828] mb-3">Dierinformatie</h3>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <p className="text-sm text-gray-600">Sanitelnummer</p>
                <p className="text-base font-mono text-[#101828]">{dierInfo.sanitelnummer}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Naam</p>
                <p className="text-base text-[#101828]">{dierInfo.naam}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Ras</p>
                <p className="text-base text-[#101828]">{dierInfo.ras}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Geboortedatum</p>
                <p className="text-base text-[#101828]">{dierInfo.geboortedatum}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Huidige diercategorie</p>
                <p className="text-base text-[#101828]">{dierInfo.huidigeCategorie}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Moederdier</p>
                <p className="text-base text-[#101828]">{dierInfo.moederdier}</p>
              </div>
            </div>
          </div>

          {/* Boekinghistoriek */}
          <div>
            <h3 className="text-lg font-semibold text-[#101828] mb-3">Boekinghistoriek</h3>
            <p className="text-sm text-gray-600 mb-3">Historiek van alle boekingen voor {dierInfo.naam}</p>
            
            <div className="border border-gray-200 rounded overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-100 border-b border-gray-200">
                  <tr>
                    <th className="px-3 py-2 text-left text-sm font-semibold text-[#4a5565]">Datum</th>
                    <th className="px-3 py-2 text-left text-sm font-semibold text-[#4a5565]">Handeling</th>
                    <th className="px-3 py-2 text-left text-sm font-semibold text-[#4a5565]">Gewicht (kg)</th>
                    <th className="px-3 py-2 text-left text-sm font-semibold text-[#4a5565]">Leeftijd (maanden)</th>
                    <th className="px-3 py-2 text-left text-sm font-semibold text-[#4a5565]">Diercategorie</th>
                    <th className="px-3 py-2 text-left text-sm font-semibold text-[#4a5565]">Waarde</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-100">
                  {dierInfo.boekingen.map((boeking) => (
                    <tr key={boeking.id} className="hover:bg-gray-50">
                      <td className="px-3 py-2 text-sm text-[#101828]">{boeking.datum}</td>
                      <td className="px-3 py-2 text-sm text-[#4a5565]">{boeking.handeling}</td>
                      <td className="px-3 py-2 text-sm text-[#101828]">{boeking.gewicht}</td>
                      <td className="px-3 py-2 text-sm text-[#101828]">{boeking.leeftijd.toFixed(2)}</td>
                      <td className="px-3 py-2 text-sm text-[#4a5565]">{boeking.diercategorie}</td>
                      <td className="px-3 py-2 text-sm text-[#101828]">€{boeking.waarde}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 px-6 py-4 flex justify-end">
          <button
            onClick={onClose}
            className="h-[34px] px-4 bg-white border border-gray-300 text-[#364153] rounded text-[14px] hover:bg-gray-50"
          >
            Sluiten
          </button>
        </div>
      </div>
    </div>
  );
}
