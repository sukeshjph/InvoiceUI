'use client';

import { useState, useEffect } from 'react';
import { Container, Flex, Button, Heading, Select } from '@chakra-ui/react'
import {
    Table,
    Tbody,
    Tr,
    Td,
    TableContainer,
} from '@chakra-ui/react';
import { colDefs } from './columnDefintions/defs';
import { Invoice, coldefObj } from './types';

const filterObject = {
    Paid: "paid",
    Pending: "pending",
    Draft: "draft",
};

type filterKeys = keyof typeof filterObject;
type filterValues = typeof filterObject[filterKeys];

const ViewInvoices = () => {
    const [invoices, setInvoices] = useState<Invoice[]>([]);
    const [currentFilterStatus, setCurrentFilterStatus] = useState<filterValues>("");

    useEffect(() => {
        const fetchInvoices = async () => {
            const result = await fetch('/api/invoices');
            const invoices = await result.json();
            setInvoices(invoices);
        }
        fetchInvoices();
    }, []);

    const getInvoiceColumnValue = (invoice: Invoice, key: keyof coldefObj) => {
        const colValue = colDefs[key](invoice[key] as string);
        return (<Td>{colValue}</Td>);
    }

    const getFilteredInvoices = (invoices: Invoice[]) => {
        if (["Filter By Status", ""].includes(currentFilterStatus)) {
            return invoices;
        }
        return invoices.filter(inv =>
            currentFilterStatus && inv.status === currentFilterStatus
        );
    }

    return (
        <Container maxW="90vw">
            <Flex justify="space-between" marginBottom={'20px'}>
                <Heading>Invoices</Heading>
                <Flex align={'center'}>
                    <div><Select variant='unstyled' value={currentFilterStatus} onChange={(event) => {
                        setCurrentFilterStatus(event.target.value);
                    }}>
                        <option>Filter By Status</option>
                        {Object.keys(filterObject).map((filterKey, index) => (<option value={filterObject[filterKey as filterKeys]} key={index}>{filterKey}</option>))}
                    </Select>
                    </div>
                    <div><Button>New Invoice</Button></div>
                </Flex>
            </Flex>
            <TableContainer maxW="90vw" marginLeft={'auto'} marginRight={'auto'}>
                <Table variant='striped' colorScheme='teal'>
                    <Tbody>
                        {getFilteredInvoices(invoices).map((invoice, index) => (
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