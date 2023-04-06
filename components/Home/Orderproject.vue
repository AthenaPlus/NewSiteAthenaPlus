<template>
    <section id="signInterview"
        class="mainClass text-white body-font relative md:bg-none bg-no-repeat bg-top bg-contain md:bg-cover z-0">
        <div id="order" class="sm:container px-5 mx-auto overflow-x-hidden">
            <div class="flex flex-col text-center w-full mb-12">
                <h1 data-aos="fade-right" class="text-4xl sm:text-5xl md:text-7xl lg:text-8xl 2xl:text-9xl text-left md:mt-16">Есть проект?</h1>
                <div data-aos="fade-left" class="flex items-center md:justify-end gap-2  md:mr-32">
                    <IconArrow class="hidden md:block" />
                    <h2 class="font_Airborne md:Source_Sans_Pro md:mt-5 lg:mt-0 text-xl sm:text-3xl lg:text-5xl 2xl:text-7xl">Оставьте заявку</h2>
                    <IconArrowright class="block md:hidden w-10" />
                </div>
                <div class="flex flex-col md:flex-row items-start lg:items-center w-full mt-">
                    <div class="">
                        <h3 class="hidden md:block text-left text-2xl text-white Source_Sans_Pro mb-8">Какой продукт вы хотите создать<span class="text-red-500"></span>?</h3>

                        <form action="https://formsubmit.co/24c79e3d6353b67ceddcc79963875302" method="POST"
                            class="flex flex-wrap my-10">
                            <div class="hidden md:flex flex-wrap justify-start  gap-5 mb-10">
                                <label for="app" @click="clickButton1"
                                    class="btn--label text-white py-3 cursor-pointer"
                                    :class="[isClickButton1 ? 'btn--click' : '']"> Приложение</label>
                                <input type="radio" id="app" name="project_type" value="Приложение" class="w-0" />

                                <label for="site" @click="clickButton2"
                                    class="btn--label text-white py-3 cursor-pointer"
                                    :class="[isClickButton2 ? 'btn--click' : '']"> Сайт</label>
                                <input type="radio" id="Website" name="project_type" value="Сайт"
                                    class="w-0" />

                                <label for="CRM" @click="clickButton3" class="btn--label text-white py-3 cursor-pointer"
                                    :class="[isClickButton3 ? 'btn--click' : '']">CRM-система</label>
                                <input type="radio" id="CRM" name="project_type" value="CRM-система" class="w-0" />
                                <label for="Marketing" @click="clickButton4" class="btn--label text-white py-3 cursor-pointer"
                                    :class="[isClickButton4 ? 'btn--click' : '']">Маркетинг</label>
                                <input type="radio" id="marketing" name="project_type" value="Маркетинг" class="w-0" />
                            </div>
                            <div class="pr-5 w-full md:w-1/2 mb-5 md:mb-0">
                                <div class="relative">
                                    <input type="text" id="name" name="name" placeholder="Ваше имя *" required
                                        autocomplete="on"
                                        class="w-full bg-gray-100 bg-opacity-5  border-b-2 border-gray-300 focus:border-pink-500 focus:border-b-2 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                                </div>
                            </div>
                            <div class="pr-5 w-full md:w-1/2">
                                <div class="relative">
                                    <input type="tel" id="phone" name="phone" placeholder="Ваш телефон *" required
                                        autocomplete="on"
                                        class="w-full bg-gray-100 bg-opacity-5  border-b-2 border-gray-300 focus:border-pink-500 focus:border-b-2 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                                </div>
                            </div>
                            <div class="pr-5 pt-10 w-full">
                                <div class="relative">
                                    <textarea id="message" name="message" placeholder="Опишите проект *" required
                                        autocomplete="on"
                                        class="w-full bg-gray-100 bg-opacity-5  border-b-2 border-gray-300 focus:border-pink-500 focus:border-b-2 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></textarea>
                                </div>
                            </div>
                            <div>
                                <input type="hidden" name="_subject"
                                    value="Новое сообщение с сайта Athenaplus.kz/servicesprices Форма - Задать вопрос" />
                                <input type="hidden" name="_captcha" value="false" />
                                <input type="text" name="_honey" style="display:none" />
                                <input type="hidden" name="_template" value="table" />
                                <input type="hidden" name="_next" value="https://athenaplus.kz/thankshome" />
                            </div>
                            <div class="pt-10">
                                <button type="submit"
                                    class="btn btn-send flex items-center gap-2 mx-auto text-black bg-white border-0 focus:outline-none text-lg">
                                    <img src="/img/loading.svg" alt="loading" id="loading">
                                    <img src="/img/success.svg" alt="success" id="success">
                                    <p id="btn-text" class="font_Airborne button-text">Отправить заявку</p>
                                </button>
                            </div>
                        </form>
                    </div>
                    <div class="ml-0 md:ml-16 md:my-36 lg:my-0">
                        <p class="text-white text-lg text-left w-full md:w-96">
                            Поделитесь с нами своим видением, чтобы мы могли заложить его в основу будущего проекта.
                            Каким деталям нужно уделить особое внимание? Каковы ваши ожидания и на какие сроки
                            рассчитываете? Мы всегда рады сотрудничеству.
                        </p>

                        <AppSocialButtons class="mt-8 " />
                    </div>
                </div>
            </div>
        </div>
        <div class="absolute inset-0  overflow-hidden minus opacity-20">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1200 900" fill="none">
  
  <path class="line line3" d="M-10,348c15,17,24,43,68,47s97-43,183-12s165,73,283,49 s290-98,472-87c131.22,7.93,225.6,51.07,304,38"/>
  <path class="line line2" d="M-10,348c15,17,24,43,68,47s97-43,183-12s165,73,283,49 s290-98,472-87c131.22,7.93,225.6,51.07,304,38"/>
  <path class="line line1" d="M-10,348c15,17,24,43,68,47s97-43,183-12s165,73,283,49 s290-98,472-87c131.22,7.93,225.6,51.07,304,38"/>
  
  <path class="line line3" d="M-10,319c28-9,68.84,25.02,116,26c48,1,83.41-12.8,124-7 c42,6,84,45,161,59s144,12,263-36s234-86,371-62s216,52,279,62"/>
  <path class="line line2" d="M-10,319c28-9,68.84,25.02,116,26c48,1,83.41-12.8,124-7 c42,6,84,45,161,59s144,12,263-36s234-86,371-62s216,52,279,62"/>
  <path class="line line1" d="M-10,319c28-9,68.84,25.02,116,26c48,1,83.41-12.8,124-7 c42,6,84,45,161,59s144,12,263-36s234-86,371-62s216,52,279,62"/>
  
  <path class="line line3" d="M-10,296c27-13,59-22,107,0c71.61,32.82,113,14,175,22 s117,50,223,45s165-45,277-73s210-56,532,43"/>
  <path class="line line2" d="M-10,296c27-13,59-22,107,0c71.61,32.82,113,14,175,22 s117,50,223,45s165-45,277-73s210-56,532,43"/>
  <path class="line line1" d="M-10,296c27-13,59-22,107,0c71.61,32.82,113,14,175,22 s117,50,223,45s165-45,277-73s210-56,532,43"/>
  
  <path class="line line3" d="M-10,263c15-6,85-39,117-13c52.68,42.81,124,38,182,35 s123,63,275,32s235-75,349-72s242,13,391,64"/>
  <path class="line line2" d="M-10,263c15-6,85-39,117-13c52.68,42.81,124,38,182,35 s123,63,275,32s235-75,349-72s242,13,391,64"/>
  <path class="line line1" d="M-10,263c15-6,85-39,117-13c52.68,42.81,124,38,182,35 s123,63,275,32s235-75,349-72s242,13,391,64"/>
  
  <path class="line line3" d="M-10,225c0,0,39-33,79-38s61,24,100,44s101-7,159,19 s81,48,221,37s245-55,311-68s160-16,240-1s137,39,208,55"/>
  <path class="line line2" d="M-10,225c0,0,39-33,79-38s61,24,100,44s101-7,159,19 s81,48,221,37s245-55,311-68s160-16,240-1s137,39,208,55"/>
  <path class="line line1" d="M-10,225c0,0,39-33,79-38s61,24,100,44s101-7,159,19 s81,48,221,37s245-55,311-68s160-16,240-1s137,39,208,55"/>
  
  <path class="line line3" d="M-10,192c0,0,51-54,91-59s60,8,99,28s83,24,141,50 s152,48,292,37s203-51,269-64s142-15,222,0s136,37,207,53"/>
  <path class="line line2" d="M-10,192c0,0,51-54,91-59s60,8,99,28s83,24,141,50 s152,48,292,37s203-51,269-64s142-15,222,0s136,37,207,53"/>
  <path class="line line1" d="M-10,192c0,0,51-54,91-59s60,8,99,28s83,24,141,50 s152,48,292,37s203-51,269-64s142-15,222,0s136,37,207,53"/>
  
  <path class="line line3" d="M-10,144c0,0,54-39,94-44s85,7,124,27s59,25,117,51 s153,52,293,41s188-53,254-66s148-13,228,2s181,38,211,38"/>
  <path class="line line2" d="M-10,144c0,0,54-39,94-44s85,7,124,27s59,25,117,51 s153,52,293,41s188-53,254-66s148-13,228,2s181,38,211,38"/>
  <path class="line line1" d="M-10,144c0,0,54-39,94-44s85,7,124,27s59,25,117,51 s153,52,293,41s188-53,254-66s148-13,228,2s181,38,211,38"/>
  
  <path class="line line3" d="M-10,115c0,0,66-50,145-47s176.71,58.34,234,75 c86,25,187,47,352,7s150.3-93.53,404-31c142,35,190,26,190,26"/>
  <path class="line line2" d="M-10,115c0,0,66-50,145-47s176.71,58.34,234,75 c86,25,187,47,352,7s150.3-93.53,404-31c142,35,190,26,190,26"/>
  <path class="line line1" d="M-10,115c0,0,66-50,145-47s176.71,58.34,234,75 c86,25,187,47,352,7s150.3-93.53,404-31c142,35,190,26,190,26"/>
  
  <path class="line line3" d="M-10,88c0,0,100-71,231-36s199,100,373,85s187-94,320-94 s301,87,418,60"/>
  <path class="line line2" d="M-10,88c0,0,100-71,231-36s199,100,373,85s187-94,320-94 s301,87,418,60"/>
  <path class="line line1" d="M-10,88c0,0,100-71,231-36s199,100,373,85s187-94,320-94 s301,87,418,60"/>
  
</svg>
        </div>
    </section>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import IconArrow from '~/assets/icons/arrow.svg'
import IconArrowright from '~/assets/icons/arrow__right.svg'

onMounted(() => {
    let i = 0;

gsap.set('.line',  {attr:{'stroke':'hsl(1,100%, 50%)', 'stroke-width':4, 'stroke-linecap':'round'}});
gsap.set('.line2', {attr:{'stroke-width':6}, opacity:0.4});
gsap.set('.line3', {attr:{'stroke-width':9}, opacity:0.15});

[].forEach.call(document.getElementsByClassName('line'), (el) => {
  gsap.timeline({defaults:{duration:1}, repeat:-1, repeatDelay:(27-i)/50})
      .to(el, {duration:2, attr:{'stroke':'hsl(360, 100%, 50%)', ease:'power2.inOut'}}, 0)
      .fromTo(el, {drawSVG:0}, {drawSVG:'35% 70%', ease:'sine.in'}, i/50)
      .to(el, {drawSVG:'100% 100%', ease:'sine.out'}, 1+i/50)
      .progress(i/20)
  i++;
});
})

onUnmounted(() => {})
</script>

<script>

export default {

    data(){
        return {
            isClickButton1: false,
            isClickButton2: false,
            isClickButton3: false,
            isClickButton4: false,
            project_type: '',
            name: '',
            phone: '',
            message: ''



        }
    },

    methods: {
        clickButton1(){
            this.isClickButton1 = true
            this.isClickButton2 = false
            this.isClickButton3 = false
            this.isClickButton4 = false
        },
        clickButton2(){
            this.isClickButton2 = true
            this.isClickButton1 = false
            this.isClickButton3 = false
            this.isClickButton4 = false
        },
        clickButton3(){
            this.isClickButton3 = true
            this.isClickButton2 = false
            this.isClickButton1 = false
            this.isClickButton4 = false
        },
        clickButton4(){
            this.isClickButton4 = true
            this.isClickButton2 = false
            this.isClickButton3 = false
            this.isClickButton1 = false
        },
        sendForm() {

            this.project_type = '',
            this.name = '',
            this.phone = '',
            this.message = ''

        }
    },
    setup() {
        const myForm = ref(null)

        function Submit() {
            emailjs.send().then(success => {
                if (success) {
                    // after clearing inputs
                    myForm.value.resetValidation()
                }
            })
  }

  return {
    myForm,
    Submit,
    // ...
  }
}
}
</script>

<style scoped>
.SuperTitle {
    font-family: 'Airborne';
    font-style: normal;
    font-weight: 400;
    line-height: 40px;

    color: #FFFFFF;
}
.subtitle {
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 90px;
    line-height: 113px;
    text-align: right;

    color: #FFFFFF;

}

.btn--label {
    width: 200px;
    height: 50px;

    font-family: 'Airborne';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    text-align: center;

    background: rgba(11, 11, 11, 0.2);
    border: 2px solid #FFFFFF;
    backdrop-filter: blur(3px);
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 500ms;

}

.btn--label:hover {
    border: none;
    background: linear-gradient(180deg, #FCB040 0%, #FF2BFF 100%);
    box-shadow: 0 10px 15px -3px rgba(248, 4, 220, 0.5), 0 4px 6px -4px rgba(237, 161, 8, 0.5);
}

.btn--click {
    border: none;
    background: linear-gradient(180deg, #FCB040 0%, #FF2BFF 100%);
    box-shadow: 0 10px 15px -3px rgba(248, 4, 220, 0.5), 0 4px 6px -4px rgba(237, 161, 8, 0.5);
}

.btn-send:hover {
    background: linear-gradient(180deg, #FCB040 0%, #FF2BFF 100%);
    box-shadow: 0 10px 15px -3px rgba(248, 4, 220, 0.5), 0 4px 6px -4px rgba(237, 161, 8, 0.5);
}


.link-to-svg  .st0 {
    fill: #fff;
    
  }
  .link-to-svg:hover .st0 {
    fill:url(#g1);
  }

#signInterview .btn img {
    display: none;
    width: 2rem;
    height: 2rem;
}

.minus {
    z-index: -1;
}


@media (min-width: 768px) {
    .SuperTitle {
        font-family: 'Airborne';
        font-style: normal;
        font-weight: 400;
        font-size: 140px;
        line-height: 161px;

        color: #FFFFFF;
    }
     /* .mainClass {
        background: url('/img/City.png'), url('/img/Sun.png');
        background-repeat: no-repeat;
        background-position: bottom, 50% 40%;
        background-size: auto, auto;
    } */
}
</style>