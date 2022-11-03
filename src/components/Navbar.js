import { WidgetsRounded, Mail, Notifications } from '@mui/icons-material';
import { AppBar, styled, Toolbar, Typography, Box, InputBase, Badge, IconButton, Avatar, Menu, MenuItem } from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import React, { useState } from 'react';

const StyledToolbar = styled(Toolbar)({
    display:"flex",
    justifyContent:"space-between"
});

const Search = styled("div")(({theme})=> ({
    backgroundColor:'#fff',
    padding:"0 10px",
    borderRadius:theme.shape.borderRadius,
    width:"40%"
}))
const HeaderIcons = styled("div")(({theme}) => ({
    display:"flex",
    gap: 20,
    justifyContent:"flex-end",
    alignItems:"center"
}))
function Navbar(props) {
    const [open, setOpen] = useState(false);
    return (
       <AppBar position="sticky">
        <StyledToolbar>
            
            <Typography variant="h6" component="h1" sx={{display: {xs:"none", sm:"block"} }}>
                Project Story
            </Typography>
            <WidgetsRounded sx={{display: {xs:"block", sm:"none"} }} />
 
            <Search>
                <InputBase placeholder='Search...' />
            </Search>
           
            <HeaderIcons>
                    <Badge badgeContent={4} color="error" >
                        <Mail color="white" />
                    </Badge>
                    <Badge badgeContent={4} color="error" >
                        <Notifications color="white" />
                    </Badge>
                    <Avatar sx={{ bgcolor: deepOrange[500] }} onClick={ (e) => setOpen(true)}>N</Avatar>
                    <Menu
                        id="demo-positioned-menu"
                        aria-labelledby="demo-positioned-button"
                       
                        open={open}
                        onClick={(e) => setOpen(false)}
                        anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                        }}
                        transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                        }}
                    >
                        <MenuItem>Profile</MenuItem>
                        <MenuItem>My account</MenuItem>
                        <MenuItem>Logout</MenuItem>
                    </Menu>
            </HeaderIcons>
        </StyledToolbar> 
       </AppBar>
    );
}

export default Navbar;