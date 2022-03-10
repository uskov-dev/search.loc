<template>
  <search @inputHandler="loadUsers"></search>
  <list
    v-if="foundListUsers.length"
    :users="foundListUsers"
    :isAddedList="false"
  ></list>
  <list
    v-if="addedListUsers.length"
    title="Список добавленных элементов"
    :users="addedListUsers"
    :isAddedList="true"
  ></list>
  <stop-btn :stopSearch="stopSearch" @stopHandler="stopHandler"></stop-btn>
</template>

<script>
import Search from './components/Search.vue';
import List from './components/List.vue';
import StopBtn from './components/StopBtn.vue';

export default {
  name: 'App',
  data() {
    return {
      stopSearch: false,
    };
  },
  computed: {
    foundListUsers() {
      return this.$store.getters.getReceivedUsers;
    },
    addedListUsers() {
      return this.$store.getters.getAddedUsers;
    },
  },
  methods: {
    loadUsers(value) {
      if (!this.stopSearch) {
        this.$store.dispatch('getListRequests', value);
      }
    },
    stopHandler() {
      this.stopSearch = !this.stopSearch;
    },
  },
  mounted() {
    this.$store.dispatch('getLocalUsers');
  },
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
