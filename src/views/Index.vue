<template>
  <el-container>
    <el-header class="header"><global-header/></el-header>
    <el-main><router-view></router-view></el-main>
  </el-container>
</template>

<script setup>
import GlobalHeader from '@/components/global-header'

</script>

<style scoped>
.header {
  padding: 0;
}
</style>
