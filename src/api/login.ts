import {
  CaptchaSentType, LoginCellphoneType, LoginStatusType, LogoutType
} from '@/types/login'
import { post } from './api'

const sendCaptcha = (data: object, force = false): Promise<CaptchaSentType.Root> => post(
  `${'/captcha/sent' + '?timestamp='}${new Date().getTime()}`, data, force)
const verifyCaptcha = (data: object, force = false): Promise<CaptchaSentType.Root> => post(
  `${'/captcha/verify' + '?timestamp='}${new Date().getTime()}`, data, force)
const phoneLogin = (data: object, force = false): Promise<LoginCellphoneType.Root> => post(
  `${'/login/cellphone' + '?timestamp='}${new Date().getTime()}`, data, force)
const loginStatus = (force = false): Promise<LoginStatusType.Root> => post(`${'/login/status' + '?timestamp='}${new Date().getTime()}`, {}, force)
const logout = (): Promise<LogoutType.Root> => post('/logout', {}, true)

export {
  sendCaptcha,
  verifyCaptcha,
  phoneLogin,
  loginStatus,
  logout
}
