import { post } from './api'

const sendCaptcha = (data: object, force = false) => post(
  '/captcha/sent' + '?timestamp=' + new Date().getTime(), data, force)
const verifyCaptcha = (data: object, force = false) => post(
  '/captcha/verify' + '?timestamp=' + new Date().getTime(), data, force)
const phoneLogin = (data: object, force = false) => post(
  '/login/cellphone' + '?timestamp=' + new Date().getTime(), data, force)
const loginStatus = (force = false) => post('/login/status' + '?timestamp=' + new Date().getTime(), {}, force)
const logout = () => post('/logout', {}, true)

export {
  sendCaptcha,
  verifyCaptcha,
  phoneLogin,
  loginStatus,
  logout,
}
