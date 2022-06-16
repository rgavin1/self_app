import React, { useState, Dispatch, SetStateAction } from 'react';
import { useNavigate } from "react-router-dom";
import qs from 'qs';

import { axiosInstance } from '../../services/axios'
import { Login as LoginSection, Drawer } from '../../components/index';

const Login: React.FC<{ setToken: Dispatch<SetStateAction<string>> }> = ({ setToken }) => {
    let navigate = useNavigate();

    const [creds, setCreds] = useState<any>();
    const [isOpen, setIsOpen] = useState(false);
    const [isRegistered, setIsRegistered] = useState(false);

    const toggleRegistrationForm = () => {
        if (isOpen) setIsRegistered(!isRegistered);
        setIsOpen(true);
        setIsRegistered(!isRegistered);
    }

    const handleRegistrationForm = (credentials: any) => {
        const { value, id } = credentials.target;
        setCreds({ ...creds, [id]: value })
    }

    const submitForm = async () => {
        const { username, password } = creds;
        try {
            const response = await axiosInstance.post("auth", qs.stringify({ username, password }));
            setToken(response.data.access_token);
            navigate("/");
        } catch (err) {
            console.log('err', err)
        }
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