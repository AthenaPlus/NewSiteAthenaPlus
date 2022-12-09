<template>
    <section class="text-white body-font relative min-h-screen bg-center bg-cover bg-[url('/img/bg_frame4.jpg')] z-0">
        <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-col text-center w-full mb-12">
                <h1 class="title mt-16">Есть проект?</h1>
                <div class="flex items-center justify-end gap-8 mr-32">
                    <IconArrow/>
                    <h2 class="subtitle">Оставте заявку</h2>
                </div>
                <div class="flex flex-row items-center">
                    <div class="">
                        <h3 class="text-left text-2xl text-white Source_Sans_Pro mb-8">Какую услуги вы выберите?</h3>
                        <div class="flex gap-5">
                            <button v-for="batton in battons" class="btn text-white">
                                    {{ batton.title }}
                            </button>
                        </div>
                        <form action="" class="flex flex-wrap mt-10">
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
                                    class="btn-send shadow-pink-500/50 flex mx-auto text-black bg-white border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 text-lg">Оставить заявку</button>

                            </div>
                        </form>
                    </div>
                    <div class="ml-16">
                        <p class="text-white text-lg text-left w-96">
                            Поделитесь с нами своим видением, чтобы мы могли заложить его в основу будущего проекта. Каким деталям нужно уделить особое внимание? Каковы ваши ожидания и на какие сроки рассчитываете? Мы всегда рады сотрудничеству.
                        </p>
                        <div class="flex gap-6 mt-4">
                            <a href="" class="link-to-svg">
                                <svg width="28" height="25" viewBox="0 0 28 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <linearGradient id="g1" gradientUnits="userSpaceOnUse" x1="10.9111" y1="0.0449" x2="12.9916" y2="23.8254">
                                        <stop offset="0" style="stop-color:#FCB040" />
                                        <stop offset="1" style="stop-color:#FF2BFF" />
                                    </linearGradient>
                                    <path class="st0"
                                        d="M27.9202 2.27538L23.6948 23.4909C23.3757 24.988 22.5446 25.3607 21.3635 24.6558L14.9248 19.6045L11.8185 22.7861C11.4745 23.1523 11.1874 23.4579 10.5244 23.4579L10.9874 16.4773L22.9197 4.998C23.4387 4.50607 22.8067 4.23242 22.1136 4.72541L7.36202 14.615L1.01134 12.4982C-0.369802 12.0393 -0.394804 11.0278 1.29938 10.3219L26.139 0.133056C27.2891 -0.32586 28.2952 0.405637 27.9202 2.27644V2.27538Z"
                                        fill="white" />
                                </svg>
                            </a>
                            <a href="" class="link-to-svg">
                                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <linearGradient id="g1" gradientUnits="userSpaceOnUse" x1="10.9111" y1="0.0449" x2="12.9916" y2="23.8254">
                                        <stop offset="0" style="stop-color:#FCB040" />
                                        <stop offset="1" style="stop-color:#FF2BFF" />
                                    </linearGradient>
                                    <path class="st0"
                                        d="M0.00501672 25L1.69502 18.79C0.581439 16.8811 -0.00361329 14.71 1.67903e-05 12.5C1.67903e-05 5.59625 5.59626 0 12.5 0C19.4038 0 25 5.59625 25 12.5C25 19.4037 19.4038 25 12.5 25C10.291 25.0035 8.12083 24.4189 6.21251 23.3062L0.00501672 25ZM7.98876 6.635C7.82734 6.64502 7.6696 6.68753 7.52501 6.76C7.38941 6.83678 7.26563 6.93278 7.15751 7.045C7.00751 7.18625 6.92251 7.30874 6.83126 7.4275C6.36928 8.02874 6.12077 8.76677 6.12501 9.52499C6.12751 10.1375 6.28751 10.7337 6.53751 11.2912C7.04876 12.4187 7.89001 13.6125 9.00126 14.7187C9.26876 14.985 9.53001 15.2525 9.81126 15.5012C11.1905 16.7156 12.8341 17.5913 14.6113 18.0587L15.3225 18.1675C15.5538 18.18 15.785 18.1625 16.0175 18.1512C16.3816 18.1324 16.737 18.0339 17.0588 17.8625C17.2663 17.7525 17.3638 17.6975 17.5375 17.5875C17.5375 17.5875 17.5913 17.5525 17.6938 17.475C17.8625 17.35 17.9663 17.2612 18.1063 17.115C18.21 17.0075 18.3 16.8812 18.3688 16.7375C18.4663 16.5337 18.5638 16.145 18.6038 15.8212C18.6338 15.5737 18.625 15.4387 18.6213 15.355C18.6163 15.2212 18.505 15.0825 18.3838 15.0237L17.6563 14.6975C17.6563 14.6975 16.5688 14.2237 15.905 13.9212C15.835 13.8907 15.76 13.8734 15.6838 13.87C15.5982 13.8612 15.5118 13.8708 15.4303 13.8982C15.3488 13.9256 15.2741 13.9701 15.2113 14.0287V14.0262C15.205 14.0262 15.1213 14.0975 14.2175 15.1925C14.1656 15.2622 14.0942 15.3149 14.0123 15.3438C13.9303 15.3728 13.8417 15.3766 13.7575 15.355C13.6761 15.3332 13.5963 15.3056 13.5188 15.2725C13.3638 15.2075 13.31 15.1825 13.2038 15.1362L13.1975 15.1337C12.4824 14.8215 11.8203 14.3998 11.235 13.8837C11.0775 13.7462 10.9313 13.5962 10.7813 13.4512C10.2895 12.9803 9.8609 12.4475 9.50626 11.8662L9.43251 11.7475C9.37954 11.6677 9.33671 11.5816 9.30501 11.4912C9.25751 11.3075 9.38126 11.16 9.38126 11.16C9.38126 11.16 9.68501 10.8275 9.82626 10.6475C9.94387 10.4979 10.0536 10.3423 10.155 10.1812C10.3025 9.94374 10.3488 9.69999 10.2713 9.51124C9.92126 8.65624 9.55876 7.80499 9.18626 6.96C9.11251 6.7925 8.89376 6.6725 8.69501 6.64875C8.62751 6.64125 8.56001 6.63375 8.49251 6.62875C8.32464 6.62041 8.15643 6.62208 7.98876 6.63375V6.635Z"
                                        fill="white" />
                                </svg>
                            </a>
                            <a href="" class="link-to-svg">
                                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <linearGradient id="g1" gradientUnits="userSpaceOnUse" x1="10.9111" y1="0.0449" x2="12.9916" y2="23.8254">
                                        <stop offset="0" style="stop-color:#FCB040" />
                                        <stop offset="1" style="stop-color:#FF2BFF" />
                                    </linearGradient>
                                    <path class="st0"
                                        d="M12.4966 8.33156C10.2014 8.33156 8.32828 10.2047 8.32828 12.5C8.32828 14.7953 10.2014 16.6684 12.4966 16.6684C14.7919 16.6684 16.665 14.7953 16.665 12.5C16.665 10.2047 14.7919 8.33156 12.4966 8.33156ZM24.9986 12.5C24.9986 10.7738 25.0142 9.0633 24.9173 7.34026C24.8204 5.33891 24.3638 3.56271 22.9004 2.09922C21.4338 0.632607 19.6607 0.179176 17.6594 0.082235C15.9333 -0.0147055 14.2228 0.000930141 12.4998 0.000930141C10.7736 0.000930141 9.06313 -0.0147055 7.34013 0.082235C5.33881 0.179176 3.56265 0.635734 2.09918 2.09922C0.632595 3.56584 0.179172 5.33891 0.0822335 7.34026C-0.0147052 9.06643 0.000930124 10.777 0.000930124 12.5C0.000930124 14.223 -0.0147052 15.9367 0.0822335 17.6597C0.179172 19.6611 0.635722 21.4373 2.09918 22.9008C3.56577 24.3674 5.33881 24.8208 7.34013 24.9178C9.06626 25.0147 10.7768 24.9991 12.4998 24.9991C14.2259 24.9991 15.9364 25.0147 17.6594 24.9178C19.6607 24.8208 21.4369 24.3643 22.9004 22.9008C24.3669 21.4342 24.8204 19.6611 24.9173 17.6597C25.0174 15.9367 24.9986 14.2262 24.9986 12.5ZM12.4966 18.9137C8.94743 18.9137 6.08305 16.0493 6.08305 12.5C6.08305 8.95073 8.94743 6.08629 12.4966 6.08629C16.0458 6.08629 18.9102 8.95073 18.9102 12.5C18.9102 16.0493 16.0458 18.9137 12.4966 18.9137ZM19.1729 7.3215C18.3442 7.3215 17.675 6.6523 17.675 5.82361C17.675 4.99493 18.3442 4.32573 19.1729 4.32573C20.0016 4.32573 20.6708 4.99493 20.6708 5.82361C20.671 6.02039 20.6324 6.21528 20.5572 6.39712C20.4821 6.57897 20.3717 6.74419 20.2326 6.88333C20.0935 7.02247 19.9282 7.1328 19.7464 7.20798C19.5646 7.28317 19.3697 7.32175 19.1729 7.3215Z"
                                        fill="white" />
                                </svg>
                            </a>
                            <a href="" class="link-to-svg">
                                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <linearGradient id="g1" gradientUnits="userSpaceOnUse" x1="10.9111" y1="0.0449" x2="12.9916" y2="23.8254">
                                        <stop offset="0" style="stop-color:#FCB040" />
                                        <stop offset="1" style="stop-color:#FF2BFF" />
                                    </linearGradient>
                                    <path class="st0"
                                        d="M5.81936 8.03291H0.800564C0.577823 8.03291 0.397339 8.21388 0.397339 8.43703V24.5958C0.397339 24.819 0.577823 24.9999 0.800564 24.9999H5.81936C6.0421 24.9999 6.22258 24.819 6.22258 24.5958V8.43703C6.22258 8.21388 6.0421 8.03291 5.81936 8.03291Z"
                                        fill="white" />
                                    <path class="st0"
                                        d="M3.31177 0C1.48565 0 0 1.4873 0 3.31544C0 5.14438 1.48565 6.63225 3.31177 6.63225C5.13645 6.63225 6.62089 5.1443 6.62089 3.31544C6.62097 1.4873 5.13645 0 3.31177 0Z"
                                        fill="white" />
                                    <path class="st0"
                                        d="M18.585 7.63131C16.5693 7.63131 15.0792 8.49975 14.1754 9.48652V8.43703C14.1754 8.21388 13.9949 8.03291 13.7722 8.03291H8.96581C8.74306 8.03291 8.56258 8.21388 8.56258 8.43703V24.5958C8.56258 24.819 8.74306 24.9999 8.96581 24.9999H13.9736C14.1964 24.9999 14.3769 24.819 14.3769 24.5958V16.601C14.3769 13.9069 15.107 12.8573 16.9809 12.8573C19.0217 12.8573 19.1839 14.5399 19.1839 16.7396V24.5959C19.1839 24.8191 19.3644 25 19.5871 25H24.5968C24.8195 25 25 24.8191 25 24.5959V15.7325C25 11.7265 24.2378 7.63131 18.585 7.63131Z"
                                        fill="white" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>



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
.subtitle {
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 90px;
    line-height: 113px;
    text-align: right;

    color: #FFFFFF;

}

.btn {
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
}

.btn:hover {
    border: none;
    background: linear-gradient(180deg, #FCB040 0%, #FF2BFF 100%);
    box-shadow: 0 20px 25px 5px rgba(248, 4, 220, 0.1), 0 10px 18px -6px rgba(237, 161, 8, 0.1);
}

.btn-send:hover {
    background: linear-gradient(180deg, #FCB040 0%, #FF2BFF 100%);
    box-shadow: 0 20px 25px 5px rgba(248, 4, 220, 0.1), 0 10px 18px -6px rgba(237, 161, 8, 0.1);
}


.link-to-svg  .st0 {
    fill: #fff;
    
  }
  .link-to-svg:hover .st0 {
    fill:url(#g1);
  }
</style>