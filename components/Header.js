import React from 'react';
import Link from 'next/link'
import dynamic from 'next/dynamic'
import styles from '../styles/Home.module.css';
const Navigation = dynamic(() => import('./Navigation'), { ssr: false });

import { Container, Grid, Text } from '@nextui-org/react';
import { MapPin, Mail, User, Book } from 'react-feather';
import { Box } from '@chakra-ui/layout';



export default function Header({ children }) {
  return (
    <Box>
      <Box position="relative">
        <div className={styles.header}>
          <Container>
            <div className={styles.headingWrapper}>
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
                <Grid xs={12} md={10} lg={11} />
                <Grid xs={1} md={2} lg={1}>
                  <Navigation />
                </Grid>
              </Grid.Container>
            </div>
          </Container>
        </div>
      </Box>
    </Box>
  )
}