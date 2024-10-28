import React from 'react';
import { Box, Flex, Image, Divider, Center } from '@chakra-ui/react';

export default function InvoicesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <Flex className='w-screen h-screen flex-row'>
            <Flex className={`flex-col h-screen justify-between w-28 bg-gray-600`}>
                <Box className='bg-violet-500 p-8'>
                    <Center><Image src='/assets/icon-pacman.png' /></Center>
                </Box>
                <Box>
                    <Box className='p-10'>
                        <Center>
                            <Image src='/assets/icon-moon.svg' />
                        </Center>
                    </Box>
                    <Divider orientation='horizontal' />
                    <Box className='p-4'>
                        <Image className='rounded-full' src='/assets/image-avatar.jpg' />
                    </Box>
                </Box>
            </Flex>
            <Box flex="1" p="8" className='container'>
                {children}
            </Box>
        </Flex>
    );
}
