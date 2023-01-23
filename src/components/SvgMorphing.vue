<template>
  <div class="morphing_page">
    <div class="container_logo_brands">
      <template v-for="(brand, index) in brands">
        <div :key="index" class="logo_box">
          <router-link :to="brand.parent +'/'+ brand.url" class="logo_link">
            <svg-properties 
              width="200" 
              height="200" 
              viewBox="0 0 300 300" 
              :icon-name="brand.name"
              class="logo_brands">
              <svg-content :svg="brand.url"></svg-content>
            </svg-properties>
          </router-link>
        </div>
      </template>
    </div>
  </div>
</template>

<script>    
import SvgProperties from '@/components/SvgProperties'
import SvgContent from '@/components/SvgContent'
export default {
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
    }
  }
}
</script>
<style lang="scss" scoped>
.morphing_page {
  position: relative;
}
.container_logo_brands {
  display: inline-block;
  position: relative;
  padding: 5% 10%;
  margin: 0;
}
@mixin animatedelay($child) {
  @for $i from 1 through 100 {
    &:nth-child(#{$i}) #{$child} {
      animation-delay: #{$i * 40}ms;
    }
  }
}
.logo_box {
  display: inline-block;
}
.logo_link {
  line-height: 0;
}
.logo_brands {
  cursor: pointer;
  transform: scale(.5);
  opacity: .5;
  transition: 1s;
}
.logo_brands:hover {
  transform: scale(1);
  opacity: 1;
  transition: .5s;
}

</style>