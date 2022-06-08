import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import { Container } from '@mui/material';
import { Home, Login, NotFound, Onboarding, Exercises, Workouts } from './pages';
import { AuthProvider } from './hooks/auth';
import ProtectedRoutes from './utils/protectedRoutes/ProtectedRoutes';

const App: React.FC = () => {
  const [creds, setCreds] = useState<any>();
  const [token, setToken] = useState("")

  return (
    <AuthProvider>
      <Container className="app">
        <Routes>
          <Route path="login" element={<Login {...{ creds, setCreds, setToken }} />} />
          <Route path="*" element={<NotFound />} />
          <Route element={<ProtectedRoutes {...{ token }} />}>
            <Route path="/" element={<Home />} />
            <Route path="/exercises" element={<Exercises />} />
            <Route path="/workouts" element={<Workouts />} />
            <Route path="/onboarding" element={<Onboarding />} />
          </Route>
        </Routes>
      </Container>
    </AuthProvider>
  );
}

export default App;
