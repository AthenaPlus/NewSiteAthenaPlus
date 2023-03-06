<template>
    <section class="text-gray-100 min-h-screen overflow-hidden">
        <div class="flex justify-between py-24 px-10 overflow-hidden">
            <div class="w-4/5">
                <div class="w-3/4 mx-auto">
                    <div class="w-auto">
                    <h2 class="font_Airborne text-7xl pb-5 anime__left1">
                        <span class="font-light">—</span> Каждый проект
                    </h2>
                    <h2 class="font_Airborne text-4xl ml-96 anime__right1">
                        как арт-объект</h2>
                </div>
                <div class="flex justify-between items-end w-2/3 mt-36" v-show="content0">
                    <div class="w-2/5">
                        <p class="text-xl">{{ ServiceItems[0].desc }}</p>
                    </div>
                    <div class="w-1/2">
                        <img :src="ServiceItems[0].img" alt="">
                    </div>
                </div>
                <div class="flex justify-between items-end w-2/3 mt-36" v-show="content1">
                    <div class="w-2/5">
                        <p class="text-xl">{{ ServiceItems[1].desc }}</p>
                    </div>
                    <div class="w-1/2">
                        <img :src="ServiceItems[1].img" alt="">
                    </div>
                </div>
                <div class="flex justify-between items-end w-2/3 mt-36" v-show="content2">
                    <div class="w-2/5">
                        <p class="text-xl">{{ ServiceItems[2].desc }}</p>
                    </div>
                    <div class="w-1/2">
                        <img :src="ServiceItems[2].img" alt="">
                    </div>
                </div>
                <div class="flex justify-between items-end w-2/3 mt-36" v-show="content3">
                    <div class="w-2/5">
                        <p class="text-xl">{{ ServiceItems[3].desc }}</p>
                    </div>
                    <div class="w-1/2">
                        <img :src="ServiceItems[3].img" alt="">
                    </div>
                </div>
                <div class="flex justify-between items-end w-2/3 mt-36" v-show="content4">
                    <div class="w-2/5">
                        <p class="text-xl">{{ ServiceItems[4].desc }}</p>
                    </div>
                    <div class="w-1/2">
                        <img :src="ServiceItems[4].img" alt="">
                    </div>
                </div>
                <div class="flex justify-between items-end w-2/3 mt-36" v-show="content5">
                    <div class="w-2/5">
                        <p class="text-xl">{{ ServiceItems[5].desc }}</p>
                    </div>
                    <div class="w-1/2">
                        <img :src="ServiceItems[5].img" alt="">
                    </div>
                </div>
                <div class="flex justify-between items-end w-2/3 mt-36" v-show="content6">
                    <div class="w-2/5">
                        <p class="text-xl">{{ ServiceItems[6].desc }}</p>
                    </div>
                    <div class="w-1/2">
                        <img :src="ServiceItems[6].img" alt="">
                    </div>
                </div>
                </div>
            </div>
            <div class="w-1/5">
                <div class="11/12">
                    <p class="service-item font_Airborne font-normal text-6xl pb-10 cursor-pointer" v-on:click="show0">{{ ServiceItems[0].title }}</p>
                    <p class="service-item font_Airborne font-normal text-6xl pb-10 cursor-pointer" v-on:click="show1">{{ ServiceItems[1].title }}</p>
                    <p class="service-item font_Airborne font-normal text-6xl pb-10 cursor-pointer" v-on:click="show2">{{ ServiceItems[2].title }}</p>
                    <p class="service-item font_Airborne font-normal text-6xl pb-10 cursor-pointer" v-on:click="show3">{{ ServiceItems[3].title }}</p>
                    <p class="service-item font_Airborne font-normal text-6xl pb-10 cursor-pointer" v-on:click="show4">{{ ServiceItems[4].title }}</p>
                    <p class="service-item font_Airborne font-normal text-6xl pb-10 cursor-pointer" v-on:click="show5">{{ ServiceItems[5].title }}</p>
                    <p class="service-item font_Airborne font-normal text-6xl pb-10 cursor-pointer" v-on:click="show6">{{ ServiceItems[6].title }}</p>
                </div>
            </div>
        </div>
        <!-- <div class="flex justify-between py-24 px-10 overflow-hidden">
            <div class="w-4/5">
                <div class="w-auto">
                    <h2 class="font_Airborne text-7xl pb-5 anime__left1">
                        <span class="font-light">—</span> Каждый проект
                    </h2>
                    <h2 class="font_Airborne text-4xl ml-96 anime__right1">
                        как арт-объект</h2>
                </div>
                <div class="flex justify-between items-end w-2/3 mt-36" v-show="content0">
                    <div class="w-2/5">
                        <p class="text-xl">{{ ServiceItems[0].desc }}</p>
                    </div>
                    <div class="w-1/2">
                        <img :src="ServiceItems[0].img" alt="">
                    </div>
                </div>
                <div class="flex justify-between items-end w-2/3 mt-36" v-show="content1">
                    <div class="w-2/5">
                        <p class="text-xl">{{ ServiceItems[1].desc }}</p>
                    </div>
                    <div class="w-1/2">
                        <img :src="ServiceItems[1].img" alt="">
                    </div>
                </div>
                <div class="flex justify-between items-end w-2/3 mt-36" v-show="content2">
                    <div class="w-2/5">
                        <p class="text-xl">{{ ServiceItems[2].desc }}</p>
                    </div>
                    <div class="w-1/2">
                        <img :src="ServiceItems[2].img" alt="">
                    </div>
                </div>
                <div class="flex justify-between items-end w-2/3 mt-36" v-show="content3">
                    <div class="w-2/5">
                        <p class="text-xl">{{ ServiceItems[3].desc }}</p>
                    </div>
                    <div class="w-1/2">
                        <img :src="ServiceItems[3].img" alt="">
                    </div>
                </div>
                <div class="flex justify-between items-end w-2/3 mt-36" v-show="content4">
                    <div class="w-2/5">
                        <p class="text-xl">{{ ServiceItems[4].desc }}</p>
                    </div>
                    <div class="w-1/2">
                        <img :src="ServiceItems[4].img" alt="">
                    </div>
                </div>
                <div class="flex justify-between items-end w-2/3 mt-36" v-show="content5">
                    <div class="w-2/5">
                        <p class="text-xl">{{ ServiceItems[5].desc }}</p>
                    </div>
                    <div class="w-1/2">
                        <img :src="ServiceItems[5].img" alt="">
                    </div>
                </div>
                <div class="flex justify-between items-end w-2/3 mt-36" v-show="content6">
                    <div class="w-2/5">
                        <p class="text-xl">{{ ServiceItems[6].desc }}</p>
                    </div>
                    <div class="w-1/2">
                        <img :src="ServiceItems[6].img" alt="">
                    </div>
                </div>
            </div>
            <div class="w-1/3">
                <p class="service-item font_Airborne font-normal text-6xl pb-10 cursor-pointer" v-on:click="show0">{{ ServiceItems[0].title }}</p>
                <p class="service-item font_Airborne font-normal text-6xl pb-10 cursor-pointer" v-on:click="show1">{{ ServiceItems[1].title }}</p>
                <p class="service-item font_Airborne font-normal text-6xl pb-10 cursor-pointer" v-on:click="show2">{{ ServiceItems[2].title }}</p>
                <p class="service-item font_Airborne font-normal text-6xl pb-10 cursor-pointer" v-on:click="show3">{{ ServiceItems[3].title }}</p>
                <p class="service-item font_Airborne font-normal text-6xl pb-10 cursor-pointer" v-on:click="show4">{{ ServiceItems[4].title }}</p>
                <p class="service-item font_Airborne font-normal text-6xl pb-10 cursor-pointer" v-on:click="show5">{{ ServiceItems[5].title }}</p>
                <p class="service-item font_Airborne font-normal text-6xl pb-10 cursor-pointer" v-on:click="show6">{{ ServiceItems[6].title }}</p>
            </div>
        </div> -->
    </section>
</template>

<script setup>

const ServiceItems = [{
    id: 1,
    title: 'Интервью',
    desc: 'Обговариваем детали заказа. На этом этапе устанавливаются ваши предпочтения и формируется концепция будущего пректа. КРАЙНЕ важный этап для понимания ваших предпочтений в будущем проекте.',
    img: '/img/ServicePhoto1.png'
},
{
    id: 2,
    title: 'Анализ',
    desc: 'Анализ тект. Обговариваем детали заказа. На этом этапе устанавливаются ваши предпочтения и формируется концепция будущего пректа. КРАЙНЕ важный этап для понимания ваших предпочтений в будущем проекте.',
    img: '/img/ServicePhoto2.png'
},
{
    id: 3,
    title: 'Маркетинг',
    desc: 'Маркетинг-текст. Обговариваем детали заказа. На этом этапе устанавливаются ваши предпочтения и формируется концепция будущего пректа. КРАЙНЕ важный этап для понимания ваших предпочтений в будущем проекте.',
    img: '/img/ServicePhoto3.png'
},
{
    id: 4,
    title: 'UX/UI',
    desc: 'UX/UI текст. Обговариваем детали заказа. На этом этапе устанавливаются ваши предпочтения и формируется концепция будущего пректа. КРАЙНЕ важный этап для понимания ваших предпочтений в будущем проекте.',
    img: '/img/ServicePhoto4.png'
},
{
    id: 5,
    title: 'Разработка',
    desc: 'Разработка-текст.Обговариваем детали заказа. На этом этапе устанавливаются ваши предпочтения и формируется концепция будущего пректа. КРАЙНЕ важный этап для понимания ваших предпочтений в будущем проекте.',
    img: '/img/ServicePhoto5.png'
},
{
    id: 6,
    title: 'MVP',
    desc: 'MVP-текст. Обговариваем детали заказа. На этом этапе устанавливаются ваши предпочтения и формируется концепция будущего пректа. КРАЙНЕ важный этап для понимания ваших предпочтений в будущем проекте.',
    img: '/img/ServicePhoto6.png'
},
{
    id: 7,
    title: 'Запуск',
    desc: 'Запуск-текст. Обговариваем детали заказа. На этом этапе устанавливаются ваши предпочтения и формируется концепция будущего пректа. КРАЙНЕ важный этап для понимания ваших предпочтений в будущем проекте.',
    img: '/img/ServicePhoto7.png'
}]

</script>

<script scoped>

export default {
    data: () => {
        return {
            content0: true,
            content1: false,
            content2: false,
            content3: false,
            content4: false,
            content5: false,
            content6: false,
        }
    },
    methods: {
        show0() {
            this.content0 = true,
            this.content1 = false,
            this.content2 = false,
            this.content3 = false,
            this.content4 = false,
            this.content5 = false,
            this.content6 = false
        },
        show1() {
            this.content0 = false,
            this.content1 = true,
            this.content2 = false,
            this.content3 = false,
            this.content4 = false,
            this.content5 = false,
            this.content6 = false
        },
        show2() {
            this.content0 = false,
            this.content1 = false,
            this.content2 = true,
            this.content3 = false,
            this.content4 = false,
            this.content5 = false,
            this.content6 = false
        }
        ,
        show3() {
            this.content0 = false,
            this.content1 = false,
            this.content2 = false,
            this.content3 = true,
            this.content4 = false,
            this.content5 = false,
            this.content6 = false
        }
        ,
        show4() {
            this.content0 = false,
            this.content1 = false,
            this.content2 = false,
            this.content3 = false,
            this.content4 = true,
            this.content5 = false,
            this.content6 = false
        }
        ,
        show5() {
            this.content0 = false,
            this.content1 = false,
            this.content2 = false,
            this.content3 = false,
            this.content4 = false,
            this.content5 = true,
            this.content6 = false
        }
        ,
        show6() {
            this.content0 = false,
            this.content1 = false,
            this.content2 = false,
            this.content3 = false,
            this.content4 = false,
            this.content5 = false,
            this.content6 = true
        }
    }
}

</script>

<style scoped>

.service-item:hover {
    background: linear-gradient(180deg, #FF2BFF 0%, #FE7C3C 43.23%, #FE9402 100%);
    color: transparent;
    background-clip: text;
    transition: all 0.3s;
}

</style>