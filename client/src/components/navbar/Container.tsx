import React from 'react'
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import FitnessCenterOutlinedIcon from '@mui/icons-material/FitnessCenterOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ListAltIcon from '@mui/icons-material/ListAlt';
import Paper from '@mui/material/Paper';
import { Link } from "react-router-dom";

const Container: React.FC<{ value: any; handleChange: (event: React.SyntheticEvent, newValue: string) => void; }> = ({ value, handleChange }) => {
    return (
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
            <BottomNavigation value={value} onChange={handleChange}>
                <Link to="/">
                    <BottomNavigationAction
                        label="HOME"
                        value="home"
                        icon={<HomeOutlinedIcon />}

                    />
                </Link>
                <Link to="/workouts">
                    <BottomNavigationAction
                        label="WORKOUTS"
                        value="workouts"
                        icon={<ListAltIcon />}
                    />
                </Link>
                <Link to="/exercises">
                    <BottomNavigationAction
                        label="EXERCISES"
                        value="exercises"
                        icon={<FitnessCenterOutlinedIcon />}
                    />
                </Link>
                <BottomNavigationAction
                    label="SETTINGS"
                    value="settings"
                    icon={<SettingsOutlinedIcon />}
                />
            </BottomNavigation>
        </Paper>
    )
}

export default Container