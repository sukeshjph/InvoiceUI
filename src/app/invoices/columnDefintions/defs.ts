import { coldefObj } from '../types';

export const colDefs: Record<keyof coldefObj, object> = {
  id: (id: string) => `#${id}`,
  paymentDue: (paymentDue: string) => `Due ${getFormattedDate((paymentDue))}`,
  clientName: (clientName: string) => clientName,
  total: (total: string) => total,
  status: (status: string) => status,
}

const getFormattedDate = (dateString: string) => {
  const date = new Date(dateString);

  const formattedDate = new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  }).format(date);

  return formattedDate
}