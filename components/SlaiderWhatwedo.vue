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
        <div class="border-t-2 border-white pt-4 md:h-42 md:mb-2 sm:h-96 min-[600px]:h-80 min-[300px]:h-72">
          <h2 class="flex gap-4 text-xl font-semibold"><span class="NamberSlader text-2xl md:h-10 sm:mb-1 min-[600px]:h-16 min-[300px]:h-14">{{
            employee.number
          }}</span> {{ employee.title }} </h2>
          <p class="py-4 text-sm h-2/5">{{ employee.description }}</p>
          <button @click="showPopupInfo"
            class="grid place-items-center w-full uppercase py-3.5 text-black bg-white sm:mt-2 min-[300px]:mt-10">Оставить заявку</button>
        </div>
      </swiper-slide>
    </swiper>
    <Popup v-if="isInfoPopupVisible" popupTitle="Форма обратной связи" @closePopup="closeInfoPopup" class="fixed">
      <form action="https://formsubmit.co/24c79e3d6353b67ceddcc79963875302" method="POST"
        class="w-full animate__animated animate__backInDown">
        <input type="text" id="name" name="name" placeholder="Ваше имя*" required class="input" />
        <input type="tel" id="tel" name="tel" placeholder="Ваш телефон*" required class="input" />
        <input type="email" id="email" name="email" placeholder="Ваш e-mail*" required class="input" />
        <textarea id="message" name="message" placeholder="Ваша заявка*" required class="input h-32"></textarea>
        <input type="hidden" name="_subject" value="Новое сообщение с сайта Athenaplus.kz/servicesprices - форма слайдера Оставить заявку" />
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
.swiper-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic, .swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic {
    left: 50%;
    top: 85%;
    margin-top: 10px;
    transform: translateX(-50%);
    white-space: nowrap;
}
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