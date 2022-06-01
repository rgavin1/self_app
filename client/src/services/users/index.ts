import axios from 'axios'

export const getUsers = async () => {
    try {
        const response = await axios.get("http://localhost:8000/users")
        console.log('response', response)
    } catch (err) {
        console.log('err', err)
    }
}

export const addUsers = async (user: any) => {
    try {
        await axios.post("http://localhost:8000/users", user)
    } catch (err) {
        console.log('err', err)
    }
}

