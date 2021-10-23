import Link from 'next/link'
import { Spacer } from '@nextui-org/react';
import { MapPin, Mail, User, Book, Menu as HamburgerMenu, Package, Code, Airplay } from 'react-feather';
import { Menu, MenuButton, MenuList, MenuItem, Box, Button } from "@chakra-ui/react"
import { useState, useEffect } from 'react';

export default function Navigation({ children }) {
    const useWindowSize = () => {
        const [windowSize, setWindowSize] = useState({
            width: undefined,
            height: undefined,
        });
        useEffect(() => {
            if (typeof window !== 'undefined') {
                function handleResize() {
                    setWindowSize({
                        width: window.innerWidth,
                        height: window.innerHeight,
                    });
                }

                window.addEventListener("resize", handleResize);
                handleResize();

                return () => window.removeEventListener("resize", handleResize);
            }
        }, []);
        return windowSize;
    }
    return (
        <Box position="relative" top={4} pb={useWindowSize().width >= '960' ? 0 : 20}>
            <Menu placement="bottom-start">
                <MenuButton as={Button} rightIcon={<HamburgerMenu />} colorScheme="orange">
                    MENÜ
                </MenuButton>
                <MenuList bgColor="blackAlpha.900">
                    <Link href="/">
                        <MenuItem minH="48px" _focus={{ bg: "white", color: "blackAlpha.900", fontWeight: '900', fontSize: 26 }}>
                            <Package /><Spacer />
                            <a>Anasayfa</a>
                        </MenuItem>
                    </Link>
                    <Link href="/project">
                        <MenuItem minH="40px" _focus={{ bg: "white", color: "blackAlpha.900", fontWeight: '900', fontSize: 26 }}>
                            <Code /><Spacer />
                            Projelerim
                        </MenuItem>
                    </Link>
                    <Link href="/desk">
                        <MenuItem minH="40px" _focus={{ bg: "white", color: "blackAlpha.900", fontWeight: '900', fontSize: 26 }}>
                            <Airplay /><Spacer />
                            Masam
                        </MenuItem>
                    </Link>
                </MenuList>
            </Menu>
        </Box>
    )
}
