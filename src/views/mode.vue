<template>
    <main>

        <div class="md:block lg:flex px-2" id="large-media">


            <section class="lg:w-1/2 md:w-full lg:text-left md:text-center sm:text-center text-left pt-2 ">
                <strong class="standardText">
                    <span class="text-blue-500">Welcome</span>, I am web enthusiast.
                </strong>
                <p class="subText mt-8">
                    Let's collaborate to harness
                    the full potential of the digital
                    realm for your success.
                </p>
                <div class="lg:flex md:block items-center justify-center mt-10 w-full">
                    <button
                        class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded  sm:w-100  text-center w-full mb-8 md:mb-8 lg:mb-0">
                        <div class="flex justify-center items-center mx-6">
                            <img src="../assets/contact.png" class="w-5 h-5 mx-1" alt="">
                            <div class="mx-1">Let's talk</div>
                        </div>
                    </button>
                    <ul class="flex w-full justify-center">
                        <a
                            class="round-blue hover:bg-gray-200 mx-4 rounded-full flex items-center justify-center w-11 h-11">
                            <img src="../assets/fb.png" class="w-3 h-5">
                        </a>
                        <a
                            class="round-blue hover:bg-gray-200 mx-4 rounded-full flex items-center justify-center w-11 h-11">
                            <img src="../assets/inta.png" class="w-5 h-5">
                        </a>
                        <a
                            class="round-blue hover:bg-gray-200 mx-4 rounded-full flex items-center justify-center w-11 h-11">
                            <img src="../assets/git.png" class="w-5 h-5">
                        </a>
                    </ul>
                </div>

            </section>
            <section
                class="lg:w-1/2 md:w-full flex lg:justify-end  md:justify-center justify-center my-12 md:my-12 lg:my-0">
                <img src="../assets/image-removebg-preview.png" alt="" width="332" height="319"
                    class="border-b border-white">

            </section>
        </div>

        <aboutComponent id="about-section" class="scroll-animation" style="padding-top:150px"
            :class="{ 'active': isAboutSectionVisible }" />
        <projectComponent id="project-section" class="scroll-animation mb-32" style="padding-top:150px"
            :class="{ 'active': isProjectSectionVisible }" />
    </main>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';
import useScrollAnimation from './scrollAnimation';

const aboutComponent = defineAsyncComponent(() => import('../components/aboutComponent.vue'));
const projectComponent = defineAsyncComponent(() => import('../components/projectComponent.vue'));

const { isVisible: isAboutSectionVisible } = useScrollAnimation('about-section');
const { isVisible: isProjectSectionVisible } = useScrollAnimation('project-section');

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

#large-media {
    margin-top: 150px;
}

@media (max-width: 768px) {

    #large-media {
        margin-top: 120px;
    }
}
</style>
