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
                    <div class="absolute bg-pink-500 rounded-lg bg-center bg-cover bg-no-repeat bg--face" :class="employee.bgImg"></div>
                    <img alt="team" class="flex-shrink-0 rounded-lg w-full h-full object-cover object-center "
                    :src="employee.urlImg">
                </div>
                <div class="w-full">
                    <h2 class="title-font font-medium text-lg text-white">{{ employee.name }}</h2>
                    <h3 class="text-gray-500 mb-3">{{ employee.job }}</h3>
                    <p class="mb-4">
                        {{ employee.description }}
                    </p>
                </div>
            </div>
        </swiper-slide>
    </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import "swiper/css/pagination";

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
                    urlImg: '/img/team/sanjar.webp',
                    bgImg: 'sanjar'
                    // https://res.cloudinary.com/dfevgyt2k/image/upload/c_fill,g_face,h_300,w_300/v1674285787/team/sanjar_fyn1n2.webp
                },
                {
                    name: 'Даурен',
                    job: 'Креативный Директор',
                    description: 'Со-Основатель Веб-Студии. Дизайнер. Стоял за дизайном крупных финтехов.',
                    urlImg: '/img/team/dauren.webp',
                    bgImg: 'dauren'
                },
                {
                    name: 'Павел',
                    job: 'Ведущий-Разработчик',
                    description: 'Цифровой Пионер Frontend-разработки со стажем более 20 лет.',
                    urlImg: '/img/team/pavel.webp',
                    bgImg: 'pavel'
                },
                {
                    name: 'Али-Султан',
                    job: 'Маркетолог',
                    description: 'Digital-Buyer, оптимизирует рекламу любого направления.',
                    urlImg: '/img/team/alisultan.webp',
                    bgImg: 'alisultan'
                },
                {
                    name: 'Камила',
                    job: 'UX/UI-артист',
                    description: 'Автор качественного UX/UI и крутых анимаций.',
                    urlImg: '/img/team/kamila.webp',
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


        };
        const onSlideChange = () => {

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
    background-image: url(/img/team/sanjar2.webp);
}
.dauren {
    background-image: url(/img/team/dauren2.webp);
}
.pavel {
    background-image: url(/img/team/pavel2.webp);
}
.alisultan {
    background-image: url(/img/team/alisultan2.webp);
}
.kamila {
    background-image: url(/img/team/kamila2.webp);
}
.atiy {
    background-image: url(https://res.cloudinary.com/dfevgyt2k/image/upload/c_fill,g_face,h_300,w_300/v1674285787/team/atiy2_had8rp.webp);
}
</style>