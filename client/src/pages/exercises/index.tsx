import React from 'react'
import { Navbar } from '../../components'

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';

const AlignItemsList = () => {
    const arr = Array.from({ length: 10 }, (_, i) => i)
    return (
        <List sx={{ width: '100%', maxWidth: 380, bgcolor: 'background.paper' }}>
            {
                arr.map(i => <>
                    <ListItem style={{
                        backgroundImage: "url('https://media.istockphoto.com/photos/young-smiling-woman-warming-up-and-stretching-her-legs-picture-id547226992?k=20&m=547226992&s=612x612&w=0&h=7FC9ZjYEP9fThzsnnJ_AKYG0Ti_ZnisKw5azZ4GMaZY=')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'inherit',
                        backgroundRepeat: 'no-repeat',
                        backgroundBlendMode: 'overlay',
                        padding: '15px',
                        borderRadius: '15px'
                    }}>
                        <ListItemText
                            key={i}
                            primary={
                                <>
                                    <Typography
                                        component="span"
                                        variant="h4"
                                        color="text.primary"
                                    >
                                        Quads & Delts
                                    </Typography>
                                    <Typography
                                        component="p"
                                        variant="body1"
                                        color="text.primary">
                                        13 exercises
                                    </Typography>
                                    <Chip
                                        label="Medium Difficulty"
                                        component="div"
                                        variant="filled"
                                        color='secondary'
                                    />
                                </>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" style={{ margin: "15px 0" }} />
                </>
                )
            }
        </List>
    );
}


const Nav: React.FC = () => {
    const [value, setValue] = React.useState('recents');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <div>
            <h1 style={{
                position: 'sticky',
                top: 0,
                zIndex: 999,
                background: 'white',
                width: '100%',
                height: '51px'
            }} >
                Exercises
            </h1>
            <AlignItemsList />
            <Navbar {...{ value, handleChange }} />
        </div>
    )
}

export default Nav