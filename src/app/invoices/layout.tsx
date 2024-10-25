import React from 'react';
import { Box, Flex, Image } from '@chakra-ui/react';

export default function InvoicesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <Flex height="100vh" width="100vw" flexDirection={'row'}>
            <Flex flexDirection={'column'} height="100vh" width="103px" bg="#7E88C3">
                <Box bg="#7C5DFA" />
                <Image src='/assets/icon-moon.svg' alt='Dan Abramov' />
                <Box>
                    <Image src='/assets/image-avatar.jpg' alt='Dan Abramov' />
                </Box>
            </Flex>
            <Box flex="1" p="8">
                {children}
            </Box>
        </Flex>
    );
}
