import { ref, onMounted, onUnmounted } from 'vue';

export default function useScrollAnimation(elementId) {
    const isVisible = ref(false);
    const lastScrollPosition = ref(window.pageYOffset);

    const handleScroll = () => {
        const element = document.getElementById(elementId);
        if (!element) return;

        const elementPosition = element.getBoundingClientRect().top;
        const currentScrollPosition = window.pageYOffset;

        if (currentScrollPosition > lastScrollPosition.value) {
            isVisible.value = elementPosition < window.innerHeight * 0.75;
        } else {
            isVisible.value = elementPosition < window.innerHeight * 0.5;
        }

        lastScrollPosition.value = currentScrollPosition;
    };

    onMounted(() => {
        window.addEventListener('scroll', handleScroll);
    });

    onUnmounted(() => {
        window.removeEventListener('scroll', handleScroll);
    });

    return { isVisible };
}
