import styled from '@emotion/styled';

import { Button } from '@mui/material';
import { Box, Stack } from '@mui/system';
import React from 'react';
import Navbar from '../../components/Navbar';
import Rightbar from '../../components/Rightbar';
import Sidebar from '../../components/Sidebar';
import Feed from '../../components/Feed';

function Project(props) {
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

export default Project;