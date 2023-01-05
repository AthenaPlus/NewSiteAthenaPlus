<template>
    <section class="text-white body-font">
        <div class="container mx-auto px-5 py-24">
            <div class="flex flex-wrap flex-col md:flex-row items-center justify-between">
                <h1 class="text-[66px] mr-auto">Blog!</h1>
                <div class="flex flex-wrap gap-4 font_Airborne">
                    <buton class="text-lg p-[15px] border-2 border-white rounded-full">все</buton>
                    <buton class="text-lg p-[15px] border-2 border-white rounded-full">новости</buton>
                    <buton class="text-lg p-[15px] border-2 border-white rounded-full">статьи</buton>
                    <buton class="text-lg p-[15px] border-2 border-white rounded-full">советы</buton>
                </div>
            </div>
            <div class="mb-[85px]">
                <p class="max-w-5xl text-xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo
                </p>
            </div>
            <!-- Контейнер контент Блога -->
            <div v-for="Post in Posts" :key="Post.index" class="flex flex-wrap place-content-between gap-[34px] border-t border-white/70 pt-[50px] pt-6 mb-[60px]">
                <div class="">
                    <img :src="Post.urlImg" alt="">
                </div>
                <div class="flex flex-col">
                    <p class="max-w-2xl">
                        {{  Post.description  }}
                    </p>
                    <div class="mt-auto">
                        <span class="">
                            {{  Post.date  }}
                        </span>
                    </div>
                </div>
                <div class="">
                    <button class="">
                        <IconArrowright class="w-[40px]" />
                    </button>
                </div>

            </div>
        </div>
    </section>
</template>

<script setup>
import IconArrowright from '~/assets/icons/arrow__right.svg'

const Posts = [
    {
        urlImg: '/img/blog1.jpg',
        description: '1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        date: '31.12.2022'
    },
    {
        urlImg: '/img/blog2.jpg',
        description: '2 Collaboratively actualize ubiquitous paradigms rather than high-payoff resources. Credibly aggregate standards compliant outsourcing vis-a-vis extensible content. Professionally iterate visionary technology vis-a-vis interdependent web-readiness. Rapidiously disintermediate high-quality data via 2.0 communities. Dramatically network mission-critical portals and progressive mindshare. Professionally maintain superior vortals vis-a-vis go forward e-markets. Objectively syndicate worldwide functionalities whereas functional methodologies. Authoritatively productivate premium mindshare rather',
        date: '31.12.2022'
    },
    {
        urlImg: '/img/blog3.jpg',
        description: '3 Proactively transition mission-critical e-services after maintainable deliverables. Completely monetize end-to-end infomediaries with fully tested e-services. Enthusiastically restore cross-media deliverables and error-free ROI. Quickly create accurate infomediaries before out-of-the-box deliverables. Credibly negotiate backward-compatible products.',
        date: '31.12.2022'
    },
    {
        urlImg: '/img/blog1.jpg',
        description: '4 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        date: '31.12.2022'
    },
    {
        urlImg: '/img/blog2.jpg',
        description: '5 Collaboratively actualize ubiquitous paradigms rather than high-payoff resources. Credibly aggregate standards compliant outsourcing vis-a-vis extensible content. Professionally iterate visionary technology vis-a-vis interdependent web-readiness. Rapidiously disintermediate high-quality data via 2.0 communities. Dramatically network mission-critical portals and progressive mindshare. Professionally maintain superior vortals vis-a-vis go forward e-markets. Objectively syndicate worldwide functionalities whereas functional methodologies. Authoritatively productivate premium mindshare rather',
        date: '31.12.2022'
    },
    {
        urlImg: '/img/blog3.jpg',
        description: '6 Proactively transition mission-critical e-services after maintainable deliverables. Completely monetize end-to-end infomediaries with fully tested e-services. Enthusiastically restore cross-media deliverables and error-free ROI. Quickly create accurate infomediaries before out-of-the-box deliverables. Credibly negotiate backward-compatible products.',
        date: '31.12.2022'
    },
    {
        urlImg: '/img/blog1.jpg',
        description: '7 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        date: '31.12.2022'
    },
    {
        urlImg: '/img/blog2.jpg',
        description: '8 Collaboratively actualize ubiquitous paradigms rather than high-payoff resources. Credibly aggregate standards compliant outsourcing vis-a-vis extensible content. Professionally iterate visionary technology vis-a-vis interdependent web-readiness. Rapidiously disintermediate high-quality data via 2.0 communities. Dramatically network mission-critical portals and progressive mindshare. Professionally maintain superior vortals vis-a-vis go forward e-markets. Objectively syndicate worldwide functionalities whereas functional methodologies. Authoritatively productivate premium mindshare rather',
        date: '31.12.2022'
    },
    {
        urlImg: '/img/blog3.jpg',
        description: '9 Proactively transition mission-critical e-services after maintainable deliverables. Completely monetize end-to-end infomediaries with fully tested e-services. Enthusiastically restore cross-media deliverables and error-free ROI. Quickly create accurate infomediaries before out-of-the-box deliverables. Credibly negotiate backward-compatible products.',
        date: '31.12.2022'
    },
    
]
</script>

<style scoped>


</style> 