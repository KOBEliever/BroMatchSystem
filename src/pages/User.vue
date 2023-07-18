<template>
  <van-cell title="用户名" is-link :value="user.username"/>
  <van-cell title="帐号"  :value="user.userAccount" />
  <van-cell title="头像" is-link to="/user/edit" >
    <van-image style="height: 40px" :src="user.avatarUrl" />
  </van-cell>
  <van-cell title="性别" is-link :value="user.gender" @click="toEdit('gender','性别',user.gender)" />
  <van-cell title="电话" is-link :value="user.phone" @click="toEdit('phone','电话',user.phone)"/>
  <van-cell title="邮箱" is-link :value="user.email" @click="toEdit('email','邮箱',user.email)"/>
  <van-cell title="星球代码" :value="user.planetCode" />
  <van-cell title="创建时间" :value="user.creatTime.toDateString()" />
</template>

<script setup lang="ts">
import {useRouter} from "vue-router";
const router = useRouter();
const user = {
  id: 1,
  username: 'DWbubu',
  userAccount:'dwbubu',
  avatarUrl: 'http://q2.qlogo.cn/headimg_dl?dst_uin=1791612323&spec=100&t=1678434892319',
  gender:'男',
  phone:'12345',
  email:'12345@qq.com',
  planetCode: '123',
  creatTime: new Date(),
}
const toEdit = (editKey:string, editName:string ,currentValue:string) => {
  router.push({
    path:'/user/edit',
    params:{
      a:1
    },
    query:{
      editKey,
      editName,
      currentValue
    }
  })
}
</script>

<style scoped>

</style>