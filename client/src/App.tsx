import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Container } from '@mui/material';
import { Home, Login, NotFound } from './pages';
import { AuthProvider } from './hooks/auth';

const App: React.FC = () => {

  return (
    <AuthProvider>
    <Container className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </AuthProvider>
  );
}

export default App;
