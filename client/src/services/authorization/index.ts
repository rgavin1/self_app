import axios from 'axios'
import qs from 'qs';
import { Credentials } from '../../utils/types';

export const getAccessToken = async (creds: Credentials): Promise<string> => {
    const token = await axios.post("http://localhost:8000/login", qs.stringify(creds));
    return token.data.access_token;
}