'use client';

import { useContext } from 'react';
import { Table, TableContainer, Tbody, Tr, Td, Image, Center } from '@chakra-ui/react';
import { Container } from "@chakra-ui/react";
import { colDefs } from '../../columnDefintions/defs';
import { Invoice, coldefObj } from '../../types';
import { InvoicesStateContext } from '../../context/context';


export const InvoicesList = () => {
    const { InvoicesState: { invoices, currentFilterStatus } } = useContext(InvoicesStateContext);

    const getInvoiceColumnValue = (invoice: Invoice, key: keyof coldefObj) => {
        const colValue = colDefs[key](invoice[key] as string);
        return (<Td key={key} style={{ paddingBottom: '10px' }}>{colValue} </Td>);
    }

    const getFilteredInvoices = (invoices: Invoice[]) => {
        if (["all", ""].includes(currentFilterStatus)) {
            return invoices;
        }
        return invoices.filter(inv =>
            currentFilterStatus && inv.status === currentFilterStatus
        );
    }

    return (<Container maxW="90vw" marginLeft={'auto'} marginRight={'auto'}>
        <TableContainer maxW="90vw" marginLeft={'auto'} marginRight={'auto'}>
            <Table className='bg-white'>
                <Tbody>
                    {invoices.length === 0 && <div><Center><Image src='/assets/illustration-empty.svg' alt='Empty Invoice' /></Center></div>}
                    {
                        getFilteredInvoices(invoices).map((invoice, index) => (
                            <>
                                <Tr key={index} className='mb-2'>
                                    {Object.keys(colDefs).map(colDefKey => getInvoiceColumnValue(invoice, colDefKey as keyof coldefObj))}
                                </Tr>
                                <Tr><td className='bg-slate-100 h-2' colSpan={5}></td></Tr>
                            </>
                        ))
                    }
                </Tbody>
            </Table>
        </TableContainer>
    </Container>);
}