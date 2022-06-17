import React from 'react'
import { Avatar, Grid, Typography, Box, CircularProgress, CardContent, Chip, Card } from '@mui/material';
import { Navbar } from '../../components/index'
import useUser from '../../hooks/user';
import { UserProfile } from '../../utils/types';
import { axiosInstance } from '../../services/axios';

const BasicCard: React.FC<{ user?: UserProfile }> = ({ user }) => {
    return (
        <Box>
            <Grid container spacing={12}>
                <Grid item xs={8}>
                    <Typography variant="h5" color="text.secondary" gutterBottom>
                        Hello
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                        {user?.name}
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <Avatar alt={`${user?.name}`} src={`${user?.image}`} sx={{ width: 56, height: 56 }} />
                </Grid>
            </Grid>
        </Box>
    );
}

const CircularColor = () => {
    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <CircularProgress color="secondary" />
        </div>
    );
}

export type WorkoutLog = {
    description: string;
    difficulty: string;
    end: string;
    id: string;
    name: string;
    note: string;
    start: string;
    total_reps: number;
    total_sets: number;
    total_weight: number;
    user_profile_id_fk: string;
    volume: number;
}

const WorkoutFeed = () => {
    const [workouts, setWorkouts] = React.useState<WorkoutLog[]>([]);

    React.useEffect(() => {
        (async () => {
            try {
                const { data } = await axiosInstance.get("/workouts/logs/6b00f37c-9833-457e-9f03-c82c8040f504");
                setWorkouts(data);
            } catch (e) {
                console.log('error: ', e)
            }
        })()
    }, []);

    return (
        <Grid container direction="column" spacing={2}>
            {workouts.map((workout) => {
                return <Grid item>
                    <Card variant="outlined" style={{
                        background: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwicKFrzNnKgdQVR9prhFixBBKibmIdgrBIiC16dsAS7LZ3u2g9aGDDQIZGCrhn_zxsGI&usqp=CAU)", backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover"
                    }}>
                        <CardContent>
                            <Typography gutterBottom variant="h4" component="div">
                                {workout.name}
                            </Typography>
                            <Chip color="secondary" size="medium" label={`${workout.difficulty} Difficulty`} />
                            <Typography variant="body2">
                                Number of Exercises
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            })}
        </Grid>
    )
}


const Home: React.FC<{ token: string }> = ({ token }) => {
    const { user, isLoading } = useUser();

    const [value, setValue] = React.useState('recents');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (   
        <>
            {isLoading ? <CircularColor /> :
                <>
                    <BasicCard user={user} />
                    <h1>Fitness Challenge Component</h1>
                    <WorkoutFeed />
                <Navbar {...{ value, handleChange }} />
                </>
            }
        </>
    );
}

export default Home