import Link from 'next/link'
import { Spacer } from '@nextui-org/react';
import { MapPin, Mail, User, Book, Menu as HamburgerMenu, Package, Code, Airplay } from 'react-feather';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuIcon,
    MenuCommand,
    MenuDivider, Box, Button, Image
} from "@chakra-ui/react"
export default function Navigation() {
    return (
        <Box float="right" position="relative" right={120} top={10}>
            <Menu>
                <MenuButton as={Button} rightIcon={<HamburgerMenu />}>
                    MENÜ
                </MenuButton>
                <MenuList>
                    <MenuItem minH="48px">
                        <Package /><Spacer />
                        <Link href="/"><a>Anasayfa</a></Link>
                    </MenuItem>
                    <MenuItem minH="40px">
                        <Code /><Spacer />
                        <Link href="/project">Projelerim</Link>
                    </MenuItem>
                    <MenuItem minH="40px">
                        <Airplay /><Spacer />
                        <Link href="/desk">Masam</Link>
                    </MenuItem>
                </MenuList>
            </Menu>
        </Box>
    )
}
