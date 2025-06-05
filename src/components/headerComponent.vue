<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
// import HomeIcon from "./svg/HomeIcon.vue";
// import AboutIcon from "./svg/AboutIcon.vue";
// import ProjectIcon from "./svg/ProjectIcon.vue";
// import ContactIcon from "./svg/ContactIcon.vue";
import BackIcon from "./svg/BackIcon.vue";
import LightModeText from "./utils/helper.js";

const mode = ref(sessionStorage.getItem("mode"));
console.log(mode.value);


const isMenuOpen = ref(false);
const router = useRouter();

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
    console.log("click");
};

const togs = () => {
    mode.value = mode.value === 'true' ? 'false' : 'true';
    sessionStorage.setItem("mode", mode.value);
    router.push(mode.value === 'true' ? "/" : "/dashboard");
    console.log(mode.value);
    document.dispatchEvent(new CustomEvent('modeChange', { detail: mode.value.toString() }));
};

const getHome = () => {
    sessionStorage.setItem("contact", 'false');
    contactRoute.value = false;
    document.dispatchEvent(new CustomEvent('contactHomeUpdate', { detail: false }));
    router.push("/");
};
let projectRoute = ref();
const projectToHome = () => {
    sessionStorage.setItem("project", 'false');
    document.dispatchEvent(new CustomEvent('projectHomeUpdate', { detail: false }));
    router.push("/");
};


projectRoute.value = sessionStorage.getItem('project') === 'false';

const updateProjectHome = (event) => {
    projectRoute.value = event.detail;
};

onMounted(() => {
    document.addEventListener('projectHomeUpdate', updateProjectHome);

});

onUnmounted(() => {
    document.removeEventListener('projectHomeUpdate', updateProjectHome);
});


// contact
const contactRoute = ref(sessionStorage.getItem('contact') === 'true');

const updateContactRoute = (event) => {
    contactRoute.value = event.detail;
};

onMounted(() => {
    document.addEventListener('contactRouteUpdate', updateContactRoute);
});

onUnmounted(() => {
    document.removeEventListener('contactRouteUpdate', updateContactRoute);
});



const navigateToContactPage = () => {
    sessionStorage.setItem('contact', 'true');
    document.dispatchEvent(new CustomEvent('contactRouteUpdate', { detail: true }));
    router.push('/contact');
};

// 

projectRoute.value = sessionStorage.getItem('project') === 'true';

const updateprojectRoute = (event) => {
    projectRoute.value = event.detail;
    console.log(projectRoute.value + " hey");
};


onMounted(() => {
    router.afterEach((to) => {
        if (to.name === 'project' || 'contact') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    });
    document.addEventListener('projectRouteUpdate', updateprojectRoute);
});

onUnmounted(() => {
    document.removeEventListener('projectRouteUpdate', updateprojectRoute);
});


</script>
<template>
    <header class=" px-2"
        :style="{ background: mode == 'true' ? '#111' : 'white', borderColor: mode == 'true' ? '#222' : '' }">
        <div class="flex justify-between py-4 border-b border-gray-200">
            <div class="flex items-center">
                <div class="flex pl-1 pr-1 items-center space-x-4 h-12 w-12 rounded-full "
                    :class="mode == 'true' ? 'border border-blue-200' : 'border border-blue-200'">
                    <img v-if="mode != 'true'" src="../assets/logoWhite.png" alt="Logo"
                        class="h-10 w-10 rounded-full" />
                    <img v-else src="../assets/logoBlack.png" alt="Logo" class="h-10 w-10 rounded-full" />
                </div>
                <p class="galada-regular lg:flex standard-color font-light ml-3 mt-2 text-xl"
                    :style="LightModeText(mode)">
                    Mj-WebCraft</p>
            </div>

            <div class="lg:hidden flex  items-center" v-show="projectRoute != true">
                <a @click="togs" v-show="contactRoute != true"
                    class="lg:hidden hover:bg-gray-200 mx-4 rounded-full flex items-center justify-center w-11 h-11">
                    <img src="../assets/sun.png" v-if="mode == 'true'" class="w-10 h-10">
                    <img src="../assets/moon.png" v-else class="w-8 h-8">

                </a>


                <!-- <button @click="toggleMenu" v-if="projectRoute != true" v-show="contactRoute != true"
                    class="text-gray-700 hover:text-blue-600 p-1.5 " :style="LightModeText(mode)">
                    <div v-if="isMenuOpen" class="wave-container   flex items-center justify-center  transform">

                        <BackIcon :mode="mode" :button="getHome" />
                    </div>


                    <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-10">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                    </svg>


                </button> -->
            </div>


            <nav class="hidden lg:flex xl:flex " v-show="contactRoute != true">
                <section class="flex mx-32" v-show="projectRoute != true">
                    <a href="#"
                        class="round-blue hover:bg-gray-200 mx-4 rounded-full flex items-center justify-center w-11 h-11"
                        :style="LightModeText(mode)"> <i class="fas fa-home text-blue-500"
                            :style="{ color: mode != 'true' ? '' : 'black' }"></i>
                    </a>
                    <a href="#about-section" :class="mode == 'true' ? ['hover:bg-gray-800'] : ['hover:bg-gray-200']"
                        class=" mx-4 rounded-full flex items-center justify-center w-11 h-11"
                        :style="LightModeText(mode)">
                        <i class="fas fa-user text-blue-500" :style="LightModeText(mode)"></i>
                    </a>
                    <a href="#project-section" :class="mode == 'true' ? ['hover:bg-gray-800'] : ['hover:bg-gray-200']"
                        class=" mx-4 rounded-full flex items-center justify-center w-11 h-11"
                        :style="LightModeText(mode)">
                        <i class="fas fa-folder text-blue-500" :style="LightModeText(mode)"></i>
                    </a>
                    <a @click="navigateToContactPage"
                        :class="mode == 'true' ? ['hover:bg-gray-800'] : ['hover:bg-gray-200']"
                        class=" mx-4 rounded-full flex items-center justify-center w-11 h-11"
                        :style="LightModeText(mode)">
                        <i class="fas fa-envelope text-blue-500" :style="LightModeText(mode)"></i>
                    </a>
                </section>
                <a @click="togs"
                    class=" hover:bg-gray-200 mx-4 rounded-full flex items-center justify-center w-11 h-11">
                    <span v-show="projectRoute != true">
                        <img src="../assets/sun.png " v-if="mode == 'true'" class="w-10 h-10">
                        <img src="../assets/moon.png" v-else class="w-8 h-8">
                    </span>
                </a>
            </nav>



            <div class="wave-container w-[70px] h-[70px] rounded-full flex items-center justify-center  transform"
                v-if="contactRoute == true">

                <BackIcon :mode="mode" :button="getHome" />

            </div>


            <div class="wave-container w-[70px] h-[70px] rounded-full flex items-center justify-center  transform"
                v-if="projectRoute == true">

                <BackIcon :mode="mode" :button="projectToHome" />

            </div>

        </div>

        <!-- Dropdown menu -->
        <!-- <nav class="grid lg:hidden   fixed top-1/3 left-[-100px] w-[60px]  grid-rows-4 items-center justify-center  rounded-tr-lg rounded-br-lg h-[250px] bg-white shadow-lg border slide-right"
            v-show="isMenuOpen" @click="isMenuOpen = false" v-if="contactRoute != true">
            <a href="#"
                class="block py-2 text-gray-700 hover:text-blue-600 font-medium bg-blue-50 px-2 rounded-lg shadow-sm"
                :style="LightModeText(mode)">

                <HomeIcon />
            </a>
            <a href="#about-section"
                class="block py-2 text-gray-700 hover:text-blue-600 font-medium hover:bg-blue-50 px-2 rounded-lg shadow-sm"
                :style="LightModeText(mode)">
                <AboutIcon />
            </a>
            <a href="#project-section"
                class="block py-2 text-gray-700 hover:text-blue-600 font-medium  hover:bg-blue-50 px-2 rounded-lg shadow-sm"
                :style="LightModeText(mode)">
                <ProjectIcon />


            </a>
            <a @click="navigateToContactPage"
                class=" cursor-pointer block py-2 text-gray-700 hover:text-blue-600 font-medium  hover:bg-blue-50 px-2 rounded-lg shadow-sm"
                :style="LightModeText(mode)">
                <ContactIcon />
            </a>
        </nav> -->
    </header>
</template>
<style>
.galada-regular {
    font-family: "Galada", cursive;
    font-weight: 400;
    font-style: normal;
}
</style>