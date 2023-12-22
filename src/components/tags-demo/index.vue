<template>
  <div class="tags-demo">
    <tags :data="list" :resize="true"></tags>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useApi } from '@/api';
import Tags from './tags.vue';

defineOptions({
  name: 'TagsDemo',
});
const { request } = useApi();

const list = ref<ITag[]>([]);
const loadData = async () => {
  const { success, data } = await request<ITag[]>({
    url: '/api/index/tags',
    method: 'GET',
  });
  if (success && data) {
    list.value = data;
  }
};

loadData();
</script>

<style lang="less" scoped>
.tags-demo {
  position: relative;
  margin-left: 32px;
  display: flex;
  justify-content: center;
}
</style>
