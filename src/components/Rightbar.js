import React from 'react';
import { Avatar, AvatarGroup, Box, Card, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import { deepOrange } from '@mui/material/colors';

function Rightbar(props) {
    return (
        <Box flex={3} p={2}>
            <Box position="fixed" pr={2}>
                <Typography variant="h6">Online Friends</Typography>
                <Box flex={1}>
                    <AvatarGroup>
                        <Avatar alt="Remy Sharp" src="https://mui.com/static/images/cards/yosemite.jpeg" />
                        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                        <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                        <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
                        <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
                    </AvatarGroup>
                </Box>
               
                <Typography variant="h6">Latest Photos</Typography>
                <ImageList cols={3} gap={10}>
                    <ImageListItem>
                        <img src='https://mui.com/static/images/cards/yosemite.jpeg' alt="" />
                    </ImageListItem>
                    <ImageListItem>
                        <img src='https://mui.com/static/images/cards/yosemite.jpeg' alt="" />
                    </ImageListItem>
                    <ImageListItem>
                        <img src='https://mui.com/static/images/cards/yosemite.jpeg' alt="" />
                    </ImageListItem>
                    <ImageListItem>
                        <img src='https://mui.com/static/images/cards/yosemite.jpeg' alt="" />
                    </ImageListItem>
                    <ImageListItem>
                        <img src='https://mui.com/static/images/cards/yosemite.jpeg' alt="" />
                    </ImageListItem>
                </ImageList>
                <List>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar sx={{ bgcolor: deepOrange[500] }} >N</Avatar>
                        </ListItemAvatar>
                        <ListItemText
                        primary="Summer BBQ"
                        secondary={
                            <React.Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                to Scott, Alex, Jennifer
                            </Typography>
                            {" — Wish I could come, but I'm out of town this…"}
                            </React.Fragment>
                        }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar sx={{ bgcolor: deepOrange[500] }} >N</Avatar>
                        </ListItemAvatar>
                        <ListItemText
                        primary="Summer BBQ"
                        secondary={
                            <React.Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                to Scott, Alex, Jennifer
                            </Typography>
                            {" — Wish I could come, but I'm out of town this…"}
                            </React.Fragment>
                        }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar sx={{ bgcolor: deepOrange[500] }} >N</Avatar>
                        </ListItemAvatar>
                        <ListItemText
                        primary="Summer BBQ"
                        secondary={
                            <React.Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                to Scott, Alex, Jennifer
                            </Typography>
                            {" — Wish I could come, but I'm out of town this…"}
                            </React.Fragment>
                        }
                        />
                    </ListItem>
                </List>
            </Box>
        </Box>
    );
}

export default Rightbar;