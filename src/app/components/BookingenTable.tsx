import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { Boeking } from '../types/booking';
import { StatusBadge } from './StatusBadge';
import cowIcon from 'figma:asset/a66fdb0db9cbb3734b5cde6aa0a4baea6ced4f3e.png';
import { DierHistoriekModal } from './DierHistoriekModal';

interface BookingenTableProps {
  bookingen: Boeking[];
  onNavigateToAnimal: (sanitel: string) => void;
  onNavigateToFacturenIndVee?: (boeking: Boeking) => void;
}

export function BookingenTable({ bookingen, onNavigateToAnimal, onNavigateToFacturenIndVee }: BookingenTableProps) {
  const [showDierModal, setShowDierModal] = useState(false);
  const [selectedDierInfo, setSelectedDierInfo] = useState<any>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 100;

  const totalPages = Math.ceil(bookingen.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedBookingen = bookingen.slice(startIndex, startIndex + itemsPerPage);

  const handleDierClick = (boeking: Boeking) => {
    // Create mock dier info with complete structure
    setSelectedDierInfo({
      sanitelnummer: boeking.sanitel,
      naam: boeking.naam,
      ras: 'Holstein Friesian',
      geboortedatum: '15/03/2022',
      huidigeCategorie: boeking.categorie,
      moederdier: 'Bella',
      boekingen: [
        {
          id: '1',
          datum: boeking.datum,
          handeling: boeking.handeling,
          gewicht: boeking.gewicht,
          leeftijd: 30,
          diercategorie: boeking.categorie,
          waarde: boeking.waarde
        },
        {
          id: '2',
          datum: '15/03/2022',
          handeling: 'Geboorte',
          gewicht: 45,
          leeftijd: 0,
          diercategorie: 'Jongvee',
          waarde: 150
        },
        {
          id: '3',
          datum: '10/08/2023',
          handeling: 'Overgang',
          gewicht: 320,
          leeftijd: 17,
          diercategorie: 'Melkkoe',
          waarde: 0
        }
      ]
    });
    setShowDierModal(true);
  };

  return (
    <>
      <div className="border border-gray-200 rounded-lg overflow-hidden">
        <div className="overflow-x-auto max-h-[600px] overflow-y-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 sticky top-0 z-10">
              <tr>
                <th className="px-4 py-3 text-left border-b border-gray-200 font-medium text-[#101828]">Datum</th>
                <th className="px-4 py-3 text-left border-b border-gray-200 font-medium text-[#101828]">Sanitelnummer</th>
                <th className="px-4 py-3 text-left border-b border-gray-200 font-medium text-[#101828]">Naam</th>
                <th className="px-4 py-3 text-left border-b border-gray-200 font-medium text-[#101828]">Handeling</th>
                <th className="px-4 py-3 text-left border-b border-gray-200 font-medium text-[#101828]">Gewicht (kg)</th>
                <th className="px-4 py-3 text-left border-b border-gray-200 font-medium text-[#101828]">Categorie</th>
                <th className="px-4 py-3 text-left border-b border-gray-200 font-medium text-[#101828]">Waarde (€)</th>
                <th className="px-4 py-3 text-left border-b border-gray-200 font-medium text-[#101828]">Status</th>
                <th className="px-4 py-3 text-left border-b border-gray-200 font-medium text-[#101828]"></th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {paginatedBookingen.map((boeking) => (
                <tr
                  key={boeking.id}
                  className="hover:bg-gray-50 cursor-pointer"
                  onDoubleClick={() => onNavigateToFacturenIndVee?.(boeking)}
                >
                  <td className="px-4 py-3 border-b border-gray-100 text-[#101828]">
                    {boeking.datum}
                  </td>
                  <td className="px-4 py-3 border-b border-gray-100">
                    <span className="font-mono text-[#101828]">{boeking.sanitel}</span>
                  </td>
                  <td className="px-4 py-3 border-b border-gray-100">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDierClick(boeking);
                      }}
                      className="flex items-center gap-2 hover:opacity-80"
                      title="Bekijk dierhistoriek"
                    >
                      <img src={cowIcon} alt="Dier" className="w-4 h-4" />
                      <span className="text-[#101828]">{boeking.naam}</span>
                    </button>
                  </td>
                  <td className="px-4 py-3 border-b border-gray-100 text-[#101828]">
                    {boeking.handeling}
                  </td>
                  <td className="px-4 py-3 border-b border-gray-100 text-[#101828]">
                    {boeking.gewicht}
                  </td>
                  <td className="px-4 py-3 border-b border-gray-100 text-[#101828]">
                    {boeking.categorie}
                  </td>
                  <td className="px-4 py-3 border-b border-gray-100 text-[#101828]">
                    €{boeking.waarde.toFixed(2)}
                  </td>
                  <td className="px-4 py-3 border-b border-gray-100">
                    <StatusBadge status={boeking.status} />
                  </td>
                  <td className="px-4 py-3 border-b border-gray-100">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onNavigateToFacturenIndVee?.(boeking);
                      }}
                      className="hover:bg-gray-100 rounded p-1"
                      title="Navigeer naar maand wizard"
                    >
                      <ChevronRight className="w-4 h-4 text-[#4A5565]" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="border-t border-gray-200 px-4 py-3 flex items-center justify-between bg-gray-50">
            <div className="text-sm text-[#4a5565]">
              Pagina {currentPage} van {totalPages} ({bookingen.length} totaal)
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                className="px-3 py-1 border border-gray-300 rounded text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
              >
                Vorige
              </button>
              <button
                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages}
                className="px-3 py-1 border border-gray-300 rounded text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
              >
                Volgende
              </button>
            </div>
          </div>
        )}
      </div>

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