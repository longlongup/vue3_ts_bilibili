<template>
  <div class="video">
    <div class="positionFix">
      <!-- 头部 -->
      <Header />
      <!-- 顶部视频 -->
      <HeaderVideo />
      <!-- 底部视频 -->
      <div class="footeVideoList">
        <videoItem v-for="videoItem in videoList" :key="videoItem.id" :videoItem="videoItem"
        @click="GoToVideo(videoItem.id)" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Header from '@/components/Header.vue'
import HeaderVideo from '@/components/HeaderVideo.vue'
import videoItem from '@/components/VideoItem.vue'
import axios from 'axios';
import { ref } from 'vue'
import { IVideoListType } from '@/types/HomeType'
import { useRouter } from 'vue-router';
const router = useRouter()
const videoList = ref<IVideoListType[]>([])
axios({
  url: '/videosList',
  method: 'get'
}).then(res => {

  videoList.value = res.data.result

})
const GoToVideo = (id: string) =>{
  router.push(`/video?id=${id}`)
}
</script>
<style lang="less" scoped>
.video{
  margin-bottom: 50px;
}
.footeVideoList{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
</style>