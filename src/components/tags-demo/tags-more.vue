<!--
 Copyright 2023 Peter Chen

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
-->

<script setup lang="ts">
const emit = defineEmits<{
  'more-click-event': [event: MouseEvent];
}>();
const moreClickHandle = (event: MouseEvent) => {
  emit('more-click-event', event);
};
</script>

<template>
  <div @click="moreClickHandle" class="tags-more">
    <div class="inner">…</div>
  </div>
</template>

<style lang="less" scoped>
.tags-more {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 6px;
  height: var(--row-height);
  background: #f5f6f9;
  border-radius: 4px;
  box-sizing: border-box;
  border: 1px solid transparent;
  cursor: pointer;
  &:hover {
    background: #eff6ff;
    border: 1px solid #0067ff;
    .inner {
      color: #0067ff;
    }
  }
  .inner {
    color: #292a2d;
  }
}
</style>
