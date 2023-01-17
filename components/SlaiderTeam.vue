<template>
    <swiper @swiper="onSwiper" @slideChange="onSlideChange" :breakpoints="{
      '640': {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      '768': {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      '1024': {
        slidesPerView: 3,
        spaceBetween: 50,
      },
      '1535': {
        slidesPerView: 4,
        spaceBetween: 50,
      }
    }" class="flex flex-wrap -m-4 border-b-2 border-white/70 pt-[50px] pb-10 swiper">
        <swiper-slide v-for="employee in employees" :key="employee.index" class="p-4 ">
            <div class="h-full flex flex-col items-center text-center">
                <img alt="team" class="flex-shrink-0 rounded-lg w-full h-[300px] object-cover object-center mb-4"
                    :src="employee.urlImg">
                <div class="w-full">
                    <h2 class="title-font font-medium text-lg text-white">{{ employee.name }}</h2>
                    <h3 class="text-gray-500 mb-3">{{ employee.job }}</h3>
                    <p class="mb-4">
                        {{ employee.description }}
                    </p>
                    <span class="inline-flex">
                        <a class="text-gray-500">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                            </svg>
                        </a>
                        <a class="ml-2 text-gray-500">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                <path
                                    d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z">
                                </path>
                            </svg>
                        </a>
                        <a class="ml-2 text-gray-500">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                <path
                                    d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z">
                                </path>
                            </svg>
                        </a>
                    </span>
                </div>
            </div>
        </swiper-slide>
    </swiper>
</template>

<script setup>
const employees = [
    {
        name: 'Санжар',
        job: 'Генеральный Директор',
        description: 'Основатель Веб-Студии. Универсал. Фанат Web-Production.',
        urlImg: 'https://dummyimage.com/200x200'
    },
    {
        name: 'Даурен',
        job: 'Креативный Директор',
        description: 'Со-Основатель Веб-Студии. Дизайнер. Стоял за дизайном крупных финтехов.',
        urlImg: 'https://dummyimage.com/200x200'
    },
    {
        name: 'Павел',
        job: 'Ведущий-Разработчик',
        description: 'Гуру Frontend-разработки со стажем более 20 лет.',
        urlImg: 'https://dummyimage.com/200x200'
    },
    {
        name: 'Али-Султан',
        job: 'Маркетолог',
        description: 'Digital-Гений, оптимизирует рекламу любого направления.',
        urlImg: 'https://dummyimage.com/200x200'
    },
    {
        name: 'Сотрудник 5',
        job: 'Дизайн',
        description: 'Holisticly negotiate reliable services without.',
        urlImg: 'https://dummyimage.com/200x200'
    },
    {
        name: 'Сотрудник 6',
        job: 'Дизайн',
        description: 'Objectively impact magnetic core competencies.',
        urlImg: 'https://dummyimage.com/200x200'
    },
    {
        name: 'Сотрудник 7',
        job: 'Дизайн',
        description: 'Progressively synergize seamless initiatives vis-a-vis.',
        urlImg: 'https://dummyimage.com/200x200'
    },
    {
        name: 'Сотрудник 8',
        job: 'Дизайн',
        description: 'Rapidiously disseminate scalable methodologies via.',
        urlImg: 'https://dummyimage.com/200x200'
    },
    {
        name: 'Сотрудник 9',
        job: 'Маркетолог',
        description: 'Continually evisculate intermandated communities through.',
        urlImg: 'https://dummyimage.com/200x200'
    }
]
</script>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper styles
import 'swiper/css';


export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        const onSwiper = (swiper) => {
            console.log(swiper);

        };
        const onSlideChange = () => {
            console.log('slide change');
        };

        return {

            onSwiper,
            onSlideChange,
        };
    },
};

</script>

<style lang="scss" scoped>

</style>