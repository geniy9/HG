<template>
  <div class="social_icons">
    <a href="https://www.instagram.com/hermitage_home_interiors_tkm/" target="_blank">
      <instagram-icon class="svg_items"></instagram-icon>
    </a>
    <a href="https://www.facebook.com/Hermitage-Home-Interiors-261780294273437/" target="_blank">
      <facebook-icon class="svg_items"></facebook-icon>
    </a>
    <a href="https://www.pinterest.ru/hermitage_home_interiors/" target="_blank">
      <pinterest-icon class="svg_items"></pinterest-icon>
    </a>
    <a href="https://www.houzz.ru/pro/webuser-868776387/hermitage" target="_blank">
      <houzz-icon class="svg_items"></houzz-icon>
    </a>
  </div>
</template>
<script>
import InstagramIcon from '@/components/icons/InstagramIcon'
import FacebookIcon from '@/components/icons/FacebookIcon'
import PinterestIcon from '@/components/icons/PinterestIcon'
import HouzzIcon from '@/components/icons/HouzzIcon'
export default {
  components: {
    InstagramIcon,
    FacebookIcon,
    PinterestIcon,
    HouzzIcon
  }
}
</script>
<style scoped lang="scss">
.social_icons {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  z-index: 4;
  a {
    display: inline-block;
    line-height: 0rem;
    svg {
      width: 40px;
      margin: 0 4px;
      fill: rgba(255,255,255,.9);
      transform: scale(.8);
      transition: .3s;
    }
    &:hover svg {
      fill: rgba(255,255,255,1);
      transform: scale(1);
      transition: .3s;
    }
  }
}
</style>