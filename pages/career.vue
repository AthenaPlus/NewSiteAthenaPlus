<template>
    <section class="text-white body-font">
        <div class="container flex flex-wrap px-5 py-24 mx-auto">
            <div class="w-full md:w-1/2 mb-10 md:mb-0">
                <h1 class="sticky top-20 text-4xl md:text-6xl lg:text-[66px]">Построй карьеру вместе с Athena Plus</h1>
            </div>
            <div class="w-full md:w-1/2">
                <img src="/img/career.png" alt="" class="max-w-full">
                <p class="my-4 max-w-[600px]">
                    Athena Plus это Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <button class="btn-primary hover:btn--shadow">Подать заявку</button>
            </div>
        </div>
        <div class="container px-5 py-24 mx-auto">
            <div class="w-full px-4 pt-16">
                <div class="mx-auto w-full p-2">
                    <Disclosure v-for="vacancy in vacancys" :key="vacancy.index" v-slot="{ open }">
                        <DisclosureButton
                            class="flex flex-wrap justify-between items-center  w-full border-t-2 border-white  px-4 py-2 text-left  hover:bg-white/10 transition duration-700 ease-in-out ">
                            <h2 class="text-[50px] font-normal font_Airborne">{{  vacancy.title  }}</h2>
                            <h3 class="text-[40px]">{{ vacancy.subTitle }}</h3>
                            <ChevronUpIcon :class="open ? 'rotate-180 transform' : ''" class="h-10 w-10 text-gradient transition duration-500 ease-in-out" />
                        </DisclosureButton>
                        <Transition name="slide-fade">
                            <DisclosurePanel
                                class="px-4 pt-4 pb-2 text-sm text-gray-200">
                                <div class="w-full md:max-w-[600px] ml-auto">
                                    <h4 class="text-4xl font-semibold mb-6">{{  vacancy.vacancyTitle  }}</h4>
                                    <p class="text-2xl font-normal">
                                        {{ vacancy.vacancyDescription }}
                                    </p>
                                </div>
                            </DisclosurePanel>
                        </Transition>
                    </Disclosure>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
    import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
    import { ChevronUpIcon } from '@heroicons/vue/20/solid'

    const vacancys = [
        {
            title: 'Дизайн/UX',
            subTitle: '2 открытых вакансии',
            vacancyTitle: 'UI - Дизайн',
            vacancyDescription: 'Proactively e-enable customer directed e-business vis-a-vis low-risk high-yield synergy. Distinctively empower proactive leadership and flexible internal or "organic" sources. Enthusiastically target an.'
        },
        {
            title: 'дизайн/ux',
            subTitle: '3 открытых вакансии',
            vacancyTitle: 'UX - Дизайнер',
            vacancyDescription: 'Rapidiously strategize process-centric supply chains vis-a-vis long-term high-impact bandwidth. Collaboratively parallel task go forward customer service through sticky process improvements. Dynamically morph.'
        },
        {
            title: 'Маркетолог',
            subTitle: '1 открытых вакансии',
            vacancyTitle: 'Продажа услуг',
            vacancyDescription: 'Energistically reinvent reliable leadership rather than collaborative partnerships. Competently exploit highly efficient opportunities whereas multimedia based ideas. Assertively utilize global potentialities with.'
        },
        {
            title: 'Програмист',
            subTitle: '4 открытых вакансии',
            vacancyTitle: 'Web Developer',
            vacancyDescription: 'Objectively fashion 24/7 solutions via enterprise-wide markets. Compellingly morph B2B catalysts for change after collaborative infrastructures. Dramatically generate multidisciplinary customer service whereas.'
        },
    ]

</script>

<style scoped>
/*
  Enter and leave animations can use different
  durations and timing functions.
*/
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

.text-gradient {
    background: -webkit-linear-gradient(#FCB040, #FF2BFF);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
</style>