import React from 'react';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import Typography from '@mui/material/Typography';

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
                <Typography>
                    LBS
                </Typography>
            </ToggleButton>
            <ToggleButton value="center" aria-label="centered">
                <Typography>
                    KGS
                </Typography>
            </ToggleButton>
        </ToggleButtonGroup>
    );
}

export default Container