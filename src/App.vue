<script setup>
import { ref, onMounted } from 'vue';
import { RouterView } from 'vue-router';
import headerComponent from './components/headerComponent.vue';
import Loader from './components/loaderComponent.vue';
import subfooterComponent from './components/subfooterComponent.vue';


const isLoading = ref(true);

onMounted(() => {

  setTimeout(() => {
    isLoading.value = false;
  }, 2000);
});
</script>

<template>
  <div>
    <headerComponent class="lg:container mx-3  lg:mx-auto  xl:px-40 fixed top-0 left-0 right-0 z-10" />
    <Loader v-if="isLoading" />
    <RouterView class="lg:container mx-3  lg:mx-auto xl:px-40 " />
    <subfooterComponent class="lg:container mx-3  lg:mx-auto xl:px-40" />
  </div>
</template>

<style scoped></style>
