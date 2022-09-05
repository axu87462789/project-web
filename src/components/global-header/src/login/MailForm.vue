<template>
  <el-form 
      ref="ruleFormRef"
      label-width="100px"
      :model="form"
      :rules="rules"
    >
      <el-form-item label="邮箱账号" prop="email">
        <el-input v-model="form.email" autocomplete="off">
          <template #suffix>
            <el-link
              type="primary"
              :underline="false"
              @click="sendEmail(ruleFormRef)"
              :disabled="mailed">{{ mailed ? time+'秒后可重新发送' : '发送邮件' }}</el-link>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <el-input v-model="form.code" autocomplete="off" />
      </el-form-item>
    </el-form>

    <el-button type="primary" style="width: 100%" @click="mailCodeLogin(ruleFormRef)">注册/登入</el-button>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { sendMailCode, loginMailCode } from '@/apis/user'

const ruleFormRef = ref(null)

const validateEmailAddress = (rule, value, callback) =>{
  if(!value){
    return callback(new Error('请输入您的邮箱地址'))
  }
  const pattern = /^([A-Za-z0-9_\-\.])+@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
  if(!pattern.test(form.email)){
    return callback(new Error('您的邮箱地址不合规'))
  }
  callback()
}

const validateCode = (rule, value, callback) =>{
  if(!value){
    return callback(new Error('验证码不能为空'))
  }
  callback()
}

const form = reactive({
  email: '',
  code: ''
})

const rules = reactive({
  email: [{
    validator: validateEmailAddress,
    trigger: 'blur'
  }],
  code: [{
    validator: validateCode,
    trigger: 'blur'
  }]
})

const mailed = ref(false)
const time = ref(60)
const sendEmail = (formEl) => {
  formEl.validateField(['email'], (valid) => {
    if(valid){
      mailed.value = true
      const timer = setInterval(() =>{
        if (time.value == 0) {
            // 清除定时器和复原按钮
            clearInterval(timer);
            mailed.value = false;
            time.value = 60;
        } else {
            time.value--;
        }
      }, 1000)
      const data = {
        email: form.email
      }
      sendMailCode(data).then(res =>{
        console.log(res)
      })
    }
  })
}

const mailCodeLogin = (formEl) =>{
  formEl.validate(valid =>{
    if(valid){
      const data = {
        ...form
      }
      loginMailCode(data).then(res =>{
        console.log(res)
      })
    }
  })
}
</script>

<style scoped>
</style>