import httpRequest from '@/request/index'

const api = {
  sendMail: '/mail/send' // 邮件发送
}

export function sendMail(data){
  return httpRequest({
    url: api.sendMail,
    method: 'post',
    data: data
  })
}