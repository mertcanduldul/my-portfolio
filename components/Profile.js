
import { Image } from '@chakra-ui/image'
import { Box, Container, Flex, Text } from '@chakra-ui/layout'
import { Button, Grid, Row, Spacer, Link } from '@nextui-org/react'
import React from 'react'
import { GitHub, Instagram, Linkedin, Twitter } from 'react-feather'
import styles from '../styles/Home.module.css'


export default function Profile() {
    return (
        <Container>
            <div style={{ zIndex: 10, position: 'relative' }}>
                <Box mt={200} bg="white" zIndex={10}>
                    <Grid.Container justify="center" >
                        <Grid md={8} justify="center" >
                            <Box position="relative" top={-100}>
                                <Box>
                                    <Flex justifyContent="center">
                                        <Image
                                            borderRadius="3xl"
                                            width="200px"
                                            src="/profile.jpg"
                                            alt="Mert Can Düldül"
                                        />
                                    </Flex>
                                    <Flex textAlign="center" display="block" position="relative" top={5}>
                                        <Text className={styles.name}>Mert Can Düldül</Text>
                                        <Text color="orange.500" >Junior Software Developer</Text>
                                    </Flex>
                                </Box>
                                <Box position="relative" top={10}>
                                    <Flex display="block" textAlign="center">
                                        <Text fontSize="xl"><b>Born : </b>13 ŞUBAT 1998</Text>
                                        <Text fontSize="xl"><b>E-Mail : </b>mertcanduldul@gmail.com</Text>
                                        <Text fontSize="xl"><b>Status : </b>Intern at <a style={{ textDecoration: 'underline' }} href="https://isnet.net.tr/">iŞNet</a></Text>
                                    </Flex>
                                </Box>
                                <Box position="relative" top={20} justifyContent="center" display="inline-block">
                                    <Flex>
                                        <Link href="https://github.com/mduldul"><Button color="dark" shadow icon={<GitHub />} auto /><Spacer /></Link>
                                        <Button color="primary" shadow icon={<Linkedin />} auto /><Spacer />
                                        <Button color="error" shadow icon={<Instagram />} auto /><Spacer />
                                        <Button color="primary" shadow icon={<Twitter />} auto />
                                    </Flex>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid.Container>
                </Box>
            </div>
            <div style={{ position: 'absolute', backgroundColor: 'white', width: '100%', height: '200px', bottom: 0, left: 0, zIndex: 8 }}><Spacer /></div>
        </Container>

    )
}
