<template>
  <form action="/">
    <van-search
        v-model="value"
        show-action
        placeholder="请输入标签进行搜索"
        @search="onSearch"
        @cancel="onCancel"
    />
  </form>
  <van-divider content-position="left">已选标签</van-divider>
  <van-row gutter="16">
    <van-col v-for="tag in activeIds">
      <van-tag closeable size="medium" type="primary" @close="close(tag)">
        {{ tag }}
      </van-tag>
    </van-col>
  </van-row>
  <van-divider content-position="left">所有标签</van-divider>
  <van-tree-select
      v-model:active-id="activeIds"
      v-model:main-active-index="activeIndex"
      :items="tagList"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { showToast } from 'vant';
const value = ref('');
const onSearch = (val) => showToast(val);
const onCancel = () => showToast('取消');

const activeIds = ref([]);
const activeIndex = ref(0);
const tagList = [
  {
    text: '性别',
    children: [
      { text: '男', id: '男' },
      { text: '女', id: '女' },
    ],
  },
  {
    text: '年级',
    children: [
      { text: '大一', id: '大一' },
      { text: '大二', id: '大二' },
      { text: '大三', id: '大三' },
    ],
  },
];
const close = (tag) => {
  activeIds.value = activeIds.value.filter(item => {
    return item != tag;
  })
}
</script>
<style scoped>
</style>