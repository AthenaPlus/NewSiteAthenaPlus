<template>
    <section class="text-white body-font">
        <div class="container px-5 py-24 mx-auto">
            <!-- Блок СОВРЕМЕННАЯ ВЕБ СТУДИО -->
            <div class="flex flex-col lg:flex-row gap-10 border-b-2 border-white/70 pb-10">
                <div class="w-full lg:w-1/2">
                    <h1 class="sticky top-10 uppercase text-[80px]">Современная веб студио</h1>
                </div>
                <div class="w-full lg:w-1/2">
                    <h2 class="font_Airborne uppercase text-[80px] mt-0 lg:mt-28">мы создаем <br
                            class="hidden lg:inline-block" /> ваш дизайн</h2>
                    <p class="text-[26px] font-semibold leading-8">Athena Plus это Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed
                        do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
            </div>
            <!-- Блок  НАШЕ АГЕНСТВО -->
            <div class="flex flex-col lg:flex-row gap-10 border-b-2 border-white/70 pt-[50px] pb-10">
                <div class="w-full lg:w-1/3">
                    <h3 class="sticky top-10 uppercase font_Airborne text-[50px]">Наше агенство</h3>
                </div>
                <div class="w-full lg:w-2/3">
                    <div class="grid grid-flow-col-1 md:grid-cols-2  gap-[75px]">
                        <div v-for="agencyItem in agencyItems" :key="agencyItem.index" class="">
                            <span class="text-[26px] font-semibold">{{ agencyItem.subTitle }}</span>
                            <h3 class="font_Airborne text-[50px]">{{ agencyItem.title }}</h3>
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
                    <h3 class="sticky top-10 uppercase font_Airborne text-[50px]">Методы работы</h3>
                </div>
                <div class="w-full lg:w-2/3">
                    <div class="grid grid-flow-col-1 md:grid-cols-2  gap-[75px]">
                        <div v-for="methodItem in methodItems" :key="methodItem.index" class="">
                            <span class="text-[26px] font-semibold">{{ methodItem.subTitle }}</span>
                            <h3 class="font_Airborne text-[50px]">{{ methodItem.title }}</h3>
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
                    <h3 class="sticky top-10 uppercase font_Airborne text-[50px]">Лучшие работы</h3>
                </div>
                <div class="w-full lg:w-2/3">
                    <div class="grid grid-flow-col-1 md:grid-cols-2  gap-[75px]">
                        <div class="">
                            <p class="text-[26px] font-semibold">
                                Athena Plus это Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ex ea commodo consequat. 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
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

</script>

<style scoped>


</style>