<template>
  <section class="text-white body-font">
    <div class="container px-5 pt-10 md:py-24 mx-auto">
      <button class="hidden lg:flex grow-0 items-center">
        <img src="/img/portfolio/Case.svg" alt="">
        <span class="text-xl ml-2">кейс</span>
      </button>

      <div class="pt-10 md:pt-[60px]">
        <h1 class="text-[32px] md:text-5xl lg:text-6xl">Dostyk trans terminal</h1>
        <div class="lg:flex items-start justify-between mt-5">
          <div class="lg:w-1/2 mr-[50px]">
            <p class="text-[20px] xl:text-[35px]">Веб-платформа для лидера услуг и продуктов, направленных на улучшение качества жизни людей с нарушениями слуха.</p>
            <div class="md:grid grid-cols-2 mt-4 lg:mt-[50px] border-t broder-[#BABABA]">
              <p v-for="(item, index) in caseServices" :key="index" class="mt-2 md:mt-5 text-2xl md:text-base xl:text-2xl text-[#CDCDCD]">{{ item.title }}</p>
            </div>
          </div>
          <img src="/img/portfolio/DTT.webp" class="hidden lg:block" alt="">
        </div>
      </div>

      <div class="mt-[50px] lg:mt-[80px]">
        <span class="text-[10px] md:text-base">О проекте</span>
        <h2 class="text-[24px] md:text-[32px] xl:text-[40px] mt-2">Комбинация E-Commerce и Mobile App</h2>
        <h3 class="text-[20px] md:text-2xl xl:text-[32px] text-[#CDCDCD] mt-[20px] lg:mt-[30px]">Чем занимается компания описание на одно предложение :</h3>
        <p v-for="(item, index) in caseAbout" :key="index" class="md:text-lg xl:text-2xl text-[#CDCDCD] mt-[20px]">{{ item.title }}</p>
        <p v-for="(item, index) in caseDesc" :key="index" class="md:text-2xl xl:text-[32px] text-[#CDCDCD] md:mt-[20px]">{{ item.title }} - {{ item.desc }}</p>
      </div>

      <!-- Скрытые блоки с 1024px -->

      <div class="mt-[50px] lg:mt-[80px]">
        <span class="text-[10px] md:text-base">Этапы</span>
        <h2 class="text-[24px] md:text-[32px] xl:text-[40px] mt-2 mb-[20px]">Этапы работы</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          <p v-for="(item, index) in caseStages" :key="index" class="p-[30px] mt-2 text-[20px] border">{{ item.title }}</p>
        </div>
      </div>

      <div class="mt-[50px] lg:mt-[80px]">
        <span class="text-[10px] md:text-base">О проекте</span>
        <h2 class="text-[24px] md:text-[32px] xl:text-[40px] mt-2">Анализ конкурентов и маркетинговое исследование</h2>
        <h3 class="text-[20px] md:text-2xl xl:text-[32px] text-[#CDCDCD] mt-[20px] lg:mt-[30px]">Чем занимается компания описание на одно предложение :</h3>
        <p v-for="(item, index) in caseDesc" :key="index" class="md:text-2xl xl:text-[32px] text-[#CDCDCD] md:mt-[20px]">{{ item.title }} - {{ item.desc }}</p>
      </div>
      <!--  -->

      <div class="mt-[50px] lg:mt-[80px]">
        <h2 class="text-[24px] md:text-[32px] xl:text-[40px] mt-2">Шрифты, цветовая палитра, сетка</h2>
        <div class="border-t border-b border-[#CDCDCD] mt-[20px] lg:mt-[30px] py-4 lg:py-[40px]">
          <div v-for="(item, index) in caseFonts" :key="index" class="lg:flex justify-between items-center text-[#CDCDCD]" :style="{ 'margin-bottom': index === 0 ? '40px' : '0' }">
            <p class="text-2xl xl:text-[32px]">{{ item.title }}</p>
            <div class="mt-4 lg:mt-0">
              <p class="uppercase text-xl">{{ item.desc }}</p>
              <p class="lg:text-xl">{{ item.desc }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-[50px] lg:mt-[80px]">
        <h2 class="text-[32px] lg:text-[40px] mt-2">Акцентные и дополнительные цвета</h2>
        <div class="grid grid-cols-2 lg:grid-cols-4 border border-[#CDCDCD] mt-[20px] lg:mt-[30px]">
          <div v-for="(item, index) in caseColors" :key="index" :style="{ borderRight: item.borderRight }" class="py-[27px] border-b border-[#CDCDCD]">
            <p class="text-center">Hex: {{ item.title }}</p>
            <div class="w-[120px] h-[120px] mx-auto my-[30px]" :style="{ backgroundColor: item.backgroundColor }"></div>
            <p class="text-center">{{ item.desc }}</p>
          </div>
        </div>
      </div>

      <div class="mt-[50px] lg:mt-[80px]">
        <div class="flex items-end justify-between border-b pb-2">
          <h2 class="text-[24px] md:text-[32px] xl:text-[40px] mt-2">Сетка</h2>
          <span class="text-xl">12 колонок</span>
          <span class="text-xl">1400</span>
        </div>
        <img class="mt-[20px] lg:mt-[30px]" src="/img/portfolio/DTT-grid.webp" alt="">
      </div>

      <div class="mt-[50px] lg:mt-[80px]">
        <span>Архитектура</span>
        <h2 class="text-[24px] md:text-[32px] xl:text-[40px] mt-2">Архитектура</h2>
        <h3 class="text-[20px] md:text-2xl xl:text-[32px] text-[#CDCDCD] mt-[20px] lg:mt-[30px]">Чем занимается компания описание на одно предложение :</h3>
        <p v-for="(item, index) in caseDesc" :key="index" class="md:text-2xl xl:text-[32px] text-[#CDCDCD] md:mt-[20px]">{{ item.title }} - {{ item.desc }}</p>
        <div class="mt-[20px] lg:mt-[30px]">
          <p class="text-center text-[8px] md:text-base lg:text-xl xl:text-[30px]">Блоки</p>
          <img src="/img/portfolio/Arrows.svg" class="mx-auto" alt="">
          <div class="grid grid-cols-6">
            <p v-for="(item, index) in caseItems" :key="index" class="text-[8px] md:text-base lg:text-xl xl:text-[30px] text-center">{{ item.title }}</p>
          </div>
        </div>
      </div>

      <div class="mt-[50px] lg:mt-[80px]">
        <span>Дизайн</span>
        <h2 class="text-[24px] md:text-[32px] xl:text-[40px] mt-2">Концепция</h2>
        <h3 class="text-[20px] md:text-2xl xl:text-[32px] text-[#CDCDCD] mt-[20px] lg:mt-[30px]">Чем занимается компания описание на одно предложение :</h3>
        <p v-for="(item, index) in caseDesc" :key="index" class="md:text-2xl xl:text-[32px] text-[#CDCDCD] md:mt-[20px]">{{ item.title }} - {{ item.desc }}</p>
      </div>
    </div>

    <div class="mt-[50px] lg:mt-[100px] w-full bg-[#D8D8D8B3] py-[26px] md:py-[50px]">
      <div class="container mx-auto px-5 md:px-0">
        <img src="/img/portfolio/DTT-gallery-1.webp" class="mx-auto md:w-2/3" alt="">
        <img src="/img/portfolio/DTT-gallery-2.webp" class="mx-auto mt-[30px] lg:mt-[50px]" alt="">
      </div>
      <div class="hidden md:grid grid-cols-2 gap-5 mt-[30px] lg:mt-[50px]">
        <img src="/img/portfolio/DTT-gallery-3.webp" class="" alt="">
        <img src="/img/portfolio/DTT-gallery-4.webp" class="" alt="">
      </div>
      <img src="/img/portfolio/DTT-gallery-5.webp" class="md:hidden mx-auto mt-[30px]" alt="">
    </div>
    <PortfolioAccordion />
  </section>
</template>

<script setup>

const caseServices = [
  { title: 'Аналитика' },
  { title: 'Дизайн' },
  { title: 'Визуальное исследование' },
  { title: 'Адаптивность' },
  { title: 'Информационная архитектура' },
  { title: 'Верстка' },
  { title: 'Прототип' },
  { title: 'Мобильное приложение' }
]

const caseAbout = [
  { title: 'Ключевые пункты' },
  { title: 'Ключевые пункты' },
  { title: 'Ключевые пункты' },
  { title: 'Ключевые пункты' },
  { title: 'Ключевые пункты' }
]

const caseDesc = [
  { 
    title: 'Зачем нужен сайт',
    desc: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
  },
  { 
    title: 'Задача студии',
    desc: 'Задача студии "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
  },
  { 
    title: 'Задача студии',
    desc: 'Задача студии "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
  }
]

const caseFonts = [
  {
    title: 'TT Hazelnuts Trl',
    desc: 'а, б, в, г, д, е, ё, ж, з, и, й, к, л, м, н, о, п, р, с, т, у, ф, х, ц, ч, ш, щ, ъ, ы, ь, э, ю, я.'
  },
  {
    title: 'Formular',
    desc: 'а, б, в, г, д, е, ё, ж, з, и, й, к, л, м, н, о, п, р, с, т, у, ф, х, ц, ч, ш, щ, ъ, ы, ь, э, ю, я.'
  }
]

const caseColors = [
  {
    title: '007DD7',
    desc: 'Синий',
    backgroundColor: '#007DD7',
    borderRight: "1px solid #CDCDCD"
  },
  {
    title: 'FFBB00',
    desc: 'Желтый',
    backgroundColor: '#FFBB00',
    borderRight: "1px solid #CDCDCD"
  },
  {
    title: '939393',
    desc: 'Серый',
    backgroundColor: '#939393',
    borderRight: "1px solid #CDCDCD"
  },
  {
    title: 'FFFFFF',
    desc: 'Белый',
    backgroundColor: '#FFFFFF'
  }
]

const caseItems = [
  { title: 'О компании' },
  { title: 'Каталог' },
  { title: 'Для детей' },
  { title: 'Отзывы' },
  { title: 'Статьи' },
  { title: 'Частые вопросы' }
]

const caseStages = [
  { title: 'Исследование' },
  { title: 'Прототип' },
  { title: 'Дизайн' },
  { title: 'Верстка' }
]
</script>

<style scoped>
h2 {
  font-family: Airborne, system-ui, sans-serif;
}
h3 {
  font-family: 'Source Sans Pro', sans-serif;
}
</style>