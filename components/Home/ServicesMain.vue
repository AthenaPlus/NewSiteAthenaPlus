<template>
    <section
        class="text-white">
        <div class="sm:container px-5 mx-auto overflow-x-hidden">
            <h2 data-aos="fade-right" class="font_Airborne 2xl:text-7xl xl:text-6xl md:text-4xl text-3xl mb-5 xl:mb-8">Услуги</h2>
            <div class="grid lg:grid-cols-2 gap-5 md:gap-12 2xl:gap-24">
                <div v-for="(item, index) in items" :key="index"  @mousemove="handleMouseMove(index, $event)"  ref="itemRefs" class="relative">
                    <img :src="item.img" alt="" ref="imageRefs" />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            items: [{
                title: 'Мобильные приложения',
                img: '/img/webp/ServiceImg1.webp',
                class: 'item-title'
            },
            {
                title: 'Сайты',
                img: '/img/webp/ServiceImg2.webp',
                class: 'item-title1'
            },
            {
                title: 'SEO',
                img: '/img/webp/ServiceImg3.webp',
                class: 'item-title2'
            },
            {
                title: 'Графический дизайн',
                img: '/img/webp/ServiceImg4.webp',
                class: 'item-title3'
            },
            {
                title: 'Реклама',
                img: '/img/webp/ServiceImg5.webp',
                class: 'item-title4'
            },
            {
                title: 'Поддержка',
                img: '/img/webp/ServiceImg6.webp',
                class: 'item-title5'
            },
        ] 
    };
},
    methods: {
        handleMouseMove(index, event) {
            const imageRef = this.$refs.imageRefs[index];
            const itemRef = this.$refs.itemRefs[index];
            const boundingRect = itemRef.getBoundingClientRect();

            const mouseX = event.clientX - boundingRect.left;
            const mouseY = event.clientY - boundingRect.top;

            const width = boundingRect.width;
            const height = boundingRect.height;

            const xAxis = (width / 2 - mouseX) / 25;
            const yAxis = (height / 2 - mouseY) / 25;

            imageRef.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        },
    },
}
</script>

<style scoped>
.min-h-screen {
    min-height: none;
}

</style>
