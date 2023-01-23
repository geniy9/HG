<template>
  <transition name="modal" appear>
    <div class="modal_mask">
      <div class="modal_wrapper">
        <div class="modal_container" :style="'width:' + widthModal">
          <div class="modal_header">
            <slot name="header"></slot>
          </div>
          <div class="modal_body">
            <slot name="body"></slot>
          </div>
          <div class="modal_footer">
            <slot name="footer">
              <button class="button button-light" @click="$emit('close-modal')">OK</button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'modalWindow',
  props: {
    widthModal: { 
      type: String,
      default: '100vw',
    }
  }
}
</script>