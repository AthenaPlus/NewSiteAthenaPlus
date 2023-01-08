<template>
    <section class="text-white body-font">
        <div class="container px-5 py-24 mx-auto">
            <!-- Blok Header -->
            <div class="border-b-2 border-white pb-[60px]">
                <h1 class="text-4xl sm:text-6xl md:text-[86px] text-white mb-[50px]">Что мы предлагаем</h1>
                <p class="text-2xl sm:text-3xl text-white md:leading-[45px]">Создаем не-шаблонные сетевые решения. От сайтов до мобильных приложений. Запишитесь к нам
                    на интервью и получите бесплатный SEO и Маркетинговый аудит вашего бизнеса.
                </p>
            </div>
            <!-- End Blok Header -->
            <!-- Blok Веб-Сайты переменная websiteItems -->
            <div class="my-[60px] pb-[60px] flex flex-row flex-wrap border-b-2 border-white">
                <div class="w-full md:w-1/4">
                    <h2 class="font_Airborne text-4xl md:text-5xl uppercase sticky top-20">Веб-Сайты</h2>
                </div>
                <div class="w-full md:w-3/4 flex flex-row flex-wrap">
                    <div v-for="websiteItem in websiteItems" :key="websiteItem.index" class="w-full lg:w-1/2 p-8 block__items transition duration-700 ease-in-out ">
                        <h3 class="text-3xl md:text-[32px] mb-2.5 Source_Sans_Pro">{{ websiteItem.title }}</h3>
                        <p class="text-lg">{{ websiteItem.description }}</p>
                        <button @click="openModal"
                            class="w-full py-[10px] text-right text-2xl inline-flex items-center justify-end gap-4 transition duration-700 ease-in-out">Заказать
                            <IconArrowright class="w-20" />
                        </button>
                    </div>

                </div>
            </div>
            <!-- End Blok Веб-Сайты -->
            <!-- Blok Приложение -->
            <div class="my-[60px] pb-[60px] flex flex-row flex-wrap border-b-2 border-white">
                <div class="w-full md:w-1/4">
                    <h2 class="font_Airborne text-4xl md:text-5xl uppercase sticky top-20">Приложение</h2>
                </div>
                <div class="w-full md:w-3/4 flex flex-row flex-wrap">
                    <div class="w-full p-8 block__items">
                        <h3 class="text-3xl md:text-[32px] mb-2.5 Source_Sans_Pro">Заголовок </h3>
                        <p class="text-lg">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. <span id="triggerSpan" class="triggerSpan">Tenim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat.</span> U Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                        </p>
                        <button @click="openModal"
                            class="w-full py-[10px] text-right text-2xl inline-flex items-center justify-end gap-4">Заказать
                            <IconArrowright class="w-20" />
                        </button>
                    </div>

                </div>
            </div>
            <!-- End Blok Приложение -->
            <!-- Blok SEO Услуги  переменная seoItems -->
            <div class="my-[60px] pb-[60px] flex flex-row flex-wrap border-b-2 border-white">
                <div class="w-full md:w-1/4">
                    <h2 class="font_Airborne text-4xl md:text-5xl uppercase sticky top-20">seo услуги</h2>
                </div>
                <div class="w-full md:w-3/4 flex flex-row flex-wrap">
                    <div v-for="seoItem in seoItems" :key="seoItem.index" class="w-full lg:w-1/2 p-8 block__items">
                        <h3 class="text-3xl md:text-[32px] mb-2.5 Source_Sans_Pro">{{ seoItem.title }}</h3>
                        <p class="text-lg">{{ seoItem.description }}</p>
                        <button @click="openModal"
                            class="w-full py-[10px] text-right text-2xl inline-flex items-center justify-end gap-4">Заказать
                            <IconArrowright class="w-20" />
                        </button>
                    </div>

                </div>
            </div>
            <!-- End Blok SEO Услуги -->
            <!-- Blok КОНТЕКСТНАЯ РЕКЛАМА -->
            <div class="my-[60px] pb-[60px] flex flex-row flex-wrap border-b-2 border-white">
                <div class="w-full md:w-1/4">
                    <h2 class="font_Airborne text-4xl md:text-5xl uppercase sticky top-20">Контекстная реклама</h2>
                </div>
                <div class="w-full md:w-3/4 flex flex-row flex-wrap">
                    <div class="w-full p-8 block__items">
                        <h3 class="text-3xl md:text-[32px] mb-2.5 Source_Sans_Pro">Контекстно медийная реклама </h3>
                        <p class="text-lg">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. <span id="triggerSpan" class="triggerSpan">Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat.</span> Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                        </p>
                        <button @click="openModal"
                            class="w-full py-[10px] text-right text-2xl inline-flex items-center justify-end gap-4">Заказать
                            <IconArrowright class="w-20" />
                        </button>
                    </div>

                </div>
            </div>
            <!-- End Blok КОНТЕКСТНАЯ РЕКЛАМА -->
            <!-- Blok  ГРАФИЧЕСКИЙ ДИЗАЙН переменная designItems -->
            <div class="my-[60px] pb-[60px] flex flex-row flex-wrap border-b-2 border-white">
                <div class="w-full md:w-1/4">
                    <h2 class="font_Airborne text-4xl md:text-5xl uppercase sticky top-20">Графический дизайн</h2>
                </div>
                <div class="w-full md:w-3/4 flex flex-row flex-wrap">
                    <div v-for="designItem in designItems" :key="designItem.index" class="w-full lg:w-1/2 p-8 block__items">
                        <h3 class="text-3xl md:text-[32px] mb-2.5 Source_Sans_Pro">{{ designItem.title }}</h3>
                        <p class="text-lg">{{ designItem.description }}</p>
                        <button @click="openModal"
                            class="w-full py-[10px] text-right text-2xl inline-flex items-center justify-end gap-4">Заказать
                            <IconArrowright class="w-20" />
                        </button>
                    </div>

                </div>
            </div>
            <!-- End Blok  ГРАФИЧЕСКИЙ ДИЗАЙН -->
            <!-- Blok поддержка проектов -->
            <div class="my-[60px] flex flex-row flex-wrap">
                <div class="w-full md:w-1/4">
                    <h2 class="font_Airborne text-4xl md:text-5xl uppercase">поддержка проектов</h2>
                </div>
                <div class="w-full md:w-3/4 flex flex-row flex-wrap">
                    <div class="w-full p-8 block__items">
                        <h3 class="text-3xl md:text-[32px] mb-2.5 Source_Sans_Pro">Профессиональная поддержка проектов
                        </h3>
                        <p class="text-lg">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                        </p>
                        <button  @click="openModal"
                            class="w-full py-[10px] text-right text-2xl inline-flex items-center justify-end gap-4">Заказать
                            <IconArrowright class="w-20" />
                        </button>
                    </div>

                </div>
            </div>
            <!-- End Blok поддержка проектов -->
            <!-- Modal Block -->
            <TransitionRoot appear :show="isOpen" as="template">
                <Dialog as="div" @close="closeModal" class="relative z-10">
                    <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100"
                        leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
                        <div class="fixed inset-0 bg-black bg-opacity-90" />
                    </TransitionChild>
            
                    <div class="fixed inset-0 overflow-y-auto">
                        <div class="flex min-h-full items-center justify-center p-4 text-center">
                            <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
                                enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
                                leave-to="opacity-0 scale-95">
                                <DialogPanel
                                    class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900">
                                        Форма для заказа услуг
                                    </DialogTitle>
                                    <div class="mt-2">
                                        <p class="text-sm text-gray-500">
                                            Your payment has been successfully submitted. We’ve sent you
                                            an email with all of the details of your order.
                                        </p>
                                    </div>
            
                                    <div class="mt-4">
                                        <button type="button"
                                            class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            @click="closeModal">
                                            Заказать услуги
                                        </button>
                                    </div>
                                </DialogPanel>
                            </TransitionChild>
                        </div>
                    </div>
                </Dialog>
            </TransitionRoot>
            <!-- End Modal Block -->
        </div>
    </section>
</template>

<script setup>
import IconArrowright from '~/assets/icons/arrow__right.svg'
import { ref } from 'vue'
import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
} from '@headlessui/vue'

const isOpen = ref(false)

function closeModal() {
    isOpen.value = false
}
function openModal() {
    isOpen.value = true
}

/**
 * Константы для заполнения контента
 */

const websiteItems = [
    {
        title: 'Landing page',
        description: "Одностраничный сайт Landing Page так называют  промо-сайты для презентации товара, услуги и организации мгновенных продаж. Одна-единственная страница принесёт колоссальную прибыль: иначе и быть не может."
    },
    {
        title: 'Интернет-магазин',
        description: 'Одностраничный сайт (Landing Page) – так называют промо-сайты для презентации товара, услуги и организации мгновенных продаж. Одна-единственная страница принесёт колоссальную прибыль: иначе и быть не может.'
    },
    {
        title: 'Сайт-визитка',
        description: 'Одностраничный сайт (Landing Page) – так называют промо-сайты для презентации товара, услуги и организации мгновенных продаж. Одна-единственная страница принесёт колоссальную прибыль: иначе и быть не может.'
    },
    {
        title: 'Индивидуальный сайт',
        description: 'Одностраничный сайт (Landing Page) – так называют промо-сайты для презентации товара, услуги и организации мгновенных продаж. Одна-единственная страница принесёт колоссальную прибыль: иначе и быть не может.'
    },
    {
        title: 'Корпоративный сайт',
        description: 'Одностраничный сайт (Landing Page) – так называют промо-сайты для презентации товара, услуги и организации мгновенных продаж. Одна-единственная страница принесёт колоссальную прибыль: иначе и быть не может.'
    },
    {
        title: 'Веб-портал',
        description: 'Одностраничный сайт (Landing Page) – так называют промо-сайты для презентации товара, услуги и организации мгновенных продаж. Одна-единственная страница принесёт колоссальную прибыль: иначе и быть не может.'
    }
]

const seoItems = [
    {
        title: 'SEO Landing page',
        description: 'Одностраничный сайт (Landing Page) – так называют промо-сайты для презентации товара, услуги и организации мгновенных продаж. Одна-единственная страница принесёт колоссальную прибыль: иначе и быть не может.'
    },
    {
        title: 'SEO Интернет-магазин',
        description: 'Одностраничный сайт (Landing Page) – так называют промо-сайты для презентации товара, услуги и организации мгновенных продаж. Одна-единственная страница принесёт колоссальную прибыль: иначе и быть не может.'
    },
    {
        title: 'SEO Сайт-визитка',
        description: 'Одностраничный сайт (Landing Page) – так называют промо-сайты для презентации товара, услуги и организации мгновенных продаж. Одна-единственная страница принесёт колоссальную прибыль: иначе и быть не может.'
    },
    {
        title: 'SEO Индивидуальный сайт',
        description: 'Одностраничный сайт (Landing Page) – так называют промо-сайты для презентации товара, услуги и организации мгновенных продаж. Одна-единственная страница принесёт колоссальную прибыль: иначе и быть не может.'
    }
]

const designItems = [
    {
        title: 'Дизайн Landing page',
        description: 'Одностраничный сайт (Landing Page) – так называют промо-сайты для презентации товара, услуги и организации мгновенных продаж. Одна-единственная страница принесёт колоссальную прибыль: иначе и быть не может.'
    },
    {
        title: 'Дизайн Интернет-магазин',
        description: 'Одностраничный сайт (Landing Page) – так называют промо-сайты для презентации товара, услуги и организации мгновенных продаж. Одна-единственная страница принесёт колоссальную прибыль: иначе и быть не может.'
    },
    {
        title: 'Дизайн Сайт-визитка',
        description: 'Одностраничный сайт (Landing Page) – так называют промо-сайты для презентации товара, услуги и организации мгновенных продаж. Одна-единственная страница принесёт колоссальную прибыль: иначе и быть не может.'
    },
    {
        title: 'Дизайн Индивидуальный сайт',
        description: 'Одностраничный сайт (Landing Page) – так называют промо-сайты для презентации товара, услуги и организации мгновенных продаж. Одна-единственная страница принесёт колоссальную прибыль: иначе и быть не может.'
    }
]



</script>

<style scoped>
.block__items:hover {
    background: linear-gradient(180deg, #FCB040 0%, #FF2BFF 100%);
    border-radius: 10px;
}

.triggerSpan{
	background-image: linear-gradient(180deg, #FCB040 0%, #FF2BFF 100%);
	background-size: 0% 100%;
	background-repeat: no-repeat;
	padding: 5px;
	transition: background-size 1s ease-in-out;
}

.active {
	background-size: 100% 100%;
}
</style>