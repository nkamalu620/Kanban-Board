import { UserLogin } from "../interfaces/UserLogin";
import axios from 'axios';

const login = async (userInfo: UserLogin) => {
  try {
    const response = await axios.post('/login', userInfo);
    return response.data;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
}



export { login };
