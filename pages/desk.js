import { Box } from "@chakra-ui/layout";
import { Container, Text } from "@nextui-org/react";


export default function desk({ children }) {
    return (
        <Container>
            <Box bg="orange.200">
                <Box textAlign="center">
                    <Text size={40} style={{ fontFamily: 'Courier', textDecoration: 'underline' }}>MASAM</Text>
                    <Text size={16} style={{ fontFamily: 'Courier' }}>
                        Equipment that I use a lot in my daily life</Text>
                </Box>
            </Box>
        </Container>
    )
}
