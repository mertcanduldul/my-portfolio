import Link from 'next/link'
import { Container, Grid, Spacer, Text } from '@nextui-org/react';
import styles from '../styles/Home.module.css';
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

export default function header() {
  return (
    <Box>
      <Box position="relative">
        <div className={styles.header}>
          <Container>
            <div className={styles.headingWrapper}>
              <Grid.Container gap={2} justify="center">
                <Grid xs={12} md={6} lg={3}>
                  <div className={styles.info}>
                    <MapPin className={styles.icon} width={30} />
                    <div className={styles.rightArea}>
                      <Text h5>TR - ISTANBUL</Text>
                      <Text h6>Pendik 34903</Text>
                    </div>
                  </div>
                </Grid>
                <Grid xs={12} md={6} lg={3}>
                  <div className={styles.info}>
                    <Mail className={styles.icon} width={30} />
                    <div className={styles.rightArea}>
                      <Link href="mailto:mertcanduldul@gmail.com">
                        <a>mertcanduldul@gmail.com</a>
                      </Link>
                    </div>
                  </div>
                </Grid>
                <Grid xs={12} md={6} lg={3}>
                  <div className={styles.info}>
                    <User className={styles.icon} width={30} />
                    <div className={styles.rightArea}>
                      <Link href="/">
                        <a>Özgeçmişimi İndir</a>
                      </Link>
                    </div>
                  </div>
                </Grid>
                <Grid xs={12} md={6} lg={3}>
                  <div className={styles.info}>
                    <Book className={styles.icon} width={30} />
                    <div className={styles.rightArea}>
                      <Text h5>Şuan İlgi Duyduklarım</Text>
                      <Text h6>NEXT.JS.NET CORE SQL</Text>
                    </div>
                  </div>
                </Grid>
              </Grid.Container>
            </div>
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
                    <Link href="/project"><a>Projelerim</a></Link>
                  </MenuItem>
                  <MenuItem minH="40px">
                    <Airplay /><Spacer />
                    <Link href="/desk"><a>Masam</a></Link>
                  </MenuItem>
                </MenuList>
              </Menu>
            </Box>
          </Container>
        </div>
      </Box>
    </Box>
  )
}
