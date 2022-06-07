import React from 'react'
import ManOutlinedIcon from '@mui/icons-material/ManOutlined';
import WomanOutlinedIcon from '@mui/icons-material/WomanOutlined';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const Container = () => {
    const [alignment, setAlignment] = React.useState<string | null>('left');

    const handleAlignment = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string | null,
    ) => {
        setAlignment(newAlignment);
    };

    return (
        <ToggleButtonGroup
            value={alignment}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
        >
            <ToggleButton value="left" aria-label="left aligned">
                <ManOutlinedIcon />
            </ToggleButton>
            <ToggleButton value="center" aria-label="centered">
                <WomanOutlinedIcon />
            </ToggleButton>
        </ToggleButtonGroup>
    );
}

export default Container