<template>
  <div class="Home">
    <div class="positionFix">
      <!-- 头部 -->
      <Header />
    </div>
    <!-- TabBar -->
    <TabBar />
  </div>
</template>

<script lang="ts" setup>
import Header from '@/components/Header.vue'
import TabBar from '@/components/TabBar.vue'
</script>

<style lang="less" scoped>
.Home {
  margin-bottom: 50px;
}

.positionFix {
  position: fixed;
  top: 0;
  width: 100%;
  height: 50px;
  background-color: #fff;
  z-index: 999;
}
</style>
