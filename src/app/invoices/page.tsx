'use client';

import { useState, useEffect } from 'react';
import { Container } from '@chakra-ui/react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react';
import { colDefs } from './columnDefintions/defs';
import { Invoice, coldefObj } from './types';


const ViewInvoices = () => {
    const [invoices, setInvoices] = useState([]);
    useEffect(() => {
        const fetchInvoices = async () => {
            const result = await fetch('/api/invoices');
            const invoices = await result.json();
            setInvoices(invoices);
        }
        fetchInvoices();

    }, []);

    const getInvoiceColumnValue = (invoice: Invoice, key: keyof coldefObj) => {
        const colValue = colDefs[key](invoice[key]);
        return (<Td>{colValue}</Td>);
    }

    return (
        <Container>
            <div></div>
            <TableContainer>
                <Table variant='striped' colorScheme='teal'>
                    <Tbody>
                        {invoices.map((invoice, index) => (
                            <Tr key={index}>
                                {Object.keys(colDefs).map(colDefKey => getInvoiceColumnValue(invoice, colDefKey as keyof coldefObj))}
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>
        </Container>

    )


}

export default ViewInvoices;