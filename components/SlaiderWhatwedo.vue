<template>
  <div class="">
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
          <h2 class="flex flex-wrap gap-4 text-xl font-semibold"><span class="NamberSlader text-2xl">{{
            employee.number
          }}</span> {{ employee.title }} </h2>
          <p class="py-4 text-sm">{{ employee.description }}</p>
          <button @click="showPopupInfo"
            class="grid place-items-center w-full uppercase py-3.5 text-black bg-white">Оставить заявку</button>
        </div>
      </swiper-slide>
    </swiper>
    <Popup v-if="isInfoPopupVisible" popupTitle="Форма обратной связи" @closePopup="closeInfoPopup">
      <form class="w-full animate__animated animate__backInDown" method="post">
        <input type="text" id="name" name="name" placeholder="Ваше имя" class="input" />
        <input type="tel" id="tel" name="tel" placeholder="Ваш телефон" class="input" />
        <input type="email" id="email" name="email" placeholder="Ваш e-mail" class="input" />
        <textarea id="message" name="message" placeholder="Ваша заявка" class="input h-32"></textarea>
        <button type="submit"
          class="text-xl leading-[23px] py-5 px-10 mt-[30px] bg-white text-black cursor-pointer button-hover">Отправить заявку</button>
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
                    title: 'UX/UI',
                    description: 'Визуальные элементы, предназначенные для удобного взаимодействия пользователя с платформой. Мы поможем удержать клиентов и повысить коэффицент конверсии.',
                    number: '#1'
                },
                {
                    title: 'Внедрение CRM-систем',
                    description: 'Совместно создаем план действий для ввода CRM-системы в digital-продукт. Подготавливаем Вас и Ваших сотрудников к переменам.',
                    number: '#2'
                },
                {
                    title: 'Контекстная Реклама и SEO',
                    description: 'Создаем оптимальную рекламную стратегию в Google и Yandex. Мастера digital-маркетинга и SEO стоявшие за крупными брендами, приведут лидов на Ваш продукт.',
                    number: '#3'
                },
                {
                    title: 'Графический Дизайн',
                    description: 'Запоминающиеся логотипы, брендбуки и гайдлайны. Анимированные коммерческие презентации. Весь пакет услуг дизайнера в одной студии.',
                    number: '#4'
                },
                {
                    title: 'Разработка моб. приложений',
                    description: 'Мобильная разработка PWA, Flutter, React Native. Создаем приложения, удобные для конечного пользователя.',
                    number: '#5'
                },
                {
                    title: 'Создание веб-сайтов',
                    description: 'Разрабатываем веб-сайты на передовых фреймворках. Понимаем важность чистого кода и правильной архитектуры. Мы способны создавать как привлекающие внимание landing-page, так и массивные интернет-порталы.',
                    number: '#6'
                },
            ],
            isInfoPopupVisible: false,
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