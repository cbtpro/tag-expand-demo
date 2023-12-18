<template>
  <div class="tags-demo">demo</div>
</template>

<script setup lang="ts">
import { useApi } from '@/api';

defineOptions({
  name: 'TagsDemo',
});
const { request } = useApi();

const loadData = async () => {
  const res = await request<ITag[]>({
    url: '/api/index/tags',
    method: 'GET',
  });
  console.log(res);
};

loadData();
</script>

<style lang="less" scoped>
.tags-demo {
  position: relative;
  width: 686px;
  margin-left: 32px;
}
</style>
