import React from 'react'
import { Avatar, Grid, Typography, Button, Badge, CircularProgress, CardContent, Chip, Card, ImageList, ImageListItem } from '@mui/material';
import { Navbar } from '../../components/index'
import useUser from '../../hooks/user';
import { UserProfile } from '../../utils/types';
import { axiosInstance } from '../../services/axios';

const BasicCard: React.FC<{ user?: UserProfile }> = ({ user }) => {
    return (

            <Grid container spacing={12}>
                <Grid item xs={8}>
                <Typography variant="h6" color="text.secondary" gutterBottom>
                        Hello
                    </Typography>
                <Typography variant="h5" color="text.secondary">
                        {user?.name}
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <Avatar alt={`${user?.name}`} src={`${user?.image}`} sx={{ width: 56, height: 56 }} />
                </Grid>
        </Grid>
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

const SuggestedWorkout: React.FC<{ workouts: any[] }> = ({ workouts }) => {
    return (
        <Grid container direction="column" style={{ marginBottom: "50px" }}>
            <Grid item>
                <Card variant="outlined" style={{
                    background: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwicKFrzNnKgdQVR9prhFixBBKibmIdgrBIiC16dsAS7LZ3u2g9aGDDQIZGCrhn_zxsGI&usqp=CAU)", backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundColor: "#00000063",
                    backgroundBlendMode: "overlay",
                    borderRadius: "15px",
                    padding: "15px",
                    overflow: "inherit",
                    position: "relative"
                }}>
                    <CardContent>
                        <Typography gutterBottom variant="h4" component="div" style={{ color: "#fff" }}>
                            {/* {workouts[0].name} */}
                            TODAYS WORKOUT
                        </Typography>
                        {/* <Chip color="secondary" size="medium" label={`${workouts[0].difficulty}`} /> */}
                        <Typography variant="body2">
                            Number of Exercises
                        </Typography>
                        <Button variant="contained" size="large" style={{
                            position: "absolute",
                            right: "50px",
                            bottom: "-15px",
                            borderRadius: "5px",
                        }}>
                            Start
                        </Button>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
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
        <>
            <SuggestedWorkout workouts={workouts} />
            <Grid container direction="column" spacing={2}>
            {workouts.map((workout) => {
                return <Grid item>
                    <Card variant="outlined" style={{
                        background: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwicKFrzNnKgdQVR9prhFixBBKibmIdgrBIiC16dsAS7LZ3u2g9aGDDQIZGCrhn_zxsGI&usqp=CAU)", backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundColor: "#00000063",
                        backgroundBlendMode: "overlay",
                        borderRadius: "15px",
                        padding: "15px",
                        overflow: "inherit",
                        position: "relative"
                    }}>
                        <CardContent>
                            <Typography gutterBottom variant="h4" component="div" style={{ color: "#fff" }}>
                                {workout.name}
                            </Typography>
                            <Chip color="secondary" size="medium" label={`${workout.difficulty.toUpperCase()}`} />
                            <Typography variant="body2">
                                Number of Exercises
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            })}
        </Grid>
        </>
    )
}

const FitnessChallengeSlider = () => {
    return (
        <ImageList
            sx={{
                gridAutoFlow: "column",
                gridTemplateColumns: "repeat(auto-fit, minmax(60px,1fr)) !important",
                gridAutoColumns: "minmax(60px, 1fr)",
                background: "#e2e2e2",
                padding: "15px",
                borderRadius: "15px"
            }}
        >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                <ImageListItem>
                    {
                        num !== 4 ? <Avatar>{num}</Avatar> : <Avatar style={{ background: "#9c27b0" }}>{num}</Avatar>
                    }
                </ImageListItem>
            ))}
        </ImageList>
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
                <Grid container style={{ marginTop: "15px" }}>
                    <BasicCard user={user} />
                    <FitnessChallengeSlider />
                    <WorkoutFeed />
                    <Navbar {...{ value, handleChange }} />
                </Grid>
            }
        </>
    );
}

export default Home