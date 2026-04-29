import { CheckCircle2, AlertCircle, Trash2, Download } from 'lucide-react';
import { StatusType } from '../types/booking';

interface StatusBadgeProps {
  status: StatusType;
  size?: 'sm' | 'md';
}

export function StatusBadge({ status, size = 'sm' }: StatusBadgeProps) {
  const sizeClasses = size === 'sm' ? 'px-2 py-0.5 text-xs' : 'px-3 py-1 text-sm';
  const iconSize = size === 'sm' ? 'w-3 h-3' : 'w-4 h-4';
  
  const getStatusColor = () => {
    if (status === 'Afgewerkt') return 'bg-green-100 text-green-800';
    if (status === 'Verwijderd') return 'bg-red-100 text-red-800';
    if (status === 'Ingeladen') return 'bg-blue-100 text-blue-800';
    return 'bg-amber-100 text-amber-800';
  };
  
  const getStatusIcon = () => {
    if (status === 'Afgewerkt') return <CheckCircle2 className={iconSize} />;
    if (status === 'Verwijderd') return <Trash2 className={iconSize} />;
    if (status === 'Ingeladen') return <Download className={iconSize} />;
    return <AlertCircle className={iconSize} />;
  };
  
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full ${sizeClasses} ${getStatusColor()}`}
    >
      {getStatusIcon()}
      {status}
    </span>
  );
}