'use client';

import { useContext } from 'react';
import { Table, TableContainer, Tbody, Tr, Td } from '@chakra-ui/react';
import { Container } from "@chakra-ui/react";
import { colDefs } from '../../columnDefintions/defs';
import { Invoice, coldefObj } from '../../types';
import { InvoicesStateContext } from '../../context/context';


export const InvoicesList = () => {
    const { InvoicesState: { invoices, currentFilterStatus } } = useContext(InvoicesStateContext);

    const getInvoiceColumnValue = (invoice: Invoice, key: keyof coldefObj) => {
        const colValue = colDefs[key](invoice[key] as string);
        return (<Td key={key}>{colValue} </Td>);
    }

    const getFilteredInvoices = (invoices: Invoice[]) => {
        if (["Filter By Status", "all", ""].includes(currentFilterStatus)) {
            return invoices;
        }
        return invoices.filter(inv =>
            currentFilterStatus && inv.status === currentFilterStatus
        );
    }

    return (<Container maxW="90vw" marginLeft={'auto'} marginRight={'auto'}>
        <TableContainer maxW="90vw" marginLeft={'auto'} marginRight={'auto'}>
            <Table>
                <Tbody>
                    {getFilteredInvoices(invoices).map((invoice, index) => (
                        <Tr key={index} className='mb-2'>
                            {Object.keys(colDefs).map(colDefKey => getInvoiceColumnValue(invoice, colDefKey as keyof coldefObj))}
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </TableContainer>
    </Container>);
}