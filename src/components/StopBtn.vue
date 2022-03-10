<template>
  <button class="stop-btn" @click="$emit('stopHandler')">
    <span>{{ stopSearch ? 'Включить' : 'Остановить' }} автопоиск</span>
  </button>
</template>

<script>
export default {
  name: 'StopBtn',
  props: {
    stopSearch: Boolean,
  },
  emits: ['stopHandler'],
};
</script>
