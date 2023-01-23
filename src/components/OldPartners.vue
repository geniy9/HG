<template>
  <div class="morphing_page">
    <div class="container_logo_brands">
      <template v-for="(brand, index) in brands">
        <template v-if="index < 103">
          <div :key="index" class="logo_box" :class="'logo_box_' + index">
            <router-link :to="brand.parent +'/'+ brand.url" class="logo_link">
              <svg-properties 
                width="300" 
                height="300" 
                viewBox="0 0 300 300" 
                :icon-name="brand.name"
                class="logo_brands">
                <svg-content :svg="brand.url"></svg-content>
              </svg-properties>
            </router-link>
          </div>
        </template>
      </template>
    </div>
    <div class="container_collection">
      <svg-properties 
        :width="logoSize"
        :height="logoSize"
        :viewBox="'0 0 '+logoSize+' '+logoSize"
        id="svg_collection"
        class="morphing_collection">
      </svg-properties>
      <template v-for="(brand, index) in brands">
        <svg-properties :key="index" viewBox="0 0 0 0" class="logo_for_morph">
          <svg-content :svg="brand.url"></svg-content>
        </svg-properties>
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
      logoSize: 300
    }
  },
  methods: {
    mergePaths() {
      MorphSVGPlugin.convertToPath("rect, circle, ellipse, line, polygon, polyline");
      var longPaths = [], logoBrands = document.querySelectorAll('.logo_for_morph');
      logoBrands.forEach(function(svg, index){
          if (svg.querySelector('path') != undefined) {
            var paths = svg.querySelectorAll('path'), mergedPath = '';
            paths.forEach( function(path, i){
              mergedPath += path.getAttribute('d') + ' ';
              if(i > 0) path.parentNode.removeChild(path);
            });
            paths[0].setAttribute('d', mergedPath);
            longPaths.push(paths[0]);
          }
      });
      this.collectPaths(longPaths);
    },
    collectPaths(paths) {
      var i, h, svgCollection = document.getElementById('svg_collection');
      for(i = 0; i < paths.length; i++) {
        h = i > 0 ? 'hidden' : 'morph_path_first';
        paths[i].classList.add('morph_path_' + i, h);
        svgCollection.append(paths[i]);
      }
      this.morphPaths(paths)
    },
    morphPaths(p) {
      var i, tl = new TimelineMax({
        yoyo: false,
        repeat: -1,
        repeatDelay: 0,
        ease: Power2.easeInOut
      });
      for (i = 0; i < p.length; i++) {
        tl.to(".morph_path_first", 0, { fill: 'rgba(255,255,255,1)' }, '+=0')
        tl.to(".morph_path_first", 1.8, {
          morphSVG: ".morph_path_" + i,
          fill: 'rgba(255,255,255,1)',
        }, '+=2');
      }
    }
  },
  mounted() {
    this.$store.dispatch('loadBrands');
    this.mergePaths();
  },
  updated(){
    this.mergePaths()
  },
  computed: {
    brands() {
      return this.$store.getters.logoBrands;
    }
  },
  destroyed() {
    this.mergePaths.destroy();
  }
}
</script>
<style lang="scss" scoped>
.morphing_page {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.container_logo_brands {
  width: 60%;
  display: grid;
  grid-auto-rows: minmax(20px, 40px);
  grid-template-columns: repeat(auto-fill, 40px);
  grid-gap: 3px;
  position: relative;
  text-align: center;
  overflow: hidden;
  padding: 5% 40px;
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
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.logo_link {
  line-height: 0;
}
.logo_brands {
  display: inline-block;
  max-width: 100%;
  height: auto;
  padding: 0;
  cursor: pointer;
  transform: scale(1);
  opacity: .5;
  transition: 1s;
  padding: 10px;
}
@keyframes animate_logos_scale {
  from { transform: scale(0.7); }
  to { transform: scale(1.8); }
}
.logo_brands:hover {
  transform: scale(5)!important;
  opacity: 1;
  transition: .5s;
}

.container_collection {
  width: 40%;
  padding: 0 5%;
}
.morphing_collection {
  position: relative;
  display: block;
  margin: 0 auto;
  width: 100%;
  height: auto;
}
.logo_for_morph {
  display: none;
  fill: #fff;
}
.morph_path_0 {
	visibility: visible!important;
}

.logo_box_0 { grid-row: 4/5; grid-column: 5/6; }
.logo_box_1 { grid-row: 5/6; grid-column: 5/6; }
.logo_box_2 { grid-row: 6/7; grid-column: 5/6; }
.logo_box_3 { grid-row: 7/8; grid-column: 5/6; }
.logo_box_4 { grid-row: 8/9; grid-column: 5/6; }
.logo_box_5 { grid-row: 9/10; grid-column: 5/6; }
.logo_box_6 { grid-row: 10/11; grid-column: 5/6; }
.logo_box_7 { grid-row: 11/12; grid-column: 5/6; }
.logo_box_8 { grid-row: 12/13; grid-column: 5/6; }
.logo_box_9 { grid-row: 13/14; grid-column: 5/6; }
.logo_box_10 { grid-row: 14/15; grid-column: 5/6; }
.logo_box_11 { grid-row: 15/16; grid-column: 5/6; }
.logo_box_12 { grid-row: 16/17; grid-column: 5/6; }
.logo_box_13 { grid-row: 17/18; grid-column: 5/6; }
.logo_box_14 { grid-row: 18/19; grid-column: 5/6; }
.logo_box_15 { grid-row: 19/20; grid-column: 5/6; }
.logo_box_16 { grid-row: 20/21; grid-column: 5/6; }
.logo_box_17 { grid-row: 21/22; grid-column: 5/6; }

.logo_box_18 { grid-row: 4/5; grid-column: 16/17; }
.logo_box_19 { grid-row: 5/6; grid-column: 16/17; }
.logo_box_20 { grid-row: 6/7; grid-column: 16/17; }
.logo_box_21 { grid-row: 7/8; grid-column: 16/17; }
.logo_box_22 { grid-row: 8/9; grid-column: 16/17; }
.logo_box_23 { grid-row: 9/10; grid-column: 16/17; }
.logo_box_24 { grid-row: 10/11; grid-column: 16/17; }
.logo_box_25 { grid-row: 11/12; grid-column: 16/17; }
.logo_box_26 { grid-row: 12/13; grid-column: 16/17; }
.logo_box_27 { grid-row: 13/14; grid-column: 16/17; }
.logo_box_28 { grid-row: 14/15; grid-column: 16/17; }
.logo_box_29 { grid-row: 15/16; grid-column: 16/17; }
.logo_box_30 { grid-row: 16/17; grid-column: 16/17; }
.logo_box_31 { grid-row: 17/18; grid-column: 16/17; }
.logo_box_32 { grid-row: 18/19; grid-column: 16/17; }
.logo_box_33 { grid-row: 19/20; grid-column: 16/17; }
.logo_box_34 { grid-row: 20/21; grid-column: 16/17; }
.logo_box_35 { grid-row: 21/22; grid-column: 16/17; }

.logo_box_36 { grid-row: 16/17; grid-column: 1/2; }
.logo_box_37 { grid-row: 16/17; grid-column: 2/3; }
.logo_box_38 { grid-row: 16/17; grid-column: 3/4; }
.logo_box_39 { grid-row: 16/17; grid-column: 4/5; }
.logo_box_40 { grid-row: 16/17; grid-column: 6/7; }
.logo_box_41 { grid-row: 16/17; grid-column: 7/8; }
.logo_box_42 { grid-row: 16/17; grid-column: 8/9; }
.logo_box_43 { grid-row: 16/17; grid-column: 9/10; }
.logo_box_44 { grid-row: 16/17; grid-column: 10/11; }
.logo_box_45 { grid-row: 16/17; grid-column: 11/12; }
.logo_box_46 { grid-row: 16/17; grid-column: 12/13; }
.logo_box_47 { grid-row: 16/17; grid-column: 13/14; }
.logo_box_48 { grid-row: 16/17; grid-column: 14/15; }
.logo_box_49 { grid-row: 16/17; grid-column: 15/16; }
.logo_box_50 { grid-row: 16/17; grid-column: 17/18; }
.logo_box_51 { grid-row: 16/17; grid-column: 18/19; }
.logo_box_52 { grid-row: 16/17; grid-column: 19/20; }
.logo_box_53 { grid-row: 16/17; grid-column: 20/21; }

.logo_box_54 { grid-row: 4/5; grid-column: 23/24; margin-left: -10px; }
.logo_box_55 { grid-row: 3/4; grid-column: 22/23; padding-top: 20px; }
.logo_box_56 { grid-row: 3/4; grid-column: 21/22; padding-bottom: 40px; }
.logo_box_57 { grid-row: 2/3; grid-column: 20/21; }
.logo_box_58 { grid-row: 2/3; grid-column: 19/20; padding-bottom: 40px; }
.logo_box_59 { grid-row: 1/2; grid-column: 18/19; padding-top: 20px; }
.logo_box_60 { grid-row: 1/2; grid-column: 17/18; }
.logo_box_61 { grid-row: 1/2; grid-column: 16/17; }
.logo_box_62 { grid-row: 1/2; grid-column: 15/16; }
.logo_box_63 { grid-row: 1/2; grid-column: 14/15; padding-top: 20px; }
.logo_box_64 { grid-row: 2/3; grid-column: 13/14; padding-bottom: 40px; }
.logo_box_65 { grid-row: 2/3; grid-column: 12/13; padding-top: 20px; }
.logo_box_66 { grid-row: 3/4; grid-column: 11/12; margin-left: -5px; }
.logo_box_67 { grid-row: 4/5; grid-column: 10/11; margin-left: -10px; }
.logo_box_68 { grid-row: 5/6; grid-column: 9/10; }
.logo_box_69 { grid-row: 6/7; grid-column: 9/10; margin-left: -30px; }
.logo_box_70 { grid-row: 7/8; grid-column: 8/9; }
.logo_box_71 { grid-row: 8/9; grid-column: 8/9; margin-left: -20px; }
.logo_box_72 { grid-row: 9/10; grid-column: 7/8; margin-left: 25px; }
.logo_box_73 { grid-row: 10/11; grid-column: 7/8; margin-left: 22px; }
.logo_box_74 { grid-row: 11/12; grid-column: 7/8; margin-left: 25px; }
.logo_box_75 { grid-row: 12/13; grid-column: 8/9; margin-left: -20px; }
.logo_box_76 { grid-row: 13/14; grid-column: 8/9; }
.logo_box_77 { grid-row: 14/15; grid-column: 9/10; margin-left: -30px; }
.logo_box_78 { grid-row: 15/16; grid-column: 9/10; }
.logo_box_79 { grid-row: 17/18; grid-column: 11/12; }
.logo_box_80 { grid-row: 18/19; grid-column: 12/13; padding-bottom: 40px; }
.logo_box_81 { grid-row: 18/19; grid-column: 13/14; padding-top: 20px; }
.logo_box_82 { grid-row: 19/20; grid-column: 14/15; padding-bottom: 40px; }
.logo_box_83 { grid-row: 19/20; grid-column: 15/16; padding-bottom: 30px; }
.logo_box_84 { grid-row: 19/20; grid-column: 17/18; padding-bottom: 30px; }
.logo_box_85 { grid-row: 19/20; grid-column: 18/19; padding-bottom: 40px; }
.logo_box_86 { grid-row: 18/19; grid-column: 19/20; padding-top: 30px; }
.logo_box_87 { grid-row: 18/19; grid-column: 20/21; padding-bottom: 30px; }
.logo_box_88 { grid-row: 17/18; grid-column: 21/22; }
.logo_box_89 { grid-row: 16/17; grid-column: 22/23; padding-top: 40px; }
.logo_box_90 { grid-row: 16/17; grid-column: 23/24; padding-bottom: 40px; margin-left: -20px; }
.logo_box_91 { grid-row: 15/16; grid-column: 23/24; margin-left: 20px; padding-bottom: 20px; }
.logo_box_92 { grid-row: 14/15; grid-column: 24/25; margin-left: -10px; }
.logo_box_93 { grid-row: 13/14; grid-column: 24/25; margin-left: 10px; }
.logo_box_94 { grid-row: 13/14; grid-column: 23/24; }
.logo_box_95 { grid-row: 13/14; grid-column: 22/23; }
.logo_box_96 { grid-row: 13/14; grid-column: 21/22; }
.logo_box_97 { grid-row: 13/14; grid-column: 20/21; }
.logo_box_98 { grid-row: 13/14; grid-column: 19/20; }
.logo_box_99 { grid-row: 13/14; grid-column: 18/19; }
.logo_box_100 { grid-row: 13/14; grid-column: 17/18; }
.logo_box_101 { grid-row: 13/14; grid-column: 15/16; }
.logo_box_102 { grid-row: 13/14; grid-column: 14/15; }
</style>