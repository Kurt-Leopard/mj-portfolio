<script setup>
import { ref } from 'vue';

const mode = ref(!!(sessionStorage.getItem("mode") === 'true'));
</script>

<template>
    <!-- component -->
    <section>
        <div class="py-16 my-32 mx-auto px-2 lg:px-0 xl:px-0">
            <div class="mx-auto  max-w-6xl text-gray-500">
                <div class="text-center">
                    <h2 class="text-3xl text-blue-600 dark:text-white font-semibold about-me-heading "
                        :style="{ color: mode ? 'white' : ' #4a90e2' }">Sample Projects</h2>
                    <p class="mt-6 text-gray-700 dark:text-gray-500" :style="{ color: mode ? 'white' : '' }">Exploring
                        innovation and creativity through my sample projects.</p>
                </div>
                <!-- start box -->
                <div class="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-3 ">
                    <div :style="{ backgroundColor: mode ? '#2b2b2b' : 'white', border: mode ? '1px solid #2b2b2b' : '' }"
                        class="relative group overflow-hidden  hover:shadow p-8 rounded-xl bg-white border border-gray-200 dark:border-gray-800 dark:bg-gray-900">
                        <div aria-hidden="true"></div>

                        <div class="relative">
                            <div>
                                <img v-if="mode" src="../assets/darkmcmc.png" alt="" class=" rounded-lg" width="500"
                                    height="500">
                                <img v-else src="../assets/mcmc.png" alt="" width="500" height="500">
                            </div>

                            <div class="flex justify-between items-center gap-3 -mb-8 py-4 dark:border-gray-800  ">
                                <p class="text-blue-600 font-bold" :style="{ color: mode ? 'white' : '#555' }">MCM Church
                                </p>
                                <a href="https://github.com/Kurt-Leopard"
                                    class=" group flex items-center rounded-xl disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 size-8 justify-center">
                                    <svg class="size-5" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
                                        viewBox="0 0 24 24">
                                        <path fill="currentColor"
                                            d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2">
                                        </path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <!--  -->
                    <div :style="{ backgroundColor: mode ? '#2b2b2b' : 'white', border: mode ? '1px solid #2b2b2b' : '' }"
                        class="relative group overflow-hidden hover:shadow p-8 rounded-xl bg-white border border-gray-200 dark:border-gray-800 dark:bg-gray-900">
                        <div aria-hidden="true"></div>
                        <div class="relative">
                            <div>
                                <img v-if="mode" src="../assets/darkParadise.png" alt="" class=" rounded-lg" width="500"
                                    height="500">
                                <img v-else src="../assets/paradise.png" alt="" width="500" height="500">
                            </div>
                            <div class="flex justify-between items-center gap-3 -mb-8 py-4 dark:border-gray-800  ">
                                <p class="text-blue-600 font-bold" :style="{ color: mode ? 'white' : ' #555' }">Spot
                                    Paradise
                                </p>
                                <a href="https://github.com/Kurt-Leopard"
                                    class=" group flex items-center rounded-xl disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 size-8 justify-center">
                                    <svg class="size-5" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
                                        viewBox="0 0 24 24">
                                        <path fill="currentColor"
                                            d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2">
                                        </path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <!--  -->
                    <div :style="{ backgroundColor: mode ? '#2b2b2b' : 'white', border: mode ? '1px solid #2b2b2b' : '' }"
                        class="relative group overflow-hidden p-8 hover:shadow rounded-xl bg-white border border-gray-200 dark:border-gray-800 dark:bg-gray-900">
                        <div aria-hidden="true"></div>
                        <div class="relative">
                            <div>
                                <img v-if="mode" src="../assets/bookDark.png" alt="" class=" rounded-lg" width="500"
                                    height="500">
                                <img v-else src="../assets/book.png" alt="" width="500" height="500">
                            </div>
                            <div class="flex justify-between items-center gap-3 -mb-8 py-4 dark:border-gray-800  ">
                                <p class="text-blue-600 font-bold" :style="{ color: mode ? 'white' : ' #555' }">BookMarket
                                </p>
                                <a href="https://github.com/Kurt-Leopard"
                                    class=" group flex items-center rounded-xl disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 size-8 justify-center">
                                    <svg class="size-5" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
                                        viewBox="0 0 24 24">
                                        <path fill="currentColor"
                                            d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2">
                                        </path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <!--  -->
                    <div :style="{ backgroundColor: mode ? '#2b2b2b' : 'white', border: mode ? '1px solid #2b2b2b' : '' }"
                        class="relative group overflow-hidden hover:shadow p-8 rounded-xl bg-white border border-gray-200 dark:border-gray-800 dark:bg-gray-900">
                        <div aria-hidden="true"></div>
                        <div class="relative">
                            <div>
                                <img v-if="mode" src="../assets/darkportfolio.png" alt="" class=" rounded-lg" width="500"
                                    height="500">
                                <img v-else src="../assets/port.png" alt="" width="500" height="500">
                            </div>
                            <div class="flex justify-between items-center gap-3 -mb-8 py-4 dark:border-gray-800  ">
                                <p class="text-blue-600 font-bold" :style="{ color: mode ? 'white' : ' #555' }">First
                                    Portfolio
                                </p>
                                <a href="https://github.com/Kurt-Leopard"
                                    class=" group flex items-center rounded-xl disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 size-8 justify-center">
                                    <svg class="size-5" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
                                        viewBox="0 0 24 24">
                                        <path fill="currentColor"
                                            d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2">
                                        </path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <!--  -->
                    <div :style="{ backgroundColor: mode ? '#2b2b2b' : 'white', border: mode ? '1px solid #2b2b2b' : '' }"
                        class="relative group overflow-hidden hover:shadow p-8 rounded-xl bg-white border border-gray-200 dark:border-gray-800 dark:bg-gray-900">
                        <div aria-hidden="true"></div>
                        <div class="relative">
                            <div>
                                <img v-if="mode" src="../assets/darksaving.png" alt="" class=" rounded-lg" width="500"
                                    height="500">
                                <img v-else src="../assets/saving.png" alt="" width="500" height="500">
                            </div>
                            <div class="flex justify-between items-center gap-3 -mb-8 py-4 dark:border-gray-800  ">
                                <p class="text-blue-600 font-bold" :style="{ color: mode ? 'white' : ' #555' }">S-bank
                                </p>
                                <a href="https://github.com/Kurt-Leopard"
                                    class=" group flex items-center rounded-xl disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 size-8 justify-center">
                                    <svg class="size-5" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
                                        viewBox="0 0 24 24">
                                        <path fill="currentColor"
                                            d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2">
                                        </path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <!--  -->
                    <div :style="{ backgroundColor: mode ? '#2b2b2b' : 'white', border: mode ? '1px solid #2b2b2b' : '' }"
                        class="relative group overflow-hidden hover:shadow p-8 rounded-xl bg-white border border-gray-200 dark:border-gray-800 dark:bg-gray-900">
                        <div aria-hidden="true"></div>
                        <div class="relative">
                            <div>
                                <img v-if="mode" src="../assets/darkInventory.png" alt="" class=" rounded-lg" width="500"
                                    height="500">
                                <img v-else src="../assets/Inventory.png" alt="" width="500" height="500">
                            </div>
                            <div class="flex justify-between items-center gap-3 -mb-8 py-4 dark:border-gray-800  ">
                                <p class="text-blue-600 font-bold" :style="{ color: mode ? 'white' : ' #555' }">Inventory
                                    Sales
                                </p>
                                <a href="https://github.com/Kurt-Leopard"
                                    class=" group flex items-center rounded-xl disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 size-8 justify-center">
                                    <svg class="size-5" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
                                        viewBox="0 0 24 24">
                                        <path fill="currentColor"
                                            d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2">
                                        </path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped>
.about-me-heading {
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    font-size: 2rem;
}
</style>