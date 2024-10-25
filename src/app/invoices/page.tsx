'use client';

import { Container } from '@chakra-ui/react';
import React, { createContext, useState, ReactNode, useEffect } from 'react';
import { InvoicesList } from './components/invoicesList';
import { InvoicesHeader } from './components/invoicesHeader';
import { InvoicesStateType } from './types';
import { useFirstRender } from './hooks/useFirstRender';



const initialInvoiceState = { invoices: [], currentFilterStatus: '' };

export const InvoicesStateContext = createContext<{
    InvoicesState: InvoicesStateType;
    setInvoicesState: React.Dispatch<React.SetStateAction<InvoicesStateType>>
}>({
    InvoicesState: initialInvoiceState,
    setInvoicesState: () => { }
});

const ViewInvoices = () => {
    const [InvoicesState, setInvoicesState] = useState<InvoicesStateType>({ invoices: [], currentFilterStatus: '' });
    const isFirstRender = useFirstRender();

    function InvoiceStateProvider({ children }: { children: ReactNode }) {
        return (
            <InvoicesStateContext.Provider value={{ InvoicesState, setInvoicesState }}>
                {children}
            </InvoicesStateContext.Provider>
        );
    }

    useEffect(() => {
        const fetchInvoices = async () => {
            const result = await fetch('/api/invoices');
            const invoices = await result.json();

            setInvoicesState(prevState => ({
                ...prevState,
                invoices
            }));
        }

        if (isFirstRender) {
            fetchInvoices();
        }
    }, []);

    return (
        <InvoiceStateProvider>
            <Container maxW="90vw">
                <InvoicesHeader />
                <InvoicesList />
            </Container>
        </InvoiceStateProvider>
    )
}

export default ViewInvoices;