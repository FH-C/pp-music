import {
  CaptchaSentType, LoginCellphoneType, LoginStatusType, LogoutType,
} from '@/types/login'
import { post } from '@/core/request'

const sendCaptcha = (data: object): Promise<CaptchaSentType.Root> => post(`${'/captcha/sent?timestamp='}${new Date().getTime()}`, data)
const verifyCaptcha = (data: object): Promise<CaptchaSentType.Root> => post(`${'/captcha/verify?timestamp='}${new Date().getTime()}`, data)
const phoneLogin = (data: object): Promise<LoginCellphoneType.Root> => post(`${'/login/cellphone?timestamp='}${new Date().getTime()}`, data)
const loginStatus = (): Promise<LoginStatusType.Root> => post(`${'/login/status?timestamp='}${new Date().getTime()}`, {})
const logout = (): Promise<LogoutType.Root> => post('/logout', {})

export {
  sendCaptcha,
  verifyCaptcha,
  phoneLogin,
  loginStatus,
  logout,
}
