<template>
  <section class="text-white body-font">
    <div class="container px-5 pt-10 md:pt-24 mx-auto">
      <div class="lg:grid grid-cols-2 gap-[50px] pt-9 lg:pt-0 pb-[60px] lg:pb-[80px] border-b">
        <div>
          <span class="font_Airborne text-[14px] lg:text-[20px]">- Услуги</span>
          <h1 class="text-[32px] md:text-5xl lg:text-6xl mt-2 lg:mt-5">Мобильное приложение</h1>
          <p class="text-[20px] lg:text-[24px] mt-4 lg:mt-[30px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>
          <button class="btn py-[10px] mt-[20px] hidden lg:block">Начать работу</button>
        </div>
        <img src="/img/services/WebApp.webp" class="mx-auto mt-4 lg:mt-0" alt="">
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
      </div>

      <div class="mt-[80px] lg:mt-[150px] lg:flex items-start">
        <div class="lg:w-1/2 mr-0 lg:mr-5">
          <h1 class="text-[30px] md:text-5xl lg:text-6xl mb-[30px]">Аналитика и  Ux</h1>
          <p class="text-[20px] lg:text-[24px] mt-4 lg:mt-[30px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>
        </div>
        <div id="accordion" class="lg:w-1/2 mt-4 lg:mt-0">
          <div v-for="(analytic, index) in AnalyticSteps" :key="index" class="accordion-item border-t lg:border py-[30px] px-[20px] cursor-pointer" @click="analyticAccordion(index)">
            <div class="accordion-header flex items-center justify-between">
              <h3 class="font_Airborne text-[20px] lg:text-[26px] mb-[30px]">{{ analytic.title }}</h3>
              <img src="/img/plus.svg" alt="" class="accordion-icon" :class="{ 'rotate-45 transition duration-300 ease-in-out': analyticIndex === index }">
            </div>
            <p class="accordion-content lg:text-[20px]" v-show="analyticIndex === index">{{ analytic.desc }}</p>
          </div>
        </div>
      </div>

      <div class="mt-[80px] lg:mt-[150px] lg:flex items-start">
        <div class="lg:w-1/2 mr-0 lg:mr-5">
          <h1 class="text-[30px] md:text-5xl lg:text-6xl mb-[30px]">Визуальный дизайн</h1>
          <p class="text-[20px] lg:text-[24px] mt-4 lg:mt-[30px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>
        </div>
        <div id="accordion" class="lg:w-1/2 mt-4 lg:mt-0">
          <div v-for="(design, index) in DesignSteps" :key="index" class="accordion-item border-t lg:border py-[30px] px-[20px] cursor-pointer" @click="designAccordion(index)">
            <div class="accordion-header flex items-center justify-between">
              <h3 class="font_Airborne text-[20px] lg:text-[26px] mb-[30px]">{{ design.title }}</h3>
              <img src="/img/plus.svg" alt="" class="accordion-icon" :class="{ 'rotate-45 transition duration-300 ease-in-out': designIndex === index }">
            </div>
            <p class="accordion-content lg:text-[20px]" v-show="designIndex === index">{{ design.desc }}</p>
          </div>
        </div>
      </div>

      <div class="mt-[80px] lg:mt-[150px] lg:flex items-start">
        <div class="lg:w-1/2 mr-0 lg:mr-5">
          <h1 class="text-[30px] md:text-5xl lg:text-6xl mb-[30px]">Аналитика после запуска</h1>
          <p class="text-[20px] lg:text-[24px] mt-4 lg:mt-[30px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>
        </div>
        <div id="accordion" class="lg:w-1/2 mt-4 lg:mt-0">
          <div v-for="(final, index) in FinalSteps" :key="index" class="accordion-item border-t lg:border py-[30px] px-[20px] cursor-pointer" @click="finalAccordion(index)">
            <div class="accordion-header flex items-center justify-between">
              <h3 class="font_Airborne text-[20px] lg:text-[26px] mb-[30px]">{{ final.title }}</h3>
              <img src="/img/plus.svg" alt="" class="accordion-icon" :class="{ 'rotate-45 transition duration-300 ease-in-out': finalIndex === index }">
            </div>
            <p class="accordion-content lg:text-[20px]" v-show="finalIndex === index">{{ final.desc }}</p>
          </div>
        </div>
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

const AnalyticSteps = [
  {
    title: '01 Брифинг',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo'
  },
  {
    title: '02 Хранение проектов',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo'
  },
  {
    title: '03 Анализ персон',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo'
  },
  {
    title: '04 Список работ',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo'
  },
  {
    title: '05 Исследование аудитории',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo'
  },
  {
    title: '06 User flow и CJM',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo'
  },
  {
    title: '07 Функциональный анализ',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo'
  },
  {
    title: '08 Конкуретный анализ',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo'
  },
  {
    title: '09 Сводный анализ',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo'
  },
  {
    title: '10 Информационная архитекутра',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo'
  },
  {
    title: '11 Структура положения',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo'
  },
  {
    title: '12 Функциональный прототип',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo'
  },
  {
    title: '13 Вайрфреймы и интерактивный прототип',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo'
  }
]

const DesignSteps = [
  {
    title: '01 Брифинг',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo'
  },
  {
    title: '02 Хранение проектов',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo'
  },
  {
    title: '03 Анализ персон',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo'
  }
]

const FinalSteps = [
  {
    title: '01 Брифинг',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo'
  },
  {
    title: '02 Хранение проектов',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo'
  },
  {
    title: '03 Анализ персон',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo'
  }
]


const analyticIndex = ref(0);

const analyticAccordion = (index) => {
  analyticIndex.value = analyticIndex.value === index ? -1 : index;
};

const designIndex = ref(0);

const designAccordion = (index) => {
  designIndex.value = designIndex.value === index ? -1 : index;
};

const finalIndex = ref(0);

const finalAccordion = (index) => {
  finalIndex.value = finalIndex.value === index ? -1 : index;
};
</script>

<style scoped>

</style>  