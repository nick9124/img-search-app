import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID XUttPyiXJRqifd2TDCZm1aQxZ8mWZi2d4V0lpEzKmoM',
  },
});
