import React from 'react';
import { Navigate } from 'react-router-dom'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Gender, Age, Unit, Weight, Height, Goal } from '../../components/stepper/Steps';

type Section = {
    name: string;
    component: JSX.Element;
}

const steps: Section[] = [{ name: 'Gender', component: <Gender /> }, { name: 'Age', component: <Age /> }, { name: 'Unit', component: <Unit /> }, { name: 'Weight', component: <Weight /> }, { name: 'Height', component: <Height /> }, { name: 'Goal', component: <Goal /> }];

const Container: React.FC = () => {
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        if (activeStep !== steps.length) {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }
    }

    const handleBack = () =>
        setActiveStep((prevActiveStep) => prevActiveStep - 1);

    return (
        <Box sx={{ width: '100%' }}>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map(({ name }: any, index) => {
                    const stepProps: { completed?: boolean } = {};
                    const labelProps: {
                        optional?: React.ReactNode;
                    } = {};
                    return (
                        <Step key={name} {...stepProps}>
                            <StepLabel {...labelProps}>{name}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            <React.Fragment>
                <>
                    {steps[activeStep].component}
                </>
                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                    <Button
                        color="inherit"
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        sx={{ mr: 1 }}
                    >
                        Back
                    </Button>
                    <Box sx={{ flex: '1 1 auto' }} />
                    <Button onClick={handleNext}>
                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                    </Button>
                </Box>
            </React.Fragment>
        </Box>
    )
}

export default Container;