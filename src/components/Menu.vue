<template>
  <nav class="navbar navbar-dark bg-dark">
    <div class="container">
      <span class="navbar-brand"> Simulador de tewt </span>
      <button
        class="btn pl-4 pr-4"
        :class="{ 'btn-success': !showForm, 'btn-danger': showForm }"
        @click="openCloseForm"
      >
        {{ !showForm ? "Nuevo tweet" : "Cerrar Tweet" }}
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    showForm: Boolean,
    openCloseForm: Function,
  },
};
</script>

<style>
</style>