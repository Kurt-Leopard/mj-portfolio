<template>
    <main>
        <div class="grid lg:grid-cols-2 items-center justify-center px-2 lg:px-2 xl:p-0"
            :class="showLazy ? '' : 'mb-[280px]'" id="dashboard">
            <section class="w-full lg:text-left md:text-center sm:text-center text-left pt-2 lg:pr-[24px]">

                <strong class="standardText  text-white">
                    <span class="text-blue-500">Welcome</span>, I am web enthusiast.
                </strong>
                <p class="subText mt-8" style="color: white; ">
                    Let's collaborate to harness
                    the full potential of the digital
                    realm for your success.
                </p>
                <div class="lg:flex md:block items-center justify-center mt-10 w-full">
                    <button @click="navigateToContactPage"
                        class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded  sm:w-100 md:w-1/3 lg:w-full xl:w-full w-full  text-center  mb-8 md:mb-8 lg:mb-0">
                        <div class="flex justify-center items-center mx-6">
                            <img src="../assets/contact.png" class="w-5 h-5 mx-1" alt="">
                            <div class="mx-1">Let's talk</div>

                        </div>
                    </button>
                    <ul class="flex w-full justify-center">
                        <a href="https://www.facebook.com/angelou.jamandre/"
                            class="round-blue hover:bg-gray-200 mx-4 rounded-full flex items-center justify-center w-11 h-11">
                            <img src="../assets/fb.png" class="w-3 h-5">
                        </a>
                        <a href="https://www.instagram.com/markangeloujamandre/"
                            class="round-blue hover:bg-gray-200 mx-4 rounded-full flex items-center justify-center w-11 h-11">
                            <img src="../assets/inta.png" class="w-5 h-5">
                        </a>
                        <a href="https://github.com/Kurt-Leopard"
                            class="round-blue hover:bg-gray-200 mx-4 rounded-full flex items-center justify-center w-11 h-11">
                            <img src="../assets/git.png" class="w-5 h-5">
                        </a>
                    </ul>
                </div>

            </section>

            <section class="w-full flex lg:justify-end  md:justify-center justify-center my-12 md:my-12 lg:my-0 ">
                <img src="../assets/72444857_259190555038797_268403930940047360_n.jpg" alt="" width="100%" height="100%"
                    class="w-full rounded object-cover">

            </section>
        </div>

        <aboutComponent id="about-section" class="scroll-animation" v-if="showLazy"
            :class="{ 'active': isAboutSectionVisible, 'out': !isAboutSectionVisible }" style="padding-top: 150px" />

        <projectComponent id="project-section" class="scroll-animation mb-32" style="padding-top: 150px" v-if="showLazy"
            :class="{ 'active': isProjectSectionVisible, 'out': !isProjectSectionVisible }" />

    </main>
</template>

<script setup>
import useScrollAnimation from './scrollAnimation';
import aboutComponent from '../components/aboutComponent.vue';

import projectComponent from '../components/projectComponent.vue';

const { isVisible: isAboutSectionVisible } = useScrollAnimation('about-section');
const { isVisible: isProjectSectionVisible } = useScrollAnimation('project-section');

import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();

const mode = ref(!!(sessionStorage.getItem("mode") === 'true'));

const navigateToContactPage = () => {
    sessionStorage.setItem('contact', 'true');
    document.dispatchEvent(new CustomEvent('contactRouteUpdate', { detail: true }));
    router.push('/contact');
};

import { onMounted, onUnmounted } from 'vue';

const showLazy = ref(false);

const handleMouseEnter = () => {
    showLazy.value = true;
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
<style scoped>
.scroll-animation {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.5s ease-out, transform 0.5s ease-out;
}

.scroll-animation.active {
    opacity: 1;
    transform: translateY(0px);
}

#dashboard {
    padding-top: 180px;
}

@media (max-width: 768px) {

    #dashboard {
        padding-top: 120px;
    }
}
</style>
