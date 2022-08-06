<template>
  <el-popover
    :width="300"
    popper-style="box-shadow: rgb(14 18 22 / 35%) 0px 10px 38px -10px, rgb(14 18 22 / 20%) 0px 10px 20px -15px; padding: 20px;"
  >
    <template #reference>
      <el-avatar> user </el-avatar>
    </template>
    <template #default>
      <div 
        style="display: flex; gap: 2px; align-items:center; flex-direction: column"
      >
        <el-avatar
          :size="60"
          style="margin-bottom: 8px"
        > 登入 </el-avatar>
        <p
          style="margin: 0; font-weight: 500"
        >
          Element Plus
        </p>
        <p
          style="margin: 0; font-size: 14px; color: var(--el-color-info)"
        >
          @element-plus
        </p>
      </div>
    </template>
  </el-popover>
</template>

<script setup>

</script>

<style scoped>
</style>