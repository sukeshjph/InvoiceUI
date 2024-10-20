'use client';
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
import { useInvoiceHook } from './hooks/invoiceshook';

interface filter {
    key: string;
    value: string;
}

const filterCollection: filter[] = [
    { key: "Paid", value: "paid" },
    { key: "Pending", value: "pending" },
    { key: "Draft", value: "draft" }
]

const ViewInvoices = () => {

    const {
        invoices,
        getFilteredInvoices,
        currentFilterStatus,
        setCurrentFilterStatus,
    } = useInvoiceHook();

    const getInvoiceColumnValue = (invoice: Invoice, key: keyof coldefObj) => {
        const colValue = colDefs[key](invoice[key] as string);
        return (<Td>{colValue}</Td>);
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
                        {filterCollection.map((fltr, index) => (<option value={fltr.value} key={index}>{fltr.key}</option>))}
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