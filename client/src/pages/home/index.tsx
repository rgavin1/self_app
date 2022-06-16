import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom';
import { Avatar, Grid, Typography, Box, CircularProgress } from '@mui/material';

import useUser from '../../hooks/user'
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


const Home: React.FC<{ token: string }> = ({ token }) => {
    const [value, setValue] = React.useState('recents');
    const [loading, setLoading] = React.useState(false);

    useEffect(() => {
        (async () => {
            setLoading(true);
            try {

            } catch {

            }
            setLoading(false);
        })()
    }, [])

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (   
        <>{loading ? <CircularColor /> :
        <>
                <BasicCard />
                <Navbar {...{ value, handleChange }} />
            </>}</>
    );
}

export default Home