<template>
    <section class="text-white body-font">
        <div class="container flex flex-wrap px-5 pb-12 pt-16 md:py-24 mx-auto">
            <div class="w-full md:w-1/2 mb-10 md:mb-0">
                <h1 class="sticky top-20 text-4xl md:text-6xl lg:text-[66px] animate__animated animate__fadeInLeft animate__delay-0.5s">Построй карьеру вместе с Athena Plus</h1>
            </div>
            <div class="w-full md:w-1/2">
                <img src="/img/career.png" alt="" class="max-w-full animate__animated animate__zoomIn animate__delay-1s" />
                <p class="my-4 max-w-[600px]">
                    Являешься фанатом веба? Считаешь что разработка сайтов это не просто входная дверь в IT и Дизайн?
                    Понимаешь разницу между "хорошо" и "как надо"? Хочешь создать что-то особенное?
                    Нам по пути. Подавай заявку.
                </p>
                <button @click="showPopupInfo" class="btn-primary hover:btn--shadow">Подать заявку</button>
            </div>
        </div>
        <div class="container px-5 py-0 md:py-4 mx-auto">
            <div class="w-full">
                <div class="mx-auto w-full">
                    <VacancyVkladki/>
                </div>
            </div>
        </div>
        <!-- Forma Vacancy -->
        <Popup v-if="isInfoPopupVisible" popupTitle="Форма обратной связи" @closePopup="closeInfoPopup" class="fixed">
            <form action="https://formsubmit.co/24c79e3d6353b67ceddcc79963875302" method="POST" class="w-full animate__animated animate__backInDown">
                <input type="text" id="name" name="name" placeholder="Ваше имя*" required  class="input" />
                <input type="tel" id="tel" name="tel" placeholder="Ваш телефон*" required  class="input"  />
                <input type="email" id="email" name="email" placeholder="Ваш e-mail*" required  class="input" />
                <textarea id="message" name="message" placeholder="На какую вакансию заявка?*" required  class="input h-32"></textarea>
                <input type="hidden" name="_subject" value="Новое сообщение с сайта Athenaplus.kz/vacancy Форма - Запрос на вакансию"/>
                <input type="hidden" name="_captcha" value="false"/>
                <input type="text" name="_honey" style="display:none"/>
                <input type="hidden" name="_template" value="table"/>
                <input type="hidden" name="_next" value="https://athenaplus.kz/thanks"/>
                <input type="submit" placeholder="Отправить" class="text-xl leading-[23px] py-5 px-10 mt-[30px] bg-white text-black cursor-pointer button-hover" />
            </form>
        </Popup>
    </section>
</template>

<script>
useHead({
    title: 'Карьера с Athena Plus',
    meta: [
        { name: 'description', content: 'Являешься фанатом веба? Считаешь что разработка сайтов это не просто входная дверь в IT и Дизайн.  Хочешь создать что-то особенное? Нам по пути. Подавай заявку' }
    ],
})
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

<style scoped>

</style>