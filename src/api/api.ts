import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'
import { Toast } from 'vant'
const baseURL = import.meta.env.VITE_APP_BASE_API

axios.defaults.withCredentials = true
axios.interceptors.request.use(config => {
  if (localStorage.token) {
    config.headers.Authorization = 'Bearer ' + localStorage.token
  }
  return config
}, err => Promise.reject(err))

axios.interceptors.response.use((res: AxiosResponse) => {
  if (res.data.code === 200 || res.data.data.code === 200) {
    return Promise.resolve(res)
  }
  if (res.data && res.data.message){
    return Toast(res.data.message)
  } else if (res.data && res.data.msg) {
    return Toast(res.data.msg)
  }
  return Promise.reject(res)
}, (error: AxiosError) => {
  if (error.response) {
    // 请求已发出，但服务器响应的状态码不在 2xx 范围内
    return Toast(error.response.data.message)
  } else {
    // Something happened in setting up the request that triggered an Error
    return Toast(error.message)
  }
})
function axiosHttp (method: string, url: string, data: any) {
  const config = {
    url,
    method,
    baseURL,
    timeout: 30000,
    params: ['GET', 'DELETE'].includes(method) ? data : null,
    data: ['POST', 'PUT'].includes(method) ? data : null,
    headers: {
      'Content-Type': 'application/json',
    },
  }
  return new Promise((resolve, reject) => {
    axios(config as any).then(res => resolve(res)).catch(err => reject(err))
  })
}
const post = (url: string, data: any) => axiosHttp('POST', url, data)
export {
  post,
}
