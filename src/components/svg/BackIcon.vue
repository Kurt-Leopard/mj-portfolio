<template>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" @click="handleClick"
    stroke="currentColor" class="size-10 p-2 border-2 rounded-full z-10 cursor-pointer"
    :class="mode === 'true' ? 'text-white' : 'bg-white border-blue-500 text-blue-500'">
    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
  </svg>
</template>

<script setup>


const { mode, button } = defineProps({
  mode: {
    type: String,
    required: true
  },
  button: {
    type: Function,
    required: true
  }
});

const handleClick = () => {
  button();
};
</script>