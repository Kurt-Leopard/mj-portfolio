<template>
    <div>
        <div class="mt-32 mb-24  md:mt-0 lg:mt-0 xl:mt-0 block md:flex lg:flex xl:flex large-con  p-8 rounded-lg"
            :class="mode !== true ? 'bg-gray-50' : ''">

            <div class="w-full lg:w-1/2 xl:w-1/2">
                <h1 class="text-4xl sm:text-5xl text-blue-500 dark:text-white font-extrabold tracking-tight">
                    Let's talk
                </h1>
                <p class="text-normal text-lg sm:text-2xl font-medium text-gray-600 dark:text-gray-400 mt-2" :style="LightModeText(mode)">
                    Tell me about your project
                </p>

                <div class="flex items-center mt-8 text-gray-600 dark:text-gray-400">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                        viewBox="0 0 24 24" class="w-8 h-8 text-gray-500" :style="LightModeText(mode)">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div class="ml-4 text-md tracking-wide font-semibold w-full" :style="LightModeText(mode)">
                        P. Rodriguez St., Gun-ob, Lapu-Lapu City
                    </div>
                </div>

                <div class="flex items-center mt-4 text-gray-600 dark:text-gray-400">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                        viewBox="0 0 24 24" class="w-8 h-8 text-gray-500" :style="LightModeText(mode)">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div class="ml-4 text-md tracking-wide font-semibold w-40" :style="LightModeText(mode)">
                        +63 9420587551
                    </div>
                </div>

                <div class="flex items-center mt-2 text-gray-600 dark:text-gray-400">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                        viewBox="0 0 24 24" class="w-8 h-8 text-gray-500" :style="LightModeText(mode)">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div class="ml-4 text-md tracking-wide font-semibold w-40" :style="LightModeText(mode)">
                        markangeloujamandre@gmail.com
                    </div>
                </div>
            </div>

            <form class="w-full lg:w-1/2 xl:w-1/2 mt-7 flex flex-col items-center justify-center" @submit.prevent="submit">
                <div class="flex flex-col w-full">
                    <label for="name" class="hidden">Full Name</label>
                    <input type="name" name="name" v-model="name" id="name" placeholder="Full Name" required
                        class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                        :style="{ background: mode == true ? '#222' : '' }">
                </div>

                <div class="flex flex-col mt-2 w-full">
                    <label for="email" class="hidden">Email</label>
                    <input type="email" name="email" v-model="email" required id="email" placeholder="Email"
                        class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                        :style="{ background: mode == true ? '#222' : '' }">
                </div>

                <div class="flex flex-col mt-2 w-full">
                    <label for="tel" class="hidden">Number</label>
                    <textarea v-model="message" placeholder="Message" required
                        class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                        :style="{ background: mode == true ? '#222' : '' }" />
                </div>

                <button
                    class="w-full md:w-32 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg mt-3  transition ease-in-out duration-300">
                    {{ msg }}
                </button>
            </form>

            <div v-if="success" class="alert-container">
                <div
                    class="bg-green-100 border border-green-400 text-green-700 w-full px-4 py-3 rounded relative mt-4 animate-slide-in">
                    <strong class="font-bold">Success!</strong>
                    <span class="block sm:inline">Your action was successful.</span>
                </div>
            </div>

        </div>
        <iframe class="rounded-lg mb-32"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3925.4225374516905!2d123.9455148760301!3d10.30802936765655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a9994761bad12f%3A0x9f67fa0467a9fab8!2sPalalay%20Compound!5e0!3m2!1sen!2sph!4v1738549570010!5m2!1sen!2sph"
            width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
        <div id="toast-danger" v-if="isError"
            class="flex items-center w-full z-[101] fixed top-10 left-10  max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
            role="alert">
            <div
                class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200">
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                    viewBox="0 0 20 20">
                    <path
                        d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z" />
                </svg>
                <span class="sr-only">Error icon</span>
            </div>
            <div class="ml-3 text-sm font-normal">{{ errorMessage ? errorMessage : 'Something went wrong!.' }}</div>
            <button type="button"
                class="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                data-dismiss-target="#toast-danger" aria-label="Close">
                <span class="sr-only">Close</span>
                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
            </button>
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
const isError = ref(false);
const mode = ref(sessionStorage.getItem('mode') === 'true');
import LightModeText from "./utils/helper.js";

onMounted(() => {
    updateMode(sessionStorage.getItem('mode') === 'true');

    document.addEventListener('modeChange', (event) => {
        updateMode(event.detail === 'true');
    });
});

function updateMode(modeValue) {
    mode.value = modeValue;
}
let msg = ref("Submit");
const success = ref(false);
const errorMessage = ref(null);
const name = ref('');
const email = ref('');
const message = ref('');

const setTimeLimit = (type) => {
    if (type === 'error') {
        setTimeout(() => {
            isError.value = false;
            errorMessage.value = null;
        }, 3000);
    } else {
        setTimeout(() => {
            success.value = false;
            msg.value = null;
        }, 3000);
    }
};
const submit = async () => {
    msg.value = "Sending";

    const formData = {
        name: name.value,
        email: email.value,
        message: message.value
    };


    try {

        const response = await fetch('https://mjwebcraft-contact.onrender.com/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });


        if (response.ok) {
            msg.value = "Submit";
            success.value = true;
            setTimeLimit('success');

            name.value = '';
            email.value = '';
            message.value = '';
        } else {


            if (response.status === 429) {

                const errorText = await response.text();
                if (errorText.includes("You have exceeded the 5 requests per day limit.")) {
                    errorMessage.value = "You have exceeded the requests limit.";
                    isError.value = true;
                    setTimeLimit('error');
                    msg.value = "Submit";
                } else {
                    msg.value = "Submit";
                }
            } else {
                msg.value = "Submit";
            }
        }
    } catch (error) {
        console.log("err", error.status);
        isError.value = true;
        setTimeLimit('error');
        msg.value = "Submit";
        console.error("Error sending request:", error);
    }
};



</script>
<style scoped>
.large-con {
    margin-top: 150px;
}

.alert-container {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: flex-end;
    padding: 20px;
    z-index: 9999;
}

.animate-slide-in {
    animation: slideIn 0.5s ease forwards;
}

@keyframes slideIn {
    from {
        transform: translateY(-100%);
    }

    to {
        transform: translateY(0);
    }
}
</style>