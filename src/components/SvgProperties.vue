<template>
  <svg 
    version="1.1"
    xmlns="http://www.w3.org/2000/svg" 
    :width="width" 
    :height="height" 
    :viewBox="viewBox" 
    :aria-labelledby="iconName"
    class="brand_logo_svg"
    role="logo"
  >
    <g :fill="iconColor">
      <slot />
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    iconName: {
      type: String,
      default: 'logo'
    },
    viewBox: {
      type: [Number, String],
      default: '0 0 300 300'
    },
    width: {
      type: [Number, String],
      default: 300
    },
    height: {
      type: [Number, String],
      default: 300
    },
    iconColor: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>

<style scoped>
svg {
  display: inline-block;
  vertical-align: baseline;
}
</style>