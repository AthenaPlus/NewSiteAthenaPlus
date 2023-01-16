<template>
    <div>
        <Disclosure v-for="vacancy in vacancys" :key="vacancy.index" v-slot="{ open }">
            <DisclosureButton
                class="flex flex-wrap justify-between items-center  w-full border-t-2 border-white  px-4 py-2 text-left  hover:bg-white/10 transition duration-700 ease-in-out ">
                <h2 class="text-[50px] font-normal font_Airborne">{{ vacancy.title }}</h2>
                <h3 class="text-[40px]">{{ vacancy.subTitle }}</h3>
                <ChevronUpIcon :class="open ? 'rotate-180 transform' : ''"
                    class="h-10 w-10 text-gradient transition duration-500 ease-in-out" />
            </DisclosureButton>
            <Transition name="slide-fade">
                <DisclosurePanel class="px-4 py-4 text-sm text-gray-200">
                    <div class="w-full md:max-w-[600px] ml-auto pb-10">
                        <h4 class="text-4xl font-semibold">{{ vacancy.vacancyTitle }}</h4>
                        <p class="text-2xl font-normal py-5">
                            {{ vacancy.vacancyDescription }}
                        </p>
                        <button class="btn-primary hover:btn--shadow ">Подать заявку</button>
                    </div>
                </DisclosurePanel>
            </Transition>
        </Disclosure>
    </div>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { ChevronUpIcon } from '@heroicons/vue/20/solid'

const vacancys = [
    {
        title: 'Дизайн/Ui',
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