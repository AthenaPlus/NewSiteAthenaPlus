<template>
    <section class="text-white body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div
                class="lg:flex-grow md:w-1/2 lg:pr-16 md:pr-14 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 class="HeroTitle">
                    {{ HeroTitle }}
                </h1>
                <h2 class="HeroSubtitle">{{ HeroSubtitle }}</h2>
                <p class="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
                    plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken
                    authentic tumeric truffaut hexagon try-hard chambray.</p>
                <div class="flex justify-center">
                    <button
                        class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
                    <button
                        class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
                </div>
            </div>
            <div class="md:w-1/2">
                <img class="object-cover object-center rounded" alt="hero" src="img/HeroImg.png">
            </div>
        </div>
    </section>
</template>

<script setup>
const HeroTitle = 'веб-проекты со стилем'
const HeroSubtitle = 'Мы создаём креативные веб-проекты для вашего бизнеса'

</script>

<style scoped>
.HeroTitle {
    font-family: 'Airborne';
    font-style: normal;
    font-weight: 400;
    font-size: 100px;
    line-height: 100%;
    /* or 100px */
    color: #FFFFFF;
}

.HeroSubtitle {
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 600;
    font-size: 26px;
    line-height: 150%;
    /* or 39px */
    color: #FFFFFF;
}
</style>