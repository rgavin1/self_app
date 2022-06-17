import { useEffect, useState } from 'react';
import { axiosInstance } from '../services/axios';
import { UserProfile } from '../utils/types';


const useUser = () => {
    const [user, setUser] = useState<UserProfile>();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        (async () => {
            setIsLoading(true);
            try {
                const { data: { user } } = await axiosInstance.get("/users/profile/6b00f37c-9833-457e-9f03-c82c8040f504");

                const userProfile: UserProfile = {
                    ...user,
                    fitnessGoal: user.fitness_goal,
                    unitOfMeasure: user.unit_of_measure,
                    userAccountId: user.user_account_id_fk,
                }
                console.log("Response from GET USER PROFILE: ", userProfile);
                setUser(userProfile);
            } catch (e) {
                console.log('error', e);
            }
            setIsLoading(false);
        })()
    }, []);

    return { user, setUser, isLoading, setIsLoading }
}

export default useUser