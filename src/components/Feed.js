import {Box} from '@mui/material';
import React from 'react';
import Post from './Post';

function Feed(props) {
    return (
        <Box flex={5} p={2}>
           <Post />
           <Post />
        </Box>
    );
}

export default Feed;