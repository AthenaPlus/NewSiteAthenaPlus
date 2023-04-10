<template>
    <section class="text-gray-100 overflow-hidden">
        <div class="service-main flex sm:w-full sm:container sm:px-5 py-0 mx-auto overflow-x-hidden">
            <div class="mr-20 overflow-hidden">
                <transition name="fade">
                    <div class="w-full">
                        <h2 v-for="(item, index) in ServiceItems" :key="item.id" v-show="isActive(index)" class="font_Airborne sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl pb-5" :class="{ 'animate__animated animate__fadeInLeft': isActive(index) }">
                            <span class="font-light">—</span> {{ item.title1 }}
                        </h2>
                        <h2 v-for="(item, index) in ServiceItems" :key="item.id" v-show="isActive(index)" class="font_Airborne sm:text-base md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl sm:ml-36 md:ml-44 lg:ml-64 xl:ml-80 2xl:ml-96" :class="{ 'animate__animated animate__fadeInRight': isActive(index) }">
                            {{ item.title2 }}
                        </h2>
                    </div>
                </transition>
                <div class="item-block flex flex-wrap lg:flex-nowrap justify-between items-end mt-10 lg:mt-32">
                    <div class="md:w-4/5 lg:w-2/5 order-last lg:order-first">
                        <p v-for="(item, index) in ServiceItems" :key="item.id" v-show="isActive(index)" class="md:text-lg lg:text-base xl:text-xl" :class="{ 'animate__animated animate__backInLeft': isActive(index) }">{{ item.desc }}</p>
                    </div>
                    <div class="md:w-4/5 lg:w-1/2 order-first lg:order-last mb-5">
                        <img v-for="(item, index) in ServiceItems" :key="item.id" v-show="isActive(index)" :src="item.img" alt="" :class="{ 'animate__animated animate__backInLeft': isActive(index) }">
                    </div>
                </div>
            </div>
            <div class="service-items sm:pr-5 md:pr-0">
                <p class="service-item font_Airborne font-normal text-2xl md:text-4xl xl:text-5xl 2xl:text-6xl pb-10 cursor-pointer" v-for="(item, index) in ServiceItems" :key="item.id" v-on:click="showContent(index)" :class="{ 'active1': activeLink === `link${index}` }">{{ item.subTitle }}</p>
            </div>
        </div>
        <Accordion class="accordion-mobile pb-20 sm:py-20" />
    </section>
</template>

<script setup>

const ServiceItems = [{
    id: 0,
    title1: 'Новый Подход',
    title2: 'Для лучших',
    subTitle: 'Интервью',
    desc: 'Проводим съемку интервью в профессиональной фотостудии для создания лучшего продукта. Формируем концепцию будущего проекта. Определяем сильные стороны Вашей компании.',
    img: '/img/webp/ServicePhoto1.webp'
},
{
    id: 1,
    title1: 'Аудит Рынка',
    title2: 'Конкурентов',
    subTitle: 'Анализ',
    desc: 'Исследуем конкурентов и их сильные стороны, проверяем рыночный потенциал, проводим опрос целевой аудитории. Строим аналитику и предоставляем картину рынка. ',
    img: '/img/webp/ServicePhoto2.webp'
},
{
    id: 2,
    title1: 'Стратегия',
    title2: 'Продвижения',
    subTitle: 'Маркетинг',
    desc: 'Составляем стратегию для улучшения имиджа бренда и максимального коэффицента конверсии. Наш целевой порог - не менее 10%.',
    img: '/img/webp/ServicePhoto3.webp'
},
{
    id: 3,
    title1: 'Креативная',
    title2: 'Практичность',
    subTitle: 'UX/UI',
    desc: 'Pixel-Perfect-подход от дизайнеров из лучших школ. Повышаем рентабельность проектов при помощи премиального UX/UI, интерактивности и геймификации.',
    img: '/img/webp/ServicePhoto4.webp'
},
{
    id: 4,
    title1: 'Тестовый полет',
    title2: 'Продукта',
    subTitle: 'MVP',
    desc: ' MVP-стадия для проверки гипотез на целевой аудитории. Разрабатываем продающий подход. Внедряем его в конечную версию проекта перед запуском.',
    img: '/img/webp/ServicePhoto6.webp'   
},
{
    id: 5,
    title1: 'Новый Уровень',
    title2: 'Проекта',
    subTitle: 'Разработка',
    desc: 'От вёрстки, до посадки на передовые языки программирования и фреймворки. Доводим проект до технического совершенства.',
    img: '/img/webp/ServicePhoto5.webp'
},
{
    id: 6,
    title1: 'Каждый проект',
    title2: 'как арт-объект',
    subTitle: 'Запуск',
    desc: 'Запускаем лучший продукт в нише, имеющий уникальную ценность. Доведя каждый элемент до совершенства, задаем стандарты рынка.',
    img: '/img/webp/ServicePhoto7.webp'
}]

</script>

<script scoped>
import 'animate.css';

export default {
    data() {
      return {
        activeLink: 'link0',
        activeIndex: 0
      };
    },
    methods: {
      showContent(index) {
        this.activeIndex = index;
        this.activeLink = `link${index}`;
      },
      isActive(index) {
        return index === this.activeIndex;
      }
    }
  };
</script>

<style scoped>
section {
  display: flex;
  align-items: center;
  justify-content: center;
}
.service-item:hover {
    background: linear-gradient(180deg, #FF2BFF 0%, #FE7C3C 43.23%, #FE9402 100%);
    color: transparent;
    background-clip: text;
    transition: all 0.3s;
}
.active1 {
    background: linear-gradient(180deg, #FF2BFF 0%, #FE7C3C 43.23%, #FE9402 100%);
    color: transparent;
    background-clip: text;
}

@media (min-width: 640px) {
    .accordion-mobile {
        display: none;
    }
}

@media (min-width: 200px) and (max-width: 639px) {
    .service-main {
        display: none;
    }
    .accordion-mobile {
        display: block;
    }
}
</style>