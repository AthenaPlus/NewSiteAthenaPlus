<template>
    <section class="text-white body-font flex flex-col justify-between max-h-screen  overflow-y-auto">
        <div class=" px-4 py-3 mx-auto w-full">
            <div class="border-b-2 border-white pb-[10px] w-full">
                <h2 class="text-[32px] font_Airborne uppercase">Контакты</h2>
            </div>
            <p class="text-white mt-5 mb-[20px] text-xl">Локация, телефон, e-mail</p>

            <h3 class="text-xl font_Airborne uppercase">Адрес:</h3>
            <p class="text-base Source_Sans_Pro mb-10">Казахстан, г. Алматы, Сейфуллина 531, 3 этаж, офис 309</p>

            <h3 class="text-xl font_Airborne uppercase">Телефон:</h3>
            <a href="tel:+77753938855" class="text-xl Source_Sans_Pro">+7 775 393 8855</a>

            <h3 class="text-xl font_Airborne uppercase mt-10">e-mail:</h3>
            <a href="mailto:athenaplus@gmail.com" class="text-xl Source_Sans_Pro">athenaplus@gmail.com</a>
            <AppSocialButtons class="my-[50px]"/>

        </div>
        <div id="map" class="text-white w-full min-h-[395px]">
            <iframe width="100%" height="395" frameborder="0" marginheight="0" marginwidth="0" title="map ATHENA PLUS" scrolling="no" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1452.88590669868!2d76.93077687605032!3d43.25620394820366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38836f5cf96a6ba7%3A0x45cef4270df56f93!2z0JLQtdCxLdCh0YLRg9C00LjRjyAtIEF0aGVuYSBQbHVz!5e0!3m2!1sru!2skz!4v1671342926791!5m2!1sru!2skz" style="filter: grayscale(1) contrast(1.2) opacity(0.4); "></iframe>
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