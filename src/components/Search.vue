<template>
  <div class="search">
    <input
      type="text"
      v-model="searchValue"
      placeholder="Введите имя"
      class="search__input"
      @input="inputHandler"
    >
  </div>
</template>

<script>
export default {
  name: 'Search',
  data() {
    return {
      searchValue: '',
      ending: null,
    };
  },
  emits: [
    'inputHandler',
  ],
  methods: {
    inputHandler(event) {
      if (this.ending) {
        clearTimeout(this.ending);
      }

      this.ending = setTimeout(() => {
        this.$emit('inputHandler', event.target.value);
      }, 300);
    },
  },
};
</script>
