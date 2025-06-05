<template>
    <div class="md:flex lg:flex items-center justify-center" id="project">
        <section class="lg:w-full md:w-full lg:text-left md:text-center sm:text-center px-2">
            <div class="flex lg:flex text-left md:flex xl:flex w-full justify-between items-center">
                <strong class="text-3xl text-left md:text-4xl lg:text-5xl font-bold text-blue-500 w-1/2">
                    Recent Projects
                </strong>
                <div class="wave-container w-[70px] h-[70px] rounded-full flex items-center justify-center  transform">

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        @click="navigateToProjectView" stroke="currentColor"
                        class="size-10 p-2 border-2 border-blue-500  rounded-full text-blue-500 z-10 cursor-pointer"
                        :class="mode ? '' : 'bg-white'">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="m19.5 4.5-15 15m0 0h11.25m-11.25 0V8.25" />
                    </svg>

                </div>

            </div>
            <div class="mt-8 ">

                <!-- Project 1 -->
                <div class="block lg:flex mb-12">
                    <div class="w-full md:w-full lg:w-1/2">
                        <h3 class="text-xl md:text-2xl font-semibold text-gray-800" :style="LightModeText(mode)">
                            MCM Church</h3>
                        <p class="text-sm md:text-base text-gray-600 mt-2" :style="LightModeText(mode)">
                            MCM church website, provides assistance in
                            post reading and expense tracking. I contribute to design and lead
                            frontend and backend functionalities, striving for user-friendly features and functionality.
                        </p>
                        <div class="my-8">
                            <p class="text-gray-800" :style="LightModeText(mode)">
                                Tools and Frameworks used:
                            </p>
                            <button class="tech-icon my-2 " :style="LightModeText(mode)"><img
                                    src="../assets/projects/vue.png" alt="Vue.js Icon" class="w-6 h-6 mr-2">
                                Vue.js</button>
                            <button class="tech-icon my-2" :style="LightModeText(mode)"><img
                                    src="../assets/projects/tailwind.png" alt="Tailwind CSS Icon" class="w-6 h-6 mr-2">
                                Tailwind CSS</button>
                            <button class="tech-icon my-2" :style="LightModeText(mode)"><img
                                    src="../assets/projects/mysql.png" alt="Mysql Icon" class="w-6 h-6 mr-2">
                                Mysql</button>

                            <button class="tech-icon my-2" :style="LightModeText(mode)"><img
                                    src="../assets/projects/express.png" alt="Express.js Icon" class="w-6 h-6 mr-2">
                                Express.js</button>


                            <button class="tech-icon my-2" :style="LightModeText(mode)"><img
                                    src="../assets/projects/node.png" alt="Node.js Icon" class="w-6 h-6 mr-2">
                                Node.js </button>

                        </div>
                        <div>

                        </div>
                        <span :class="mode ? 'text-white' : ''">Site: <a href="https://mcmc-church.netlify.app/"
                                class="text-blue-500">
                                https://mcmc-church.netlify.app/</a></span>

                    </div>
                    <div
                        class="lg:flex  lg:w-1/2 md:w-full  flex lg:justify-start md:justify-center sm:justify-center justify-left my-12 md:my-12 lg:my-0 mx-auto md:mx-0 lg:ml-4">

                        <iframe width="100%" height="315" class="rounded-lg border"
                            src="https://www.youtube.com/embed/5YDcLRVu80U?si=AuXxty5_AETNGSqT"
                            title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>

                <div class="block lg:flex mb-12">
                    <div class="w-full md:w-full lg:w-1/2">
                        <h3 class="text-xl md:text-2xl font-semibold text-gray-800" :style="LightModeText(mode)">
                            Cinnov8 Advisory Group</h3>
                        <p class="text-sm md:text-base text-gray-600 mt-2" :style="LightModeText(mode)">
                            See a world where people and businesses transform scattered efforts into focused progress,
                            with clarity, purpose and direction.By fostering structured decision-making, we help clients
                            create workplaces where individuals contribute meaningfully, feel valued, and drive real
                            impact—enhancing productivity
                        </p>
                        <div class="my-8">
                            <p class="text-gray-800" :style="LightModeText(mode)">
                                Tools and Frameworks used:
                            </p>
                            <button class="tech-icon my-2 " :style="LightModeText(mode)"><img
                                    src="../assets/projects/nextjs.png" alt="Next.js Icon" class="w-6 h-6 mr-2">
                                Next.js</button>
                            <button class="tech-icon my-2" :style="LightModeText(mode)"><img
                                    src="../assets/projects/tailwind.png" alt="Tailwind CSS Icon" class="w-6 h-6 mr-2">
                                Tailwind CSS</button>



                        </div>
                        <div>

                        </div>
                        <span :class="mode ? 'text-white' : ''">Site: <a href="https://www.cinnov8.com/"
                                class="text-blue-500">
                                https://www.cinnov8.com/</a></span>

                    </div>
                    <div
                        class="lg:flex w-full  lg:w-1/2 md:w-full  flex lg:justify-start md:justify-center sm:justify-center  justify-left my-12 md:my-12 lg:my-0 mx-auto md:mx-0 lg:ml-4">
                        <img v-if="mode != true" src="../assets/cinnov8-desktop.jpg" alt="cinoov8" class="w-full">
                        <img v-else src="../assets/cinnov8-desktop.jpg" alt="cinoov8"
                            class="border-none border-gray-300 rounded-lg w-full" style="background-color: #222;">

                    </div>
                </div>

                <div class="block lg:flex mb-12">
                    <div class="w-full md:w-full lg:w-1/2">
                        <h3 class="text-xl md:text-2xl font-semibold text-gray-800" :style="LightModeText(mode)">
                            Discovery Hospitality</h3>
                        <p class="text-sm md:text-base text-gray-600 mt-2" :style="LightModeText(mode)">
                            Discovery Hospitality is a collection of unique resort destinations that celebrate local
                            culture, comfort, and connection. Each property offers thoughtfully designed experiences
                            that inspire relaxation and discovery, blending warm hospitality with immersive
                            environments.
                            Whether for escape or exploration, Discovery is where unforgettable journeys begin.


                        </p>
                        <div class="my-8">
                            <p class="text-gray-800" :style="LightModeText(mode)">
                                Tools and Frameworks used:
                            </p>
                            <button class="tech-icon my-2 " :style="LightModeText(mode)"><img
                                    src="../assets/projects/nextjs.png" alt="Next.js Icon" class="w-6 h-6 mr-2">
                                Next.js</button>
                            <button class="tech-icon my-2" :style="LightModeText(mode)"><img
                                    src="../assets/projects/tailwind.png" alt="Tailwind CSS Icon" class="w-6 h-6 mr-2">
                                Tailwind CSS</button>



                        </div>
                        <div>

                        </div>
                        <span :class="mode ? 'text-white' : ''">Site: <a href="https://www.discoveryhotels-resorts.com/"
                                class="text-blue-500">
                                https://www.discoveryhotels-resorts.com/</a></span>

                    </div>
                    <div
                        class="lg:flex w-full  lg:w-1/2 md:w-full  flex lg:justify-start md:justify-center sm:justify-center  justify-left my-12 md:my-12 lg:my-0 mx-auto md:mx-0 lg:ml-4">
                        <img v-if="mode != true" src="../assets/discovery.jpg" alt="cinoov8" class="w-full">
                        <img v-else src="../assets/discovery.jpg" alt="cinoov8"
                            class="border-none border-gray-300 rounded-lg w-full" style="background-color: #222;">

                    </div>
                </div>

                <div class="block lg:flex mb-12">
                    <div class="w-full md:w-full lg:w-1/2">
                        <h3 class="text-xl md:text-2xl font-semibold text-gray-800" :style="LightModeText(mode)">
                            City De Mare</h3>
                        <p class="text-sm md:text-base text-gray-600 mt-2" :style="LightModeText(mode)">
                            City de Mare transforms scattered efforts into focused progress. With clarity and purpose, I
                            build digital solutions that foster meaningful work, structured decision-making, and real
                            impact—helping people and businesses thrive.
                            Every project is a step toward creating environments where productivity and purpose align.
                        </p>
                        <div class="my-8">
                            <p class="text-gray-800" :style="LightModeText(mode)">
                                Tools and Frameworks used:
                            </p>
                            <button class="tech-icon my-2 " :style="LightModeText(mode)"><img
                                    src="../assets/projects/nextjs.png" alt="Next.js Icon" class="w-6 h-6 mr-2">
                                Next.js</button>
                            <button class="tech-icon my-2" :style="LightModeText(mode)"><img
                                    src="../assets/projects/tailwind.png" alt="Tailwind CSS Icon" class="w-6 h-6 mr-2">
                                Tailwind CSS</button>



                        </div>
                        <div>

                        </div>
                        <span :class="mode ? 'text-white' : ''">Site: <a href="https://www.citydimare.com/"
                                class="text-blue-500">
                                https://www.citydimare.com/</a></span>

                    </div>
                    <div
                        class="lg:flex w-full  lg:w-1/2 md:w-full  flex lg:justify-start md:justify-center sm:justify-center  justify-left my-12 md:my-12 lg:my-0 mx-auto md:mx-0 lg:ml-4">
                        <img v-if="mode != true" src="../assets/city-de-mare.jpg" alt="cinoov8" class="w-full">
                        <img v-else src="../assets/city-de-mare.jpg" alt="cinoov8"
                            class="border-none border-gray-300 rounded-lg w-full" style="background-color: #222;">

                    </div>
                </div>

                <!-- Project 2 -->
                <div class="block  lg:flex  mb-12">
                    <div class="w-full md:w-full lg:w-1/2">
                        <h3 class="text-xl md:text-2xl font-semibold text-gray-800" :style="LightModeText(mode)">
                            Spot Paradise</h3>
                        <p class="text-sm md:text-base text-gray-600 mt-2" :style="LightModeText(mode)">
                            Spot Paradise's boat reservation feature, simplifies
                            reservation processes for easy booking. I contribute to design and provide frontend and
                            backend support, ensuring a user-friendly experience for seamless reservations.
                        </p>
                        <div class="my-8">
                            <p class="text-gray-800" :style="LightModeText(mode)">
                                Tools and Frameworks used:
                            </p>
                            <button class="tech-icon my-2" :style="LightModeText(mode)"><img
                                    src="../assets/projects/vue.png" alt="Vue.js Icon" class="w-6 h-6 mr-2">
                                Vue.js</button>
                            <button class="tech-icon my-2" :style="LightModeText(mode)"><img
                                    src="../assets/projects/bootstrap.png" alt="Bootstrap CSS Icon"
                                    class="w-6 h-6 mr-2">
                                Bootstrap CSS</button>
                            <button class="tech-icon my-2" :style="LightModeText(mode)"><img
                                    src="../assets/projects/mysql.png" alt="Mysql Icon" class="w-6 h-6 mr-2">
                                Mysql</button>
                            <button class="tech-icon my-2" :style="LightModeText(mode)"><img
                                    src="../assets/projects/express.png" alt="Express.js Icon" class="w-6 h-6 mr-2">
                                Express.js</button>


                            <button class="tech-icon my-2" :style="LightModeText(mode)"><img
                                    src="../assets/projects/node.png" alt="Node.js Icon" class="w-6 h-6 mr-2">
                                Node.js </button>

                        </div>

                    </div>

                    <div
                        class="lg:flex w-full  lg:w-1/2 md:w-full  flex lg:justify-start md:justify-center sm:justify-center  justify-left my-12 md:my-12 lg:my-0 mx-auto md:mx-0 lg:ml-4">
                        <img v-if="mode != true" src="../assets/paradise.png" alt="" class="w-full">
                        <img v-else src="../assets/darkParadise.png" alt=""
                            class="border-none border-gray-300 rounded-lg w-full">

                    </div>
                </div>
                <!-- Add more projects as needed -->
                <div class="block  lg:flex  mb-12">
                    <div class="w-full md:w-full lg:w-1/2">
                        <h3 class="text-xl md:text-2xl font-semibold text-gray-800" :style="LightModeText(mode)">
                            BookMarket</h3>
                        <p class="text-sm md:text-base text-gray-600 mt-2" :style="LightModeText(mode)">
                            BookMarket's inventory sales feature, developed solely by me, streamlines transactions
                            effortlessly. Handling both frontend and backend development, I focus on intuitive design
                            and robust functionality, guaranteeing a smooth user experience and efficient sales
                            management.
                        </p>
                        <div class="my-8">
                            <p class="text-gray-800" :style="LightModeText(mode)">
                                Tools and Frameworks used:
                            </p>
                            <button class="tech-icon my-2" :style="LightModeText(mode)"><img
                                    src="../assets/projects/html.png" alt="Vue.js Icon" class="w-6 h-6 mr-2">
                                Html</button>
                            <button class="tech-icon my-2" :style="LightModeText(mode)"><img
                                    src="../assets/projects/css.png" alt="Bootstrap CSS Icon" class="w-6 h-6 mr-2">
                                CSS</button>
                            <button class="tech-icon my-2" :style="LightModeText(mode)"><img
                                    src="../assets/projects/js.png" alt="Node.js Icon" class="w-6 h-6 mr-2">
                                Javascript </button>

                            <button class="tech-icon my-2" :style="LightModeText(mode)"><img
                                    src="../assets/projects/mysql.png" alt="Mysql Icon" class="w-6 h-6 mr-2">
                                Mysql</button>
                            <button class="tech-icon my-2" :style="LightModeText(mode)"><img
                                    src="../assets/projects/php.png" alt="Express.js Icon" class="w-6 h-6 mr-2">
                                Php PDO</button>

                        </div>

                    </div>

                    <div
                        class="lg:flex w-full  lg:w-1/2 md:w-full  flex lg:justify-start md:justify-center sm:justify-center  justify-left my-12 md:my-12 lg:my-0 mx-auto md:mx-0 lg:ml-4">
                        <img v-if="mode != true" src="../assets/book.png" alt="" class="w-full">
                        <img v-else src="../assets/bookDark.png" alt=""
                            class="border-none border-gray-300 rounded-lg w-full" style="background-color: #222;">

                    </div>
                </div>

            </div>
        </section>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import LightModeText from "./utils/helper.js";
const router = useRouter();

const navigateToProjectView = () => {
    sessionStorage.setItem('project', 'true');

    document.dispatchEvent(new CustomEvent('projectRouteUpdate', { detail: true }));
    router.push('/project');
};

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
.standardText {
    font-size: 1.25rem;
    color: var(--text-color);
}

.standard-color {
    color: #4a90e2;
}

.subText-about {
    font-size: 1rem;
}

/* Style for tech stack icons */
.tech-icon {
    display: inline-flex;
    align-items: center;
    margin-right: 1rem;
    padding: 0.5rem 1rem;
    border: 1px solid #4a90e2;
    border-radius: 0.25rem;
    background-color: transparent;
    color: #4a90e2;
    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease;
}

.tech-icon:hover {
    background-color: #4a90e2;
    color: #fff;
}
</style>