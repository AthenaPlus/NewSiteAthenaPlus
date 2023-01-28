<template>
    <section class="text-white body-font relative">
        <div class="container mx-auto px-5 py-24">
            <div class=" flex flex-col md:flex-row md:flex-wrap items-center">
                <div
                    class="lg:flex-grow w-full lg:w-1/2 lg:pr-16 md:pr-14 flex flex-col md:items-start text-left mb-16 lg:mb-0 items-center order-2 lg:order-1">
                    <h1
                        class="text-4xl md:text-7xl 2xl:text-8xl mr-auto hidden lg:block animate__animated animate__fadeInLeft animate__delay-0.5s">
                        {{ WhatwedoTitle }}
                    </h1>
                    <p class="mb-10 text-base lg:text-xl LineHeight_30 font-normal">{{ WhatwedoDescription }}</p>
                    <p class="mb-10 text-base lg:text-xl LineHeight_30 font-normal">{{ WhatwedoDescription2 }}</p>
                    <div class="flex justify-center mr-auto">
                        <button @click="showPopupInfo" class="btn btn--shadow">Задать Вопрос</button>
                    </div>
                </div>
                <div class="w-full lg:w-1/2 order-1 lg:order-2">
                    <h1
                        class="text-4xl md:text-7xl 2xl:text-8xl mr-auto block lg:hidden animate__animated animate__fadeInLeft animate__delay-0.5s">
                        {{ WhatwedoTitle }}
                    </h1>
                    <img src="/img/WhatWeDo.png"
                        class="w-full my-5 lg:my-0 animate__animated animate__zoomIn animate__delay-1s" />
                </div>
            </div>
            <div class="hidden lg:grid grid-cols-1 lg:grid-cols-2 mt-40 gap-x-14 gap-y-20">
                <div class="flex flex-col md:flex-row justify-between gap-x-1 w-full border-t-2 border-white">
                    <div class="w-28"><span class="Namber">#1</span></div>
                    <div class="text-right pr-7">
                        <h3 class="text-3xl font-semibold mt-16">UX/UI</h3>
                        <p class="max-w-sm ml-auto">Визуальные элементы, предназначенные для удобного взаимодействия
                            пользователя с платформой. Мы поможем удержать клиентов и повысить коэффицент конверсии.
                        </p>

                    </div>
                    <div class="mt-9 ml-auto">
                        <IconIcon1 class="w-52 h-52" />
                    </div>
                </div>

                <div class="flex flex-col md:flex-row justify-between gap-x-1 w-full border-t-2 border-white">
                    <div class="w-28"><span class="Namber">#2</span></div>
                    <div class="text-right pr-7">
                        <h3 class="text-3xl font-semibold mt-16">Внедрение CRM-систем</h3>
                        <p class="max-w-sm ml-auto">Совместно создаем план действий для ввода CRM-системы в
                            digital-продукт. Подготавливаем Вас и Ваших сотрудников к переменам.

                        </p>

                    </div>
                    <div class="mt-9 ml-auto">
                        <IconIcon2 class="w-52 h-52" />
                    </div>
                </div>

                <div class="flex flex-col md:flex-row justify-between gap-x-1 w-full border-t-2 border-white">
                    <div class="w-28"><span class="Namber">#3</span></div>
                    <div class="text-right pr-7">
                        <h3 class="text-3xl font-semibold mt-16">Контекстная Реклама и SEO</h3>
                        <p class="max-w-sm ml-auto">Создаем оптимальную рекламную стратегию в Google и Yandex. Мастера
                            digital-маркетинга и SEO стоявшие за крупными брендами, приведут лидов на Ваш продукт.

                        </p>

                    </div>
                    <div class="mt-9 ml-auto">
                        <IconIcon3 class="w-52 h-52" />
                    </div>
                </div>

                <div class="flex flex-col md:flex-row justify-between gap-x-1 w-full border-t-2 border-white">
                    <div class="w-28"><span class="Namber">#4</span></div>
                    <div class="text-right pr-7">
                        <h3 class="text-3xl font-semibold mt-16">Графический Дизайн</h3>
                        <p class="max-w-sm ml-auto"> Запоминающиеся логотипы, брендбуки и гайдлайны. Анимированные
                            коммерческие презентации. Весь пакет услуг дизайнера в одной студии.
                        </p>

                    </div>
                    <div class="mt-9 ml-auto">
                        <IconIcon4 class="w-52 h-52" />
                    </div>
                </div>

                <div class="flex flex-col md:flex-row  justify-between gap-x-1 w-full border-t-2 border-white">
                    <div class="w-28"><span class="Namber">#5</span></div>
                    <div class="text-right pr-7">
                        <h3 class="text-3xl font-semibold mt-16">Разработка мобильных приложений</h3>
                        <p class="max-w-sm ml-auto"> Мобильная разработка PWA, Flutter, React Native. Создаем
                            приложения, удобные для конечного пользователя.
                        </p>

                    </div>
                    <div class="mt-9 ml-auto">
                        <IconIcon5 class="w-52 h-52" />
                    </div>
                </div>
                <div class="flex flex-col md:flex-row justify-between gap-x-1 w-full border-t-2 border-white">
                    <div class="w-28"><span class="Namber">#6</span></div>
                    <div class="text-right pr-7">
                        <h3 class="text-3xl font-semibold mt-16">Создание веб-сайтов</h3>
                        <p class="max-w-sm ml-auto">Разрабатываем веб-сайты на передовых фреймворках. Понимаем важность
                            чистого кода и правильной архитектуры.
                            Мы способны создавать как привлекающие внимание landing-page, так и массивные
                            интернет-порталы.
                        </p>

                    </div>
                    <div class="mt-9 ml-auto">
                        <IconIcon6 class="w-52 h-52" />
                    </div>
                </div>
            </div>
            <!-- Slaider WhatWeDo -->
            <SlaiderWhatwedo class="block lg:hidden" />
        </div>
        <Popup v-if="isInfoPopupVisible" popupTitle="Форма обратной связи" @closePopup="closeInfoPopup">
            <form class="w-full animate__animated animate__backInDown" method="post">
                <input type="text" id="name" name="name" placeholder="Ваше имя*" required  class="input" />
                <input type="tel" id="tel" name="tel" placeholder="Ваш телефон*" required  class="input"  />
                <input type="email" id="email" name="email" placeholder="Ваш e-mail*" required  class="input" />
                <textarea id="message" name="message" placeholder="Ваш вопрос*" required  class="input h-32"></textarea>
                <input type="submit" placeholder="Отправить" class="text-xl leading-[23px] py-5 px-10 mt-[30px] bg-white text-black cursor-pointer button-hover" />
            </form>
        </Popup>
    </section>
</template>

<script setup>
import IconPicterFrame1 from '~/assets/icons/PicterFrame1.svg'
import IconIcon1 from '~/assets/icons/icon1.svg'
import IconIcon2 from '~/assets/icons/icon2.svg'
import IconIcon3 from '~/assets/icons/icon3.svg'
import IconIcon4 from '~/assets/icons/icon4.svg'
import IconIcon5 from '~/assets/icons/icon5.svg'
import IconIcon6 from '~/assets/icons/icon6.svg'
const WhatwedoTitle = 'чем мы занимаемся'
const WhatwedoDescription = 'Веб-разработка это не только дизайн и вёрстка. Мы решаем ряд маркетинговых бизнес-задач для создания качественного digital-продукта.'
const WhatwedoDescription2 = 'Мы работаем с такими концепциями как Design Thinking и MVP concept and thinking. Эти концепты упрощают создание лидеров каждой сферы рынка.'
</script>

<script>

export default {
    data() {
        return {
            isInfoPopupVisible: false,
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
.WhatwedoTitle {
    font-family: 'Airborne';
    font-style: normal;
    font-weight: 400;
    font-size: 100px;
    line-height: 100%;
    /* or 100px */
    color: #FFFFFF;
}
.WhatwedoSubtitle {
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 600;
    font-size: 26px;
    line-height: 150%;
    /* or 39px */
    color: #FFFFFF;
}
.LineHeight_30 {
    line-height: 150%;
}
.Namber {
    font-family: 'Airborne';
    font-style: normal;
    font-weight: 400;
    font-size: 80px;
    line-height: 102.99%;
    /* or 82px */
    text-align: left;
    background: linear-gradient(180deg, #FCB040 0%, #FF2BFF 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
}

.img-layout {
    left: 5px;
    top: 30px;
}
</style>