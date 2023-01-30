<template>
  <div>
    <swiper :slides-per-view="1" :space-between="30" :grabCursor="true" :breakpoints="{
      '320': {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      '600': {
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
    }" :pagination="{
  dynamicBullets: true,
}" :modules="modules" @swiper="onSwiper" @slideChange="onSlideChange">
      <swiper-slide v-for="employee in employees" :key="employee.index" class="pb-10">
        <div class="border-t-2 border-white pt-4">
          <h2 class="flex flex-wrap gap-4 text-xl font-semibold"> <img :src="employee.img" :alt="employee.title" /> {{
            employee.title
          }} </h2>
          <p class="py-4 text-sm">{{ employee.description }}</p>
          <button @click="showPopupInfo"
            class="grid place-items-center w-full uppercase py-3.5 text-black bg-white">Оставить заявку</button>
        </div>
      </swiper-slide>
    </swiper>
    <Popup v-if="isInfoPopupVisible" popupTitle="Форма обратной связи" @closePopup="closeInfoPopup" class="absolute">
      <form action="https://formsubmit.co/24c79e3d6353b67ceddcc79963875302" method="POST"
        class="w-full animate__animated animate__backInDown">
        <input type="text" id="name" name="name" placeholder="Ваше имя*" required class="input" />
        <input type="tel" id="tel" name="tel" placeholder="Ваш телефон*" required class="input" />
        <input type="email" id="email" name="email" placeholder="Ваш e-mail*" required class="input" />
        <textarea id="message" name="message" placeholder="Ваша заявка*" required class="input h-32"></textarea>
        <input type="hidden" name="_subject"
          value="Новое сообщение с сайта Athenaplus.kz - форма слайдера Оставить заявку" />
        <input type="hidden" name="_captcha" value="false" />
        <input type="text" name="_honey" style="display:none" />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_next" value="https://athenaplus.kz/thanks" />
        <button type="submit"
          class="text-xl leading-[23px] py-5 px-10 mt-[30px] bg-white text-black cursor-pointer button-hover">Отправить
          заявку</button>
      </form>
    </Popup>
  </div>
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
                    title: 'Интервью',
                    description: 'Устанавливаются ваши предпочтения. Формируется концепция будущего проекта. Совместно составляем техническое задание и бриф.',
                    img: '/img/Union1.svg'
                },
                {
                    title: 'Разработка',
                    description: 'Выстроим логическую структуру и архитектуру проекта. Далее создадим уникальный дизайн, а после передадим макет на вёрстку, где сайт “оживает”.',
                    img: '/img/Union2.svg'
                },
                {
                    title: 'Тесты и SEO',
                    description: 'Проверим проект. Узнаем как сайт будет работать в разных ситуациях. После, проводим первичную оптимизацию и выводим сайт в диджитал-сферу',
                    img: '/img/Union3.svg'
                },
            ],
            isInfoPopupVisible: false,
        }
    },
    setup() {
      const onSwiper = (swiper) => {
  
      }
      const onSlideChange = () => {

      }
      return {
        onSwiper,
        onSlideChange,
        modules: [Pagination],
      }
    },
    methods: {
        showPopupInfo(){
            this.isInfoPopupVisible = true
        },
        closeInfoPopup() {
            this.isInfoPopupVisible = false
        }
    }
  }
</script>

<style>
.NamberSlader {
    background: linear-gradient(180deg, #FCB040 0%, #FF2BFF 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.swiper-pagination-bullet-active {
 background-color: rgb(215, 16, 234) !important;
}

.swiper-pagination-bullet {
    background-color: rgb(215, 16, 234) !important;
}
</style>