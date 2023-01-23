<template>
    <div class="container_page">
        <div class="container_logo_brands">
            <div class="box_collection">
                <svg-properties 
                    :width="logoSize"
                    :height="logoSize"
                    :viewBox="'0 0 '+logoSize+' '+logoSize"
                    id="svg_collection"
                    class="logo_morphing">
                </svg-properties>
                <template v-for="(brand, index) in brands">
                    <svg-properties :key="index" viewBox="0 0 0 0" class="logo_for_morph">
                        <svg-content :svg="brand.url"></svg-content>
                    </svg-properties>
                </template>
            </div>
            <template v-for="(brand, index) in brands">
                <div :key="index" class="logo_box" :class="'logo_box_' + index">
                    <router-link :to="brand.parent +'/'+ brand.url">
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
<style scoped>
.logo_for_morph {
    display: none;
    fill: #fff;
}
.morph_path_0 {
	visibility: visible!important;
}
.logo_brands {
    display: inline-block;
    max-width: 100%;
    height: auto;
    padding: 0;
    cursor: pointer;
    transform: scale(1);
    opacity: .25;
    transition: 1.5s;
    padding: 10px;
}
.logo_brands:hover {
    transform: scale(2);
    opacity: 1;
    transition: .5s;
}
.container_logo_brands {
    display: grid;
    grid-template-columns: repeat(18, 1fr);
    grid-auto-rows: minmax(55px, 55px);
    grid-gap: 10px;
    position: relative;
    text-align: center;
    overflow: hidden;
    padding: 7% 1%;
    margin: 0;
}
.logo_morphing {
    position: relative;
    display: block;
    margin: 0 auto;
    width: 100%;
    height: auto;
}
.box_collection { 
    padding: 40px;
    grid-column: 7 / 13;
    grid-row: 1 / 12;
}
.logo_box {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>