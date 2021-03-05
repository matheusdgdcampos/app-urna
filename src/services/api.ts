import Axios from 'axios';

const api = Axios.create({
  baseURL: 'https://urna-api-v1.herokuapp.com',
});

export default api;
