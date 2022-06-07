import React from 'react'
import { Stack, Button, Typography, Link } from '@mui/material';

const Container: React.FC<{ toggleDrawer: () => void; toggleRegistrationForm: () => void; }> = ({ toggleDrawer, toggleRegistrationForm }) => {
    return (
        <Stack
            direction="column"
            justifyContent="space-evenly"
            alignItems="center"
            style={{ minHeight: "100vh" }}
        >
            <div id="logo">
                <Typography variant="h1" component="h1">SELF</Typography>
                <Typography align="center" variant='body1'>Shape your body</Typography>
            </div>
            <div id="login" style={{ width: "100%" }}>
                <Button fullWidth size="large" variant="contained" color="secondary" onClick={toggleDrawer}>Login</Button>
                <p style={{ textAlign: "center" }}>Don't have an account? <Link href="#" onClick={toggleRegistrationForm}>Sign up</Link></p>
            </div>
        </Stack>
    )
}

export default Container;