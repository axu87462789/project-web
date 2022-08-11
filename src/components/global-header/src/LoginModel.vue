<template>
  <el-popover
    :width="300"
    popper-style="box-shadow: rgb(14 18 22 / 35%) 0px 10px 38px -10px, rgb(14 18 22 / 20%) 0px 10px 20px -15px; padding: 20px;"
  >
    <template #reference>
      <el-avatar class="avatar" @click="dialogLoginVisible = true"> 登入 </el-avatar>
    </template>
    <template #default>
      <div 
        style="display: flex; gap: 10px; align-items:center; flex-direction: column"
      >
        <el-avatar
          :size="60"
          style="margin-bottom: 2px"
          @click="dialogLoginVisible = true"
          class="avatar"
        > 登入 </el-avatar>
        <el-button type="primary" style="width: 100%" @click="dialogLoginVisible = true" :icon="User">登入</el-button>
        <p
          style="margin: 0; font-weight: 500"
        >
          首次使用？<el-link type="primary" :underline="false" @click="dialogLoginVisible = true">立即注册</el-link>
        </p>
      </div>
    </template>
  </el-popover>

  <el-dialog v-model="dialogLoginVisible" width="600px">
    <template #header>
      <el-menu
        :default-active="activeIndex"
        mode="horizontal"
        :ellipsis="false"
        @select="handleSelect"
      >
        <div class="flex-grow" />
        <el-menu-item index="0">密码登录</el-menu-item>
        <el-menu-item index="1">邮箱登录</el-menu-item>
        <el-menu-item index="2" :disabled="true">短信登录</el-menu-item>
        <el-menu-item index="3" :disabled="true">扫码登录</el-menu-item>
        <div class="flex-grow" />
      </el-menu>
    </template>
    <component :is="loginComponent[idx]" style="padding: 0 40px 10px 0;" />
    <el-divider>
      其他登陆方式
    </el-divider>
    <div
      style="display: flex; justify-content: space-around;"
    >
      <div>QQ</div>
      <div>微信</div>
      <div>微博</div>
    </div>
    <template #footer>
      <span class="footer">
        未注册过的手机号或邮箱，我们将自动帮助您注册账号！
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import { ref } from 'vue'
import { User } from '@element-plus/icons-vue'
import PasswordForm from './login/PasswordForm.vue';
import MailForm from './login/MailForm.vue';

const dialogLoginVisible = ref (false)

const activeIndex = ref('0')
const idx = ref(0)
const loginComponent = [PasswordForm,MailForm]
const handleSelect = (key) => {
  switch (key) {
    case '0':
      idx.value = 0
      break;
    case '1':
      idx.value = 1
      break;
    default:
      break;
  }
}
</script>

<style scoped>
.avatar {
  cursor:pointer;
}

.flex-grow {
  flex-grow: 1;
}

.footer {
  display: flex;
  justify-content: space-around;
  font-size: 12px;
  color: var(--el-color-info);
}
</style>
