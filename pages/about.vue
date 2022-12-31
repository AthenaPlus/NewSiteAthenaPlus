<template>
    <section class="text-white body-font">
        <div class="container px-5 py-24 mx-auto">
            <!-- Блок СОВРЕМЕННАЯ ВЕБ СТУДИО -->
            <div class="flex flex-col lg:flex-row gap-10 border-b-2 border-white/70 pb-10">
                <div class="w-full lg:w-1/2">
                    <h1 class="sticky top-10 uppercase text-[32px] md:text-[80px]">Современная веб студио</h1>
                </div>
                <div class="w-full lg:w-1/2">
                    <h2 class="font_Airborne uppercase text-[32px] md:text-[80px] mt-0 lg:mt-28 mb-10 md:mb-5">мы создаем <br
                            class="hidden lg:inline-block" /> ваш дизайн</h2>
                    <p class="text-xl md:text-[26px] font-semibold leading-8">Athena Plus это Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed
                        do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
            </div>
            <!-- Блок  НАШЕ АГЕНСТВО -->
            <div class="flex flex-col lg:flex-row gap-10 border-b-2 border-white/70 pt-[50px] pb-10">
                <div class="w-full lg:w-1/3">
                    <h3 class="sticky top-10 uppercase font_Airborne text-[30px] md:text-[50px]">Наше агенство</h3>
                </div>
                <div class="w-full lg:w-2/3">
                    <div class="grid grid-flow-col-1 md:grid-cols-2  gap-[75px]">
                        <div v-for="agencyItem in agencyItems" :key="agencyItem.index" class="">
                            <span class="text-[20px] md:text-[26px] font-semibold">{{ agencyItem.subTitle }}</span>
                            <h3 class="font_Airborne text-[30px] md:text-[50px]">{{ agencyItem.title }}</h3>
                            <p class="text-base mb-2">
                                {{ agencyItem.description }}
                            </p>
                            <button
                                class="text-xl font-semibold inline-flex items-center justify-end gap-4 w-full mb-2">Заказать
                                <IconArrowright class="w-[60px]" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Блок Методы работы -->
            <div class="flex flex-col lg:flex-row gap-10 border-b-2 border-white/70 pt-[50px] pb-10">
                <div class="w-full lg:w-1/3">
                    <h3 class="sticky top-10 uppercase font_Airborne text-[30px] md:text-[50px]">Методы работы</h3>
                </div>
                <div class="w-full lg:w-2/3">
                    <div class="grid grid-flow-col-1 md:grid-cols-2  gap-[75px]">
                        <div v-for="methodItem in methodItems" :key="methodItem.index" class="">
                            <span class="text-[20px] md:text-[26px] font-semibold">{{ methodItem.subTitle }}</span>
                            <h3 class="font_Airborne text-[30px] md:text-[50px]">{{ methodItem.title }}</h3>
                            <p class="text-base mb-2">
                                {{ methodItem.description }}
                            </p>
                            <button
                                class="text-xl font-semibold inline-flex items-center justify-end gap-4 w-full mb-2">Заказать
                                <IconArrowright class="w-[60px]" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Блок Лучшие работы -->
            <div class="flex flex-col lg:flex-row gap-10 pt-[50px] pb-10">
                <div class="w-full lg:w-1/3">
                    <h3 class="sticky top-10 uppercase font_Airborne text-[30px] md:text-[50px]">Лучшие работы</h3>
                </div>
                <div class="w-full lg:w-2/3">
                    <div class="grid grid-flow-col-1 md:grid-cols-2  gap-[75px]">
                        <div class="">
                            <p class="text-[20px] md:text-[26px] font-semibold">
                                Athena Plus это Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ex ea commodo consequat. 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Блок Портфолио ссылки на картинки -->
            <div class="flex flex-col lg:flex-row gap-10 border-b-2 border-white/70 pt-[50px] pb-10">
                <div class="w-full md:w-1/2">
                    <ul>
                        <li class="text-[40px] md:text-[70px] font_Airborne ">
                            <button href="" class="link-gradient">чек маркет</button>
                        </li>
                        <li class="text-[40px] md:text-[70px] font_Airborne ">
                            <button href="" class="link-gradient">midas event</button>
                        </li>
                        <li class="text-[40px] md:text-[70px] font_Airborne ">
                            <button href="" class="link-gradient">як</button>
                        </li>
                        <li class="text-[40px] md:text-[70px] font_Airborne ">
                            <button href="" class="link-gradient">торгсофт</button>
                        </li>
                    </ul>
                </div>
                <div class="w-full md:w-1/2">
                    <img src="/img/about_portfolio.jpg" alt="">
                </div>
            </div>
            <!-- Блок Команда -->
            <div class="flex flex-col lg:flex-row gap-10 pt-[50px] pb-10">
                <div class="w-full lg:w-1/3">
                    <h3 class="sticky top-10 uppercase font_Airborne text-[30px] md:text-[50px]">Команда</h3>
                </div>
                <div class="w-full lg:w-2/3">
                    <div class="grid grid-flow-col-1 md:grid-cols-2  gap-[75px]">
                        <div class="">
                            <p class="text-[20px] md:text-[26px] font-semibold">
                                Athena Plus это Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ex ea commodo consequat. 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Блок Портфолио Каманды -->
            <div class="flex flex-wrap -m-4 border-b-2 border-white/70 pt-[50px] pb-10">
                <div v-for="employee in employees" :key="employee.index" class="p-4 lg:w-1/4 md:w-1/2">
                    <div class="h-full flex flex-col items-center text-center">
                        <img alt="team" class="flex-shrink-0 rounded-lg w-full h-[300px] object-cover object-center mb-4"
                            :src="employee.urlImg">
                        <div class="w-full">
                            <h2 class="title-font font-medium text-lg text-white">{{  employee.name  }}</h2>
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
                </div>
            </div>
            <!-- ======================= -->
        </div>
    </section>
</template>

<script setup>
import IconArrowright from '~/assets/icons/arrow__right.svg'

const agencyItems = [
    {
        subTitle: 'Людей',
        title: '20',
        description: 'Одностраничный сайт (Landing Page) – так называют промо-сайты для презентации товара, услуги и организации мгновенных продаж. Одна-единственная страница принесёт колоссальную прибыль: иначе и быть не может.'
    },
    {
        subTitle: 'На рынке',
        title: 'много лет',
        description: 'Одностраничный сайт (Landing Page) – так называют промо-сайты для презентации товара, услуги и организации мгновенных продаж. Одна-единственная страница принесёт колоссальную прибыль: иначе и быть не может.'
    },
    {
        subTitle: 'Проектов',
        title: '40',
        description: 'Одностраничный сайт (Landing Page) – так называют промо-сайты для презентации товара, услуги и организации мгновенных продаж. Одна-единственная страница принесёт колоссальную прибыль: иначе и быть не может.'
    },
    {
        subTitle: 'Опыта',
        title: '10 лет',
        description: 'Одностраничный сайт (Landing Page) – так называют промо-сайты для презентации товара, услуги и организации мгновенных продаж. Одна-единственная страница принесёт колоссальную прибыль: иначе и быть не может.'
    }
]

const methodItems = [
    {
        subTitle: 'Аналитика и разработка ТЗ',
        title: 'Исследование',
        description: 'Одностраничный сайт (Landing Page) – так называют промо-сайты для презентации товара, услуги и организации мгновенных продаж. Одна-единственная страница принесёт колоссальную прибыль: иначе и быть не может.'
    },
    {
        subTitle: 'Прототипирование и дизайн страниц',
        title: 'Дизайн',
        description: 'Одностраничный сайт (Landing Page) – так называют промо-сайты для презентации товара, услуги и организации мгновенных продаж. Одна-единственная страница принесёт колоссальную прибыль: иначе и быть не может.'
    },
    {
        subTitle: 'Работа с контентом',
        title: 'Маркетинг',
        description: 'Одностраничный сайт (Landing Page) – так называют промо-сайты для презентации товара, услуги и организации мгновенных продаж. Одна-единственная страница принесёт колоссальную прибыль: иначе и быть не может.'
    },
    {
        subTitle: 'Верстка и настройка модулей',
        title: 'Разработка',
        description: 'Одностраничный сайт (Landing Page) – так называют промо-сайты для презентации товара, услуги и организации мгновенных продаж. Одна-единственная страница принесёт колоссальную прибыль: иначе и быть не может.'
    }
]

const employees = [
    {
        name: 'The Invisible Man',
        job: 'Директор',
        description: 'DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.',
        urlImg: 'https://dummyimage.com/200x200'
    },
    {
        name: 'The Invisible Man',
        job: 'UI Дизайнер',
        description: 'DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.',
        urlImg: 'https://dummyimage.com/200x200'
    },
    {
        name: 'The Invisible Man',
        job: 'Прорграмист',
        description: 'DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.',
        urlImg: 'https://dummyimage.com/200x200'
    },
    {
        name: 'The Invisible Man',
        job: 'Маркетолог',
        description: 'DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.',
        urlImg: 'https://dummyimage.com/200x200'
    }
]

</script>

<style scoped>


</style>