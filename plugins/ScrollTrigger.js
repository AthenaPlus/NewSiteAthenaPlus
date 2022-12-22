import {
	gsap
} from "gsap";
import {
	ScrollTrigger
} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);




export default defineNuxtPlugin(nuxtApp =>
	// Doing something with nuxtApp
	gsap.utils.toArray('#triggerSpan').forEach((span) => {
		ScrollTrigger.create({
			trigger: span,
			start: 'top 600',
			toggleClass: 'active',
			markers: true
		})
	})
)