<template>

    <!-- Диномичная SVG кнопка для управления выезда боковой панели с меню -->
    <button @click="toggle" class="transition ease-in-out duration-700 fixed pl-2.5 md:pl-5 pt-[7px] z-index-10000 animate__animated animate__pulse animate__infinite" aria-label="open menu">
        <!-- Button First -->
        <svg :class="[isOpenMenu ? '-rotate-45' : 'rotate-0', 'h-7 w-7 md:h-10 md:w-10']"
            class="transition ease-in-out duration-700" width="40" height="40" viewBox="0 0 40 40" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path :class="[isOpenMenu ? 'opacity-0' : 'opacity-100']" d="M0 0H10.5263V10.5263H0V0Z" fill="white" />
            <path d="M14.7368 0H25.2632V10.5263H14.7368V0Z" fill="white" />
            <path :class="[isOpenMenu ? 'opacity-0' : 'opacity-100']" d="M29.4737 0H40V10.5263H29.4737V0Z"
                fill="white" />
            <path d="M29.4737 14.7368H40V25.2632H29.4737V14.7368Z" fill="white" />
            <path :class="[isOpenMenu ? 'opacity-0' : 'opacity-100']" d="M29.4737 29.4737H40V40H29.4737V29.4737Z"
                fill="white" />
            <path d="M14.7368 14.7368H25.2632V25.2632H14.7368V14.7368Z" fill="white" />
            <path d="M14.7368 29.4737H25.2632V40H14.7368V29.4737Z" fill="white" />
            <path d="M0 14.7368H10.5263V25.2632H0V14.7368Z" fill="white" />
            <path :class="[isOpenMenu ? 'opacity-0' : 'opacity-100']" d="M0 29.4737H10.5263V40H0V29.4737Z"
                fill="white" />
        </svg>
    </button>
    <!-- Hte End - Диномичная SVG кнопка для управления выезда боковой панели с меню/fixed позиции нет -->
    <header id="navbar" class="text-white body-font border_b_1 w-full scroll-container z-20 fixed">
        <div class="absolute inset-0 z-one blur"></div>
        <div class="px-5 py-0 mx-auto flex flex-wrap flex-row items-center justify-between">
            <div class="flex title-font font-medium items-center text-white mb-0">
                <div class="w-2 h-8 md:h-14 md:w-10">
                    <!-- Резерв для кнопки -->
                </div>
                <a v-if="$route.path === '/'"  data-menuanchor="top" href="#top">
                    <h1 class="ml_18 pl_18 text-xl md:text-[34px] uppercase border_l_1">Athena <span
                            class="text-gradient">plus</span>
                    </h1>
                </a>
                <Nuxt-Link v-else data-menuanchor="top" to="/">
                    <h1 class="ml_18 pl_18 text-xl md:text-[34px] uppercase border_l_1">Athena <span
                            class="text-gradient">plus</span>
                    </h1>
                </Nuxt-Link>
            </div>
            <div class="flex flex-initial border_l_1 h-10 md:h-[51px] pl-4">
                <div class=" my-auto">
                    <a  data-menuanchor="order" href="#order" v-if="$route.path === '/'" 
                        class="order-title font_Airborne text-sm md:text-2xl link-gradient transition duration-700 ease-in-out tracking-[0.06em] uppercase">
                        Заявка
                    </a>
                    <Nuxt-Link v-else data-menuanchor="order" to="/#order"
                        class="order-title font_Airborne text-sm md:text-2xl link-gradient transition duration-700 ease-in-out tracking-[0.06em] uppercase">
                        Заявка
                    </Nuxt-Link>
                </div>
                <!-- Icons -->
                <div class="hidden sm:flex items-center border_l_1 h_51 ml_18 pl-5">
                    <a href="https://t.me/AthenaPlus" target="_blank" class="text-gray-100 link-to-svg mr-9" aria-label="telegram">
                        <svg viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <linearGradient id="g1" gradientUnits="userSpaceOnUse" x1="10.9111" y1="0.0449" x2="12.9916"
                                y2="23.8254">
                                <stop offset="0" style="stop-color:#FCB040" />
                                <stop offset="1" style="stop-color:#FF2BFF" />
                            </linearGradient>
                            <path class="st0"
                                d="M20.9402 1.72929L17.7711 17.8531C17.5318 18.9909 16.9085 19.2741 16.0226 18.7384L11.1936 14.8994L8.86387 17.3174C8.60584 17.5958 8.39057 17.828 7.89327 17.828L8.24055 12.5227L17.1898 3.79848C17.579 3.42461 17.105 3.21664 16.5852 3.59131L5.52151 11.1074L0.758509 9.49866C-0.277351 9.14989 -0.296103 8.38112 0.974532 7.84461L19.6043 0.101122C20.4669 -0.247654 21.2214 0.308284 20.9402 1.73009V1.72929Z" />
                        </svg>
                    </a>
                    <a href="https://wa.me/77753938855" target="_blank" class="ml-3 text-gray-100 link-to-svg mr-9" aria-label="whatsapp">
                        <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <linearGradient id="g1" gradientUnits="userSpaceOnUse" x1="10.9111" y1="0.0449" x2="12.9916"
                                y2="23.8254">
                                <stop offset="0" style="stop-color:#FCB040" />
                                <stop offset="1" style="stop-color:#FF2BFF" />
                            </linearGradient>
                            <path class="st0"
                                d="M0.00401338 20L1.35601 15.032C0.465151 13.5048 -0.00289063 11.768 1.34322e-05 9.99999C1.34322e-05 4.477 4.47701 0 10 0C15.523 0 20 4.477 20 9.99999C20 15.523 15.523 20 10 20C8.23279 20.0028 6.49667 19.5352 4.97001 18.645L0.00401338 20ZM6.39101 5.308C6.26187 5.31601 6.13568 5.35003 6.02001 5.408C5.91153 5.46943 5.81251 5.54622 5.72601 5.636C5.60601 5.749 5.53801 5.847 5.46501 5.942C5.09542 6.42299 4.89662 7.01341 4.90001 7.62C4.90201 8.10999 5.03001 8.58699 5.23001 9.03299C5.63901 9.93499 6.31201 10.89 7.20101 11.775C7.41501 11.988 7.62401 12.202 7.84901 12.401C8.9524 13.3725 10.2673 14.073 11.689 14.447L12.258 14.534C12.443 14.544 12.628 14.53 12.814 14.521C13.1052 14.506 13.3896 14.4271 13.647 14.29C13.813 14.202 13.891 14.158 14.03 14.07C14.03 14.07 14.073 14.042 14.155 13.98C14.29 13.88 14.373 13.809 14.485 13.692C14.568 13.606 14.64 13.505 14.695 13.39C14.773 13.227 14.851 12.916 14.883 12.657C14.907 12.459 14.9 12.351 14.897 12.284C14.893 12.177 14.804 12.066 14.707 12.019L14.125 11.758C14.125 11.758 13.255 11.379 12.724 11.137C12.668 11.1126 12.608 11.0987 12.547 11.096C12.4786 11.089 12.4095 11.0967 12.3443 11.1186C12.2791 11.1405 12.2193 11.1761 12.169 11.223V11.221C12.164 11.221 12.097 11.278 11.374 12.154C11.3325 12.2098 11.2753 12.2519 11.2098 12.275C11.1443 12.2982 11.0733 12.3013 11.006 12.284C10.9408 12.2666 10.877 12.2445 10.815 12.218C10.691 12.166 10.648 12.146 10.563 12.109L10.558 12.107C9.98592 11.8572 9.45623 11.5198 8.98801 11.107C8.86201 10.997 8.74501 10.877 8.62501 10.761C8.23159 10.3842 7.88872 9.95801 7.60501 9.49299L7.54601 9.39799C7.50363 9.33416 7.46937 9.2653 7.44401 9.19299C7.40601 9.04599 7.50501 8.92799 7.50501 8.92799C7.50501 8.92799 7.74801 8.66199 7.86101 8.51799C7.9551 8.39832 8.04288 8.27381 8.12401 8.14499C8.24201 7.955 8.27901 7.75999 8.21701 7.609C7.93701 6.925 7.64701 6.244 7.34901 5.568C7.29001 5.434 7.11501 5.338 6.95601 5.319C6.90201 5.313 6.84801 5.307 6.79401 5.303C6.65972 5.29632 6.52514 5.29766 6.39101 5.307V5.308Z" />
                        </svg>
                    </a>
                    <a href="https://www.instagram.com/athena_plus/" target="_blank" class="ml-3 mr-4 text-gray-100 link-to-svg" aria-label="instagram">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <linearGradient id="g1" gradientUnits="userSpaceOnUse" x1="10.9111" y1="0.0449" x2="12.9916"
                                y2="23.8254">
                                <stop offset="0" style="stop-color:#FCB040" />
                                <stop offset="1" style="stop-color:#FF2BFF" />
                            </linearGradient>
                            <path class="st0"
                                d="M9.99731 6.66525C8.16111 6.66525 6.66262 8.16376 6.66262 10C6.66262 11.8362 8.16111 13.3348 9.99731 13.3348C11.8335 13.3348 13.332 11.8362 13.332 10C13.332 8.16376 11.8335 6.66525 9.99731 6.66525ZM19.9989 10C19.9989 8.61907 20.0114 7.25064 19.9338 5.87221C19.8563 4.27113 19.4911 2.85017 18.3203 1.67938C17.147 0.506085 15.7286 0.14334 14.1275 0.065788C12.7466 -0.0117644 11.3782 0.000744113 9.99981 0.000744113C8.61891 0.000744113 7.25051 -0.0117644 5.8721 0.065788C4.27105 0.14334 2.85012 0.508587 1.67935 1.67938C0.506076 2.85267 0.143338 4.27113 0.0657868 5.87221C-0.0117642 7.25314 0.000744099 8.62157 0.000744099 10C0.000744099 11.3784 -0.0117642 12.7494 0.0657868 14.1278C0.143338 15.7289 0.508578 17.1498 1.67935 18.3206C2.85262 19.4939 4.27105 19.8567 5.8721 19.9342C7.25301 20.0118 8.62141 19.9993 9.99981 19.9993C11.3807 19.9993 12.7491 20.0118 14.1275 19.9342C15.7286 19.8567 17.1495 19.4914 18.3203 18.3206C19.4936 17.1473 19.8563 15.7289 19.9338 14.1278C20.0139 12.7494 19.9989 11.3809 19.9989 10ZM9.99731 15.131C7.15795 15.131 4.86644 12.8394 4.86644 10C4.86644 7.16058 7.15795 4.86903 9.99731 4.86903C12.8367 4.86903 15.1282 7.16058 15.1282 10C15.1282 12.8394 12.8367 15.131 9.99731 15.131ZM15.3383 5.8572C14.6754 5.8572 14.14 5.32184 14.14 4.65889C14.14 3.99594 14.6754 3.46058 15.3383 3.46058C16.0013 3.46058 16.5366 3.99594 16.5366 4.65889C16.5368 4.81631 16.5059 4.97222 16.4458 5.1177C16.3856 5.26317 16.2974 5.39535 16.1861 5.50666C16.0748 5.61798 15.9426 5.70624 15.7971 5.76639C15.6516 5.82654 15.4957 5.8574 15.3383 5.8572Z"
                                fill="white" />
                        </svg>
                    </a>
                </div>
                <!-- End-Icons -->
            </div>
        </div>
    </header>
    <!-- Kode Menu NEW -->
    <div :class="[isOpenMenu ? 'translate-x-0 transition ease-in-out duration-700' : '-translate-x-130 transition ease-in-out duration-700']"
        class="fixed flex flex-col-3 items-stretch  min-h-screen w-full  z-20 overscroll-none">
        <div class="bg-black text-white border-r border-gray-500 w-[44px] md:w-[76px] sticky top-0">
            <p :class="[isOpenMenu ? 'opacity-100 transition ease-in-out duration-1000 delay-500' : 'opacity-0']"
                class="-rotate-90 -ml-0 mt-28 font_Airborne">
                Свернуть
            </p>
        </div>

        <div
            class="flex flex-col justify-between bg-black w-full md:w-[350px] pt-5   md:pt-64 z-20 transition ease-in-out duration-700 max-h-screen overflow-x-hidden  overflow-y-auto">
             <!-- Nav for Disctop Menu-->
            <nav :class="[isOpenMenu ? 'opacity-100 transition ease-in-out duration-1000 delay-700' : 'opacity-0 transition ease-in-out']"
                class="md:flex flex-col text-3xl text-white font_Airborne pl-10 hidden">
                <NuxtLink to="/" @click="toggle" class="text-3xl py-[15px] uppercase flex items-center gap-4 Nuxt--Link"
                    :class="[isHome ? 'Active' : '']">Главная</NuxtLink>
                <button @click="clickAbout"
                    class="text-3xl py-[15px] uppercase flex items-center gap-4 Nuxt--Link"
                    :class="[isOpenAbout ? 'Active' : '']">О компании
                    <IconArrowmenu class="ArrowMenu transition ease-in-out duration-300" />
                </button>
                <button @click="clickPortfolio" :class="[isOpenPortfolio ? 'Active' : '']"
                    class="text-3xl py-[15px] uppercase flex items-center gap-4 Nuxt--Link">Портфолио
                    <IconArrowmenu class="ArrowMenu transition ease-in-out duration-300" />
                </button>
                <NuxtLink to="/servicesprices" @click="toggle"
                    class="text-3xl py-[15px] uppercase flex items-center gap-4 Nuxt--Link">Текущие работы </NuxtLink>
                <button @click="clickContacts"
                    class="text-3xl py-[15px] uppercase flex items-center gap-4 Nuxt--Link"
                    :class="[isOpenContacts ? 'Active' : '']">Контакты
                    <IconArrowmenu class="ArrowMenu transition ease-in-out duration-300" />
                </button>
            </nav>
             <!-- End Nav for Disctop Menu-->
             <!-- Nav for Mobail Menu -->
            <nav :class="[isOpenMobMenu ? 'translate-x-0 opacity-100 transition ease-in-out duration-1000 delay-700' : '-translate-x-130 opacity-0 transition ease-in-out']"
                class="flex flex-col text-xl text-white font_Airborne pl-10 md:hidden">
                <NuxtLink to="/" @click="toggle" class="text-xl py-[15px] uppercase flex items-center gap-4 Nuxt--Link">Главная
                </NuxtLink>
                <button  @click="clickAboutmob" class="text-xl py-[15px] uppercase flex items-center gap-4 Nuxt--Link" :class="[isOpenAboutMob ? 'Active' : '']">О компании
                </button>
                <button  @click="clickPortfoliomob" class="text-xl py-[15px] uppercase flex items-center gap-4 Nuxt--Link">Портфолио
                </button>
                <NuxtLink to="/servicesprices" @click="toggle"
                    class="text-xl py-[15px] uppercase flex items-center gap-4 Nuxt--Link">Текущие работы</NuxtLink>
                <button @click="clickContactsmob" class="text-xl py-[15px] uppercase flex items-center gap-4 Nuxt--Link">Контакты
                </button>
            </nav>
            <div :class="[isOpenAboutMob ? 'translate-x-0 transition ease-in-out duration-500 delay-500 absolute inset-0' : '-translate-x-180 transition ease-in-out duration-500 absolute']" class="text-white bg-black block md:hidden ml-[45px]">
                <MenuframemobAboutMenumob @addToggle="addToggle" />
            </div>
            <div :class="[isOpenPortfolioMob ? 'translate-x-0 transition ease-in-out duration-500 delay-500 absolute inset-0' : '-translate-x-180 transition ease-in-out duration-500 absolute']" class="text-white bg-black block md:hidden ml-[45px]">
                <MenuframemobPortfolioMenumob @addToggle="addToggle"  />
            </div>
            <div :class="[isOpenContactsMob ? 'translate-x-0 transition ease-in-out duration-500 delay-500 absolute inset-0' : '-translate-x-180 transition ease-in-out duration-500 absolute']" class="text-white bg-black block md:hidden ml-[45px]">
                <MenuframemobContactsMenumob />
            </div>
             <!-- End Nav for Mobail Menu -->
            <div class="">
                <NuxtLink to="/privacy" @click="toggle" :class="[isOpenMenu ? 'opacity-100 transition ease-in-out duration-1000 delay-1000' : 'opacity-0 transition ease-in-out']"
                    class="text-white/50">
                    <p class=" px-2 py-2 sm:px-10 sm:py-5 text-sm w-64 sm:w-96 hover:underline cursor-pointer">©2022 Athena Plus. Все права защищены. Копирование дизайна/контента преследуется по закону.</p>
                </NuxtLink>
            </div>
        </div>
        <!-- Menuframe SubMenu for Disctop -->
        <div :class="[isOpenAbout ? 'translate-x-0 transition ease-in-out duration-1000 delay-1000 block' : '-translate-x-130 transition ease-in-out duration-1000 absolute']"
            class="bg-filter text-white flex-1 -z-10 w-full right-0 -ml-px  hidden md:block">
            <MenuframeAboutMenu @addToggle="addToggle" />
        </div>
        <div :class="[isOpenPortfolio ? 'translate-x-0 transition ease-in-out duration-1000 delay-500  block' : '-translate-x-130 transition ease-in-out duration-1000 absolute']"
            class="bg-filter text-white flex-1 -z-10 w-full right-0 -ml-px ">
            <MenuframePortfolioMenu @addToggle="addToggle" />
        </div>
        <div :class="[isOpenPrice ? 'translate-x-0 transition ease-in-out duration-1000 delay-500  block' : '-translate-x-130 transition ease-in-out duration-1000 absolute']"
            class="bg-filter text-white flex-1 -z-10 w-full right-0 -ml-px ">
            <MenuframePriceMenu />
        </div>
        <div :class="[isOpenContacts ? 'translate-x-0 transition ease-in-out duration-1000 delay-500  block' : '-translate-x-130 transition ease-in-out duration-1000 absolute']"
            class="bg-filter text-white flex-1 -z-10 w-full right-0 -ml-px ">
            <MenuframeContactsMenu />
        </div>
        <!-- End Menuframe SubMenu for Disctop -->
    </div>
</template>

<script setup>
import IconKube from '~/assets/icons/kube.svg'
import IconPaperplan from '~/assets/icons/paperplan.svg'
import IconChat from '~/assets/icons/chat2.svg'
import IconInstagram from '~/assets/icons/instagram2.svg'
import IconVertlink from '~/assets/icons/vertlink.svg'
import IconArrowmenu from '~/assets/icons/arrowmenu.svg'

const items = ([
    {
        title: 'чек маркет',
        number: '#1',
        toLink: '/about'
    },
    {
        title: 'midas event',
        number: '#2',
        toLink: '/'
    },
    {
        title: 'як',
        number: '#3',
        toLink: '/'
    },
    {
        title: '9Global',
        number: '#4',
        toLink: '/'
    },
    {
        title: 'Dostyk Trans Terminal',
        number: '#5',
        toLink: '/'
    },
])
</script>
<script>

export default {
    data: function () {
        return {
            isOpenMenu: false,
            isOpenMobMenu: false,
            isOpenAbout: false,
            isOpenAboutMob: false,
            clickMobAbout: true,
            isOpenPortfolio: false,
            isOpenPortfolioMob: false,
            isOpenPrice: false,
            isOpenContacts: false,
            isOpenContactsMob: false,
            isHome: false,
            isActive: 'Active',
        }
    },
    methods: {
        toggle() {
            this.isOpenMenu = !this.isOpenMenu
            this.isOpenMobMenu = !this.isOpenMobMenu
            this.isOpenAbout = true
            this.isOpenAboutMob = false
            this.isOpenPortfolio = false
            this.isOpenPortfolioMob = false
            this.isOpenContacts = false
            this.isOpenContactsMob = false

        },

        clickAbout() {
            this.isOpenAbout = true
            this.isActive = true
            this.isOpenPortfolio = false
            this.isOpenContacts = false

        },
        clickPortfolio() {
            this.isOpenPortfolio = true
            this.isActive = true
            this.isOpenAbout = false
            this.isOpenContacts = false
        },
        clickContacts() {
            this.isOpenContacts = true
            this.isActive = true
            this.isOpenAbout = false
            this.isOpenPortfolio = false

        },
        addToggle() {
            this.isOpenMenu = !this.isOpenMenu
            this.isOpenMobMenu = !this.isOpenMobMenu
            this.isOpenAbout = false
        },
        // Mob Menu
        clickAboutmob(){
            this.isOpenAboutMob = true
        },
        clickPortfoliomob(){
            this.isOpenPortfolioMob = true
        },
        clickContactsmob(){
            this.isOpenContactsMob = true
        }
    },

}

</script>

<style>

.-translate-x-130 {
    transform: translateX(-130%);
}

.-translate-x-200 {
    transform: translateX(-200%);
}

.bg-blur {
    background: #1212129c;
    backdrop-filter: blur(2px);
}
.span-border {
    border: 2px solid #FFFFFF;
}

.p-500 {
    padding-left: 500px;
}

.bg-filter {
    background: #121212;
    backdrop-filter: blur(2px);
}



/* ============== */
.text-34 {
    font-size: 34px;
}

.text-gradient {
    background: -webkit-linear-gradient(#FCB040, #FF2BFF);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.link-gradient:hover {
    background: -webkit-linear-gradient(#FCB040, #FF2BFF);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.height-70 {
    height: 70px;
}

.ml_18 {
    margin-left: 18px;
}

.mr_18 {
    margin-right: 18px;
}

.pl_18 {
    padding-left: 18px;
}

.border_b_1 {
    border-bottom: 1px solid rgba(255, 255, 255, 0.10);
}

.border_r_1 {
    border-right: 1px solid rgba(255, 255, 255, 0.10);
}

.border_l_1 {
    border-left: 1px solid rgba(255, 255, 255, 0.10);
}

.h_51 {
    height: 51px;
}

/* Gradient Fill on Hover */
.link-to-svg {
    display: inline-block;
    width: 20px;
}

.link-to-svg .st0 {
    fill: #fff;

}

.link-to-svg:hover .st0 {
    fill: url(#g1);
}


/* .blur {
    background: rgba(11, 11, 11, 0);
    transition: all 0.5s ease-out;
} */

.blur {
    background: rgba(11, 11, 11, 0.1);
    backdrop-filter: blur(2px);
}

.z-one {
    z-index: -1;
}

/* CSS For Mobaile Menu */

.-translate-x-130 {
    transform: translateX(-130%);
}

.-translate-x-180 {
    transform: translateX(-180%);
}

.bg-blur {
    background: #121212d9;
    backdrop-filter: blur(2px);
}

.span-border {
    border: 2px solid #FFFFFF;
}

.z-index-10000 {
    z-index: 100000 !important;
}

.z-index-5000 {
    z-index: 5000 !important;
}

.Link:hover {
    background: linear-gradient(180deg, #FCB040 0%, #FF2BFF 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
}
.ArrowMenu {
    transform: translateX(-40px);
    opacity: 0;
}
.Link:hover .ArrowMenu {
    transform: translateX(0);
    opacity: 1;
}
.Nuxt--Link:hover {
    background: linear-gradient(180deg, #FCB040 0%, #FF2BFF 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
}
.Active {
    background: linear-gradient(180deg, #FCB040 0%, #FF2BFF 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
}

.Active .ArrowMenu {
    transform: translateX(0);
    opacity: 1;
}

a { 
    cursor: pointer;
}
.order-title {
    font-size: 20px;
    /* letter-spacing: 15px; */
}

/* @media (min-width: 300px) and (max-width: 500px) {
    .order-title {
        font-size: 14px;
        letter-spacing: 5px;
    }
}
@media (max-width: 344px) {
    .order-title {
        font-size: 10px;
        letter-spacing: 5px;
    }
} */
/* .Link:before {
	content:" ";
	position: absolute;
    background-image: url(/img/ArrowMenu.png);
    background-repeat: no-repeat;
	top: 11px;
    right: 100px;
	transition: all 200ms ease;
}
.Link:hover:before {
	left: 7px;
} */
</style>
