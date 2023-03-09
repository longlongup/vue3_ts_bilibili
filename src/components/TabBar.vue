<template>
  <div>
    <van-tabs v-model:active="active" title-active-color="#fb7299" color="#fb7299" sticky>
      <van-tab v-for="item in list" :key="item.id" :title="item.text">
        <!-- 视频组件 -->
        <videoItem v-for="videoItem in videoList" :key="videoItem.id" :videoItem="videoItem"
          @click="GoToVideo(videoItem.id)" />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script setup lang="ts">
import videoItem from '@/components/VideoItem.vue'
import { ref } from 'vue';
import axios from 'axios'
import type { ITabBarType, IVideoListType } from '@/types/HomeType'
import { useRouter } from 'vue-router';
const router = useRouter()
const active = ref(0);
const list = ref<ITabBarType[]>([])
const videoList = ref<IVideoListType[]>([])

axios({
  url: '/navList',
  method: 'get'
}).then(res => {
  console.log(res);

  list.value = res.data.result

})
axios({
  url: '/videosList',
  method: 'get'
}).then(res => {
  console.log(res);

  videoList.value = res.data.result

})

// 点击去视频详情页
const GoToVideo = (id:string) => {
  router.push(`/video?id=${id}`)
}
</script>

<style lang="less" scoped>
/deep/.van-sticky {
  position: fixed;
  top: 50px !important;
  background-color: #fff;
  z-index: 999;
}

/deep/.van-tabs__content {
  padding: 0px 5px;
  margin-top: 94px;

  .van-tab__panel {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>