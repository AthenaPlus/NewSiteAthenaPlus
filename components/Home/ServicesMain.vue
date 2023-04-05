<template>
    <section
        class="text-white">
        <div class="sm:container px-5 mx-auto overflow-x-hidden">
            <h2 data-aos="fade-right" class="font_Airborne 2xl:text-7xl xl:text-6xl md:text-4xl text-3xl mb-5 xl:mb-8">Услуги</h2>
            <div class="grid lg:grid-cols-2 gap-5 md:gap-12 2xl:gap-24">
                <div v-for="(item, index) in items" :key="index"  @mousemove="handleMouseMove(index, $event)"  ref="itemRefs" class="relative">
                    <img :src="item.img" alt="" ref="imageRefs" />
                    <!-- <p class="text-lg sm:text-2xl md:text-3xl lg:text-xl xl:text-2xl 2xl:text-3xl font_Airborne" :class="item.class">{{ item.title }}</p> -->
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
                img: '/img/ServiceImg1.png',
                class: 'item-title'
            },
            {
                title: 'Сайты',
                img: '/img/ServiceImg2.png',
                class: 'item-title1'
            },
            {
                title: 'SEO',
                img: '/img/ServiceImg3.png',
                class: 'item-title2'
            },
            {
                title: 'Графический дизайн',
                img: '/img/ServiceImg4.png',
                class: 'item-title3'
            },
            {
                title: 'Реклама',
                img: '/img/ServiceImg5.png',
                class: 'item-title4'
            },
            {
                title: 'Поддержка',
                img: '/img/ServiceImg6.png',
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
p {
    position: absolute;
    left: 5%;
}
.item-title {
    bottom: 5%;
}
.item-title1 {
    bottom: 15%;
}
.item-title2 {
    bottom: 50%;
}
.item-title3 {
    bottom: 3%;
}
.item-title4 {
    bottom: 4%;
}
.item-title5 {
    bottom: 18%;
}

@media(max-width: 1536px) {
    .item-title {
        bottom: 4%;
    }   
    .item-title1 {
        bottom: 15%;
    }
    .item-title2 {
        bottom: 47%;
    }
    .item-title3 {
        bottom: 3%;
    }
    .item-title4 {
        bottom: 7%;
    }
    .item-title5 {
        bottom: 8%;
    }
}
@media(max-width: 1280px) {
    .item-title {
        bottom: 3%;
    }   
    .item-title1 {
        bottom: 14%;
    }
    .item-title2 {
        bottom: 47%;
    }
    .item-title3 {
        bottom: 2%;
    }
    .item-title4 {
        bottom: 6%;
    }
    .item-title5 {
        bottom: 7%;
    }
}

@media(max-width: 1024px) {
    img:nth-child(even) {
        float: right;
    }
    p:nth-child(odd) {
        left: 10%;
    }
    .item-title {
        bottom: 5%;
    }
    .item-title1 {
        bottom: 7%;
    }
    .item-title2 {
        bottom: 8%;
    }
    .item-title3 {
        bottom: 3%;
    }
    .item-title4 {
        bottom: 4%;
    }
    .item-title5 {
        bottom: 8%;
    }
}
@media(max-width: 640px) {
    .item-title {
        bottom: 3%;
    }
    .item-title1 {
        bottom: 5%;
    }
    .item-title2 {
        bottom: 6%;
    }
    .item-title3 {
        bottom: 2%;
    }
    .item-title4 {
        bottom: 2%;
    }
    .item-title5 {
        bottom: 7%;
    }
}
@media(max-width: 400px) {
    .item-title {
        bottom: 1%;
    }
    .item-title1 {
        bottom: 3%;
    }
    .item-title2 {
        bottom: 4%;
    }
    .item-title3 {
        bottom: 1%;
    }
    .item-title4 {
        bottom: 1%;
    }
    .item-title5 {
        bottom: 5%;
    }
}


</style>
