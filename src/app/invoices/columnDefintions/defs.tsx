import { coldefObj } from '../types';

export const colDefs: Record<keyof coldefObj, (val: string) => string | JSX.Element> = {
  id: (id: string) => (<strong>{`#${id}`}</strong>),
  paymentDue: (paymentDue: string) => `Due ${getFormattedDate((paymentDue))}`,
  clientName: (clientName: string) => clientName,
  total: (total: string) => (<strong><div><span>&#163;</span>{total}</div></strong>),
  status: (status: string) => {
    return (<div style={{ width: '40%', padding: '10px', backgroundColor: `${getStatusColor(status)}` }}>
      {capitaliseFirstLetter(status)}
    </div>)
  },
}

const getFormattedDate = (dateString: string) => {
  const date = new Date(dateString);

  const formattedDate = new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  }).format(date);

  return formattedDate;
}

const capitaliseFirstLetter = (inputStr: string) => {
  return `${inputStr.slice(0, 1).toUpperCase()}${inputStr.slice(1)}`;
}

const getStatusColor = (status: string) => {
  return {
    paid: '#33D69F',
    pending: '#FF8F00',
    draft: '#979797'
  }[status];
}
