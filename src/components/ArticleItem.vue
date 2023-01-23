<template>
  <div :title="item.title" class="brand_item" :data-parent="item.subparent">
    <!-- <router-link :to="getBrandRoute" class="brand_link"> -->
    <a :href="item.content.website" target="_blank" class="brand_link">
      <div class="brand_box">
        <div class="brand_logo">
          <svg-properties viewBox="0 0 300 300" width="300" height="300">
            <svg-content :svg="item.url"></svg-content>
          </svg-properties>
        </div>
        <template v-if="item.content.pics">
          <img :src="item.content.pics[0]" :alt="item.name" class="brand_image">
        </template>
        <template v-else>
          <div class="brand_empty ui-text-regular">no images...</div>
        </template>
      </div>
    </a>
    <!-- </router-link> -->
  </div>
</template>

<script>
import Brand from '@/models/Brand'
import SvgProperties from '@/components/SvgProperties.vue'
import SvgContent from '@/components/SvgContent.vue'

export default {
  name: 'ArticleItem',
  components: {
    SvgProperties,
    SvgContent
  },
  props: {
    item: Brand
  },
  computed: {
    getBrandRoute() {
      return {
        name: 'Brand',
        params: { brand_url: this.item.url }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
// @mixin grids {
//   &:nth-child(4n+1) { grid-column: 3/6; }
//   &:nth-child(4n+2) { grid-column: 6/10; }
//   &:nth-child(4n+3) { grid-column: 2/6; }
//   &:nth-child(4n+4) { grid-column: 6/9; }
//   $j1: 0; $k1: 0; $j2: 0; $k2: 0; $j3: 0; $k3: 0; $j4: 0; $k4: 0;
//   $max: 30; $step: 4;
//   @for $i from 1 through ceil($max/$step) {
//     $nth: ($i - 1) * $step + 1;
//     &:nth-child(#{$nth}) { grid-row: #{$j1 + 2} / #{$k1 + 4}; }
//     &:nth-child(#{$nth - 1}) { grid-row: #{$j2 - 2} / #{$k2}; }
//     &:nth-child(#{$nth - 2}) { grid-row: #{$j3 - 2} / #{$k3 + 1}; }
//     &:nth-child(#{$nth - 3}) { grid-row: #{$j4 - 5} / #{$k4 - 2}; }
//     $j1: $j1 + 6; $k1: $k1 + 6;
//     $j2: $j2 + 6; $k2: $k2 + 6;
//     $j3: $j3 + 6; $k3: $k3 + 6;
//     $j4: $j4 + 6; $k4: $k4 + 6;
//   }
// }
.brand_item {
  display: inline-block;
  width: calc(50% - 10px);
  margin: 0 10px 10px 0;
}
.brand_item.width_wide {
  width: 100%;
}
.brand_box {
  position: relative;
}
.brand_logo {
  position: absolute;
  top: 0;
  left: 0;
  box-shadow: none;
  z-index: 1;
  height: 100%;
  width: 100%;
  transition: 1s;
}
.brand_logo:hover {
  box-shadow: 0 0 0 330px rgba(0,0,0,.75) inset;
  transition: 1s;
}
.brand_item.width_wide .brand_logo:hover {
  box-shadow: 0 0 0 1000px rgba(0,0,0,.75) inset;
}
.brand_logo svg {
  display: block;
  margin: 0 auto;
  width: 30%;
  height: 100%;
  opacity: 0;
  transform: scale(.8);
  transition: 1s;
}
.brand_logo:hover svg {
  opacity: 1;
  transform: scale(1);
  transition: 1s;
  transition-delay: .25s;
}
.brand_empty {
  position: relative;
  display: inline-block;
  width: 100%;
  text-align: center;
}
</style>