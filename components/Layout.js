import { Box } from '@chakra-ui/layout'
import { Container } from '@nextui-org/react'
import { } from '@nextui-org/react'
import React from 'react'
import Header from './Header'

export default function Layout({ children }) {
    return (
        <Box bg="orange.100" pb={5}>
            <Header />
            <Box position="relative" top={50}>
                <Container fluid>
                    {children}
                </Container>
            </Box>
        </Box>
    )
}
