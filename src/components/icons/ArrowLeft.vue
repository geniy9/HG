<template>
  <svg version="1.1" class="arrow_left" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    viewBox="0 0 300 300" style="enable-background:new 0 0 300 300;" xml:space="preserve">
    <line class="arrow_l" x1="78.3" y1="149.5" x2="222.8" y2="5"/>
    <line class="arrow_l" x1="78.3" y1="149.5" x2="222.8" y2="294"/>
  </svg>
</template>
<style scoped lang="scss">
$stroke: 210;
.arrow_left {
  width: 100%;
}
.arrow_l {
  fill: none;
  stroke:#fff;
  stroke-width: 3;
  stroke-linecap: round;
  stroke-miterlimit: 10;
  transition: 1s;
}
.link_to_back:hover .arrow_l {
  animation-name: arrow;
  stroke-dasharray: $stroke;
  stroke-dashoffset: $stroke;
  animation-direction: alternate;
  animation-timing-function: ease-out;
  animation-iteration-count: infinite;
  animation-duration: 2s;
  animation-fill-mode: forwards;
  transition: 1s;
}
@keyframes arrow {
  from { stroke-dashoffset: $stroke;  }
  to { stroke-dashoffset: 0; }
}
</style>