<template>
    <div>
        <Disclosure v-for="block in blocks" :key="block.index" v-slot="{ open }">
            <DisclosureButton
                class="flex flex-wrap justify-between items-center w-full border-t-2 border-white  px-4 py-5 2xl:py-7  text-left  hover:bg-white/10 transition duration-700 ease-in-out ">
                <h2 class="text-3xl 2xl:w-2/5 xl:w-2/4 lg:w-1/2 md:text-[32] xl:text-[42px] font-normal font_Airborne">{{ block.title }}</h2>
                <ChevronUpIcon :class="open ? 'rotate-180 transform' : ''"
                    class="h-10 w-10 text-gradient transition duration-500 ease-in-out" />
                <div class="flex items-center">
                    <h3 class="hidden sm:block md:text-xl xl:text-2xl font-semibold px-5">Развернуть</h3>
                    <svg width="20" height="20" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.685547 12.8145H12.6719V0.5625H21.1719V12.8145H33.1914V21.3809H21.2051V33.832H12.6387V21.3809H0.685547V12.8145Z" fill="url(#paint0_linear_3835_1477)"/>
                        <defs>
                        <linearGradient id="paint0_linear_3835_1477" x1="17" y1="-8" x2="17" y2="42" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#FCB040"/>
                        <stop offset="1" stop-color="#FF2BFF"/>
                        </linearGradient>
                        </defs>
                    </svg>
                </div>
            </DisclosureButton>
            <Transition name="slide-fade">
                <DisclosurePanel class="px-4 py-4 text-sm text-gray-200">
                    <div class="md:flex justify-between w-full items-center md:max-w-[1000px] pb-10">
                        <p class="w-11/12 sm:w-2/3 lg:w-3/4 text-sm lg:text-xl py-5">
                            {{ block.blockDescription }}
                        </p>
                    </div>
                </DisclosurePanel>
            </Transition>
        </Disclosure>
        <Popup v-if="isInfoPopupVisible" popupTitle="Форма обратной связи" @closePopup="closeInfoPopup" class="fixed">
            <form action="https://formsubmit.co/24c79e3d6353b67ceddcc79963875302" method="POST" class="w-full animate__animated animate__backInDown">
                <input type="text" id="name" name="name" placeholder="Ваше имя*" required  class="input" />
                <input type="tel" id="tel" name="tel" placeholder="Ваш телефон*" required  class="input"  />
                <input type="email" id="email" name="email" placeholder="Ваш e-mail*" required  class="input" />
                <textarea id="message" name="message" placeholder="На какую вакансию заявка?*" required  class="input h-32"></textarea>
                <input type="hidden" name="_subject" value="Новое сообщение с сайта Athenaplus.kz/servicesprices Форма - Запрос на вакансию"/>
                <input type="hidden" name="_captcha" value="false"/>
                <input type="text" name="_honey" style="display:none"/>
                <input type="hidden" name="_template" value="table"/>
                <input type="hidden" name="_next" value="https://athenaplus.kz/thanks"/>
                <input type="submit" placeholder="Отправить" class="text-xl leading-[23px] py-5 px-10 mt-[30px] bg-white text-black cursor-pointer button-hover" />
            </form>
        </Popup>
    </div>
</template>


<script>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { ChevronUpIcon } from '@heroicons/vue/20/solid'

export default {
    components: {
        Disclosure,
        DisclosureButton,
        DisclosurePanel
    },
    data: function () {
        return {
            blocks: [
                {
                    title: 'Фреймворк',
                    blockDescription: 'В разработке DTT были использованы технологии Vue3/Nuxt 3, для увеличенной скорости загрузки сайта. Vue3 — это современная и очень гибкая среда JavaScript, которая предоставляет разработчикам мощный набор инструментов для создания сложных и динамических пользовательских интерфейсов. Благодаря модульной архитектуре, реактивной привязке данных и упрощенному синтаксису Vue3 позволяет разработчикам с легкостью создавать элегантные и эффективные веб-приложения. В частности, Composition API Vue3 упрощает процесс управления состоянием и логикой в ​​крупномасштабных приложениях, что делает его идеальным выбором для таких проектов, требующих высокой степени интерактивности и скорости отклика. '
                },
                {
                    title: 'Пайплайн',
                    blockDescription: 'Проект DostykTransTerminal подразумевает ознакомление с самым современным логистическим терминалом в Республике Казахстан. Описаны услуги компании, достижения компании в цифрах, местоположение и партнеры терминала. '
                }
            ]
        }
    }
}
</script>

<style scoped>
.slide-fade-enter-active {
    transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
}

.text-gradient {
    background: -webkit-linear-gradient(#FCB040, #FF2BFF);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
</style>