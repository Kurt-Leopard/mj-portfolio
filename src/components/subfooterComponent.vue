<template>
    <footer class="border-t border-gray-200 text-center mt-12 px-2"
        :style="{ background: mode != true ? 'white' : '#111', borderColor: mode != true ? '' : '#222' }">
        <p class="copyright my-12 text-gray-500"><b>© 2025 MAJ-WebCraft.</b> All rights reserved.</p>
    </footer>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const mode = ref(sessionStorage.getItem('mode') === 'true');

onMounted(() => {
    updateMode(sessionStorage.getItem('mode') === 'true');

    document.addEventListener('modeChange', (event) => {
        updateMode(event.detail === 'true');
    });
});

function updateMode(modeValue) {
    mode.value = modeValue;
}
</script>

<style scoped>
/* Add any additional styles here */
</style>