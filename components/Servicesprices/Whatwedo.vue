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
                    <p class="mt-5 text-base lg:text-xl LineHeight_30 font-normal">{{ WhatwedoDescription }}</p>
                    <p class="mb-5 text-base lg:text-xl LineHeight_30 font-normal">{{ WhatwedoDescription2 }}</p>
                    <div class="flex justify-center mr-auto">
                        <button @click="showPopupInfo" class="btn btn--shadow">Задать Вопрос</button>
                    </div>
                </div>
                <div class="w-full lg:w-1/2 order-1 lg:order-2">
                    <h1
                        class="text-4xl md:text-7xl 2xl:text-8xl mr-auto block lg:hidden animate__animated animate__fadeInLeft animate__delay-0.5s">
                        {{ WhatwedoTitle }}
                    </h1>
                    <img src="/img/webp/WhatWeDo.webp"
                        class="w-full my-5 lg:my-0 animate__animated animate__zoomIn animate__delay-1s" />
                </div>
            </div>
            <div class="hidden lg:grid grid-cols-1 lg:grid-cols-2 mt-40 gap-x-14 gap-y-20">
                <div class="flex flex-col md:flex-row items-center justify-between gap-x-1 w-full border-t-2 border-white">
                    <!-- <div class="w-28"><span class="Namber">#1</span></div> -->
                    <div class="mt-9 ml-auto w-1/2">
                        <IconIcon1 class="w-52 h-52" />
                    </div>

                    <div class="text-left pr-7">
                        <h3 class="text-3xl font-semibold mt-16 mb-5">UX/UI</h3>
                        <p class="max-w-sm ml-auto">Визуальные элементы, предназначенные для удобного взаимодействия
                            пользователя с платформой. Мы поможем удержать клиентов и повысить коэффицент конверсии.
                        </p>
                        <button @click="showPopupInfo" class="grid place-items-center text-lg font-semibold mt-5 w-full uppercase py-3.5 text-black bg-white button-hover">Оставить заявку</button>
                    </div>
                </div>

                <div class="flex flex-col md:flex-row items-center justify-between gap-x-1 w-full border-t-2 border-white">
                    <!-- <div class="w-28"><span class="Namber">#2</span></div> -->
                    <div class="mt-9 ml-auto w-1/2">
                        <IconIcon2 class="w-52 h-52" />
                    </div>

                    <div class="text-left pr-7">
                        <h3 class="text-3xl font-semibold mt-16 mb-5">Внедрение CRM-систем</h3>
                        <p class="max-w-sm ml-auto">Совместно создаем план действий для ввода CRM-системы в
                            digital-продукт. Подготавливаем Вас и Ваших сотрудников к переменам.

                        </p>
                        <button @click="showPopupInfo" class="grid place-items-center text-lg font-semibold mt-5 w-full uppercase py-3.5 text-black bg-white button-hover">Оставить заявку</button>
                    </div>
                </div>

                <div class="flex flex-col md:flex-row items-center justify-between gap-x-1 w-full border-t-2 border-white">
                    <!-- <div class="w-28"><span class="Namber">#3</span></div> -->
                    <div class="mt-9 ml-auto w-1/2">
                        <IconIcon3 class="w-52 h-52" />
                    </div>

                    <div class="text-left pr-7">
                        <h3 class="text-3xl font-semibold mt-16 mb-5">Контекстная Реклама и SEO</h3>
                        <p class="max-w-sm ml-auto">Создаем оптимальную рекламную стратегию в Google и Yandex. Мастера
                            digital-маркетинга и SEO стоявшие за крупными брендами, приведут лидов на Ваш продукт.

                        </p>
                        <button @click="showPopupInfo" class="grid place-items-center text-lg font-semibold mt-5 w-full uppercase py-3.5 text-black bg-white button-hover">Оставить заявку</button>
                    </div>
                </div>

                <div class="flex flex-col md:flex-row items-center justify-between gap-x-1 w-full border-t-2 border-white">
                    <!-- <div class="w-28"><span class="Namber">#4</span></div> -->
                    <div class="mt-9 ml-auto w-1/2">
                        <IconIcon4 class="w-52 h-52" />
                    </div>

                    <div class="text-left pr-7">
                        <h3 class="text-3xl font-semibold mt-16 mb-5">Графический Дизайн</h3>
                        <p class="max-w-sm ml-auto"> Запоминающиеся логотипы, брендбуки и гайдлайны. Анимированные
                            коммерческие презентации. Весь пакет услуг дизайнера в одной студии.
                        </p>
                        <button @click="showPopupInfo" class="grid place-items-center text-lg font-semibold mt-5 w-full uppercase py-3.5 text-black bg-white button-hover">Оставить заявку</button>
                    </div>
                </div>

                <div class="flex flex-col md:flex-row items-center justify-between gap-x-1 w-full border-t-2 border-white">
                    <!-- <div class="w-28"><span class="Namber">#5</span></div> -->
                    <div class="mt-9 ml-auto w-1/2 mr-9">
                        <IconIcon5 class="w-52 h-52" />
                    </div>

                    <div class="text-left pr-7">
                        <h3 class="text-3xl font-semibold mt-16 mb-5">Разработка мобильных приложений</h3>
                        <p class="max-w-sm ml-auto"> Мобильная разработка PWA, Flutter, React Native. Создаем
                            приложения, удобные для конечного пользователя.
                        </p>
                        <button @click="showPopupInfo" class="grid place-items-center text-lg font-semibold mt-5 w-full uppercase py-3.5 text-black bg-white button-hover">Оставить заявку</button>
                    </div>
                </div>
                
                <div class="flex flex-col md:flex-row items-center justify-between gap-x-1 w-full border-t-2 border-white">
                    <!-- <div class="w-28"><span class="Namber">#6</span></div> -->
                    <div class="mt-9 ml-auto w-1/2">
                        <IconIcon6 class="w-52 h-52" />
                    </div>

                    <div class="text-left pr-7">
                        <h3 class="text-3xl font-semibold mt-16 mb-5">Создание веб-сайтов</h3>
                        <p class="max-w-sm ml-auto">Разрабатываем веб-сайты на передовых фреймворках. Понимаем важность
                            чистого кода и правильной архитектуры.
                            Мы способны создавать как привлекающие внимание landing-page, так и массивные
                            интернет-порталы.
                        </p>
                        <button @click="showPopupInfo" class="grid place-items-center text-lg font-semibold mt-5 w-full uppercase py-3.5 text-black bg-white button-hover">Оставить заявку</button>
                    </div>
                </div>
            </div>
            <!-- Slaider WhatWeDo -->
            <SlaiderWhatwedo class="block lg:hidden" />
        </div>
        <Popup v-if="isInfoPopupVisible" popupTitle="Форма обратной связи" @closePopup="closeInfoPopup" class="fixed">
            <form action="https://formsubmit.co/24c79e3d6353b67ceddcc79963875302" method="POST" class="w-full animate__animated animate__backInDown">
                <input type="text" id="name" name="name" placeholder="Ваше имя*" required  class="input" />
                <input type="tel" id="tel" name="tel" placeholder="Ваш телефон*" required  class="input"  />
                <input type="email" id="email" name="email" placeholder="Ваш e-mail*" required  class="input" />
                <textarea id="message" name="message" placeholder="Ваш вопрос*" required  class="input h-32"></textarea>
                <input type="hidden" name="_subject" value="Новое сообщение с сайта Athenaplus.kz/servicesprices Форма - Задать вопрос"/>
                <input type="hidden" name="_captcha" value="false"/>
                <input type="text" name="_honey" style="display:none"/>
                <input type="hidden" name="_template" value="table"/>
                <input type="hidden" name="_next" value="https://athenaplus.kz/thanks"/>
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
const WhatwedoDescription = 'Веб-разработка это не только дизайн и вёрстка. Мы решаем ряд маркетинговых бизнес-задач для создания качественного digital-продукта. Мы работаем с такими концепциями как Design Thinking и MVP concept and thinking. Эти концепты упрощают создание лидеров каждой сферы рынка.'
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