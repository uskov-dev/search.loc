<template>
  <div class="search">
    <!-- <img src="./assets/images/loader-icon.svg" alt="" class="search__loader"> -->
    <input type="text" value="" placeholder="Введите имя" class="search__input">
  </div>
  <div class="list">
    <div class="list__content">
      <div class="phrase list__phrase">
        <div class="phrase__text">Петровна</div>
        <button class="phrase__btn">Добавить</button>
      </div>
      <div class="phrase list__phrase">
        <div class="phrase__text">Петров</div>
        <button class="phrase__btn">Добавить</button>
      </div>
      <div class="phrase list__phrase">
        <div class="phrase__text">Петро</div>
        <button class="phrase__btn">Добавить</button>
      </div>
      <div class="phrase list__phrase">
        <div class="phrase__text">Петр</div>
        <button class="phrase__btn">Добавить</button>
      </div>
      <div class="phrase list__phrase">
        <div class="phrase__text">Пет</div>
        <button class="phrase__btn">Добавить</button>
      </div>
    </div>
  </div>
  <div class="list">
    <h6 class="list__title">Список добавленных элементов:</h6>
    <div class="list__content">
      <div class="phrase list__phrase">
        <div class="phrase__text">Петров</div>
      </div>
      <div class="phrase list__phrase">
        <div class="phrase__text">Петровна</div>
      </div>
    </div>
  </div>
  <button class="stop-btn">
    <span>Остановить автопоиск</span>
  </button>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="scss">
@import '~/node_modules/normalize.css/normalize.css';
@import '@/assets/sass/main.scss';
</style>
