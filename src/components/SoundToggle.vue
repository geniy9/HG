<template>
  <div class="sound_toggle navbar-item">
    <div class="header_sound cursor_pointer" @click="actionSound">
      <PlayButton :icon-width="'42px'" :play-status="getterSound" :icon-color="'#fff'" />
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import PlayButton from '@/components/icons/PlayButton'
export default {
  name: 'sound-toggle',
  components: {
    PlayButton
  },
  methods: {
    ...mapActions(['actionSound'])
  },
  computed: {
    ...mapGetters(['getterSound'])
  }
}
</script>
<style scoped>
.header_sound {
  display: flex;
  align-items: center;
  transform: scale(.8);
  transition: .3s;
}
.header_sound:hover {
  transform: scale(1);
  transition: .3s;
}
.sound_toggle {
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 10px;
  margin-right: 20px;
  z-index: 4;
}
</style>