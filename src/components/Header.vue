<template>
  <div class="app-Header">
    <!-- logo -->
    <div class="app-logo">
      <a href="#"><i class="iconfont Navbar_logo"></i></a>
    </div>
    <div class="app-header-right">
      <!-- 搜索 -->
      <div class="search">
        <router-link to=""><i class="iconfont ic_search_tab"></i></router-link>
      </div>
      <!-- 头像 -->
      <div class="userpic"><img src="@/assets/images/login.png" alt=""></div>
      <!-- 下载app -->
      <div class="downloadApp"><a
          href="https://d.bilibili.com/download_app.html?preUrl=https%3A%2F%2Fm.bilibili.com%2Findex.html&schema=bilibili%3A%2F%2Fhome%3Ftab_name%3D%E7%83%AD%E9%97%A8&h5awaken=b3Blbl9hcHBfZnJvbV90eXBlPWg1Jm9wZW5fYXBwX3V1aWQ9NDQ4RTVDRkQtQTdDNi1FODRGLTZEMTBBLUM0QjkyQkE1NzlCMjYyNjc5aW5mb2Mmb3Blbl9hcHBfZ3JvdXBpZD0lN0IlMjJvcmdhbmljX2g1X2FudGlfaW50ZXJjZXB0X3BvcF91YyUyMiUzQSUyMjIlMjIlMkMlMjJvcmdhbmljX2g1X2FudGlfaW50ZXJjZXB0X3BvcF9rdWFrZSUyMiUzQSUyMjIlMjIlMkMlMjJoNV9vcHVzX25ld3BhZ2UlMjIlM0ElMjIxJTIyJTdEJm9wZW5fYXBwX3VybD1odHRwcyUzQSUyRiUyRm0uYmlsaWJpbGkuY29tJTJGJm9wZW5fYXBwX2FkZGl0aW9uPSU3QiUyMnRlY2hfdHlwZSUyMiUzQSUyMnVuaXZlcnNhbCUyMiUyQyUyMnVhU291cmNlJTIyJTNBJTIyJTIyJTJDJTIyYnNvdXJjZSUyMiUzQSUyMnNlYXJjaF9iYWlkdSUyMiUyQyUyMnNwbWlkJTIyJTNBJTIyMzMzLjQwMC5jbGljay50b3BEb3dubG9hZCUyMiUyQyUyMmg1X2J1dmlkJTIyJTNBJTIyMkVDM0IxQkMtRjA5RS1DQTAyLUJBOTQtMjg0MzhGMjZGOTRFNjI5NDJpbmZvYyUyMiUyQyUyMmg1X21pZCUyMiUzQSUyMiUyMiUyQyUyMnRzJTIyJTNBMTY3Mzc4NTI2ODQ2MSUyQyUyMnVhJTIyJTNBJTIyTW96aWxsYSUyRjUuMCUyMChpUGhvbmUlM0IlMjBDUFUlMjBpUGhvbmUlMjBPUyUyMDEzXzJfMyUyMGxpa2UlMjBNYWMlMjBPUyUyMFgpJTIwQXBwbGVXZWJLaXQlMkY2MDUuMS4xNSUyMChLSFRNTCUyQyUyMGxpa2UlMjBHZWNrbyklMjBWZXJzaW9uJTJGMTMuMC4zJTIwTW9iaWxlJTJGMTVFMTQ4JTIwU2FmYXJpJTJGNjA0LjElMjIlMkMlMjJiaXpfdHlwZSUyMiUzQSUyMm1zdGF0aW9uJTIyJTJDJTIyc2Vzc2lvbklkJTIyJTNBJTIydGdrdXJsZHB4ZG5lem5kOGxjeGNpdXFsJTIyJTJDJTIyaXRlbV9pZCUyMiUzQSU3QiUyMmlkJTIyJTNBMCU3RCUyQyUyMm9wZW5pZCUyMiUzQSUyMiUyMiUyQyUyMnd4ZmlkJTIyJTNBJTIyJTIyJTdE">下载App</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="less" scoped>
.app-Header {
  width: 100%;
  height: 50px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5%;

  .app-logo {
    a {
      width: 40px;
      height: 100%;

      i {
        font-size: 28px;
        color: #fb7299;
      }
    }
  }

  .app-header-right {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .search i {
      font-size: 24px;
      color: #ccc;
    }

    .userpic {
      margin: 0 20px;

      img {
        width: 30px;
        height: 30px;
        border-radius: 50%;
      }
    }

    .downloadApp {
      padding: 5px 15px;
      background-color: #fb7299;
      color: #fff;
      font-size: 12px;
      border-radius: 5px;
    }
  }
}
</style>