import axios from 'axios';
import authHeader from './authHeader';

const API_URL = '/posts';

const getAllPublicPosts = () => axios.get(`${API_URL}/public`);

const getAllPrivatePosts = () => axios.get(`${API_URL}/private`, { headers: authHeader() });

const postService = {
  getAllPublicPosts,
  getAllPrivatePosts,
};

export default postService;
