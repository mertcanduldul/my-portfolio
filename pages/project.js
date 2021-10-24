import { Box } from '@chakra-ui/layout';
import { Card, Grid, Container, Text, Link } from '@nextui-org/react';
import React from 'react'

export default function Project() {
    const projetctList = [
        {
            id: 0,
            title: 'Coin Market',
            description: "📱  You can learn the current values ​​of cryptocurrencies.",
            githublink: "https://github.com/mduldul/coinwalletapp",
            isMarketReady: 1,
            marketlink: "https://play.google.com/store/apps/details?id=com.coinwalletapp",
            developmentLanguage: "React-Native"
        },
        {
            id: 1,
            title: "Trading Market",
            description: "📱  It is a shopping platform that allows users to sell second-hand goods.",
            githublink: "https://github.com/mduldul/TradingMarketApp",
            isMarketReady: 0,
            marketlink: "https://github.com/mduldul/TradingMarketApp",
            developmentLanguage: "Android-JAVA"
        },
        {
            id: 2,
            title: "Kiyasla",
            description: "It is a web-based project that compares the features of the phones and shows you which one is suitable for you with statistical data.",
            githublink: "https://github.com/mduldul/Kiyasla",
            isMarketReady: 0,
            marketlink: "https://github.com/mduldul/Kiyasla",
            developmentLanguage: ".NET"
        },
        {
            id: 3,
            title: "otlarinugultusualtinda.com",
            description: "It is a website designed for digital photography exhibition.",
            githublink: "https://github.com/mduldul/OtlarinUgultusuAltinda.com",
            isMarketReady: 1,
            marketlink: "https://otlarinugultusualtinda.com",
            developmentLanguage: "PHP"
        }
    ]
    return (
        <Container>
            <Box bg="gray.50" borderRadius={10}>
                <Box textAlign="center">
                    <Text size={40} style={{ fontFamily: "Courier", textDecoration: 'underline' }}>Projects</Text>
                    <Text size={16} style={{ fontFamily: "Courier" }}>I share the open sources of the projects I have developed with you.</Text>
                </Box>
                <Box padding={10}>
                    <Grid.Container justify="center">
                        {
                            projetctList.map((item, index) => (
                                <Grid key={item.id} style={{ marginBottom: 10 }} xs={12} md={6} lg={4}>
                                    <Card width="330px" height="252px" color="dark" bordered>
                                        <Box display="flex" justifyContent="space-between">
                                            <Text h4 color="white" style={{ marginBottom: 10 }}>{item.title}</Text>
                                            <Text style={{ fontSize: 12, backgroundColor: 'darkgray', color: '#fff', borderRadius: 10, padding: 5, alignSelf: 'center' }}>{item.developmentLanguage}</Text>
                                        </Box>
                                        <Text color="white">{item.description}</Text>
                                        <Card.Footer color="white">
                                            <Link color target="_blank" href={item.githublink}>
                                                Visit source code on GitHub.
                                            </Link>
                                            <Link color target="_blank" href={item.marketlink}>
                                                {item.isMarketReady === 1 ? "Visit app from Play Store" : "Soon in Google Play Store."}
                                            </Link>
                                        </Card.Footer>
                                    </Card>
                                </Grid>
                            ))
                        }
                    </Grid.Container>
                </Box>
            </Box>
        </Container>

    )
}
