<template>
    <header class="text-white body-font border_b_1">
        <div class="container mx-auto flex flex-wrap px-5 py-0 flex-col md:flex-row items-center justify-between">
            <a class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                <IconLogo class="w-10 h-10 stroke-pink-500" />
                <h1 class="ml_18 pl_18 text-34 uppercase border_l_1">Athena <span class="text-gradient">plus</span></h1>
            </a>

            <div class="flex flex-initial border_l_1 h_51 pl-4">
                <div class="my-auto"><p class="Source_Sans_Pro">+7 (775) 393 8855</p></div>
                <!-- Icons -->
                    <div class="flex items-center border_l_1 h_51 ml_18 pl-4">
                    <a class="text-gray-500">
                        <IconPaperplan class="w-5 h-5"/>
                    </a>
                    <a class="ml-3 text-gray-100">
                        <IconChat class="w-5 h-5 mx-9"/>
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
import IconPaperplan from '~/assets/icons/paperplan.svg'
import IconChat from '~/assets/icons/chat2.svg'
import IconInstagram from '~/assets/icons/instagram2.svg'

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