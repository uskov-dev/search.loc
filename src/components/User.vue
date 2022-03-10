<template>
  <div class="user list__user">
    <div class="user__text">{{ user.value }}</div>
    <button
      class="user__btn"
      v-if="!isAdded"
      @click="addUserList(user)"
    >Добавить</button>
  </div>
</template>

<script>
export default {
  name: 'User',
  props: {
    user: Object,
    isAdded: Boolean,
  },
  methods: {
    addUserList(user) {
      this.$store.commit('removeUser', user);
      this.$store.dispatch('addUser', user);
    },
  },
};
</script>
