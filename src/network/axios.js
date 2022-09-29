import axios from 'axios'
var service = axios.create({
    timeout: 10000,
    baseURL: 'http://localhost:8888/knowledgeStar'
})


service.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

service.interceptors.request.use(
    config => {
        // 设置token start
        let accessToken = localStorage.getItem('accessToken');
        if (accessToken && accessToken !== '') {
            config.headers.common['Authorization'] = accessToken;
        }

        return config;
    },
    error => Promise.error(error)
);

export default service;