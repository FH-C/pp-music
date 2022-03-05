import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'
import { Toast } from 'vant'
const baseURL = import.meta.env.VITE_APP_BASE_API

axios.interceptors.request.use(config => {
  if (localStorage.token) {
    config.headers.Authorization = 'Bearer ' + localStorage.token
  }
  return config
}, err => Promise.reject(err))

axios.interceptors.response.use((res: AxiosResponse) => {
  if (res.data.code !== 200) {
    if (res.data && res.data.message){
      Toast(res.data.message)
    }
    return Promise.reject(res)
  }
  return Promise.resolve(res)
}, (err: AxiosError) => {
  console.log('err:', err)
  if(err.response.status !== 200) {
    if (err.response.data.message){
      return Toast(err.response.data.message)
    }
  }
  return Promise.reject(err)
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
