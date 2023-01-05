<template>
    <section class="text-white body-font w-full">
        <div class="container px-4 py-3 mx-auto max-h-screen  overflow-y-auto">
            <div class="border-b-2 border-white pb-[10px] w-full">
                <h2 class="text-[32px] font_Airborne uppercase">Портфолио</h2>
            </div>
            <p class="text-white mt-5 my-5">Узнайте подробнее о нашей структуре и методах работы</p>
            <div class="block">
                <NuxtLink @click="addToggle" :to="item.toLink" v-for="item in items" :key="item.index"
                    class="flex flex-row flex-wrap justify-between border-b-[1px] border-white pt-[50px] pb-3.5 text--hover text-[36px]">
                    <h3 class="font_Airborne">{{ item.title }}</h3>
                    <span class="font_Airborne">{{ item.number }}</span>
                </NuxtLink>
            </div>
        </div>
    </section>
</template>

<script setup>


const items = ([
    {
        title: 'чек маркет',
        number: '#1',
        toLink: '/development'
    },
    {
        title: 'midas event',
        number: '#2',
        toLink: '/development'
    },
    {
        title: 'як',
        number: '#3',
        toLink: '/development'
    },
    {
        title: 'торгсофт',
        number: '#4',
        toLink: '/development'
    },
    {
        title: 'название',
        number: '#5',
        toLink: '/development'
    },
])

</script>
<script>

export default {
    methods: {
        addToggle() {
            this.$emit('addToggle')
        }
    }
}
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

.text--hover:hover {
    background: linear-gradient(180deg, #FCB040 0%, #FF2BFF 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
}
</style>