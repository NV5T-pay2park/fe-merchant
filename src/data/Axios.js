import axios from 'axios';

const Axios = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  // headers: {
  //   Accept: 'application/json,application/x-www-form-urlencoded,text/plain,*/*',
  //   'Content-Type': 'application/json;charset=utf-8',
  // },
});

// Axios.interceptors.request.use((config) => {
//   const { headers } = config;
//   const token = localStorage.getItem('token') || '';
//   config.headers = {
//     Authorization: `Bearer ${token}`,
//     ...headers,
//   };
//   return config;
// });

export default Axios;
