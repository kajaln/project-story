import {Settings } from '@mui/icons-material';
import { Box, Button, Stack, styled } from '@mui/material';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Rightbar from './components/Rightbar';
import Navbar from './components/Navbar';

function App() {
  const PrimaryButton =  styled(Button)(({theme}) => ({
    backgroundColor:theme.palette.primary.main,
      color:'#fff',
      margin:5,
      "&:hover":{
        backgroundColor:'#0f0'
      }
  }));
  return (
    <Box>
      <Navbar />
      <Stack direction='row' justifyContent='space-between'>
      
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
    </Box>
  );
}

export default App;
