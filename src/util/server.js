import axios from 'axios';

axios.defaults.timeout = 5000;
axios.defaults.baseURL = '';

export const Service = axios.create();

Service.interceptors.request.use(req => {
  console.log([req.method,req.url]);
  req.headers = {'Content-Type':'application-x-www-from-urlencode'};
  req.data = JSON.stringify(req.data);
  if (sessionStorage.token) {
    req.token = sessionStorage.token;
  }
  return req;
},err => {
  return Promise.reject("req Error " + err);
});

Service.interceptors.response.use(res => {
  return res
}, err => {
  return Promise.reject("res Error " + err);
});