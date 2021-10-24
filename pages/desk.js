import { Box } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import { Container, Grid, Text } from "@nextui-org/react";

export default function desk({ children }) {
    return (
        <Container>
            <Box bg="gray.50" py={[10, 20]}>
                <Box textAlign="center">
                    <Text size={40} style={{ fontFamily: 'Courier', textDecoration: 'underline' }}>DESK</Text>
                    <Text size={16} style={{ fontFamily: 'Courier' }}>Equipment that I use a lot in my daily life</Text>
                </Box>
                <Box>
                    <Grid.Container>
                        <Grid xs={12}>
                            <Box textAlign="center" pb={[5, 0]}>
                                <Image
                                    p={[0, 50]}
                                    objectFit="cover"
                                    src="/desk.jpg"
                                    alt="mydesktop"
                                />
                            </Box>
                        </Grid>
                        <Grid xs={12} md={6}>
                            <Box textAlign="center" pb={[5, 0]}>
                                <Image
                                    p={[0, 50]}
                                    objectFit="cover"
                                    src="/macbook.jpg"
                                    alt="macbook"
                                />
                                <Text style={{ fontFamily: 'Courier' }}>Apple Macbook Air M1 16GB RAM</Text>
                            </Box>

                        </Grid>
                        <Grid xs={12} md={6}>
                            <Box textAlign="center">
                                <Image
                                    p={[0, 50]}
                                    objectFit="cover"
                                    src="/monitor.jpg"
                                    alt="rampageRm344"
                                />
                                <Text style={{ fontFamily: 'Courier' }}>Rampage RM-344 24" 144Hz 1MS</Text>
                            </Box>
                        </Grid>
                    </Grid.Container>
                </Box>
            </Box>
            <Box mt={10} textAlign="center">
                <Text style={{ fontFamily: 'Courier' }}>You can access the source codes of this website on Github.</Text>
            </Box>
        </Container>

    )
}
