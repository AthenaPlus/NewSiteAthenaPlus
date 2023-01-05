<template>
    <section class="text-white relative min-h-screen bg-[url('/img/bg_ServicesHero.webp')] bg-no-repeat bg-top bg-cover">
        <div class="container px-5 py-24 mx-auto">
            <div class="mt-11 w-full lg:w-[700px]">
                <h2 class="font_Airborne text-4xl md:text-7xl lg:text-[80px] leading-[92px] my-5 uppercase">Каждый проект</h2>
                <h2 class="font_Airborne uppercase text-2xl md:text-4xl lg:text-[50px] leading-[57px] text-right pr-6 mb-[30px]">как арт-объект</h2>
                <p class="w-full lg:w-[470px] text-lg">Мы крайне негативно относимся к сайтам-однодневкам с кривым дизайном и слабой идеей. Поэтому для нас важно предать вашему проекту уникальную айдентику.</p>
            </div>
            <div class="flex flex-wrap mt-[230px]">
                <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 ">
                    <h3 class="font_Airborne uppercase text-3xl mb-[20px]">Этапы разработки</h3>
                    <p class="text-base">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    </p>
                </div>
                <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 ">
                    <h4 class="text-[28px] mb-[20px] inline-flex items-center gap-4"><IconUnion1/> Бриф и интервью</h4>
                    <p class="text-base">
                        Обговариваем детали заказа. На этом этапе устанавливаются ваши предпочтения и формируется концепция будущего пректа. КРАЙНЕ важный этап для понимания ваших предпочтений в будущем проекте.
                    </p>
                </div>
                <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 ">
                    <h4 class="text-[28px] mb-[20px] inline-flex items-center gap-4"><IconUnion2/> Разработка</h4>
                    <p class="text-base">
                        В первую очередь мы выстраиваем логическую структуру и архитектуру вашего проекта. Далее мы создаём уникальный дизайн, а после передаем макет на вёрстку, где сайт “оживает”.
                    </p>
                </div>
                <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 ">
                    <h4 class="text-[28px] mb-[20px] inline-flex items-center gap-4"><IconUnion3/> Тесты и SEO</h4>
                    <p class="text-base">
                        Еще раз проверяем проект. Необходимо знать как ваш сайт будет работать в тех или иных ситуациях. После этого мы проводим первичную оптимизацию и выводим сайт в диджитал-сферу
                    </p>
                </div>
            </div>
            
        </div>
    </section>
</template>

<script setup>
import IconUnion1 from '~/assets/icons/Union1.svg'
import IconUnion2 from '~/assets/icons/Union2.svg'
import IconUnion3 from '~/assets/icons/Union3.svg'

</script>

<style scoped>
.plan {
    position: relative;
}
.plan::before {
    content: '';
    position: absolute;
    width: 50px;
    top: 50%;
    left: -50%;
    background: #0B0B0B;
    border: 1px solid #FFFFFF;
}
</style>