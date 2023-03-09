<template>
  <div class="videoItem">
    <div class="videoImg">
      <img :src="videoItem.imgSrc" alt="" />
      <div class="video-icons">
        <div class="videoItem-left">
          <i class="iconfont icon_shipin_bofangshu"></i>
          <span>{{ videoItem.playCount }}</span>
        </div>
        <div class="videoItem-right">
          <i class="iconfont icon_shipin_danmushu"></i>
          <span>{{ videoItem.commentCount }}</span>
        </div>
      </div>
    </div>
    <div class="video-title">{{ videoItem.desc }}</div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, PropType } from 'vue'
import type {IVideoListType } from '@/types/HomeType'
defineProps({
  videoItem: {
    type: Object as PropType<IVideoListType>,
    required: true
  }
})
</script>

<style lang="less" scoped>
.videoItem {
  width: 50%;
  padding: 10px 5px 0 5px;

  .videoImg {
    width: 100%;
    height: 100px;
    overflow: hidden;
    position: relative;

    img {
      width: 100%;
      height: 100%;
    }

    .video-icons {
      width: 100%;
      position: absolute;
      bottom: 5px;
      left: 0;
      color: #fff;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 12px;
      padding: 0 5px;

      .videoItem-left {
        display: flex;
        flex-direction: row;
        align-items: center;

        i {
          margin-right: 5px;
        }
      }

      .videoItem-right {
        display: flex;
        flex-direction: row;
        align-items: center;

        i {
          margin-right: 5px;
        }
      }
    }
  }

  .video-title {
    width: 100%;
    font-size: 12px;
    margin-top: 5px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
  }
}
</style>