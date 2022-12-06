<template>
    <header class="text-white body-font border_b_1">
        <div class="container mx-auto flex flex-wrap px-5 py-0 flex-col md:flex-row items-center justify-between">
            <a class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                <IconLogo class="w-10 h-10 stroke-pink-500" />
                <h1 class="ml_18 pl_18 text-34 uppercase border_l_1">Athena <span class="text-gradient">plus</span></h1>
            </a>

            <div class="flex flex-initial border_l_1 h_51 pl-4">
                <div class="my-auto">+7 (775) 393 8855</div>
                <!-- Icons -->
                    <div class="flex items-center border_l_1 h_51 ml_18 pl-4">
                    <a class="text-gray-500">
                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            class="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                        </svg>
                    </a>
                    <a class="ml-3 text-gray-100">
                        <IconChat class="w-5 h-5"/>
                    </a>
                    <a class="ml-3 text-gray-100">
                        <IconInstagram class="w-5 h-5"/>
                    </a>
                </div>
                <!-- End-Icons -->
            </div>

        </div>
    </header>
</template>

<script setup>
import IconLogo from '~/assets/icons/logo.svg'
import IconChat from '~/assets/icons/chat.svg'
import IconInstagram from '~/assets/icons/instagram.svg'

</script>

<style scoped>
.text-34 {
    font-size: 34px;
}

.text-gradient {
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
</style>