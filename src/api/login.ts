import { post } from './api'

const sendCaptcha = (data: object) => post('/captcha/sent' + '?timestamp=' + new Date().getTime(), data)
const verifyCaptcha = (data: object) => post('/captcha/verify' + '?timestamp=' + new Date().getTime(), data)
const passwordLogin = (data: object) => post('/login/cellphone' + '?timestamp=' + new Date().getTime(), data)
const loginStatus = () => post('/login/status' + '?timestamp=' + new Date().getTime(), {})

export {
  sendCaptcha,
  verifyCaptcha,
  passwordLogin,
  loginStatus,
}
