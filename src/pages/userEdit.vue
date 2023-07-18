<template>
  <van-cell title="用户名" is-link :value="user.username"/>
  <van-cell title="帐户" is-link :value="user.userAccount" />
  <van-cell title="头像" is-link to="/user/edit" >
    <van-image style="height: 40px" :src="user.avatarUrl" />
  </van-cell>
  <van-cell title="性别" is-link to="/user/edit" :value="user.gender" />
  <van-cell title="电话" is-link to="/user/edit" :value="user.phone" />
  <van-cell title="邮箱" is-link to="/user/edit" :value="user.email" />
  <van-cell title="星球代码" :value="user.planetCode" />
  <van-cell title="创建时间" :value="user.creatTime.toDateString()" />
</template>

<script setup>

</script>

<style scoped>

</style>