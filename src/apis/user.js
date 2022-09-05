import httpRequest from '@/request/index'

const api = {
  sendMailCode: '/user/login/sendMailCode', // 邮件发送
  loginMailCode: '/user/login/loginMailCode' // 邮件发送
}

export function sendMailCode(data){
  return httpRequest({
    url: api.sendMailCode,
    method: 'post',
    data: data
  })
}

export function loginMailCode(data){
  return httpRequest({
    url: api.loginMailCode,
    method: 'post',
    data: data
  })
}
