import axios from 'axios';


const getProfileById = async (id: string, token: string) => {
    let profile: any = null;
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    try {
        profile = await axios.get(`http://localhost:8000/users/profile/${id}`, config)
    } catch (err) {
        console.log('err', err)
    }
    return profile;
}

const createAccount = async (user: any) => {
    await axios.post("http://localhost:8000/users/account", { ...user })
}

export const user = {
    getProfileById,
    createAccount,
} 