import { CaptchaSentType, LoginCellphoneType, LoginStatusType, LogoutType } from '@/types/login'
import { post } from './api'

const sendCaptcha = (data: object, force = false): Promise<CaptchaSentType> => post(
  '/captcha/sent' + '?timestamp=' + new Date().getTime(), data, force)
const verifyCaptcha = (data: object, force = false): Promise<CaptchaSentType> => post(
  '/captcha/verify' + '?timestamp=' + new Date().getTime(), data, force)
const phoneLogin = (data: object, force = false): Promise<LoginCellphoneType> => post(
  '/login/cellphone' + '?timestamp=' + new Date().getTime(), data, force)
const loginStatus = (force = false): Promise<LoginStatusType> => post('/login/status' + '?timestamp=' + new Date().getTime(), {}, force)
const logout = (): Promise<LogoutType> => post('/logout', {}, true)

export {
  sendCaptcha,
  verifyCaptcha,
  phoneLogin,
  loginStatus,
  logout,
}
