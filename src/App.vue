<template>
  <search></search>
  <list></list>
  <list></list>
  <stop-btn></stop-btn>
</template>

<script>
import Search from './components/Search.vue';
import List from './components/List.vue';
import StopBtn from './components/StopBtn.vue';

export default {
  name: 'App',
  components: {
    Search,
    List,
    StopBtn,
  },
};
</script>

<style lang="scss">
@import '~/node_modules/normalize.css/normalize.css';
@import '@/assets/sass/main.scss';
</style>
