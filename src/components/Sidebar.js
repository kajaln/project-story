import { Home} from '@mui/icons-material';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';

function Sidebar(props) {
    return (
        <Box flex={2}>
            <Box position="fixed" sx={{width:"19%"}}>
                <List>
                    <ListItem>
                        <ListItemButton>
                            <ListItemIcon>
                                <Home />
                            </ListItemIcon>
                            <ListItemText primary="Home" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton>
                            <ListItemIcon>
                                <Home />
                            </ListItemIcon>
                            <ListItemText primary="Pages" />
                        </ListItemButton>
                    </ListItem>
                </List>  
            </Box>
        </Box>
    );
}

export default Sidebar;