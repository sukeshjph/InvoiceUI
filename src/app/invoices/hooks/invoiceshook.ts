import React, { useContext, useState, useEffect } from 'react';
import { InvoicesStateContext } from '../page';
import { Invoice } from '../types';


export const useInvoiceHook = () => {
    const [currentFilterStatus, setCurrentFilterStatus] = useState<string>("");
    const { InvoicesState, setInvoicesState } = useContext(InvoicesStateContext);

    useEffect(() => {
        const fetchInvoices = async () => {
            const result = await fetch('/api/invoices');
            const invoices = await result.json();
            setInvoicesState(invoices);
        }
        fetchInvoices();
    }, []);

    const handleFilterStateChange = (newFilterValue: string) => {
        setCurrentFilterStatus(newFilterValue);
    }

    return {
        InvoicesState,
        currentFilterStatus,
        handleFilterStateChange,
    };
}