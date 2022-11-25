import {Settings } from '@mui/icons-material';
import { Box, Button, Stack, styled } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Rightbar from './components/Rightbar';
import Navbar from './components/Navbar';
import SignIn from './pages/auth/SignIn';
import Auth from './pages/auth/Auth';
import SignUp from './pages/auth/SignUp';
import Project from './pages/projects/Project';


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
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="projects" element={ <Project /> } />
      </Routes>
      
    </Box>
  );
}

export default App;
