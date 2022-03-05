import { post } from './api'

const sendCaptcha = (data: object) => post('/captcha/sent' + '?timestamp=' + new Date().getTime(), data)
const verifyCaptcha = (data: object) => post('/captcha/verify' + '?timestamp=' + new Date().getTime(), data)

export {
  sendCaptcha,
  verifyCaptcha,
}
