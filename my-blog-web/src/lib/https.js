import axios from 'axios'
import qs from 'qs'

axios.defaults.timeout = 5000;                        //响应时间
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';        //配置请求头
axios.defaults.baseURL = process.env.API_HOST;

//POST传参序列化(添加请求拦截器)
axios.interceptors.request.use((config) => {
    //在发送请求之前做某件事
    if (config.method === 'post') {
        config.data = qs.stringify(config.data);
    }
    return config;
}, (error) => {
    console.log('错误的传参')
    return Promise.reject(error);
});

//返回状态判断(添加响应拦截器)
axios.interceptors.response.use((res) => {
    //对响应数据做些事
    if (!res.data.success) {
        return Promise.resolve(res);
    }
    return res;
}, (error) => {
    console.log('网络异常')
    return Promise.reject(error);
});

//返回一个Promise(发送post请求)
export function fetchPost(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, params)
            .then(response => {
                resolve(response);
            }, err => {
                reject(err);
            })
            .catch((error) => {
                reject(error)
            })
    })
}
////返回一个Promise(发送get请求)
export function fetchGet(url, param) {
    return new Promise((resolve, reject) => {
        axios.get(url, { params: param })
            .then(response => {
                resolve(response)
            }, err => {
                reject(err)
            })
            .catch((error) => {
                reject(error)
            })
    })
}

import JSONP from 'jsonp'
export function fetchJsonp(url, data, option) {
//  url中可能出现没有?的情况
  url += (url.indexOf('?') < 0 ? '?' : '&') + param(data);
  url =process.env.API_HOST +url;
//  使用promise方法进行回调
  return new Promise((resolve, reject) => {
    JSONP(url, option, (err, data) => {
      if (!err) {
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
}
// 拼接url query params
function param(data) {    //  data是一个对象一般只有一层
  let url = ''
  for (let key in data) {
  //  为了防止data中值为undefined的情况
    let value = data[key] !== undefined ? data[key] : ''
  //  每一个键值对用&连接
    url += `&${key}=${encodeURIComponent(value)}`
  }
  //  去除url中的第一个&，以免重复
  return url ? url.substring(1) : ''
}
export default {
    fetchPost,
    fetchGet,
    fetchJsonp
}