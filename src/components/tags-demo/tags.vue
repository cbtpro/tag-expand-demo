<template>
  <div :class="[resize ? 'resize' : '']" class="tags">
    <tags-item
      v-for="item in data"
      :key="item.label"
      :data="item"
      @item-click-event="itemClickHandle"
    />
    <slot name="more">
      <tags-more @more-click-event="moreClickHandle" />
    </slot>
  </div>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';
import TagsItem from './tags-item.vue';
import TagsMore from './tags-more.vue';

interface IProps {
  data: ITag[];
  /**
   * 是否允许resize
   */
  resize: boolean;
}
defineOptions({
  name: 'Tags',
});

const props = withDefaults(defineProps<IProps>(), {
  data: () => [],
  resize: false,
});

const { data, resize } = toRefs(props);

const emit = defineEmits<{
  (e: 'more-click-event', args: MouseEvent): void;
}>();
const moreClickHandle = (event: MouseEvent) => {
  emit('more-click-event', event);
};
const itemClickHandle = (event: MouseEvent, item: ITag) => {
  console.log(event, item);
};
</script>

<style lang="less" scoped>
.tags {
  --max-width: 360px;
  --row-height: 24px;
  margin: auto;
  width: var(--max-width);
  border: 1px solid #e3d3e3;
  display: flex;
  row-gap: 2px;
  column-gap: 2px;
  flex-wrap: wrap;
  overflow: hidden;
  padding: 2px 2px;
  &.resize {
    resize: horizontal;
  }
}
</style>
