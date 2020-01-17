import axios from 'axios';

const api = axios.create({
  baseURL: 'http://ipdoaxios:3333',
  //se for dispositivo emulador  utilizar    utilizar o localhost  ou o do emulador android
});

export default api;