import { coldefObj } from '../types';

export const colDefs: Record<keyof coldefObj, (val: string) => string | JSX.Element> = {
  id: (id: string) => (<span className='font-bold'>{`#${id}`}</span>),
  paymentDue: (paymentDue: string) => `Due ${getFormattedDate((paymentDue))}`,
  clientName: (clientName: string) => clientName,
  total: (total: string) => (<div className='font-bold'><span>&#163;</span>{total}</div>),
  status: (status: string) =>
    <div className={`${getStatusBgClass(status)} w-2/5 p-2 flex items-center`}>
      <span className={`${getStatusBulletClass(status)} w-3 h-3 mr-2 rounded-2xl`}></span>
      <span className={getStatusTextClass(status)}>{capitaliseFirstLetter(status)}</span>
    </div>
  ,
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

const capitaliseFirstLetter = (inputStr: string) => `${inputStr.slice(0, 1).toUpperCase()}${inputStr.slice(1)}`;

const getStatusBgClass = (status: string) => {
  return {
    paid: 'bg-lime-100',
    pending: 'bg-amber-100',
    draft: 'bg-slate-100'
  }[status];
}

const getStatusTextClass = (status: string) => {
  return {
    paid: 'text-lime-700',
    pending: 'text-amber-700',
    draft: 'text-slate-700'
  }[status];
}

const getStatusBulletClass = (status: string) => {
  return {
    paid: 'bg-lime-700',
    pending: 'bg-amber-700',
    draft: 'bg-slate-700'
  }[status];
}
