import httpRequest from '@/request/index'

const api = {
  sendMail: '/mail/mail/send' // 邮件发送
}

export function sendMail(data){
  return httpRequest({
    url: api.sendMail,
    method: 'post',
    data: data
  })
}