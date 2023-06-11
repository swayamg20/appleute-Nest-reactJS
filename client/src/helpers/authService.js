import axios from 'axios';

const API_URL = 'http://localhost:3333';

const signup = (email, password) => axios
  .post(`${API_URL}/signup`, {
    email,
    password,
  })
  .then((response) => {
    if (response.data.accessToken) {
      localStorage.setItem('user', JSON.stringify(response.data));
    }

    return response.data;
  });

const login = (email, password) => axios
  .post(`${API_URL}/auth/local/signin`, {
    email,
    password,
  })
  .then((response) => {
    console.log(response.data);
    const base64Url = response.data.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    console.log(JSON.parse(window.atob(base64)));
    if (response.data) {
      localStorage.setItem('user', JSON.stringify(response.data));
    }

    return response.data;
  });

const logout = () => {
  localStorage.removeItem('user');
};

const getCurrentUser = () => JSON.parse(localStorage.getItem('user'));

const authService = {
  signup,
  login,
  logout,
  getCurrentUser,
};

export default authService;
