<template>
    <section class="text-white body-font relative min-h-screen bg-center bg-cover bg-[url('/img/bg_frame4.jpg')] z-0">
        <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-col text-center w-full mb-12">
                <h1 class="SuperTitle text-left mt-16">Есть проект?</h1>
                <div class="flex items-center justify-end gap-8 mr-32">
                    <IconArrow class="hidden md:block"/>
                    <h2 class="text-4xl md:text-5xl lg:text-7xl">Оставьте заявку</h2>
                </div>
                <div class="flex flex-col md:flex-row items-start md:items-center w-full">
                    <div class="">
                        <h3 class="text-left text-2xl text-white Source_Sans_Pro mb-8">Какую услуги вы выберите?</h3>
                        <div class="flex flex-wrap justify-start  gap-5">
                            <button v-for="batton in battons" class="btn--label text-white">
                                    {{ batton.title }}
                            </button>
                        </div>
                        <form action="" class="flex flex-wrap my-10">
                            <div class="pr-5 w-1/2">
                                <div class="relative">
                                    <input type="text" id="name" name="name" placeholder="Ваше имя"
                                        class="w-full bg-gray-100 bg-opacity-5  border-b-2 border-gray-300 focus:border-pink-500 focus:border-b-2 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                                </div>
                            </div>
                            <div class="pr-5 w-1/2">
                                <div class="relative">
                                    <input type="tel" id="phone" name="phone" placeholder="Ваш телефон"
                                    class="w-full bg-gray-100 bg-opacity-5  border-b-2 border-gray-300 focus:border-pink-500 focus:border-b-2 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                                </div>
                            </div>
                            <div class="pr-5 pt-10 w-full">
                                <div class="relative">
                                    <textarea id="message" name="message" placeholder="Кратко опишите проект"
                                    class="w-full bg-gray-100 bg-opacity-5  border-b-2 border-gray-300 focus:border-pink-500 focus:border-b-2 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></textarea>
                                </div>
                            </div>
                            <div class="pt-10">
                                <button
                                    class="btn btn-send flex mx-auto text-black bg-white border-0 py-2 px-8 focus:outline-none text-lg">Оставить заявку</button>

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


const battons = [
    {
        title: 'веб-сайт'
    },
    {
        title: 'приложение'
    },
    {
        title: 'графика'
    },
    {
        title: 'smm'
    }
]

</script>

<style scoped>
.SuperTitle {
    font-family: 'Airborne';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
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