<template>
  <el-popover
    :width="300"
    popper-style="box-shadow: rgb(14 18 22 / 35%) 0px 10px 38px -10px, rgb(14 18 22 / 20%) 0px 10px 20px -15px; padding: 20px;"
  >
    <template #reference>
      <el-avatar> 登入 </el-avatar>
    </template>
    <template #default>
      <div 
        style="display: flex; gap: 10px; align-items:center; flex-direction: column"
      >
        <el-avatar
          :size="60"
          style="margin-bottom: 2px"
        > 登入 </el-avatar>
        <el-button type="primary" style="width: 100%">登入</el-button>
        <p
          style="margin: 0; font-weight: 500"
        >
          首次使用？<el-link type="primary" :underline="false">立即注册</el-link>
        </p>
      </div>
    </template>
  </el-popover>

  
</template>

<script setup>

</script>

<style scoped>
</style>
