import React from 'react'
import { Navbar } from '../../components'

const Workouts: React.FC = () => {
    const [value, setValue] = React.useState('recents');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <div>
            <h1>
                Workouts
            </h1>
            <Navbar {...{ value, handleChange }} />
        </div>
    )
}

export default Workouts