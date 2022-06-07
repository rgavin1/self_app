import React from 'react'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

const buttons = [
    <Button key="one">Lose Fat</Button>,
    <Button key="two">Get Stronger</Button>,
    <Button key="three">Build Muscle</Button>,
    <Button key="four">Improve Endurance</Button>,
    <Button key="five">Improve Flexibility</Button>,
];

const Container = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                '& > *': {
                    m: 1,
                },
            }}
        >
            <ButtonGroup
                orientation="vertical"
                aria-label="vertical outlined button group"
            >
                {buttons}
            </ButtonGroup>
        </Box>
    );
}

export default Container