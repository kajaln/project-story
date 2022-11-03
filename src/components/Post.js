import { Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material';
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import { Box } from '@mui/system';
import React from 'react';

function Post(props) {
    return (
        <Box>
            <Card sx={{marginBottom:3}}>
                <CardHeader
                    avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        R
                    </Avatar>
                    }
                    action={
                    <IconButton aria-label="settings">
                        <MoreVert />
                    </IconButton>
                    }
                    title="Shrimp and Chorizo Paella"
                    subheader="September 14, 2016"
                />
                <CardMedia
                    component="img"
                    height="5%"
                    image="https://mui.com/static/images/cards/yosemite.jpeg"
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                    if you like.
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:'red'}} />} />
                    <IconButton aria-label="share">
                        <Share />
                    </IconButton>
                    
                </CardActions>
                
            </Card>
        </Box>
    );
}

export default Post;