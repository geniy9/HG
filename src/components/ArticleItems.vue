<template>
  <div>
    <template v-if='items && items.length'>
      <template v-for='(item, index) in items'>
        <slot :item="item" :index="index">
          <ArticleItem :item="item" :key="index" :class="isWide"></ArticleItem>
        </slot>      
      </template>
    </template>
  </div>
</template>
<script>
import ArticleItem from '@/components/ArticleItem.vue'
export default {
  name: 'ArticleItems',
  components: {
    ArticleItem
  },
  props: {
    items: Array
  },
  computed: {
    isWide() {
      return this.items.length == 1 ? 'width_wide' : '';
    }
  }
}
</script>
<style scoped>
.list_brands {
  display: block;
}
</style>