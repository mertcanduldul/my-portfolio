import React from 'react';
import Link from 'next/link'
import dynamic from 'next/dynamic'
import styles from '../styles/Home.module.css';
const Navigation = dynamic(() => import('./Navigation'), { ssr: false });

import { Container, Grid, Text, Switch, Button } from '@nextui-org/react';
import { MapPin, Mail, User, Book, Sun, Moon } from 'react-feather';
import { Box } from '@chakra-ui/layout';
import { useColorMode } from '@chakra-ui/color-mode';

export default function Header({ children }) {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Box>
      <Box position="relative">
        <div className={styles.header}>
          <Container>
            <Box className={styles.headingWrapper}>
              <Grid.Container>
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
                <Grid xs={9} md={6} lg={3} >
                  <div className={styles.info}>
                    <Book className={styles.icon} width={30} />
                    <div className={styles.rightArea}>
                      <Text h5>Şuan İlgi Duyduklarım</Text>
                      <Text h6>NEXT.JS.NET CORE SQL</Text>
                    </div>
                  </div>
                </Grid>
                <Grid xs={12} md={3} lg={12} justify="space-between">
                  <Navigation />
                  <Switch
                    checked={colorMode === "light" ? false : true}
                    size="xlarge"
                    color="dark"
                    iconOn={<Moon />}
                    iconOff={<Sun style={{ backgroundColor: 'orangered', borderRadius: 10 }} />}
                    onChange={toggleColorMode}
                  />
                </Grid>
              </Grid.Container>
            </Box>
          </Container>
        </div>
      </Box>
    </Box>
  )
}