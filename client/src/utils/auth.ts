import { JwtPayload, jwtDecode } from 'jwt-decode';

class AuthService {
  getProfile() {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('No token found');
    }
    const decodedToken = jwtDecode(token);
    return decodedToken;
  }

  loggedIn() {
    // TODO: return a value that indicates if the user is logged in
    const token = localStorage.getItem('token');
    if (!token) {
      return false;
    }
  
    try {
      const decodedToken = jwtDecode(token);
      // Optionally, you can check if the token is expired
      const currentTime = Date.now() / 1000;
      if (decodedToken.exp && decodedToken.exp < currentTime) {
        return false;
      }
      return true;
    } catch (error) {
      return false;
    }
  }

  
  isTokenExpired(token: string) {
    // TODO: return a value that indicates if the token is expired
    if (!token) {
      return true; // No token means it's considered expired
    }
  
    try {
      const decodedToken: { exp: number } = jwtDecode(token);
      const currentTime = Date.now() / 1000;
      return decodedToken.exp < currentTime;
    } catch (error) {
      return true; // If there's an error decoding, consider the token expired
    }
  }

  getToken(): string {
    // TODO: return the token
  const token = localStorage.getItem('token');
  if (!token) {
    throw new Error('No token found');
  }
  return token;
  }


  login(idToken: string) {
    // TODO: set the token to localStorage
   localStorage.setItem('token', idToken)
    // TODO: redirect to the home page
    window.location.href = '/';
  }

  logout() {
    // TODO: remove the token from localStorage
    localStorage.removeItem('token');
    // TODO: redirect to the login page
    window.location.href = '/login';
  }
}

export default new AuthService();
