'use client';

import React, { useContext } from 'react';
import { Flex, Button, Heading } from '@chakra-ui/react';
import { Select } from '@chakra-ui/react';
import { InvoicesStateContext } from '../../common/context';
import { filter } from '../../types';

const filterCollection: filter[] = [
    { key: "All", value: "all" },
    { key: "Paid", value: "paid" },
    { key: "Pending", value: "pending" },
    { key: "Draft", value: "draft" }
]

export const InvoicesHeader = () => {
    const { InvoicesState: { currentFilterStatus }, setInvoicesState } = useContext(InvoicesStateContext);

    const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setInvoicesState(prevState => ({
            ...prevState,
            currentFilterStatus: event.target.value
        }))
    }

    return (
        <Flex justify="space-between" marginBottom={'20px'}>
            <Heading>Invoices</Heading>
            <Flex align={'center'}>
                <div><Select variant='unstyled' placeholder='Filter By Status' value={currentFilterStatus} onChange={handleFilterChange}>
                    {filterCollection.map((fltr, index) => (<option value={fltr.value} key={index}>{fltr.key}</option>))}
                </Select>
                </div>
                <div><Button>New Invoice</Button></div>
            </Flex>
        </Flex>
    )
}
