import axios, { AxiosResponse, AxiosError } from 'axios'
import { Toast } from 'vant'
import 'vant/es/toast/style'

const baseURL = import.meta.env.VITE_APP_BASE_API
axios.defaults.withCredentials = true

axios.interceptors.response.use((res: AxiosResponse) => {
  if (res.data.code === 200 || res.data.data?.code === 200) {
    return Promise.resolve(res.data)
  }
  if (res.data && res.data.message) {
    return Toast(res.data.message)
  } if (res.data && res.data.msg) {
    return Toast(res.data.msg)
  }
  return Toast('出错了')
}, (error: AxiosError<any>) => {
  if (error.response) {
    // 请求已发出，但服务器响应的状态码不在 2xx 范围内
    return Toast(error.response.data.message || error.response.data.msg || '出错了')
  }
  // Something happened in setting up the request that triggered an Error
  return Toast(error.message)
})
function axiosHttp(method: string, url: string, data: any): Promise<any> {
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
    axios(config as any).then((res) => resolve(res)).catch((err) => reject(err))
  })
}
const post = (url: string, data: any) => axiosHttp('POST', url, data)
export {
  post,
}
