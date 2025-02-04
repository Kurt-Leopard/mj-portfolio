<template>
    <div class="loader-wrapper" :style="{ background: mode ? '#111' : 'white'}">
        <div class="loader"></div>
        <img src="../assets/logoWhite.png" alt="Logo" class="logo" />
    </div>
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
.loader-wrapper {
    top: 0;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    z-index: 4;
}

.loader {
    width: 50px;
    height: 50px;
    border: 4px solid transparent;
    border-top-color: #3182ce;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

.logo {
    position: absolute;
    top: calc(50% - 20px);
    left: calc(50% - 20px);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    z-index: 5;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>
