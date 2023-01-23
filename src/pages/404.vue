<template>
  <div class="container">
    <h1 class="ui-title-1">Sorry, Page Not Found</h1>
    <div class="ui-alert ui-alert--danger">
      <span class="alert-title">{{ message }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: null
    }
  },
  created () {
    this.message = 'We appologize, but this page is not found'
  }
}
</script>
