<script setup>
import { ref } from 'vue';

const mode = ref(!!(sessionStorage.getItem("mode") === 'true'));

const downloadStarted = ref(false);


const handleDownload = () => {
    if (!downloadStarted.value) {

        downloadStarted.value = true;


        setTimeout(() => {

            downloadStarted.value = false;

        }, 1000);
    }
};
</script>


<template>
    <div class="grid lg:grid-cols-2  items-center justify-center px-2 lg:px-0">
        <section class="  lg:justify-start md:justify-center justify-center ">
            <img src="../assets/12r JAMANDRE_ MARK ANGELOU O (1) (1).jpg" alt="" width="100%" height="100%"
                class="w-full rounded object-cover hidden lg:block">

        </section>

        <section
            class="w-full flex flex-col items-center justify-center  text-left md:text-center lg:text-left  pt-2 lg:pl-[24px]">

            <strong class="standardText text-left md:text-center lg:text-left w-full">
                <div class="text-blue-500 about-me-heading">About me.</div>
            </strong>
            <p class="mt-8 text-gray-600" :style="{ color: mode ? 'white' : '' }">
                Hi, I'm Mark Angelou Jamandre, an aspiring web developer based in Cebu, Philippines. My passion lies
                in
                crafting meaningful digital experiences through innovative and scalable solutions. I specialize in
                front-end
                development and back-end architecture, and I’m constantly expanding my knowledge to stay at the
                forefront of
                technology.

                My goal is to leverage my expertise to address real-world challenges and create applications that
                enhance
                user experiences and drive impact. I thrive on turning ideas into reality and am committed to
                delivering
                high-quality, user-centric solutions.
            </p>
            <div
                class="lg:flex md:block md:items-center md:justify-center lg:items-start lg:justify-start xl:items-start xl:justify-start mt-10 w-full">
                <button v-if="mode == true"
                    class="border border-blue-500  hover:bg-blue-600 text-white hover:text-white  font-bold py-2 px-4 rounded  sm:w-100 md:w-1/3 lg:w-1/2 xl:w-1/2 w-full  text-center  mb-8 md:mb-8 lg:mb-0">
                    <a href="../assets/resume.pdf" id="downloadLink" download="resume.pdf" @click="handleDownload">
                        <div class="flex justify-center items-center mx-6">
                            <i class="fas fa-download mx-1"></i>
                            <div v-if="!downloadStarted" class="mx-1">Download CV</div>
                            <div v-else class="mx-1">Loading...</div>
                        </div>
                    </a>
                </button>
                <button v-else
                    class="border border-blue-500  hover:bg-blue-600 text-gray-600 hover:text-white  font-bold py-2 px-4 rounded  sm:w-100 md:w-1/3 lg:w-1/2 xl:w-1/2 w-full  text-center  mb-8 md:mb-8 lg:mb-0">
                    <a href="../assets/resume.pdf" id="downloadLink" download="resume.pdf" @click="handleDownload">
                        <div class="flex justify-center items-center mx-6 ">
                            <i class="fas fa-download mx-1"></i>
                            <div v-if="!downloadStarted" class="mx-1">Download CV</div>
                            <div v-else class="mx-1">Loading...</div>
                        </div>
                    </a>
                </button>
            </div>

        </section>
    </div>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Roboto:wght@400;700&display=swap');

.about-me-heading {
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    font-size: 2rem;
}

.about-me-text {
    font-weight: 400;
    font-size: 1rem;
}
</style>