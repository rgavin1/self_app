import React, { useState } from 'react';
import { Stack, Button, Container, Drawer, Link, TextField, Typography } from '@mui/material';

const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [userForm, setUserForm] = useState<any>();

  const toggleRegistrationForm = () => {
    if (!isOpen) {
      setIsOpen(true);
      setIsRegistered(!isRegistered);
    }
    setIsRegistered(!isRegistered);
  }

  const handleRegistrationForm = (rawInput: any) => {
    const { value, id } = rawInput.target;
    console.log(id, ": ", value);
    setUserForm({ [id]: value })
  }

  const submitForm = () => {
    console.log('userForm', userForm)
  }

  const toggleDrawer = () => {
    setIsOpen(!isOpen)
  }
  return (
    <Container className="app">
      <Stack
        direction="column"
        justifyContent="end"
        alignItems="center"
        style={{ minHeight: "100vh" }} 
      >
        {isOpen ?
          <h1>Logged In</h1> :
          <h1>Logged Out</h1>
        }
        <Button fullWidth size="large" variant="contained" onClick={toggleDrawer}>Login</Button>
        <p>Don't have an account? <Link href="#" onClick={toggleRegistrationForm}>Sign up</Link></p>
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
                {isRegistered ?
                  <Typography mt={3} mb={3} variant="h4">
                    Create an account
                  </Typography> :
                  <>
                    <Typography mt={2} variant="h5">
                      Welcome Back
                    </Typography>
                    <Typography variant="h6">
                      Login to your account
                    </Typography></>}
              </Stack>
              <TextField onChange={(e) => handleRegistrationForm(e)} margin="dense" fullWidth id="username" label="Username" variant="outlined" />
              {isRegistered && <div>
                <TextField onChange={(e) => handleRegistrationForm(e)} margin="dense" fullWidth id="email" label="Email" variant="outlined" />
                <TextField onChange={(e) => handleRegistrationForm(e)} margin="dense" fullWidth id="phone" label="Phone" variant="outlined" />
                <TextField onChange={(e) => handleRegistrationForm(e)} margin="dense" fullWidth id="dob" label="Date of Birth" variant="outlined" />
              </div>}
              <TextField onChange={(e) => handleRegistrationForm(e)} margin="normal" fullWidth id="password" label="Password" variant="outlined" />
              {!isRegistered ? <Button style={{ marginTop: "1.25em", marginBottom: "1.5em" }} fullWidth size="large" variant="contained" onClick={toggleDrawer}>Login</Button> :
                <Button style={{ marginTop: "1.25em", marginBottom: "1.5em" }} fullWidth size="large" variant="contained" onClick={submitForm}>Sign Up</Button>}
              <Link display="block" textAlign="center" href="#" style={{ marginBottom: !isRegistered ? "0em" : "1.75em" }}>Forgot your password?</Link>
              {!isRegistered && <p style={{ display: "block", textAlign: "center", marginTop: "1.25em", marginBottom: "2em" }}>Don't have an account? <Link href="#" onClick={toggleRegistrationForm} >Sign up</Link></p>}
            </Container>
          </Drawer>
        </React.Fragment>
      }
    </Container>
  );
}

export default App;
