import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Container = () => {
    return (
        <Box
            sx={{
                width: 500,
                maxWidth: '100%',
            }}
        >
            <TextField fullWidth label="Weight" id="fullWidth" />
        </Box>
    );
}

export default Container