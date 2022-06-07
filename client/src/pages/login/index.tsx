import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { Login as LoginSection, Drawer } from '../../components/index';

const Login: React.FC<{ creds: any, setCreds: (t: any) => void; setToken: (t: any) => void; }> = ({ creds, setCreds, setToken }) => {
    const auth = useAuth();
    let navigate = useNavigate();

    const [isOpen, setIsOpen] = useState(false);
    const [isRegistered, setIsRegistered] = useState(false);

    const toggleRegistrationForm = () => {
        if (isOpen) setIsRegistered(!isRegistered);
        setIsOpen(true);
        setIsRegistered(!isRegistered);
    }

    const handleRegistrationForm = (rawInput: any) => {
        const { value, id } = rawInput.target;
        setCreds({ ...creds, [id]: value })
    }

    const submitForm = async () => {
        const token = await auth?.login(creds);
        if (!token) return;
        setToken(token)
        navigate("/");
    };
    const toggleDrawer = () => setIsOpen(!isOpen);

    return (
        <>
            <LoginSection toggleDrawer={toggleDrawer} toggleRegistrationForm={toggleRegistrationForm} />
            <Drawer toggleRegistrationForm={toggleRegistrationForm} handleRegistrationForm={handleRegistrationForm} submitForm={submitForm} isOpen={isOpen} toggleDrawer={toggleDrawer} isRegistered={isRegistered} />
        </>
    )
}

export default Login