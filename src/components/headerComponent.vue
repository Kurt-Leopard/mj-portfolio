<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';


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
    sessionStorage.setItem('contact', 'true'); // Set 'contact' to 'true' as a string
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
            <!-- Right side logo and text -->
            <div class="flex items-center">
                <div class="flex pl-1 pr-1 items-center space-x-4 h-12 w-12 rounded-full "
                    :class="mode == 'true' ? 'border border-blue-200' : 'border border-blue-200'">
                    <img v-if="mode != 'true'" src="../assets/logoWhite.png" alt="Logo" class="h-10 w-10 rounded-full" />
                    <img v-else src="../assets/logoBlack.png" alt="Logo" class="h-10 w-10 rounded-full" />
                </div>
                <p class="galada-regular lg:flex standard-color font-light ml-3 mt-2 text-xl"
                    :style="{ color: mode != 'true' ? '' : 'white' }">
                    Mj-WebCraft</p>
            </div>

            <!-- Menu bar for medium screens and above -->
            <div class="lg:hidden flex  items-center" v-show="projectRoute != true">
                <a @click="togs" v-show="contactRoute != true"
                    class="lg:hidden hover:bg-gray-200 mx-4 rounded-full flex items-center justify-center w-11 h-11">
                    <img src="../assets/sun.png" v-if="mode == 'true'" class="w-10 h-10">
                    <img src="../assets/moon.png" v-else class="w-8 h-8">

                </a>


                <button @click="toggleMenu" v-if="projectRoute != true" v-show="contactRoute != true"
                    class="text-gray-700 hover:text-blue-600 p-1.5 " :style="{ color: mode != 'true' ? '' : 'white' }">
                    <div v-if="isMenuOpen" class="wave-container   flex items-center justify-center  transform">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            @click="getHome" stroke="currentColor"
                            class="size-10 p-2 border-2  rounded-full  z-10 cursor-pointer"
                            :class="mode === 'true' ? 'text-white' : 'bg-white border-blue-500  text-blue-500'">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                        </svg>


                    </div>


                    <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-10">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                    </svg>


                </button>
            </div>


            <nav class="hidden lg:flex xl:flex " v-show="contactRoute != true">
                <section class="flex mx-32" v-show="projectRoute != true">
                    <a href="#"
                        class="round-blue hover:bg-gray-200 mx-4 rounded-full flex items-center justify-center w-11 h-11"
                        :style="{ color: mode != 'true' ? '' : 'white' }"> <i class="fas fa-home text-blue-500"
                            :style="{ color: mode != 'true' ? '' : 'black' }"></i>
                    </a>
                    <a href="#about-section"
                        :class="mode == 'true' ? ['hover:bg-gray-800', 'mx-4', 'rounded-full', 'flex', 'items-center', 'justify-center', 'w-11', 'h-11'] : ['hover:bg-gray-200', 'mx-4', 'rounded-full', 'flex', 'items-center', 'justify-center', 'w-11', 'h-11']"
                        :style="{ color: mode !== 'true' ? '' : 'white' }">
                        <i class="fas fa-user text-blue-500" :style="{ color: mode !== 'true' ? '' : 'white' }"></i>
                    </a>
                    <a href="#project-section"
                        :class="mode == 'true' ? ['hover:bg-gray-800', 'mx-4', 'rounded-full', 'flex', 'items-center', 'justify-center', 'w-11', 'h-11'] : ['hover:bg-gray-200', 'mx-4', 'rounded-full', 'flex', 'items-center', 'justify-center', 'w-11', 'h-11']"
                        :style="{ color: mode != 'true' ? '' : 'white' }"> <i class="fas fa-folder text-blue-500"
                            :style="{ color: mode != 'true' ? '' : 'white' }"></i>
                    </a>
                    <a @click="navigateToContactPage"
                        :class="mode == 'true' ? ['hover:bg-gray-800', 'mx-4', 'rounded-full', 'flex', 'items-center', 'justify-center', 'w-11', 'h-11'] : ['hover:bg-gray-200', 'mx-4', 'rounded-full', 'flex', 'items-center', 'justify-center', 'w-11', 'h-11']"
                        :style="{ color: mode != 'true' ? '' : 'white' }"> <i class="fas fa-envelope text-blue-500"
                            :style="{ color: mode != 'true' ? '' : 'white' }"></i>
                    </a>
                </section>
                <a @click="togs" class=" hover:bg-gray-200 mx-4 rounded-full flex items-center justify-center w-11 h-11">
                    <!-- larger screen -->
                    <span v-show="projectRoute != true">
                        <img src="../assets/sun.png " v-if="mode == 'true'" class="w-10 h-10">
                        <img src="../assets/moon.png" v-else class="w-8 h-8">
                    </span>
                </a>
            </nav>



            <div class="wave-container w-[70px] h-[70px] rounded-full flex items-center justify-center  transform"
                v-if="contactRoute == true">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" @click="getHome"
                    stroke="currentColor" class="size-10 p-2 border-2  rounded-full  z-10 cursor-pointer"
                    :class="mode === 'true' ? 'text-white' : 'bg-white border-blue-500  text-blue-500'">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                </svg>


            </div>


            <div class="wave-container w-[70px] h-[70px] rounded-full flex items-center justify-center  transform"
                v-if="projectRoute == true">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    @click="projectToHome" stroke="currentColor"
                    class="size-10 p-2 border-2  rounded-full  z-10 cursor-pointer"
                    :class="mode === 'true' ? 'text-white' : 'bg-white border-blue-500  text-blue-500'">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                </svg>


            </div>

        </div>

        <!-- Dropdown menu -->
        <nav class="grid lg:hidden   fixed top-1/3 left-[-100px] w-[60px]  grid-rows-4 items-center justify-center  rounded-tr-lg rounded-br-lg h-[250px] bg-white shadow-lg border slide-right"
            v-show="isMenuOpen" @click="isMenuOpen = false" v-if="contactRoute != true">
            <a href="#"
                class="block py-2 text-gray-700 hover:text-blue-600 font-medium bg-blue-50 px-2 rounded-lg shadow-sm"
                :style="{ color: mode != 'true' ? '' : 'white' }">

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
            </a>
            <a href="#about-section"
                class="block py-2 text-gray-700 hover:text-blue-600 font-medium hover:bg-blue-50 px-2 rounded-lg shadow-sm"
                :style="{ color: mode != 'true' ? '' : 'white' }">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg></a>
            <a href="#project-section"
                class="block py-2 text-gray-700 hover:text-blue-600 font-medium  hover:bg-blue-50 px-2 rounded-lg shadow-sm"
                :style="{ color: mode != 'true' ? '' : 'white' }">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
                </svg>

            </a>
            <a @click="navigateToContactPage"
                class=" cursor-pointer block py-2 text-gray-700 hover:text-blue-600 font-medium  hover:bg-blue-50 px-2 rounded-lg shadow-sm"
                :style="{ color: mode != 'true' ? '' : 'white' }"><svg xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
            </a>
        </nav>
    </header>
</template>
<style>
.galada-regular {
    font-family: "Galada", cursive;
    font-weight: 400;
    font-style: normal;
}
</style>