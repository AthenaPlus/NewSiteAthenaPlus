<template>
    <section id="SignInterview" class="text-white body-font relative min-h-screen bg-top bg-contain bg-no-repeat bg-[url('/img/bg_frame4_mob.png')] md:bg-center md:bg-cover  md:bg-[url('/img/bg_frame4.jpg')] z-0">
        <div class="container px-5 py-16  md:py-24 mx-auto">
            <div class="flex flex-col text-center w-full mb-12">
                <h1 class="text-[32px] SuperTitle text-left md:mt-16">Есть проект?</h1>
                <div class="flex items-center md:justify-end gap-2  md:mr-32">
                    <IconArrow class="hidden md:block"/>
                    <h2 class="text-xl font_Airborne md:Source_Sans_Pro md:text-5xl lg:text-7xl">Оставьте заявку</h2>
                    <IconArrowright class="block md:hidden w-10" />
                </div>
                <div class="flex flex-col md:flex-row items-start md:items-center w-full mt-">
                    <div class="">
                        <h3 class="hidden md:block text-left text-2xl text-white Source_Sans_Pro mb-8">Какую услуги вы выберите?</h3>
                        
                        <form action="https://formsubmit.co/sain.athenaplus@gmail.com" method="POST" class="flex flex-wrap my-10">
                            <div class="hidden md:flex flex-wrap justify-start  gap-5 mb-10">
                                <input type="radio" id="design" name="project_type" value="Дизайн" required class="hidden" />
                                <label for="design"  @click="clickButton1" class="btn--label text-white py-3"
                                    :class="[isClickButton1 ? 'btn--click' : '']"> Дизайн</label>

                                <input type="radio" id="development" name="project_type" value="Разработка" class="hidden" />
                                <label for="development" @click="clickButton2" class="btn--label text-white py-3"
                                    :class="[isClickButton2 ? 'btn--click' : '']"> Разработка</label>

                                <input type="radio" id="CRM" name="project_type" value="Внедрение CRM" class="hidden" />
                                <label for="CRM" @click="clickButton3" class="btn--label text-white py-3"
                                    :class="[isClickButton3 ? 'btn--click' : '']">Внедрение CRM</label>

                                <input type="radio" id="SEO" name="project_type" value="SEO/Реклама" class="hidden" />
                                <label for="SEO" @click="clickButton4" class="btn--label text-white py-3"
                                    :class="[isClickButton4 ? 'btn--click' : '']">SEO/Реклама</label>
                            </div>
                            <div class="pr-5 w-full md:w-1/2 mb-5 md:mb-0">
                                <div class="relative">
                                    <input type="text" id="name" name="name" placeholder="Ваше имя" required
                                        class="w-full bg-gray-100 bg-opacity-5  border-b-2 border-gray-300 focus:border-pink-500 focus:border-b-2 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                                </div>
                            </div>
                            <div class="pr-5 w-full md:w-1/2">
                                <div class="relative">
                                    <input type="tel" id="phone" name="phone" placeholder="Ваш телефон" required
                                        class="w-full bg-gray-100 bg-opacity-5  border-b-2 border-gray-300 focus:border-pink-500 focus:border-b-2 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                                </div>
                            </div>
                            <div class="pr-5 pt-10 w-full">
                                <div class="relative">
                                    <textarea id="message" name="message" placeholder="Опишите проект" required
                                        class="w-full bg-gray-100 bg-opacity-5  border-b-2 border-gray-300 focus:border-pink-500 focus:border-b-2 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></textarea>
                                </div>
                            </div>
                            <div>
                                <input type="hidden" name="_subject" value="Новая заявка на проект сайта" />
                                <input type="hidden" name="_next" value="https://athena-plus.netlify.app" />
                                <input type="hidden" name="_captcha" value="false" />
                            </div>
                            <div class="pt-10">
                                <button type="submit"
                                    class="btn btn-send flex mx-auto text-black bg-white border-0 focus:outline-none text-lg">Оставить
                                    заявку</button>
                            </div>
                        </form>
                    </div>
                    <div class="ml-0 md:ml-16">
                        <p class="text-white text-lg text-left w-full md:w-96">
                            Поделитесь с нами своим видением, чтобы мы могли заложить его в основу будущего проекта. Каким деталям нужно уделить особое внимание? Каковы ваши ожидания и на какие сроки рассчитываете? Мы всегда рады сотрудничеству.
                        </p>

                        <AppSocialButtons class="mt-8 "/>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import IconArrow from '~/assets/icons/arrow.svg'
import IconArrowright from '~/assets/icons/arrow__right.svg'

</script>

<script>

export default {

    data(){
        return {
            isClickButton1: false,
            isClickButton2: false,
            isClickButton3: false,
            isClickButton4: false

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
        }
    }
}
console.log()
</script>

<style>
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

    background: rgba(11, 11, 11, 0.1);
    border: 2px solid #FFFFFF;
    backdrop-filter: blur(2px);
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

@media (min-width: 768px) {
    .SuperTitle {
        font-family: 'Airborne';
        font-style: normal;
        font-weight: 400;
        font-size: 140px;
        line-height: 161px;

        color: #FFFFFF;
    }
}
</style>