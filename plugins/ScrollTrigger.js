import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);



export default defineNuxtPlugin(nuxtApp =>
    gsap.utils.toArray('#triggerSpan').forEach((span) => {
        ScrollTrigger.create({
            trigger: span,
            start: 'top center',
            toggleClass: 'active',
            markers: true
        })

        ScrollTrigger.refresh() 
    })
    
)