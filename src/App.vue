<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { RouterView } from 'vue-router';
import headerComponent from './components/headerComponent.vue';
import Loader from './components/loaderComponent.vue';
import subfooterComponent from './components/subfooterComponent.vue';
import FooterComponent from './components/footerComponent.vue';

const isLoading = ref(true);

onMounted(() => {

  setTimeout(() => {
    isLoading.value = false;
  }, 2000);
});


const showLazy = ref(false);

const handleMouseEnter = () => {
  setTimeout(() => {
    showLazy.value = true;
  }, 1000);
};

onMounted(() => {

  document.addEventListener('mousemove', handleMouseEnter);
  document.addEventListener('touchstart', handleMouseEnter);
  document.addEventListener('scroll', handleMouseEnter);
});

onUnmounted(() => {
  document.removeEventListener('mousemove', handleMouseEnter);
  document.addEventListener('touchstart', handleMouseEnter);
  document.addEventListener('scroll', handleMouseEnter);
});
</script>

<template>
  <div>
    <headerComponent class="lg:container mx-3  lg:mx-auto  xl:px-40 fixed top-0 left-0 right-0 z-10" />
    <Loader v-if="isLoading" />
    <RouterView class="lg:container mx-3  lg:mx-auto xl:px-40 " />
    <subfooterComponent class="hidden lg:block lg:container mx-3  lg:mx-auto xl:px-40" v-if="showLazy" />
    <FooterComponent class="lg:hidden" />
  </div>
</template>

<style scoped></style>
