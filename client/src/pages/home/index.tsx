import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import FitnessCenterOutlinedIcon from '@mui/icons-material/FitnessCenterOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

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


export default function Home() {
    const [value, setValue] = React.useState('recents');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (    
        <>
            <BasicCard />
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                <BottomNavigation value={value} onChange={handleChange}>
                <BottomNavigationAction
                        label="HOME"
                        value="home"
                        icon={<HomeOutlinedIcon />}
                />
                <BottomNavigationAction
                        label="EXERCISES"
                        value="exercises"
                        icon={<FitnessCenterOutlinedIcon />}
                />
                <BottomNavigationAction
                        label="SETTINGS"
                        value="settings"
                        icon={<SettingsOutlinedIcon />}
                    />
            </BottomNavigation>
        </Paper>
        </>
    );
}
