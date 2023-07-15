<template>
  <van-nav-bar
      title="标题"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
      fixed
      placeholder
  >
    <template #right>
      <van-icon name="search" size="18" />
    </template>
  </van-nav-bar>
  <div id="content">
    <router-view></router-view>
  </div>
  <van-tabbar v-model="active" @change="onChange">
    <van-tabbar-item to="/" icon="home-o" name = "index">主页</van-tabbar-item>
    <van-tabbar-item to="/team" icon="search" name = "team">队伍</van-tabbar-item>
    <van-tabbar-item to="/user" icon="friends-o" name = "user">个人</van-tabbar-item>
  </van-tabbar>

</template>

<script setup>
  import { ref } from 'vue';
  import {showToast} from "vant";
  import {useRouter} from "vue-router";
  const active = ref(0);
  const router = useRouter()
  const onChange = (index) => showToast(`标签 ${index}`);
  const onClickLeft = () => {
    router.push('/')
  };
  const onClickRight = () => {
    router.push('/search')
  };

</script>

<style scoped>

</style>