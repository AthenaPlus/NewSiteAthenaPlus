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

                        <form @submit="submitForm" method="POST"
                            class="flex flex-wrap my-10">
                            <div class="hidden md:flex flex-wrap justify-start  gap-5 mb-10">
                                <label for="app" @click="clickButton1"
                                    class="btn--label text-white py-3 cursor-pointer"
                                    :class="[isClickButton1 ? 'btn--click' : '']"> Приложение</label>
                                <input type="radio" id="app" name="project_type" value="Приложение" v-model="value" class="w-0" />

                                <label for="Website" @click="clickButton2"
                                    class="btn--label text-white py-3 cursor-pointer"
                                    :class="[isClickButton2 ? 'btn--click' : '']"> Сайт</label>
                                <input type="radio" id="Website" name="project_type" value="Сайт" v-model="value"
                                    class="w-0" />

                                <label for="CRM" @click="clickButton3" class="btn--label text-white py-3 cursor-pointer"
                                    :class="[isClickButton3 ? 'btn--click' : '']">CRM-система</label>
                                <input type="radio" id="CRM" name="project_type" value="CRM-система" v-model="value" class="w-0" />

                                <label for="marketing" @click="clickButton4" class="btn--label text-white py-3 cursor-pointer"
                                    :class="[isClickButton4 ? 'btn--click' : '']">Маркетинг</label>
                                <input type="radio" id="marketing" name="project_type" value="Маркетинг" v-model="value" class="w-0" />
                            </div>
                            <div class="pr-5 w-full md:w-1/2 mb-5 md:mb-0">
                                <div class="relative">
                                    <input type="text" id="name" name="name" v-model="name" placeholder="Ваше имя *" required
                                        autocomplete="on"
                                        class="w-full bg-gray-100 bg-opacity-5  border-b-2 border-gray-300 focus:border-pink-500 focus:border-b-2 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                                </div>
                            </div>
                            <div class="pr-5 w-full md:w-1/2">
                                <div class="relative">
                                    <input type="tel" id="phone" name="phone" v-model="phone" placeholder="Ваш телефон *" required
                                        autocomplete="on"
                                        class="w-full bg-gray-100 bg-opacity-5  border-b-2 border-gray-300 focus:border-pink-500 focus:border-b-2 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                                </div>
                            </div>
                            <div class="pr-5 pt-10 w-full">
                                <div class="relative">
                                    <textarea id="message" v-model="message" name="message" placeholder="Опишите проект"
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
        
    </section>
</template>

<script setup>
// import { onMounted, onUnmounted, ref } from 'vue';
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
            isClickButton4: false,
            name: '',
            email: '',
            phone: '',
            message: '',
            value: ''



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


        // ОТправка формы CRM 24
        submitForm(event) {
      event.preventDefault();

      const formData = {
        fields: {
          TITLE: 'Заявка от ' + this.name,
          NAME: this.name,
          COMMENTS: this.message,
          POST: this.value,
          EMAIL: [
            {
              "VALUE": this.email
            }
          ],
          PHONE: [
            {
              "VALUE": this.phone
            }
          ],
          WEB: [
            {
              "VALUE": "https://athenaplus.kz/",
              "VALUE_TYPE": "Сайт компании Athena+"
            }
          ],
        },


      };


      // Отправка данных в Bitrix24
      this.sendLeadToBitrix24(formData);
    },
    async sendLeadToBitrix24(formData) {
      try {
        const response = await fetch(
          'https://athenaplus.bitrix24.kz/rest/39/ozahwi69f64tr1r9/crm.lead.add.json',
          {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
              'Content-Type': 'application/json'
            }
          }
        );

        const data = await response.json();

        // Обработка ответа от сервера Bitrix24
        // console.log(data);
        // console.log(formData);

        // Дополнительные действия после успешной отправки формы
      } catch (error) {
        console.error(error);
        // Обработка ошибок при отправке данных в Bitrix24
      }
         //   Очистка формы после отправки
        this.name = ''
        this.email = ''
        this.phone = ''
        this.message = ''
        this.value = ''
        this.isClickButton1 = false
        this.isClickButton2 = false
        this.isClickButton3 = false
        this.isClickButton4 = false
        
    }
    },
    setup() {
        const myForm = ref(null)

        function Submit() {
            emailjs.send().then(success => {
                if (success) {
                    myForm.value.resetValidation()
                }
            })
  }

  return {
    myForm,
    Submit,
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
}

/* @media only screen and (max-width: 1200px) {
  svg { height:900px; }
} */
</style>