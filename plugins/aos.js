import { defineNuxtPlugin } from '#app'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default defineNuxtPlugin((nuxtApp) => {
    if(typeof window !== 'undefined') {
        useNuxtApp.AOS = AOS.init({
            easing: 'ease-in-out',
            once: false,
        });
    }
});