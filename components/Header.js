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
import Navigation from './Navigation';


export default function header({ children }) {
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
            <Navigation/>
          </Container>
        </div>
      </Box>
    </Box>
  )
}
