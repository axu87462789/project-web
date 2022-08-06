<template>
  <el-switch
    v-model="isDark"
    @change="toggleDark"
    inline-prompt
    :active-icon="Moon"
    :inactive-icon="Sunny"
  />
</template>

<script setup>
import { Moon, Sunny } from '@element-plus/icons-vue'
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<style scoped>
</style>
