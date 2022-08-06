<template>
  <el-menu
    :default-active="activeIndex"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
  >
    <el-menu-item index="0">GuaPiXu</el-menu-item>
    <div class="flex-grow" />
    <el-menu-item index="1">Item1</el-menu-item>
    <div class="right">
      <night-mode-switch/>
      <login-model v-if="!login"/>
      <user-model v-else/>
    </div>
  </el-menu>
</template>

<script setup>
import { ref } from 'vue'
import NightModeSwitch from './NightModeSwitch.vue'
import LoginModel from './LoginModel.vue'
import UserModel from './UserModel.vue'

const login = ref(false)

const activeIndex = ref('1')
const handleSelect = (key, keyPath) => {
  console.log(key, keyPath)
}
</script>

<style scoped lang="less">
.right {
  display: flex;
  padding: 0 20px;
  justify-content: flex-end;
  align-items: center;
  gap: 0px 20px;
}

.flex-grow {
  flex-grow: 1;
}
</style>
