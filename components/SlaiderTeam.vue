<template>
    <swiper @swiper="onSwiper" @slideChange="onSlideChange" :grabCursor="true" :breakpoints="{
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
    }"
    :pagination="{
      dynamicBullets: true,
    }"
    :modules="modules"
     class="flex flex-wrap -m-4 border-b-2 border-white/70 pt-[50px] pb-10 swiper">
        <swiper-slide v-for="employee in employees" :key="employee.index" class="p-4 ">
            <div class="h-full flex flex-col items-center text-center face">
                <div class="relative overflow-hidden h-[300px]  mb-4">
                    <div class="absolute bg-pink-500 rounded-lg bg-center bg-no-repeat bg--face" :class="employee.bgImg"></div>
                    <img alt="team" class="flex-shrink-0 rounded-lg w-full h-full object-cover object-center "
                    :src="employee.urlImg">
                </div>
                <div class="w-full">
                    <h2 class="title-font font-medium text-lg text-white">{{ employee.name }}</h2>
                    <h3 class="text-gray-500 mb-3">{{ employee.job }}</h3>
                    <p class="mb-4">
                        {{ employee.description }}
                    </p>
                    <!-- <span class="inline-flex">
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
                    </span> -->
                </div>
            </div>
        </swiper-slide>
    </swiper>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";


export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    data: function () {
        return {
            employees: [
                {
                    name: 'Санжар',
                    job: 'Генеральный Директор',
                    description: 'Основатель Веб-Студии. Универсал. Фанат Web-Production.',
                    urlImg: 'https://res.cloudinary.com/dfevgyt2k/image/upload/c_fill,g_face,h_300,w_300/v1674285787/team/sanjar_fyn1n2.webp',
                    bgImg: 'sanjar'
                },
                {
                    name: 'Даурен',
                    job: 'Креативный Директор',
                    description: 'Со-Основатель Веб-Студии. Дизайнер. Стоял за дизайном крупных финтехов.',
                    urlImg: 'https://res.cloudinary.com/dfevgyt2k/image/upload/c_fill,g_face,h_300,w_300/v1674285791/team/dauren_c8qsgq.webp',
                    bgImg: 'dauren'
                },
                {
                    name: 'Павел',
                    job: 'Ведущий-Разработчик',
                    description: 'Цифровой Пионер Frontend-разработки со стажем более 20 лет.',
                    urlImg: 'https://res.cloudinary.com/dfevgyt2k/image/upload/c_fill,e_auto_contrast,g_face,h_300,w_300/v1674285791/team/pavel_xs7tc7.webp',
                    bgImg: 'pavel'
                },
                {
                    name: 'Али-Султан',
                    job: 'Маркетолог',
                    description: 'Digital-Buyer, оптимизирует рекламу любого направления.',
                    urlImg: 'https://res.cloudinary.com/dfevgyt2k/image/upload/c_fill,g_face,h_300,w_300/v1674285787/team/alisultan_hy38nq.webp',
                    bgImg: 'alisultan'
                },
                {
                    name: 'Камила',
                    job: 'UX/UI-артист',
                    description: 'Автор качественного UX/UI и крутых анимаций.',
                    urlImg: 'https://res.cloudinary.com/dfevgyt2k/image/upload/c_fill,g_face,h_300,w_300/v1674285787/team/kamila_fu7que.webp',
                    bgImg: 'kamila'
                },
                {
                    name: 'Атия',
                    job: 'Графический Дизайнер',
                    description: 'Солнышко компании, автор стильных логотипов и нашего Instagram',
                    urlImg: 'https://res.cloudinary.com/dfevgyt2k/image/upload/c_fill,g_face,h_300,w_300/v1674285786/team/atiy_mqn4yw.webp',
                    bgImg: 'atiy'
                },
                {
                    name: 'Владимир',
                    job: 'Менеджер',
                    description: 'Оптимизатор всех бизнес-процессов, от B2B до B2C',
                    urlImg: 'https://dummyimage.com/200x200',
                    bgImg: ''
                },
                {
                    name: 'Алексей',
                    job: 'Дизайн',
                    description: 'Мощный Fullstack-разработчик. Авторствует технически тяжелые проекты.',
                    urlImg: 'https://dummyimage.com/200x200',
                    bgImg: ''
                }
            ]
        }
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
            modules: [Pagination],
        };
    },
};

</script>

<style scoped>
.bg--face {
    width: 0%;
    height: 0%;
    top: 50%;
    left: 50%;
    /* transition: all 0.4s ease-in-out; */
}

.face:hover .bg--face {
    width: 100%;
    height: 100%;
    top: 0%;
    left: 0%;

}

.sanjar {
    background-image: url(https://res.cloudinary.com/dfevgyt2k/image/upload/c_fill,g_face,h_300,w_300/v1674285793/team/sanjar2_oawbpy.webp);
}
.dauren {
    background-image: url(https://res.cloudinary.com/dfevgyt2k/image/upload/c_fill,g_face,h_300,w_300/v1674285790/team/dauren2_ex3gkx.webp);
}
.pavel {
    background-image: url(https://res.cloudinary.com/dfevgyt2k/image/upload/c_fill,e_auto_contrast,g_face,h_300,w_300/v1674285791/team/pavel2_pu8ba0.webp);
}
.alisultan {
    background-image: url(https://res.cloudinary.com/dfevgyt2k/image/upload/c_fill,g_face,h_300,w_300/v1674285790/team/alisultan2_aoxpfn.webp);
}
.kamila {
    background-image: url(https://res.cloudinary.com/dfevgyt2k/image/upload/c_fill,g_face,h_300,w_300/v1674285787/team/kamila2_bnrhxy.webp);
}
.atiy {
    background-image: url(https://res.cloudinary.com/dfevgyt2k/image/upload/c_fill,g_face,h_300,w_300/v1674285787/team/atiy2_had8rp.webp);
}
</style>