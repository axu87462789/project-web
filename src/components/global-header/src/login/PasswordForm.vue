<template>
  <el-form 
      label-width="100px"
      :model="form"
    >
      <el-form-item label="用户名">
        <el-input v-model="form.username" autocomplete="off" />
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password" autocomplete="off" />
      </el-form-item>
    </el-form>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({
  username: '',
  password: ''
})
</script>

<style scoped>
</style>