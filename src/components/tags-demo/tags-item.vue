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
import { toRefs } from 'vue';
export interface ITagsItemProps {
  data: ITag;
}

const props = defineProps<ITagsItemProps>();
const { data } = toRefs(props);

const emit = defineEmits<{
  'item-click-event': [event: MouseEvent, data: ITag];
}>();
const itemClickHandle = (event: MouseEvent) => {
  emit('item-click-event', event, data.value);
};
</script>

<template>
  <div @click="itemClickHandle" class="tags-item">
    <div class="label single-line-ellipsis">
      {{ data.label }}
    </div>
  </div>
</template>

<style lang="less" scoped>
.tags-item {
  color: green;
  padding: 0 6px;
  max-width: var(--max-width);
  height: var(--row-height);
  background: #f5f6f9;
  border-radius: 4px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  border: 1px solid transparent;
  cursor: pointer;
  &:hover {
    background: #eff6ff;
    border: 1px solid #0067ff;
    .label {
      color: #0067ff;
    }
  }
  .label {
    color: #292a2d;
  }
  .single-line-ellipsis {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    -webkit-line-clamp: 1;
  }
}
</style>
