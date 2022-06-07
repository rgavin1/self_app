import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

const Container = () => {
    return (
        <Box
            sx={{
                width: 500,
                maxWidth: '100%',
            }}
        >
            <TextField fullWidth label="Height" id="fullWidth" InputProps={{
                endAdornment: <InputAdornment position="start">cm</InputAdornment>,
            }} />
        </Box>
    );
}

export default Container