<template>
  <section class="text-white body-font">
    <div class="container px-5 pt-10 md:pt-24 mx-auto">
      <div class="lg:grid grid-cols-2 gap-[50px] pt-9 lg:pt-0 pb-[60px] lg:pb-[80px] border-b">
        <div>
          <span class="font_Airborne text-[14px] lg:text-[20px]">- Услуги</span>
          <h1 class="text-[32px] md:text-5xl lg:text-6xl mt-2 lg:mt-5">Корпоративный сайт</h1>
          <p class="text-[20px] lg:text-[24px] mt-4 lg:mt-[30px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>
          <button class="btn py-[10px] mt-[20px] hidden lg:block">Начать работу</button>
        </div>
        <img src="/img/services/CorporateWebsite.webp" class="mt-4 lg:mt-0" alt="">
      </div>

      <div class="lg:flex items-center justify-between py-4 lg:py-[70px] border-b">
        <h1 class="text-[30px] md:text-5xl lg:text-6xl">Почему мы?</h1>
        <p class="text-[20px] lg:text-[24px] mt-4 lg:mt-0 lg:w-1/2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>
      </div>

      <div class="lg:flex justify-between py-[80px] lg:py-[150px]">
        <h1 class="text-[30px] md:text-5xl lg:text-6xl">Что вы получите?</h1>
        <div class="lg:grid grid-cols-2 gap-x-[20px] gap-y-[80px] mt-4 lg:mt-0 lg:ml-[80px]">
          <div v-for="(item, index) in servicesItems" :key="index" class="mt-5 lg:mt-0">
            <h1 class="text-[18px] lg:text-[26px]">{{ item.title }}</h1>
            <p class="lg:text-[18px]">{{ item.desc }}</p>
          </div>
        </div>
      </div>

      <div>
        <h1 class="text-[30px] md:text-5xl lg:text-6xl">Этапы и пункты</h1>
        <div class="hidden lg:grid grid-cols-5 mt-[40px]">
          <div v-for="(item, index) in servicesSteps" :key="index" :style="{ borderRight: item.borderRight }" class="mr-5">
            <h3 class="font_Airborne text-[22px]">{{ item.title }}</h3>
            <ul class="mt-[35px]">
              <li v-for="(step, stepIndex) in item.steps" :key="stepIndex" class="mr-2 inline-block xl:text-[22px] text-black bg-white px-3 py-2 mb-4">{{ step.title }}</li>
            </ul>
          </div>
        </div>

        <div class="lg:hidden">
          <Swiper :breakpoints="{ '640': {slidesPerView: 2 } }" :slidesPerView="1.2" :modules="modules" class="mySwiper mt-[40px]">
            <SwiperSlide v-for="(item, index) in servicesSteps" :key="index">
              <h3 class="font_Airborne text-[22px]">{{ item.title }}</h3>
              <ul class="mt-[35px]">
                <li v-for="(step, stepIndex) in item.steps" :key="stepIndex" class="mr-2 inline-block text-black bg-white px-3 py-2 mb-4">{{ step.title }}</li>
              </ul>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div class="mt-[80px] lg:mt-[150px]">
        <h1 class="text-[32px] md:text-5xl lg:text-6xl">Предметы и технологии</h1>
        <div class="lg:grid grid-cols-2 gap-[46px] mt-[30px]">
          <div>
            <span class="font_Airborne text-[20px] mt-4 lg:mt-[30px]">Дизайн</span>
            <div class="chat p-5 text-[26px] text-[#606060] mt-[30px] hidden lg:block">
              <p>{{ selectedService.desc }}</p>
            </div>
          </div>
          <div>
            <div v-for="(service, index) in servicesTools" :key="index" @click="selectService(service)" class="mt-5 lg:mt-0">
              <div class="flex items-center px-[10px] py-5 border mb-5 cursor-pointer" :class="{ 'bg-white text-black': service === selectedService }">
                <img :src="service.img" alt="Service icon">
                <span class="ml-5 text-[20px] lg:text-[30px]">{{ service.title }}</span>
              </div>
              <div v-if="service === selectedService" class="chat p-5 text-[26px] text-[#606060] mt-10 lg:mt-[30px] lg:hidden">
                <p>{{ selectedService.desc }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-[60px] lg:mt-[150px]">
          <span class="font_Airborne text-[20px]">Front-end</span>
          <div class="lg:grid grid-cols-5 gap-[10px] mt-4 lg:mt-[30px]">
            <div v-for="(item, index) in servicesFront" :key="index" class="py-5 lg:py-[60px] border mt-4 lg:mt-0">
              <div class="w-[60px] h-[60px] bg-[#D9D9D9] mx-auto"></div>
              <p class="font_Airborne text-[20px] lg:text-[26px] mt-[40px] text-center">{{ item.title }}</p>
            </div>
          </div>
        </div>

        <div class="mt-[60px] lg:mt-[150px]">
          <span class="font_Airborne text-[20px]">Back-end</span>
          <div class="lg:grid grid-cols-2 gap-[16px] mt-4 lg:mt-[30px]">
            <div v-for="(item, index) in servicesBack" :key="index" class="mt-4 lg:mt-0 py-[20px] px-[10px] flex items-center border">
              <div class="w-[60px] h-[60px] bg-[#A2A2A2]"></div>
              <p class="font_Airborne text-[20px] lg:text-[26px] ml-[26px]">{{ item.title }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-[80px] lg:mt-[150px]">
        <h1 class="text-[30px] md:text-5xl lg:text-6xl mb-[30px]">Прайс</h1>
        <PricesCorporateWebsitePrice />
      </div>

      <div class="mt-[80px] lg:mt-[150px]">
        <h1 class="text-[30px] md:text-5xl lg:text-6xl mb-[30px]">Другие услуги</h1>
        <OtherServices />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted  } from 'vue';

const servicesItems = [
  {
    title: '01 Эффективность',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo'
  },
  {
    title: '02 Структурность',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo'
  },
  {
    title: '03 Безопасность',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo'
  },
  {
    title: '04 Интеграции',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo'
  }
]

const servicesSteps = [
  {
    title: 'Предпродакшн',
    steps: [
      { title: 'Консультация' },
      { title: 'Бриф' },
      { title: 'Концепция' },
      { title: 'Документация' }
    ],
    borderRight: "1px solid #CDCDCD"
  },
  {
    title: 'Продакшн',
    steps: [
      { title: 'Дизайн документ' },
      { title: 'Прототипирование' },
      { title: 'Разработка' }
    ],
    borderRight: "1px solid #CDCDCD"
  },
  {
    title: 'Тестирование',
    steps: [
      { title: 'Поиск ошибок' },
      { title: 'Классификация' },
      { title: 'Концепция' }
    ],
    borderRight: "1px solid #CDCDCD"
  },
  {
    title: 'Оптимизация',
    steps: [
      { title: 'Оптимизация' },
      { title: 'Исследование ошибок' }
    ],
    borderRight: "1px solid #CDCDCD"
  },
  {
    title: 'Запуск',
    steps: [
      { title: 'Презентация и сдача' },
      { title: 'Предоставление документации' }
    ]
  }
]

const servicesFront = [
  { title: 'Html5', img: '' },
  { title: 'Css3', img: '' },
  { title: 'java script', img: '' },
  { title: 'node js', img: '' },
  { title: 'react', img: '' },
]

const servicesBack = [
  { title: 'MY SQL', img: '' },
  { title: 'MY SQL', img: '' },
  { title: 'MY SQL', img: '' },
  { title: 'MY SQL', img: '' }
]

const servicesTools = ref([
  {
    title: 'Figma',
    desc: 'Figma is free online interface editor used by both individual designers and web development teams. funktionality allows you create : -layouts of websites and individual pages -animation -interactive layouts',
    img: '/img/services/Figma.svg'
  },
  {
    title: 'Adobe Photoshop',
    desc: 'Adobe Photoshop is a powerful image editing software developed by Adobe Inc. Its often used for tasks like photo editing, graphic design, digital painting, and more',
    img: '/img/services/Photoshop.svg'
  },
  {
    title: 'Adobe Illustrator',
    desc: 'Adobe Illustrator is a vector graphics editor developed and marketed by Adobe Inc. It is primarily used for creating illustrations, logos, icons, diagrams, charts, and other scalable graphics. ',
    img: '/img/services/Illustrator.svg'
  }
])

const selectedService = ref({});

const selectService = (service) => {
  selectedService.value = service;
};

onMounted(() => {
  selectedService.value = servicesTools.value[0];
});
</script>

<style scoped>
.chat {
  background: #fff;
  position: relative;
}
.chat::after {
  content: ''; 
  position: absolute;
  right: 0; top: -10px;
  border: 10px solid transparent; 
  border-right: 10px solid #fff; 
  border-bottom: 10px solid #fff;
}
</style>  