import Header from '../components/Header'
import Profile from '../components/Profile';
import { Box } from '@chakra-ui/layout';
import Navigation from '../components/Navigation';

export default function Home({ children }) {
  return (
    <Box position='relative'>
      <Box bg='orange.100' position='absolute' h='10' w='100%' top={0} height={600} />
      <Header />
      <Profile />
    </Box>
  );
}