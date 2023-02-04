<template>
    <div>
        <Disclosure v-for="vacancy in vacancys" :key="vacancy.index" v-slot="{ open }">
            <DisclosureButton
                class="flex flex-wrap justify-between items-center  w-full border-t-2 border-white  px-4 py-2 text-left  hover:bg-white/10 transition duration-700 ease-in-out ">
                <h2 class="text-3xl md:text-[50px] font-normal font_Airborne">{{ vacancy.title }}</h2>
                <h3 class="text-xl md:text-[40px]">{{ vacancy.subTitle }}</h3>
                <ChevronUpIcon :class="open ? 'rotate-180 transform' : ''"
                    class="h-10 w-10 text-gradient transition duration-500 ease-in-out" />
            </DisclosureButton>
            <Transition name="slide-fade">
                <DisclosurePanel class="px-4 py-4 text-sm text-gray-200">
                    <div class="w-full md:max-w-[600px] ml-auto pb-10">
                        <h4 class="text-4xl font-semibold">{{ vacancy.vacancyTitle }}</h4>
                        <p class="text-lg md:text-2xl font-normal py-5">
                            {{ vacancy.vacancyDescription }}
                        </p>
                        <button @click="showPopupInfo" class="btn-primary hover:btn--shadow ">Подать заявку</button>
                    </div>
                </DisclosurePanel>
            </Transition>
        </Disclosure>
    </div>
            <!-- Forma Vacancy -->
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
</template>


<script>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { ChevronUpIcon } from '@heroicons/vue/20/solid'


export default {
    components: {
        Disclosure,
        DisclosureButton,
        DisclosurePanel,
        ChevronUpIcon
    },
    data: function () {
        return {
            vacancys: [
                {
                    title: 'Специалист по B2B',
                    subTitle: '2 открытых вакансии ',
                    vacancyTitle: 'Продажи',
                    vacancyDescription: 'Хочешь поработать с первыми лицами и топ-менеджерами компаний? Хочешь приложить руку к лучшим digital-продуктам? Любишь помогать клиенту и хорошо зарабатывать? Подавай заявку. Мы найдем общий язык.'
                },
                {
                    title: 'UX/UI-Дизайнер',
                    subTitle: '1 открытая вакансия',
                    vacancyTitle: 'Дизайнер',
                    vacancyDescription: 'Тщетно относишься к дизайну и работаешь с подходом pixel-perfect? Ежедневно тренируешь насмотренность? Готовы создавать дизайн для лучших сайтов? Пробей дорогу в нашей студии.'
                },
                {
                    title: 'SMM-специалист',
                    subTitle: '1 открытых вакансии',
                    vacancyTitle: 'Social Media Marketing',
                    vacancyDescription: 'Знаешь как привлечь аудиторию и продать услуги и товары любого формата? Умеешь грамотно преподнести себя? Знаешь цену качественного контента? Покажи Нам'
                },
                {
                    title: 'Project Manager',
                    subTitle: '4 открытых вакансии',
                    vacancyTitle: 'Project Management',
                    vacancyDescription: 'Умеешь работать как с дизайнерами, маркетологами, разработчиками? Сдаешь проекты своевременно и с высоким cost-efficiency? Вырасти компанию вместе с нами.'
                },
            ],
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

<style scoped>
/*
  Enter and leave animations can use different
  durations and timing functions.
*/
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