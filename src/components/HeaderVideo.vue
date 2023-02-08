<template>
  <div class="videoDeatil">
    <!-- 视频 -->
    <video ref="videoRef" class="Ivideo" :src="videoDeatil.videoSrc" autoplay controls></video>
    <!-- 视频信息 -->
    <div class="datail">
      <div class="title">{{ videoDeatil.videoTitle }}</div>
      <div class="userCount">
        <div class="count-left">
          <img :src="videoDeatil.authorIconSrc" alt="">
          <span>{{ videoDeatil.author }}</span>
        </div>
        <div class="count-right">
          <span>{{ videoDeatil.playCount }}</span>
          <i class="iconfont Like"></i>
          <i v-if="false" class="iconfont dianzan"></i>
          <span>{{ videoDeatil.likeCount }}</span>
          <i class="iconfont icon_fav"></i>
          <span>{{ videoDeatil.favCount }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
import { IVideoDetailType } from '@/types/VideoType'
const router = useRouter();
const videoDeatil = ref<IVideoDetailType>({});

// 获取地址栏参数
const PropId = router.currentRoute.value.query.id

axios({
  url: '/videoDetail',
  method: 'get',
  params: { id: PropId }
}).then(res => {
  videoDeatil.value = res.data.result
})

</script>

<style lang="less" scoped>
.videoDeatil {
  width: 100%;

  .Ivideo {
    width: 100%;
  }

  .datail{
    padding:10px;
    border-bottom: 1px solid #ccc;
    .title{
      font-size: 14px;
      text-overflow: ellipsis;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .userCount{
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 10px;
    }
    .count-left{
      img{
        width: 25px;
        height: 25px;
        border-radius: 50%;
        margin-right: 10px;
      }
      span{
        font-size: 12px;
        width: 50px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: #666;
      }
    }
    .count-right{
      font-size: 12px;
      i{
        margin: 0 5px;
      }
    }
  }
}
</style>