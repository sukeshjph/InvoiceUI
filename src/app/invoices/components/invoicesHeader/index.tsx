'use client';

import React, { useContext } from 'react';
import { Flex, Image } from '@chakra-ui/react';
import { Select } from '@chakra-ui/react';
import { InvoicesStateContext } from '../../context/context';
import { filter } from '../../types';

const filterCollection: filter[] = [
    { key: "All", value: "all" },
    { key: "Paid", value: "paid" },
    { key: "Pending", value: "pending" },
    { key: "Draft", value: "draft" }
]

export const InvoicesHeader = () => {
    const { InvoicesState: { currentFilterStatus, invoices }, setInvoicesState } = useContext(InvoicesStateContext);

    const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setInvoicesState(prevState => ({
            ...prevState,
            currentFilterStatus: event.target.value
        }))
    }

    return (
        <Flex justify="space-between" marginBottom={'20px'}>
            <div className="flex flex-col mb-2.5 pb-4">
                <span className="text-4xl font-bold">Invoices</span>
                <span>There are total {invoices.length} Invoices</span>
            </div>
            <Flex align={'center'}>
                <div><Select variant='unstyled' placeholder='Filter By Status' value={currentFilterStatus} onChange={handleFilterChange}>
                    {filterCollection.map((fltr, index) => (<option value={fltr.value} key={index}>{fltr.key}</option>))}
                </Select>
                </div>
                <div><button className='cursor-pointer'><Image src='/assets/icon-button-invoice.svg' alt='New Invoice' /></button></div>
            </Flex>
        </Flex>
    )
}
