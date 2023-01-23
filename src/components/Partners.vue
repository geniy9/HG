<template>
  <div class="logo_items">
    <div class="logo_item" v-for="(brand, i) in uniqueBrands" :key="i">
      <router-link :to="brand.parent +'/'+ brand.url" class="logo_link">
        <svg-properties 
          width="150" 
          height="150" 
          viewBox="0 0 300 300" 
          :icon-name="brand.name"
          class="logo_svg">
          <svg-content :svg="brand.url"></svg-content>
        </svg-properties>
      </router-link>
    </div>
  </div>
</template>

<script>    
import SvgProperties from '@/components/SvgProperties'
import SvgContent from '@/components/SvgContent'
export default {
  name: 'Parners',
  components: {
    SvgProperties,
    SvgContent
  },
  data() {
    return {
    }
  },
  methods: {

  },
  mounted() {
    this.$store.dispatch('loadBrands');
  },
  computed: {
    brands() {
      return this.$store.getters.logoBrands;
    },
    uniqueBrands() {
      return this.brands.filter((v, i, a) => a.indexOf(v) === i) 
    }
  }
}
</script>
<style lang="scss" scoped>
@mixin animatedelay($child) {
  @for $i from 1 through 100 {
    &:nth-child(#{$i}) #{$child} {
      animation-delay: #{$i * 40}ms;
    }
  }
}
.logo_items {
  position: relative;
  display: inline-block;
}
.logo_item {
  display: inline-block;
}
.logo_item:nth-child(even) {
  background: #ffffff02;
}
.logo_link {
  line-height: 0;
}
.logo_svg {
  cursor: pointer;
  transform: scale(.5);
  opacity: .5;
  transition: 1s;
}
.logo_svg:hover {
  transform: scale(1.2);
  opacity: 1;
  transition: .5s;
}
</style>