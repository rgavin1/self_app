import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import { Container } from '@mui/material';
import { Home, Login, NotFound } from './pages';
import { AuthProvider, useAuth } from './hooks/auth';

const ProtectedPath = ({ children }: any) => {
  const auth = useAuth();
  if (!auth?.hasCreds) return <Navigate to="/login" />;
  return children;
}

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Container className="app">
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="/" element={
            <ProtectedPath>
              <Home />
            </ProtectedPath>
          } />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </AuthProvider>
  );
}

export default App;
