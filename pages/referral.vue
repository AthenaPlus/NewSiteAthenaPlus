<template>
    <section
        class="text-white body-font overflow-hidden bg-[url('/img/bg_referral.jpg')] bg-no-repeat bg-center bg-cover z-[5]">
        <div class="relative w-full h-full">
            <div class="absolute bg-[url('/img/bg_referral_mask.png')] inset-0"></div>
            <div class="container px-5 py-24 mx-auto grid min-h-screen place-content-center ">
                <div class="flex flex-wrap">
                    <div class="w-full md:w-1/2 mb-10 md:mb-0">
                        <h1
                            class="text-4xl md:text-6xl lg:text-[66px] animate__animated animate__fadeInLeft animate__delay-0.5s">
                            Стань партнером новой веб-студии </h1>
                    </div>
                    <div class="w-full md:w-1/2 pl-0 md:pl-10">
                        <p class="text-[26px] mb-4 animate__animated animate__fadeInRight animate__delay-1s">
                            Приведи клиента и получи до 10% от суммы договора. Без дополнительных комиссий и подводных
                            камней.
                        </p>
                        <button @click="showPopupInfo"
                            class="btn-primary hover:btn--shadow uppercase animate__animated animate__fadeInUp animate__delay-2s">Подать
                            заявку</button>
                    </div>
                </div>
            </div>
        </div>
        <Popup v-if="isInfoPopupVisible" popupTitle="Форма обратной связи" @closePopup="closeInfoPopup" class="absolute">
            <form action="https://formsubmit.co/24c79e3d6353b67ceddcc79963875302" method="POST"
                class="w-full animate__animated animate__backInDown">
                <input type="text" id="name" name="name" placeholder="Ваше имя*" required class="input" />
                <input type="tel" id="tel" name="tel" placeholder="Ваш телефон*" required class="input" />
                <input type="email" id="email" name="email" placeholder="Ваш e-mail*" required class="input" />
                <textarea id="message" name="message" placeholder="Подать заявку на партнёрство*" required class="input h-32"></textarea>
                <input type="hidden" name="_subject"
                    value="Новое сообщение с сайта Athenaplus.kz/referral Форма - Заявка на партнёрство" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="text" name="_honey" style="display:none" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_next" value="https://athenaplus.kz/thanks" />
                <input type="submit" placeholder="Отправить"
                    class="text-xl leading-[23px] py-5 px-10 mt-[30px] bg-white text-black cursor-pointer button-hover" />
            </form>
        </Popup>
    </section>
</template>
<script setup>
useHead({
    title: 'Стань партнером Athena Plus',
    meta: [
        { name: 'description', content: 'Приведи клиента и получи до 10% от суммы договора. Без дополнительных комиссий и подводных камней.' }
    ],
})
</script>

<script>

export default {
    data() {
        return {
            isInfoPopupVisible: false,
        }
    },
    methods: {
        showPopupInfo() {
            this.isInfoPopupVisible = true
        },
        closeInfoPopup() {
            this.isInfoPopupVisible = false
        }
    }
}
</script>

<style scoped>
.-z {
    z-index: -1;
}
</style>