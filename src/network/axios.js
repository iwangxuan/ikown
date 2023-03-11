/*
 * @Author: Wang Xuan
 * @Date: 2021-10-06 00:05:03
 * @LastEditTime: 2022-11-13 23:26:47
 */
import axios from 'axios'
var service = axios.create({
    timeout: 10000,
    baseURL: 'http://localhost:8888'
})


service.defaults.headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': '*',
    'Content-Type': 'application/json;charset=utf-8'
}

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