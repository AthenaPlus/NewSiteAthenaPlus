<template>
    <section class="text-white body-font w-full">
        <div class="container px-9 py-10 mx-auto max-h-screen  overflow-y-auto">
            <div class="border-b-2 border-white pb-[30px] w-full">
                <h2 class="title uppercase">Портфолио</h2>
            </div>
            <p class="text-white mt-5 mb-[60px]">Узнайте подробнее о нашей структуре и методах работы</p>
            <NuxtLink @click="addToggle" :to="item.toLink" v-for="item in items" :key="item.index" class="flex flex-row flex-wrap justify-between border-b-2 border-white pt-[50px] pb-10 text--hover">
                <h3 class="title">{{ item.title }}</h3>
                <span class="title">{{ item.number }}</span>
            </NuxtLink>
        </div>
    </section>
</template>

<script setup>


const items = ([
    {
        title: 'чек маркет',
        number: '#1',
        toLink: '/portfolio'
    },
    {
        title: 'midas event',
        number: '#2',
        toLink: '/portfolio'
    },
    {
        title: 'як',
        number: '#3',
        toLink: '/portfolio'
    },
    {
        title: 'торгсофт',
        number: '#4',
        toLink: '/portfolio'
    },
    {
        title: 'название',
        number: '#5',
        toLink: '/portfolio'
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