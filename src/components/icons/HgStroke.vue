<template>
  <div class="hg_container">
    <div class="hg_title">
      <slot name="title"></slot>
      <svg class="hg_element" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
          viewBox="0 0 300 150" style="enable-background:new 0 0 300 150;" xml:space="preserve">
          <line class="hg_elem" x1="0" y1="130.5" x2="300" y2="130.5"/>
          <line class="hg_elem" x1="12.5" y1="149.5" x2="12.5" y2="100.5"/>
          <line class="hg_elem" x1="42.5" y1="149.5" x2="42.5" y2="40.5"/>
      </svg>
    </div>
    <div class="hg_desc">
      <slot name="desc"></slot>
    </div>
  </div>
</template>
<style scoped>
.hg_title {
  position: relative;
  display: block;
  margin-bottom: 30px;
  margin-left: 70px;
}
.hg_title .ui-title-1 {
  position: relative;
  color: #666;
  letter-spacing: 0;
  line-height: 200%;
  transition: 3s ease;
  z-index: 1;
}
.elem_toggle .ui-title-1 {
  color: #fff;
  letter-spacing: 7px;
  transition: 3s ease;
}
.hg_desc .ui-text-regular {
  margin-left: 70px;
  letter-spacing: 2px;
}
.hg_element {
  position: absolute;
  bottom: -30px;
  left: -70px;
  width: 300px;
}
.hg_elem {
  fill:none;
  stroke:#666;
  stroke-width:1;
  stroke-opacity:1;
  stroke-linecap:round
}
.elem_toggle .hg_elem {
  stroke-dasharray: 300;
  stroke-dashoffset: 300;
  animation-name: dash;
  animation-timing-function: ease;
  animation-iteration-count: 1;
  animation-delay: .1s;
  animation-duration: 5s;
  animation-fill-mode: forwards;
  animation-play-state: running;
}
@keyframes dash {
  from { stroke-dashoffset: 300; stroke:#333; }
  to { stroke-dashoffset: 0; stroke:#999; }
}
</style>