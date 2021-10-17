import Header from '../components/Header'
import Profile from '../components/Profile';
import { Box } from '@chakra-ui/layout';

export default function Home() {
  return (
    <Box bg="orange.100">
      <Header />
      <Profile />
    </Box>
  );
}