import { useState, useEffect } from 'react';
import { Invoice } from '../types';

export const useInvoiceHook = () => {
    const [invoices, setInvoices] = useState<Invoice[]>([]);
    const [currentFilterStatus, setCurrentFilterStatus] = useState<string>("");

    useEffect(() => {
        const fetchInvoices = async () => {
            const result = await fetch('/api/invoices');
            const invoices = await result.json();
            setInvoices(invoices);
        }
        fetchInvoices();
    }, []);

    const getFilteredInvoices = (invoices: Invoice[]) => {
        if (["Filter By Status", ""].includes(currentFilterStatus)) {
            return invoices;
        }
        return invoices.filter(inv =>
            currentFilterStatus && inv.status === currentFilterStatus
        );
    }

    return {
        invoices,
        currentFilterStatus,
        getFilteredInvoices,
        setCurrentFilterStatus,
    };
}