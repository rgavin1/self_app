import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { Navbar } from '../../components/index'

const BasicCard = () => {
    return (
        <Box>
            <Grid container spacing={12}>
                <Grid item xs={8}>
                    <Typography variant="h5" color="text.secondary" gutterBottom>
                        Hello
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                        Ramsey Gavin
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <Avatar alt="Ramsey Gavin" src='https://avatars.githubusercontent.com/u/44215916?s=96&v=4' sx={{ width: 56, height: 56 }} />
                </Grid>
            </Grid>
        </Box>
    );
}

const CircularColor = () => {
    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <CircularProgress color="secondary" />
        </div>
    );
}


export default function Home() {
    const [value, setValue] = React.useState('recents');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    const gettingUser = { user: false }

    return (   
        <>{gettingUser.user ? <CircularColor /> :
        <>
                <BasicCard />
                <Navbar {...{ value, handleChange }} />
            </>}</>
    );
}
