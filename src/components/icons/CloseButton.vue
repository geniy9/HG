<template>
    <svg version="1.1" class="close_button" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 300 300" style="enable-background:new 0 0 300 300;" xml:space="preserve" :width="IconWidth">
        <path class="close_cyrcle" d="M292.51,150c0,78.7-63.8,142.5-142.5,142.5S7.51,228.7,7.51,150S71.31,7.5,150.01,7.5S292.51,71.3,292.51,150z"/>
        <path class="close_path" d="M208.76,90.71L91.71,207.76"/>
        <path class="close_path" d="M91.71,90.71l117.05,117.05"/>
    </svg>
</template>
<script>
export default {
    props: {
        IconWidth: {
            type: String,
            default: '50px'
        }
    }
}
</script>
<style scoped lang="scss">
$stroke: 1000;
$stroke_x: 300;
.close_button { 
    width: 100%;
    border-radius: 50%;
    background: rgba(0,0,0,.1);
}
.close_cyrcle, .close_path {
    fill: none;
    stroke-miterlimit: 10;
    transition: 1s;
}
.close_cyrcle {
    stroke:#fff;
    stroke-width: 1;
}
.close_path {
    stroke:#fff;
    stroke-width: 4;
}
.video_button_icon:hover .close_cyrcle, .video_button_icon:hover .close_path {
    stroke-width: 7;
    transition: .5s;
}
.close_cyrcle {
    animation-name: close_rotate_animate;
    stroke-dasharray: $stroke;
    stroke-dashoffset: $stroke;
    animation-direction: alternate;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-duration: 5s;
    animation-fill-mode: both;
    transform-origin: 50% 50% 0;
}
.close_path {
    animation-name: close_stroke_animate;
    stroke-dasharray: $stroke_x;
    stroke-dashoffset: $stroke_x;
    animation-direction: alternate;
    animation-timing-function: linear;
    animation-iteration-count: 1;
    animation-duration: 3s;
    animation-fill-mode: forwards;
    transform-origin: 50% 50% 0;
}
@keyframes close_rotate_animate {
    from { stroke-dashoffset: $stroke; transform: rotate(0); }
    to { stroke-dashoffset: 0; transform: rotate(360deg); }
}
@keyframes close_stroke_animate {
    from { stroke-dashoffset: $stroke_x; }
    45% { transform: rotate(0); }
    50% { transform: rotate(180deg); }
    55% { transform: rotate(0); }
    to { stroke-dashoffset: 0; }
}
</style>