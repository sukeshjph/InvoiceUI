import React from 'react';
import { Box, Flex, Image, Divider, Center } from '@chakra-ui/react';
import styles from './styles.module.css';

export default function InvoicesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <Flex className={styles.layoutContainer}>
            <Flex className={styles.navContainer}>

                <Box className={styles.pacmanContainer}>
                    <Center><Image src='/assets/icon-pacman.png' /></Center>
                </Box>

                <Box>
                    <Box className={styles.iconMoonContainer}>
                        <Center>
                            <Image src='/assets/icon-moon.svg' />
                        </Center>
                    </Box>
                    <Divider orientation='horizontal' />
                    <Box className={styles.navAvatar}>
                        <Image className={styles.navAvatarImage} src='/assets/image-avatar.jpg' />
                    </Box>
                </Box>
            </Flex>
            <Box flex="1" p="8" className={styles.contentContainer}>
                {children}
            </Box>
        </Flex>
    );
}
