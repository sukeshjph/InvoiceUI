import React, { createContext } from 'react';
import { InvoicesStateType } from '../types';

const initialInvoiceState = { invoices: [], currentFilterStatus: '' };

export const InvoicesStateContext = createContext<{
    InvoicesState: InvoicesStateType;
    setInvoicesState: React.Dispatch<React.SetStateAction<InvoicesStateType>>
}>({
    InvoicesState: initialInvoiceState,
    setInvoicesState: () => { }
});