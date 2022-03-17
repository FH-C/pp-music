import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'
import { Toast } from 'vant'
import { ref } from 'vue'
import cacheUrl from './cache'

const baseURL = import.meta.env.VITE_APP_BASE_API
axios.defaults.withCredentials = true

axios.interceptors.response.use((res: AxiosResponse) => {
  if (res.data.code === 200 || res.data.data.code === 200) {
    const path = res.config.url?.split('?timestamp')[0] || ''
    if (cacheUrl.indexOf(path) === -1) {
      return Promise.resolve(ref(res.data))
    }
    localStorage.setItem(path, JSON.stringify(res.data))
    return Promise.resolve(ref(res.data))
  }
  if (res.data && res.data.message){
    return Toast(res.data.message)
  } else if (res.data && res.data.msg) {
    return Toast(res.data.msg)
  } else {
    return Toast('出错了')
  }
}, (error: AxiosError) => {
  if (error.response) {
    // 请求已发出，但服务器响应的状态码不在 2xx 范围内
    return Toast(error.response.data.message)
  } else {
    // Something happened in setting up the request that triggered an Error
    return Toast(error.message)
  }
})
function axiosHttp (method: string, url: string, data: any, force: boolean) {
  const path = url.split('?timestamp')[0]
  const item = localStorage.getItem(path)
  if (cacheUrl.indexOf(path) !== -1 && !force && item) {
    const storage = ref(JSON.parse(item))
    return Promise.resolve(storage)
  }
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
const post = (url: string, data: any, force: boolean) => axiosHttp('POST', url, data, force)
export {
  post,
}
