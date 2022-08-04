<template>
  <el-container>
    <el-header><global-header/></el-header>
    <el-main><router-view></router-view></el-main>
  </el-container>
</template>

<script setup>
import GlobalHeader from '@/components/header/GlobalHeader.vue'

</script>

<style>

</style>
