import React from 'react';
import { Autocomplete, Button, TextField, Typography, Avatar } from '@mui/material';
import Navbar from '../../components/header/Navbar';
import { deepOrange, deepPurple } from '@mui/material/colors';

const top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: 'Pulp Fiction', year: 1994 }
]

function Project(props) {
    return (
        <div>
       <Navbar />
        <aside>
            
        </aside>
        <main>
            <Typography variant="body2">Hello World</Typography>
            <Button variant="contained">Hello World</Button>
            <Autocomplete
               // disablePortal
                id="combo-box-demo"
                options={top100Films}
                sx={{ width: 300, marginTop:10 }}
                renderInput={(params) => <TextField {...params} label="Movie" />}
            />
            <Avatar>H</Avatar>
            <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
            <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
        </main>
        

            
        </div>
    );
}

export default Project;

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
