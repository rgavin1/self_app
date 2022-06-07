import axios from 'axios';

export const getUser = async () => {
    try {
        const response = await axios.get("http://localhost:8000/users")
        console.log('response', response)
    } catch (err) {
        console.log('err', err)
    }
}