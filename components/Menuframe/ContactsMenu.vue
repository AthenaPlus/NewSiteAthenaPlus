<template>
    <section class="text-white body-font flex flex-row flex-wrap justify-between">
        <div class="px-5 py-24 mx-auto w-1/2">
            <div class="border-b-2 border-white pb-[30px] w-full">
                <h2 class="title uppercase">Контакты</h2>
            </div>
            <p class="text-white mt-5 mb-[110px] text-xl">Локация, телефон, e-mail</p>

            <h3 class="text-[26px] font_Airborne uppercase">Адрес:</h3>
            <p class="text-[22px] Source_Sans_Pro mb-10">Казахстан, г. Алматы, Сейфуллина 531, 3 этаж, офис 309</p>

            <h3 class="text-[26px] font_Airborne uppercase">Телефон:</h3>
            <a href="tel:+77753938855" class="text-[22px] Source_Sans_Pro">+7 775 393 8855</a>

            <h3 class="text-[26px] font_Airborne uppercase mt-10">e-mail:</h3>
            <a href="mailto:sain.athenaplus@gmail.com" class="text-[22px] Source_Sans_Pro">sain.athenaplus@gmail.com</a>
            <AppSocialButtons class="mt-[50px]"/>

        </div>
        <div id="map" class="text-white w-1/2 min-h-screen">
            <iframe width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0" title="map ATHENA PLUS" scrolling="no" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1452.88590669868!2d76.93077687605032!3d43.25620394820366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38836f5cf96a6ba7%3A0x45cef4270df56f93!2z0JLQtdCxLdCh0YLRg9C00LjRjyAtIEF0aGVuYSBQbHVz!5e0!3m2!1sru!2skz!4v1671342926791!5m2!1sru!2skz"></iframe>
        </div>
    </section>
</template>

<script setup>

</script>

<style scoped>
.title {
    font-family: 'Airborne';
    font-style: normal;
    font-weight: 400;
    font-size: 54px;
    line-height: 77%;
    /* or 42px */


    color: #FFFFFF;
}

</style>