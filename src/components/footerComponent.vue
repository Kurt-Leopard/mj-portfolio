<template>
    <footer class="bg-white border-t text-white py-2 fixed bottom-0 left-0 w-full z-10 flex items-center justify-center"
        :style="{ background: mode == true ? '#111' : 'white', borderColor: mode == true ? '#222' : '' }">
        <div class="container flex justify-around">
            <ul class="flex w-full justify-center">
                <li>
                    <a href="#"
                        class="standard-color  hover:round-blue hover:bg-gray-200 mx-4 rounded-full flex items-center justify-center w-12 h-12">
                        <i class="fas fa-home" :style="{ opacity: projectRoute || contactRoute ? '0.15' : '1' }"></i>
                    </a>
                </li>
                <li>
                    <a href="#about-section"
                        class="standard-color  hover:round-blue hover:bg-gray-200 mx-4 rounded-full flex items-center justify-center w-12 h-12">
                        <i class="fas fa-user" :style="{ opacity: projectRoute || contactRoute ? '0.15' : '1' }"></i>
                    </a>
                </li>

                <li>
                    <a href="#project-section"
                        class="standard-color hover:round-blue hover:bg-gray-200 mx-4 rounded-full flex items-center justify-center w-12 h-12">
                        <i class="fas fa-folder" :style="{ opacity: projectRoute || contactRoute ? '0.15' : '1' }"></i>
                    </a>
                </li>
                <li>
                    <a @click="projectRoute ? '' : navigateToContactPage()"
                        class="standard-color  hover:round-blue hover:bg-gray-200 mx-4 rounded-full flex items-center justify-center w-12 h-12">
                        <i class="fas fa-envelope" :style="{ opacity: projectRoute ? '15%' : '1' }"></i>
                    </a>
                </li>
            </ul>
        </div>
    </footer>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';

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
const router = useRouter();
const navigateToContactPage = () => {
    sessionStorage.setItem('contact', 'true'); // Set 'contact' to 'true' as a string
    document.dispatchEvent(new CustomEvent('contactRouteUpdate', { detail: true }));
    router.push('/contact');
};


// 
var projectRoute = ref(sessionStorage.getItem('project') === 'true');
var contactRoute = ref(sessionStorage.getItem('contact') === 'true');
const updateProjectRoute = (event) => {
    projectRoute.value = event.detail;
};

projectRoute = ref(sessionStorage.getItem('project') === 'true');

const updateProjectHome = (event) => {
    projectRoute.value = event.detail;
};


contactRoute.value = sessionStorage.getItem('contact') === 'false';

const contactProjectHome = (event) => {
    contactRoute.value = event.detail;
};

onMounted(() => {
    document.addEventListener('projectRouteUpdate', updateProjectRoute);
    document.addEventListener('projectHomeUpdate', updateProjectHome);
    document.addEventListener('contactHomeUpdate', contactProjectHome);

});

onUnmounted(() => {
    document.removeEventListener('projectRouteUpdate', updateProjectRoute);
    document.removeEventListener('projectHomeUpdate', updateProjectHome);
    document.removeEventListener('contactHomeUpdate', contactProjectHome);

});

// contact
contactRoute.value = sessionStorage.getItem('contact') === 'true';

const updateContactRoute = (event) => {
    contactRoute.value = event.detail;
};

onMounted(() => {
    document.addEventListener('contactRouteUpdate', updateContactRoute);
});

onUnmounted(() => {
    document.removeEventListener('contactRouteUpdate', updateContactRoute);
});

</script>

<style scoped>
/* Add any additional styles here */
</style>