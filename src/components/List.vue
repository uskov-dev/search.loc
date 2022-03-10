<template>
  <div class="list">
    <h6 class="list__title" v-if="title">{{ title }}:</h6>
    <div class="list__content">
      <user
        v-for="user in users"
        :key="user"
        :user="user"
        :isAdded="isAddedList"
      ></user>
    </div>
  </div>
</template>

<script>
import User from './User.vue';

export default {
  name: 'List',
  props: {
    title: String,
    users: Array,
    isAddedList: Boolean,
  },
  components: {
    User,
  },
};
</script>
