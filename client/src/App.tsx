import React, { useState } from 'react';
import { Stack, Button, Container, Drawer, Link, TextField } from '@mui/material';

const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen)
  }
  return (
    <Container className="app">
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="stretch"
      >
        {isOpen ?
          <h1>Logged In</h1> :
          <h1>Logged Out</h1>
        }
        <Button fullWidth size="large" variant="contained" onClick={toggleDrawer}>Login</Button>
        <p>Don't have an account? <Link href="#">Sign up</Link></p>
      </Stack>
      {
        <React.Fragment key={"bottom"}>
          <Drawer
            anchor={"bottom"}
            open={isOpen}
            onClose={toggleDrawer}
          >
            <Container>
              <Stack
                direction="column"
                justifyContent="flex-end"
                alignItems="center"
                spacing={1}
              >
                <h1>Welcome Back</h1>
                <h5>Login to your account</h5>
              </Stack>

              <TextField fullWidth id="outlined-basic" label="Outlined" variant="outlined" />
              <TextField fullWidth id="outlined-basic" label="Outlined" variant="outlined" />
              <Button fullWidth size="large" variant="contained" onClick={toggleDrawer}>Login</Button>
              <Link href="#">Forgot your password?</Link>
              <p>Don't have an account? <Link href="#">Sign up</Link></p>
            </Container>
          </Drawer>
        </React.Fragment>
      }
    </Container>
  );
}

export default App;
